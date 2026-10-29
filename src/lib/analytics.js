// Site analytics: Google Analytics 4 (traffic sources, events, conversions) and Microsoft Clarity
// (heatmaps, session recordings). Both stay off until their IDs are set at build time:
//   VITE_GA_MEASUREMENT_ID   e.g. G-XXXXXXXXXX
//   VITE_CLARITY_PROJECT_ID  e.g. abcd1234ef
// In GitHub these come from the repository variables GA_MEASUREMENT_ID and CLARITY_PROJECT_ID
// (see .github/workflows/deploy.yml). Nothing loads in `npm run dev` unless VITE_ANALYTICS_DEV=true.
// Visitors who send Global Privacy Control are not tracked.
//
// Events sent (GA4 name, mirrored to Clarity as a custom event):
//   page_view        every hash route change (the site uses HashRouter, so GA cannot see routes itself)
//   cta_click        clicks on .btn-* buttons and links, or any element with data-track
//   nav_click        clicks on links inside the header or footer
//   outbound_click   links to other sites
//   email_click / phone_click   mailto: and tel: links
//   section_view     a page section was at least half on screen (once per section per page view)
//   scroll_depth     25 / 50 / 75 / 90 percent of a page
//   form_start, form_error, generate_lead, form_submit_failed   the contact form
//   chat_open, chat_intake_start, chat_intake_step, chat_intake_cancel, generate_lead   the chat assistant

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim()
const CLARITY_ID = (import.meta.env.VITE_CLARITY_PROJECT_ID || '').trim()
const ENABLED_HERE = import.meta.env.PROD || import.meta.env.VITE_ANALYTICS_DEV === 'true'
const ATTRIBUTION_KEY = 'baxio_attribution'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
const SCROLL_MARKS = [25, 50, 75, 90]

let started = false
let currentRoute = ''
let scrollFired = new Set()
// The jump to the top of a new page fires scroll events; ignore them briefly after a route change.
let scrollQuietUntil = 0
let sectionObserver = null

function privacySignal() {
  return typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true
}

export function analyticsActive() {
  return started
}

function loadScript(src) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

// UTM tags can sit before the hash (?utm_source=x#/services) or inside it (#/services?utm_source=x).
// GA only reads the first form, so both are parsed here and passed on explicitly.
function readUtm() {
  const found = {}
  const sources = [window.location.search]
  const hashQuery = window.location.hash.indexOf('?')
  if (hashQuery !== -1) sources.push(window.location.hash.slice(hashQuery))
  for (const query of sources) {
    const params = new URLSearchParams(query)
    for (const key of UTM_KEYS) {
      const value = params.get(key)
      if (value && !found[key]) found[key] = value.slice(0, 100)
    }
  }
  return found
}

function externalReferrer() {
  if (!document.referrer) return ''
  try {
    const ref = new URL(document.referrer)
    return ref.hostname === window.location.hostname ? '' : ref.hostname
  } catch {
    return ''
  }
}

// First touch for this browser: kept so a lead's form submission can say where they first came from.
function captureAttribution() {
  const utm = readUtm()
  const referrer = externalReferrer()
  let stored = null
  try {
    stored = JSON.parse(window.localStorage.getItem(ATTRIBUTION_KEY) || 'null')
  } catch {
    stored = null
  }
  if (stored) return
  const record = {
    ...utm,
    referrer: referrer || 'direct',
    landing: routeOf(window.location.hash),
    first_seen: new Date().toISOString().slice(0, 10),
  }
  try {
    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(record))
  } catch {
    // Private mode or blocked storage: attribution just stays unknown.
  }
}

// Where this visitor first came from, as one line for the lead email. Works with analytics off.
export function attributionSummary() {
  let record = null
  try {
    record = JSON.parse(window.localStorage.getItem(ATTRIBUTION_KEY) || 'null')
  } catch {
    record = null
  }
  const now = readUtm()
  const parts = []
  if (record) {
    const source = record.utm_source || record.referrer || 'direct'
    parts.push('first visit ' + record.first_seen + ' from ' + source)
    if (record.utm_medium) parts.push('medium ' + record.utm_medium)
    if (record.utm_campaign) parts.push('campaign ' + record.utm_campaign)
    if (record.landing) parts.push('landed on ' + record.landing)
  }
  if (now.utm_source && (!record || now.utm_source !== record.utm_source)) {
    parts.push('this visit from ' + now.utm_source + (now.utm_campaign ? ' / ' + now.utm_campaign : ''))
  }
  const referrer = externalReferrer()
  if (!now.utm_source && referrer && (!record || referrer !== record.referrer)) {
    parts.push('this visit via ' + referrer)
  }
  return parts.join('; ') || 'unknown'
}

