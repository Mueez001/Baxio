import { useEffect } from 'react'
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

export default function Layout() {
  const { pathname, hash } = useLocation()

  // On navigation: jump to the top instantly, or to the hashed element when one is set.
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const target = id ? document.getElementById(id) : null
      if (target) {
        const frame = window.requestAnimationFrame(() => {
          target.scrollIntoView({ block: 'start' })
        })
        return () => window.cancelAnimationFrame(frame)
      }
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
      <main id="content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  )
}
