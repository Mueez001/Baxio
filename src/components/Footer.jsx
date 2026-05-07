import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-200">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center">
            <img src="Baxio.jfif" alt="Baxio logo" className="h-10 w-auto rounded-sm" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
            Offshore execution for US businesses. Finance, operations, customer service, and analytics — delivered with reporting discipline and process ownership.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-ink-400">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-500" />
            Onboarding new clients — Q2 availability open
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/about" className="text-ink-300 hover:text-white">About</Link></li>
            <li><Link to="/how-we-work" className="text-ink-300 hover:text-white">How We Work</Link></li>
            <li><Link to="/contact" className="text-ink-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/services" className="text-ink-300 hover:text-white">Finance & Accounting</Link></li>
            <li><Link to="/services" className="text-ink-300 hover:text-white">Customer Support</Link></li>
            <li><Link to="/services" className="text-ink-300 hover:text-white">Operations Support</Link></li>
            <li><Link to="/services" className="text-ink-300 hover:text-white">Data & Analytics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-300">
            <li>hello@baxio.co</li>
            <li>+1 (302) 555-0148</li>
            <li>Mon–Fri · 8am–8pm ET coverage</li>
          </ul>
          <Link to="/contact" className="btn-accent mt-6">Book a Consultation</Link>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} Baxio Operations Inc. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