function routeOf(hash) {
  const path = (hash || '').replace(/^#/, '').split('?')[0]
  return path || '/'
}

export function track(name, params = {}) {
  if (!started) return
  const payload = { page_route: currentRoute, ...params }
  if (window.gtag) window.gtag('event', name, payload)
  if (window.clarity) window.clarity('event', name)
}

export function trackPage(pathname) {
  if (!started) return
  if (pathname === currentRoute) return
  currentRoute = pathname
  scrollFired = new Set()
  scrollQuietUntil = Date.now() + 500
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + window.location.pathname + '#' + pathname,
      page_path: window.location.pathname + '#' + pathname,
      ...readUtm(),
    })
  }
  if (window.clarity) window.clarity('set', 'route', pathname)
  // Sections render after the route change; wait a frame before observing them.
  window.requestAnimationFrame(() => window.requestAnimationFrame(observeSections))
}

function sectionName(section) {
  if (section.dataset.trackSection) return section.dataset.trackSection
  const labelledBy = section.getAttribute('aria-labelledby')
  if (labelledBy) return labelledBy.replace(/-title$/, '')
  return section.id || section.getAttribute('aria-label') || 'unnamed'
}

function observeSections() {
  if (sectionObserver) sectionObserver.disconnect()
  if (typeof IntersectionObserver !== 'function') return
  const seen = new Set()
  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const name = sectionName(entry.target)
        if (seen.has(name)) continue
        seen.add(name)
        track('section_view', { section: name })
        sectionObserver.unobserve(entry.target)
      }
    },
    { threshold: 0.5 },
  )
  document.querySelectorAll('main section').forEach((s) => sectionObserver.observe(s))
}

function onScroll() {
  if (Date.now() < scrollQuietUntil) return
  const doc = document.documentElement
  const scrollable = doc.scrollHeight - window.innerHeight
  if (scrollable <= 0) return
  const percent = (window.scrollY / scrollable) * 100
  for (const mark of SCROLL_MARKS) {
    if (percent >= mark && !scrollFired.has(mark)) {
      scrollFired.add(mark)
      track('scroll_depth', { percent: mark })
    }
  }
}

function linkText(el) {
  return (el.dataset.track || el.getAttribute('aria-label') || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80)
}

function onClick(event) {
  const el = event.target.closest('a, button, [data-track]')
  if (!el) return
  // Form submissions are tracked by the form itself (generate_lead, form_error).
  if (el.tagName === 'BUTTON' && el.type === 'submit') return
  const section = el.closest('section, header, footer, nav')
  const where = section
    ? section.tagName === 'SECTION'
      ? sectionName(section)
      : section.tagName.toLowerCase()
    : 'page'
  const href = el.getAttribute('href') || ''
  const params = { link_text: linkText(el), section: where }

  if (href.startsWith('mailto:')) return track('email_click', params)
  if (href.startsWith('tel:')) return track('phone_click', params)
  if (el.tagName === 'A' && el.hostname && el.hostname !== window.location.hostname) {
    return track('outbound_click', { ...params, link_url: el.href })
  }
  const isCta = el.dataset.track !== undefined || /\bbtn-/.test(el.className || '')
  if (isCta) return track('cta_click', { ...params, link_url: href })
  if (where === 'header' || where === 'footer' || where === 'nav') return track('nav_click', { ...params, link_url: href })
}

export function initAnalytics() {
  if (started || typeof window === 'undefined') return
  if (!ENABLED_HERE || privacySignal()) return
  captureAttribution()
  if (!GA_ID && !CLARITY_ID) return
  started = true

  if (GA_ID) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    // Page views are sent by trackPage on each hash route change.
    window.gtag('config', GA_ID, { send_page_view: false })
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID))
  }

  if (CLARITY_ID) {
    window.clarity =
      window.clarity ||
      function clarity() {
        ;(window.clarity.q = window.clarity.q || []).push(arguments)
      }
    loadScript('https://www.clarity.ms/tag/' + encodeURIComponent(CLARITY_ID))
  }

  document.addEventListener('click', onClick, { capture: true, passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
}
