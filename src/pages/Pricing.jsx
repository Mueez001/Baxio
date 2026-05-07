import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection.jsx'
import FAQ from '../components/FAQ.jsx'

const tiers = [
  {
    id: 'starter',
    name: 'Starter Support',
    price: '$800 – $1,500',
    cadence: '/ month',
    bestFor: 'Small businesses testing offshore execution before scaling.',
    description: 'Shared resources for low-volume, repeatable work. Ideal for clearing backlogs and validating fit.',
    included: [
      'Shared resource pool',
      '40–80 hours per month',
      'Basic task execution',
      'Weekly written status update',
      'Single point of contact',
      'Standard business-hours coverage',
    ],
    examples: ['Data entry & cleanup', 'Basic AR/AP support', 'Email handling & triage'],
    cta: 'Start Small',
    href: '/contact?tier=starter',
  },
  {
    id: 'dedicated',
    name: 'Dedicated Resource',
    price: '$1,800 – $3,500',
    cadence: '/ month',
    badge: 'Most Popular',
    highlight: true,
    bestFor: 'Companies that need a person who owns specific work and reports to you weekly.',
    description: 'A full-time or part-time dedicated specialist with named accountability and a structured reporting cadence.',
    included: [
      'Full-time or part-time dedicated staff',
      'Consistent ownership of tasks',
      'Documented SOPs in your stack',
      'Weekly KPI reporting',
      'Monthly business review',
      'US time-zone coverage available',
      'Backup resource for continuity',
    ],
    examples: ['AR specialist', 'Customer support agent', 'Data analyst', 'Operations coordinator'],
    cta: 'Hire a Dedicated Resource',
    href: '/contact?tier=dedicated',
  },
  {
    id: 'managed',
    name: 'Managed Team',
    price: 'Custom Pricing',
    cadence: '',
    bestFor: 'Scaling companies that want a function delivered, not a headcount to manage.',
    description: 'Multiple specialists led by a Baxio team lead. Process management, QA, and KPI reporting are part of the engagement.',
    included: [
      'Multiple team members',
      'Dedicated team lead / supervisor',
      'Process management & QA',
      'KPI dashboards & reporting',
      'Quarterly optimization reviews',
      'Single SLA across the function',
      'Capacity scaling within 2 weeks',
    ],
    examples: ['Full finance support team', 'Customer service team', 'Analytics & reporting team'],
    cta: 'Build Your Team',
    href: '/contact?tier=managed',
  },
]

const valueProps = [
  {
    t: 'Process ownership',
    d: 'A named lead is accountable for outcomes. You don’t manage individual contributors — you manage one relationship.',
    icon: 'M9 12l2 2 4-4M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z',
  },
  {
    t: 'Reporting discipline',
    d: 'Weekly status notes, monthly business reviews, and KPI dashboards delivered on a fixed cadence — without you chasing them.',
    icon: 'M3 3v18h18M7 14l4-4 4 4 5-6',
  },
  {
    t: 'Accountability',
    d: 'Engagements are measured against KPIs you sign off on. If we miss, we say so first — and we fix the process behind it.',
    icon: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z',
  },
  {
    t: 'Long-term scalability',
    d: 'Add or reduce capacity in two weeks. No re-recruiting, no re-onboarding from scratch, no losing the institutional knowledge.',
    icon: 'M3 12h4l3-9 4 18 3-9h4',
  },
]

const faqItems = [
  {
    q: 'How quickly can we start?',
    a: 'Most engagements move from signed proposal to live work within 7–14 business days. Starter Support can begin sooner; Managed Teams typically take 3–4 weeks for full ramp depending on role complexity and access provisioning.',
  },
  {
    q: 'Can we scale up or down?',
    a: 'Yes. Capacity changes — adding hours, adding people, or reducing — are handled with a two-week notice on either side. There are no long-term volume commitments tied to your initial scope.',
  },
  {
    q: 'What if performance is not satisfactory?',
    a: 'Every engagement starts with a 30-day pilot tied to written KPIs. If we’re not meeting them, we own the fix — replacing a resource, adjusting the process, or refunding the period. You should not pay for execution that doesn’t land.',
  },
  {
    q: 'How do you manage quality?',
    a: 'Each function has documented SOPs, weekly QA scoring, and a team lead responsible for output. We share QA results in your weekly report so quality is visible — not assumed.',
  },
  {
    q: 'What time zones do you support?',
    a: 'We cover US Eastern through Pacific business hours by default, with after-hours and weekend coverage available on Dedicated Resource and Managed Team engagements.',
  },
  {
    q: 'Do you provide reporting?',
    a: 'Yes — and it’s non-negotiable on our side. Every engagement includes a weekly written status, KPI tracking, and a monthly business review. Managed Teams also get quarterly process reviews.',
  },
]

