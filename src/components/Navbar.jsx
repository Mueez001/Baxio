import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const logoSrc = `${import.meta.env.BASE_URL}Baxio.jfif`

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-100/80 bg-white/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoSrc} alt="Baxio logo" className="h-9 w-auto rounded-sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="text-sm font-medium text-ink-600 hover:text-ink-900">
            Contact
          </Link>
          <Link to="/contact" className="btn-accent">
            Book a Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-ink-200 text-ink-700"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {[...links, { to: '/contact', label: 'Contact' }].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-ink-50 text-ink-900' : 'text-ink-600 hover:bg-ink-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent mt-2 w-full">
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
