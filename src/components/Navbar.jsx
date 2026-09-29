import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ctaLabel } from '../content/site.js'

const pages = [
  { to: '/services', label: 'Services' },
  { to: '/how-we-work', label: 'How we work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
]

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const sheetRef = useRef(null)
  const { pathname, hash } = useLocation()
  const wordmark = `${import.meta.env.BASE_URL}wordmark.png`

  // Bottom hairline after 8px of scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The menu closes on any route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  const close = useCallback(() => {
    setOpen(false)
    if (buttonRef.current) buttonRef.current.focus()
  }, [])

  // While open: lock body scroll, move focus into the sheet, trap Tab, close on Escape.
  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const frame = window.requestAnimationFrame(() => {
      const first = sheetRef.current ? sheetRef.current.querySelector(FOCUSABLE) : null
      if (first) first.focus()
    })

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab') return
      const inside = sheetRef.current ? Array.from(sheetRef.current.querySelectorAll(FOCUSABLE)) : []
      const cycle = [buttonRef.current, ...inside].filter(Boolean)
      if (cycle.length === 0) return
      const first = cycle[0]
      const last = cycle[cycle.length - 1]
      const active = document.activeElement
      if (event.shiftKey) {
        if (active === first || !cycle.includes(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last || !cycle.includes(active)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close])

  return (
    <>
      {/* The bar itself is the sticky element. The sheet lives outside it because backdrop-filter
          turns the bar into the containing block for fixed descendants. */}
      <header className="nav-bar" data-scrolled={scrolled ? 'true' : 'false'}>
        <nav aria-label="Main" className="container-page flex h-nav items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={wordmark} alt="Baxio" width="840" height="280" className="h-[22px] w-auto" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {pages.map((page) => (
              <NavLink key={page.to} to={page.to} className="link-nav">
                {page.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <NavLink to="/contact" className="link-nav">
              Contact
            </NavLink>
            <Link to="/contact" className="btn-primary btn-sm">
              {ctaLabel}
            </Link>
          </div>

          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? close() : setOpen(true))}
            className="link-nav -mr-2 h-11 px-2 font-medium lg:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </header>

      {/* Full-screen paper sheet below the bar. Stays mounted; visibility flips after the 200ms fade.
          z-[35]: above the chat pill (z-30), below the bar (z-40). */}
      <div
        id="mobile-menu"
        ref={sheetRef}
        data-open={open ? 'true' : 'false'}
        aria-hidden={!open}
        className={
          open
            ? 'fixed inset-x-0 bottom-0 top-nav z-[35] overflow-y-auto bg-paper transition-[opacity,visibility] duration-200 visible opacity-100 lg:hidden'
            : 'fixed inset-x-0 bottom-0 top-nav z-[35] overflow-y-auto bg-paper transition-[opacity,visibility] duration-200 invisible opacity-0 lg:hidden'
        }
      >
        <div className="flex min-h-full flex-col">
          <nav aria-label="Menu" className="container-page pt-2">
            <ul>
              {pages.map((page) => (
                <li key={page.to}>
                  <NavLink to={page.to} className="block border-b border-rule py-5 text-menu text-ink no-underline">
                    {page.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/contact" className="block border-b border-rule py-5 text-menu text-ink no-underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mt-auto p-6">
            <Link to="/contact" className="btn-primary flex w-full">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