export default function Pricing() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-100">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="container-x relative pt-20 pb-12 sm:pt-28 sm:pb-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Pricing</span>
            <h1 className="mt-5 h-display">Structured engagement. Transparent ranges.</h1>
            <p className="mt-6 lead">
              Three engagement models built around how you actually want to scale offshore execution. Final pricing depends on scope, complexity, and required skill level — and is always confirmed in writing before we start.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-8">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <PricingCard key={t.id} tier={t} />
          ))}
        </div>
        <div className="container-x mt-6">
          <p className="text-center text-sm text-ink-400">
            Final pricing depends on scope, complexity, and required skill level. All engagements include onboarding, SOP documentation, and weekly reporting.
          </p>
        </div>
      </section>

      {/* WHY NOT JUST CHEAPER LABOR */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Why Baxio</span>
            <h2 className="mt-4 h-section">Why Baxio is not just cheaper labor.</h2>
            <p className="mt-5 lead">
              Cost matters. But cost without process discipline produces rework, escalations, and turnover that quietly eat the savings. We sell something different: a managed function with the operating rigor you’d build internally if you had the time.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {valueProps.map((v) => (
              <div key={v.t} className="card p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={v.icon}/></svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-ink-500 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI COMPARISON */}
      <ROISection />

      {/* FAQ */}
      <FAQ items={faqItems} />

      <CTASection
        eyebrow="Get started"
        title="Let’s design the right team for your business."
        body="Share your scope. We’ll respond within one business day with a written proposal — roles, hours, reporting cadence, and pricing."
      />
    </>
  )
}

function PricingCard({ tier }) {
  const highlight = tier.highlight
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col ${
        highlight
          ? 'border-ink-900 bg-ink-950 text-white shadow-card lg:scale-[1.02] lg:-translate-y-1'
          : 'border-ink-100 bg-white shadow-card'
      }`}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {tier.badge}
        </span>
      )}

      <div>
        <h3 className={`font-display text-xl font-bold ${highlight ? 'text-white' : 'text-ink-900'}`}>
          {tier.name}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed ${highlight ? 'text-ink-300' : 'text-ink-500'}`}>
          {tier.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-display text-3xl sm:text-4xl font-bold ${highlight ? 'text-white' : 'text-ink-900'}`}>
            {tier.price}
          </span>
          {tier.cadence && (
            <span className={`text-sm ${highlight ? 'text-ink-400' : 'text-ink-400'}`}>{tier.cadence}</span>
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className={`text-xs font-semibold uppercase tracking-wider ${highlight ? 'text-ink-400' : 'text-ink-500'}`}>
          Best for
        </div>
        <p className={`mt-2 text-sm ${highlight ? 'text-ink-200' : 'text-ink-700'}`}>{tier.bestFor}</p>
      </div>

      <div className="mt-6">
        <div className={`text-xs font-semibold uppercase tracking-wider ${highlight ? 'text-ink-400' : 'text-ink-500'}`}>
          What’s included
        </div>
        <ul className="mt-3 space-y-2.5">
          {tier.included.map((b) => (
            <li
              key={b}
              className={`flex items-start gap-2.5 text-sm ${highlight ? 'text-ink-200' : 'text-ink-700'}`}
            >
              <span
                className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                  highlight ? 'bg-accent-500/20 text-accent-400' : 'bg-accent-500/10 text-accent-600'
                }`}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <div className={`text-xs font-semibold uppercase tracking-wider ${highlight ? 'text-ink-400' : 'text-ink-500'}`}>
          Example services
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tier.examples.map((e) => (
            <span
              key={e}
              className={`rounded-md px-2 py-1 text-xs font-medium ${
                highlight
                  ? 'bg-white/5 text-ink-200 border border-white/10'
                  : 'bg-ink-50 text-ink-600 border border-ink-100'
              }`}
            >
              {e}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-dashed border-ink-100/40">
        <Link
          to={tier.href}
          className={`btn w-full ${
            highlight
              ? 'bg-accent-500 text-white hover:bg-accent-600'
              : 'bg-ink-900 text-white hover:bg-ink-800'
          }`}
        >
          {tier.cta}
        </Link>
      </div>
    </div>
  )
}

function ROISection() {
  const rows = [
    ['Annual base cost', '$72,000', '$30,000 – $42,000'],
    ['Benefits & payroll taxes (~25%)', '$18,000', 'Included'],
    ['Recruiting & onboarding', '$8,000 – $15,000', 'Included'],
    ['Equipment & software', '$2,500 / yr', 'Included'],
    ['Management overhead (10% of a manager)', '~$12,000', 'Reduced — team lead included'],
    ['Time to productive output', '8–12 weeks', '1–3 weeks'],
    ['Capacity flexibility', 'Hire / lay off cycles', 'Scale within 2 weeks'],
  ]

  return (
    <section className="section bg-ink-50/60 border-y border-ink-100">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">ROI comparison</span>
            <h2 className="mt-4 h-section">In-house hire vs. Baxio Dedicated Resource.</h2>
            <p className="mt-5 lead">
              A like-for-like view of total cost of ownership for one full-time role. Numbers are illustrative; we’ll model your specific scenario during scoping.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link to="/contact" className="btn-accent">Model my scenario</Link>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
          <div className="grid grid-cols-3 bg-ink-900 text-white text-sm font-semibold">
            <div className="px-6 py-4">Cost component</div>
            <div className="px-6 py-4">In-house US hire</div>
            <div className="px-6 py-4 bg-brand-700">Baxio Dedicated</div>
          </div>
          <div className="divide-y divide-ink-100">
            {rows.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-3 text-sm">
                <div className="px-6 py-4 font-medium text-ink-900">{k}</div>
                <div className="px-6 py-4 text-ink-600">{a}</div>
                <div className="px-6 py-4 text-ink-900 font-semibold bg-brand-50/40">{b}</div>
              </div>
            ))}
            <div className="grid grid-cols-3 text-sm bg-ink-50">
              <div className="px-6 py-5 font-display text-base font-bold text-ink-900">Estimated annual cost</div>
              <div className="px-6 py-5 font-display text-base font-bold text-ink-700">~$112,500</div>
              <div className="px-6 py-5 font-display text-base font-bold text-brand-700 bg-brand-50/60">$30,000 – $42,000</div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-ink-400">
          Illustrative only. Based on a US metro mid-level operations role at $72k base. Your actual numbers will differ — we’ll model them with you.
        </p>
      </div>
    </section>
  )
}
