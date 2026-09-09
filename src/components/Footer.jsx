import { Link } from 'react-router-dom'
import { contact, practices } from '../content/site.js'

const company = [
  { to: '/about', label: 'About' },
  { to: '/how-we-work', label: 'How we work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
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
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-caption text-ink hover:opacity-70">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h2 className="meta">Services</h2>
            <ul className="mt-4 space-y-3">
              {practices.map((practice) => (
                <li key={practice.id}>
                  <Link to={`/services#${practice.id}`} className="text-caption text-ink hover:opacity-70">
                    {practice.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-3 md:col-start-10">
            <h2 className="meta">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className="text-caption text-ink hover:opacity-70">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="text-caption text-ink hover:opacity-70">
                  {contact.phone}
                </a>
              </li>
              <li className="text-caption text-ink">{contact.hours}</li>
            </ul>
          </div>
        </div>

        <hr className="rule mt-8" />
        <p className="legal pt-6">© 2026 {contact.legalName}</p>
      </div>
    </footer>
  )
}
