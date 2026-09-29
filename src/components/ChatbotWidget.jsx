import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { contact, timeline, practices, pricingLine } from '../content/site.js'

const wordmark = import.meta.env.BASE_URL + 'wordmark.png'

const discoveryQuestions = [
  { key: 'fullName', label: 'Full name', prompt: 'What is your full name?', required: true },
  { key: 'workEmail', label: 'Work email', prompt: 'What is your work email?', required: true, kind: 'email' },
  { key: 'company', label: 'Company', prompt: 'What is your company name?', required: true },
  { key: 'role', label: 'Role', prompt: 'What is your role or title?', required: false },
  { key: 'service', label: 'Service need', prompt: 'Which service are you interested in: accounting, accounting system set-up or data analytics?', required: true },
  { key: 'teamSize', label: 'Current team size', prompt: 'How many people currently handle this workload?', required: false },
  { key: 'volume', label: 'Monthly volume', prompt: 'What monthly volume should we expect (invoices, bills, transactions)?', required: false },
  { key: 'tools', label: 'Tools', prompt: 'Which tools or systems are in your current workflow?', required: false },
  { key: 'timeline', label: 'Timeline', prompt: 'When do you want to go live?', required: true },
  { key: 'budget', label: 'Budget range', prompt: 'Do you have a monthly budget range in mind?', required: false },
  { key: 'painPoints', label: 'Pain points', prompt: 'What are the top pain points you want fixed first?', required: true },
  { key: 'successMetric', label: 'Success metric', prompt: 'What result would make this engagement a clear win in 90 days?', required: true },
]


const botKnowledge = [
  {
    keywords: ['services', 'service', 'offer', 'what do you do', 'practice'],
    answer: `Our services are ${practices.map((p) => p.name).join(', ')}.`,
  },
  {
    keywords: ['pricing', 'cost', 'price', 'budget', 'how much'],
    answer: pricingLine,
  },
  {
    keywords: ['timeline', 'onboarding', 'start', 'go live', 'how long', 'how quickly', 'how fast', 'proposal', 'pilot'],
    answer: `We reply within ${timeline.reply} and send a written proposal within ${timeline.proposal}. Onboarding takes ${timeline.onboarding}, then a ${timeline.pilot} runs against KPIs you sign off on.`,
  },
  {
    keywords: ['location', 'timezone', 'time zone', 'hours', 'coverage', 'where'],
    answer: 'Our team works in Islamabad, Pakistan, on your US business hours.',
  },
  {
    keywords: ['contact', 'consultation', 'book', 'email', 'phone', 'call'],
    answer: `Email ${contact.email}, call ${contact.phone}, or book a call on the Contact page. You can also type start and I will take your details here.`,
  },
]

const DEFAULT_WEBHOOK_URL = 'https://vercel-lake-kappa-40.vercel.app/api/chatbot-intakes'
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

function makeId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function questionPrompt(index) {
  const q = discoveryQuestions[index]
  return q.required ? q.prompt : `${q.prompt} Type skip to leave this blank.`
}

