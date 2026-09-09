import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ChatbotWidget from './ChatbotWidget.jsx'

function focusContent(event) {
  event.preventDefault()
  const content = document.getElementById('content')
  if (!content) return
  content.focus({ preventScroll: true })
  content.scrollIntoView({ block: 'start' })
}

// The page-enter animation starts from translateY(12px) (fill-mode: backwards), so it is
// already applied to <main> the instant this effect runs. A scroll target inside <main> must
// be positioned against its settled (transform: none) layout, not this transient offset.
function currentTranslateY(el) {
  if (!el) return 0
  const transform = getComputedStyle(el).transform
  const match = /^matrix\(([^)]+)\)$/.exec(transform)
  if (!match) return 0
  const parts = match[1].split(',').map(Number)
  return parts[5] || 0
}

export default function Layout({ enter }) {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)
  const mainRef = useRef(null)

  // On navigation: jump to the top instantly, or to the hashed element when one is set.
  useLayoutEffect(() => {
    const pageChanged = previousPath.current !== pathname
    previousPath.current = pathname
    const id = hash ? decodeURIComponent(hash.slice(1)) : ''
    const target = id ? document.getElementById(id) : null

    if (pageChanged) {
      const root = document.documentElement
      const previous = root.style.scrollBehavior
      root.style.scrollBehavior = 'auto'
      if (target) {
        target.scrollIntoView({ block: 'start' })
        const offsetY = currentTranslateY(mainRef.current)
        if (offsetY) window.scrollBy(0, -offsetY)
      } else {
        window.scrollTo(0, 0)
      }
      root.style.scrollBehavior = previous
      return undefined
    }

    if (target) {
      const frame = window.requestAnimationFrame(() => {
        target.scrollIntoView({ block: 'start' })
      })
      return () => window.cancelAnimationFrame(frame)
    }

    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
    return undefined
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#content"
        onClick={focusContent}
        className="btn-primary btn-sm sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:h-8 focus:px-4 focus:whitespace-nowrap"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" tabIndex={-1} key={pathname} ref={mainRef} className={enter ? 'flex-1 outline-none page-enter' : 'flex-1 outline-none'}>
        <Outlet />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  )
}
