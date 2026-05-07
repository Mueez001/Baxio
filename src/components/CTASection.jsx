import { Link } from 'react-router-dom'

export default function CTASection({
  eyebrow = 'Get started',
  title = 'Let’s design the right team for your business',
  body = 'Tell us about your scope. We’ll respond within one business day with a structured proposal — roles, hours, reporting cadence, and pricing.',
  primaryLabel = 'Book a Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Request Proposal',
  secondaryTo = '/contact?intent=proposal',
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 sm:px-14 sm:py-20">
          <div className="absolute inset-0 bg-hero-radial opacity-80" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-ink-200">{eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="mt-5 text-lg text-ink-300 max-w-2xl">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={primaryTo} className="btn-accent">
                {primaryLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <Link to={secondaryTo} className="btn bg-white/10 text-white border border-white/15 hover:bg-white/15">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