export default function ChatbotWidget() {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [
    {
      id: makeId(),
      role: 'bot',
      text: `Hello. I can answer basic questions about Baxio and take your project details privately for our team. Type start to begin.`,
    },
  ])
  // -1: no intake running; 0..n-1: current question; n: answers complete, awaiting a successful send.
  const [stepIndex, setStepIndex] = useState(-1)
  const [draft, setDraft] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [isInverted, setIsInverted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isNarrow, setIsNarrow] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const listRef = useRef(null)
  const panelRef = useRef(null)
  const inputRef = useRef(null)
  const pillRef = useRef(null)
  const finalizingRef = useRef(false)
  const closeTimerRef = useRef(null)

  const endpoint = (import.meta.env.VITE_CHATBOT_WEBHOOK_URL || DEFAULT_WEBHOOK_URL).trim()
  const inDiscovery = stepIndex >= 0
  const awaitingSend = stepIndex >= discoveryQuestions.length
  const isContactNarrow = location.pathname === '/contact' && isNarrow
  const pillVisible = !isContactNarrow && (!isMobile || hasScrolled)

  // Viewport breakpoints.
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const narrow = window.matchMedia('(max-width: 1023px)')
    const update = () => {
      setIsMobile(mobile.matches)
      setIsNarrow(narrow.matches)
    }
    update()
    mobile.addEventListener('change', update)
    narrow.addEventListener('change', update)
    return () => {
      mobile.removeEventListener('change', update)
      narrow.removeEventListener('change', update)
    }
  }, [])

  // Mobile: the pill appears after 600px of scroll.
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the panel if the pill is hidden away from under it.
  useEffect(() => {
    if (!pillVisible && isOpen) {
      setIsOpen(false)
    }
  }, [pillVisible, isOpen])

  // Invert the pill while it overlaps a black section.
  useEffect(() => {
    if (!pillVisible || typeof IntersectionObserver === 'undefined') {
      setIsInverted(false)
      return undefined
    }

    let observer = null
    let frame = null
    const overlapping = new Set()

    const connect = () => {
      if (observer) {
        observer.disconnect()
      }
      overlapping.clear()
      setIsInverted(false)

      const pill = pillRef.current
      if (!pill) {
        return
      }
      const rect = pill.getBoundingClientRect()
      if (rect.height === 0) {
        return
      }
      const top = Math.max(0, Math.round(rect.top))
      const bottom = Math.max(0, Math.round(window.innerHeight - rect.bottom))
      const left = Math.max(0, Math.round(rect.left))
      const right = Math.max(0, Math.round(window.innerWidth - rect.right))

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              overlapping.add(entry.target)
            } else {
              overlapping.delete(entry.target)
            }
          })
          setIsInverted(overlapping.size > 0)
        },
        { threshold: 0, rootMargin: `-${top}px -${right}px -${bottom}px -${left}px` },
      )

      document.querySelectorAll('.ground-black').forEach((el) => observer.observe(el))
    }

    const schedule = () => {
      if (frame) {
        cancelAnimationFrame(frame)
      }
      frame = requestAnimationFrame(connect)
    }

    schedule()
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('resize', schedule)
      if (frame) {
        cancelAnimationFrame(frame)
      }
      if (observer) {
        observer.disconnect()
      }
    }
  }, [location.pathname, pillVisible])

  // Mount and transition the panel: 200ms opacity and 8px translate.
  useEffect(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    if (isOpen) {
      setIsMounted(true)
      const frame = requestAnimationFrame(() => setIsShown(true))
      return () => cancelAnimationFrame(frame)
    }
    setIsShown(false)
    closeTimerRef.current = setTimeout(() => {
      setIsMounted(false)
      closeTimerRef.current = null
    }, 200)
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
      }
    }
  }, [isOpen])

  // Focus moves into the input on open.
  useEffect(() => {
    if (isMounted && isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isMounted, isOpen])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, isMounted])

  function closePanel({ returnFocus = false } = {}) {
    setIsOpen(false)
    if (returnFocus && pillRef.current) {
      pillRef.current.focus()
    }
  }

  function handlePanelKeyDown(e) {
    if (e.key === 'Escape') {
      e.preventDefault()
      closePanel({ returnFocus: true })
      return
    }
    if (e.key !== 'Tab' || !panelRef.current) {
      return
    }
    const focusable = Array.from(panelRef.current.querySelectorAll(FOCUSABLE))
    if (focusable.length === 0) {
      e.preventDefault()
      return
    }
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const active = document.activeElement
    if (e.shiftKey && (active === first || !panelRef.current.contains(active))) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && (active === last || !panelRef.current.contains(active))) {
      e.preventDefault()
      first.focus()
    }
  }

  function pushBot(text) {
    setMessages((prev) => [...prev, { id: makeId(), role: 'bot', text }])
  }

  function resetDiscovery() {
    setStepIndex(-1)
    setDraft({})
  }

  function startDiscovery() {
    setDraft({})
    setStepIndex(0)
    pushBot('I will ask twelve short questions and send your answers privately to our team. Type cancel at any point to stop.')
    pushBot(questionPrompt(0))
  }

  async function syncToBackend(payload) {
    if (!endpoint) {
      return { status: 'local-only' }
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      let responseBody = null
      try {
        responseBody = await response.json()
      } catch {
        responseBody = null
      }

      return {
        status: 'synced',
        responseCode: response.status,
        remoteId: responseBody?.id || responseBody?.submissionId || null,
      }
    } catch (error) {
      return {
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown sync error',
      }
    }
  }

  async function finalizeDiscovery(finalDraft, transcript) {
    if (finalizingRef.current) {
      return
    }
    finalizingRef.current = true
    setIsSending(true)
    setDraft(finalDraft)
    setStepIndex(discoveryQuestions.length)

    const createdAt = new Date().toISOString()
    const summaryLines = discoveryQuestions.map((q) => `- ${q.label}: ${finalDraft[q.key] || 'Not provided'}`)
    const summary = ['# Discovery intake', '', ...summaryLines].join('\n')

    const compiledEntry = {
      id: makeId(),
      createdAt,
      source: 'chatbot',
      fields: finalDraft,
      summary,
      transcript,
      syncStatus: endpoint ? 'pending' : 'failed',
    }

    try {
      const syncResult = await syncToBackend(compiledEntry)

      if (syncResult.status !== 'synced') {
        pushBot(`I could not send your details just now. Your answers are kept here: type send to try again, or email ${contact.email}.`)
        return
      }

      pushBot(`Done. Your details are with our team. We reply within ${timeline.reply}.`)
      resetDiscovery()
    } finally {
      finalizingRef.current = false
      setIsSending(false)
    }
  }

  function answerBasicQuestion(text) {
    const lowered = text.toLowerCase()

    if (lowered === 'start' || /\b(quote|scope|discovery|intake|get started)\b/.test(lowered)) {
      startDiscovery()
      return
    }

    const hit = botKnowledge.find((item) => item.keywords.some((k) => lowered.includes(k)))
    if (hit) {
      pushBot(hit.answer)
      if (hit.keywords.includes('pricing')) {
        pushBot('Type start when you want me to take your scope for a written proposal.')
      }
      return
    }

    pushBot('I can answer questions about services, pricing, timelines, coverage hours and contact details. Type start and I will take your project details for our team.')
  }

  function handleSend(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || isSending) {
      return
    }

    const userMessage = { id: makeId(), role: 'user', text }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    if (!inDiscovery) {
      answerBasicQuestion(text)
      return
    }

    const normalized = text.toLowerCase()

    if (normalized === 'cancel') {
      pushBot('Discovery cancelled. Type start whenever you want to begin again.')
      resetDiscovery()
      return
    }

    if (awaitingSend) {
      void finalizeDiscovery(draft, [...messages, userMessage])
      return
    }

    const current = discoveryQuestions[stepIndex]
    const nextIndex = stepIndex + 1

    if (normalized === 'skip') {
      if (current.required) {
        pushBot('That answer is required: type it to continue.')
        return
      }
      const nextDraft = { ...draft, [current.key]: '' }
      if (nextIndex >= discoveryQuestions.length) {
        void finalizeDiscovery(nextDraft, [...messages, userMessage])
        return
      }
      setDraft(nextDraft)
      setStepIndex(nextIndex)
      pushBot(questionPrompt(nextIndex))
      return
    }

    if (current.kind === 'email' && !isValidEmail(text)) {
      pushBot('Enter a work email address.')
      return
    }

    const nextDraft = { ...draft, [current.key]: text }

    if (nextIndex >= discoveryQuestions.length) {
      void finalizeDiscovery(nextDraft, [...messages, userMessage])
      return
    }

    setDraft(nextDraft)
    setStepIndex(nextIndex)
    pushBot(questionPrompt(nextIndex))
  }

  return (
    <>
      {isMounted && (
        <section
          id="chat-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Baxio"
          onKeyDown={handlePanelKeyDown}
          className={`fixed z-30 bottom-[76px] right-4 md:bottom-[84px] md:right-6 w-[calc(100%-2rem)] sm:w-[360px] h-[520px] max-h-[80vh] rounded-lg border border-rule bg-paper shadow-pill flex flex-col transition-[opacity,transform] duration-200 ease-out ${
            isShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="px-4 pt-4 pb-3 border-b border-rule">
            <img src={wordmark} alt="Baxio" className="h-4 w-auto" />
            <p className="caption mt-2">Answers basic questions and takes your project details privately for our team.</p>
          </div>

          <div ref={listRef} aria-live="polite" className="flex-1 min-h-0 flex flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((m) =>
              m.role === 'user' ? (
                <p key={m.id} className="text-body-sm text-paper bg-ink rounded-lg px-4 py-3 max-w-[85%] self-end">
                  {m.text}
                </p>
              ) : (
                <p key={m.id} className="body-sm bg-paper-2 rounded-lg px-4 py-3 max-w-[85%] self-start">
                  {m.text}
                </p>
              ),
            )}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-3 border-t border-rule">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="field h-11"
              aria-label="Message"
              placeholder="Ask a question or type start"
              autoComplete="off"
            />
            <button type="submit" className="btn-primary btn-sm" disabled={isSending}>
              {isSending ? 'Sending…' : 'Send'}
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        ref={pillRef}
        onClick={() => setIsOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && isOpen) {
            e.preventDefault()
            closePanel({ returnFocus: true })
          }
        }}
        className="chat-pill"
        aria-expanded={isOpen}
        aria-controls="chat-panel"
        aria-label={isOpen ? 'Close assistant' : 'Chat with us'}
        data-inverted={isInverted ? 'true' : 'false'}
        hidden={!pillVisible}
      >
        {isOpen ? 'Close' : 'Chat with us'}
      </button>
    </>
  )
}
