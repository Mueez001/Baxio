import { Link } from 'react-router-dom'
import { contact, practices, social } from '../content/site.js'

const company = [
  { to: '/about', label: 'About' },
  { to: '/how-we-work', label: 'How we work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
]

export default function Footer() {
  const wordmark = `${import.meta.env.BASE_URL}wordmark.png`

  return (
    <footer className="ground-paper-2 pt-16 md:pt-24 pb-12">
      <div className="container-page">
        <div className="grid-12 gap-y-8">
          <div className="col-span-4 md:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <img src={wordmark} alt="Baxio" width="840" height="280" className="h-[18px] w-auto" />
            </Link>
            <p className="caption mt-4 max-w-prose">
              Offshore execution for US mid-market businesses: finance, support, operations, analytics and ERP
              implementation, run with documented process and weekly reporting.
            </p>
          </div>

          <div className="col-span-2 md:col-span-2 md:col-start-6">
            <h2 className="meta">Company</h2>
            <ul className="mt-3 space-y-1">
              {company.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h2 className="meta">Services</h2>
            <ul className="mt-3 space-y-1">
              {practices.map((practice) => (
                <li key={practice.id}>
                  <Link to={`/services#${practice.id}`} className="footer-link">
                    {practice.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-3 md:col-start-10">
            <h2 className="meta">Contact</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <a href={`mailto:${contact.email}`} className="footer-link">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="footer-link">
                  {contact.phone}
                </a>
              </li>
            </ul>

            <SocialLinks />
          </div>
        </div>

        <hr className="rule mt-8" />
        <p className="legal pt-6">© 2026 {contact.legalName}</p>
      </div>
    </footer>
  )
}

// Social links. Only links with a URL are shown on the live site. While LinkedIn has no URL,
// `npm run dev` shows a dashed placeholder so the empty slot is easy to find.
function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false" className="fill-current">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z" />
    </svg>
  )
}

function SocialLinks() {
  const live = social.filter((s) => s.href)
  const missing = social.filter((s) => !s.href)
  if (live.length === 0 && !(import.meta.env.DEV && missing.length > 0)) return null

  return (
    <>
      <h2 className="meta mt-8">Follow</h2>
      <ul className="mt-3 flex flex-wrap gap-3">
        {live.map((s) => (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'Baxio on ' + s.name + ' (opens in a new tab)'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink transition-colors duration-150 hover:border-ink"
            >
              <LinkedInMark />
            </a>
          </li>
        ))}
        {import.meta.env.DEV &&
          missing.map((s) => (
            <li key={s.name} className="caption rounded-lg border border-dashed border-crimson px-3 py-2 text-crimson">
              Placeholder: {s.name} URL needed (site.js, social)
            </li>
          ))}
      </ul>
    </>
  )
}
