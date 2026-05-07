import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection.jsx'

const services = [
  {
    name: 'Finance & Accounting',
    tag: 'Most engaged',
    desc: 'Senior bookkeepers and AR/AP specialists trained on US-GAAP basics. Built around your close calendar, not ours.',
    bullets: [
      'Accounts receivable & collections',
      'Accounts payable & vendor reconciliation',
      'Bank & credit card reconciliations',
      'Month-end close support',
      'Management reporting packs',
      'QuickBooks, NetSuite, Xero, Sage Intacct',
    ],
  },
  {
    name: 'Customer Support',
    desc: 'Email, chat, and voice teams that work to your tone of voice and SLAs — with weekly QA scoring built in.',
    bullets: [
      'Tier 1 & Tier 2 support',
      'Order, returns, and account inquiries',
      'CSAT/CES reporting',
      'Knowledge-base and macro management',
      'Zendesk, Intercom, Freshdesk, HubSpot',
      'After-hours and weekend coverage',
    ],
  },
  {
    name: 'Operations Support',
    desc: 'The unglamorous, repeatable back-office work that decides whether your business runs cleanly each week.',
    bullets: [
      'Order processing & fulfillment ops',
      'Vendor onboarding & PO management',
      'Inventory and SKU maintenance',
      'CRM hygiene & lead enrichment',
      'Document processing & data entry',
      'Workflow documentation (SOPs)',
    ],
  },
  {
    name: 'Data & Analytics',
    desc: 'Analysts who take messy operational data and return clean dashboards your leadership team will actually open.',
    bullets: [
      'KPI dashboards (Looker, Power BI, Sheets)',
      'Recurring reporting automation',
      'Data cleanup & enrichment',
      'Cohort, funnel, and retention analysis',
      'Ad-hoc analyst capacity',
      'Light SQL, Python, and Excel modeling',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Operational capability, delivered as a service."
        body="Four practice areas — finance, customer support, operations, and analytics — each run by a named lead and measured against KPIs you sign off on."
      />

      <section className="section">
        <div className="container-x grid gap-8 lg:gap-10">
          {services.map((s, i) => (
            <article key={s.name} className="card p-8 sm:p-10 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-ink-400">0{i + 1}</span>
                  {s.tag && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 rounded-full px-2 py-1">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold">{s.name}</h2>
                <p className="mt-4 text-ink-500 leading-relaxed">{s.desc}</p>
                <Link to="/contact" className="btn-link mt-6">
                  Discuss this scope
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 sm:p-7">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">What we cover</div>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section className="section bg-ink-50/60 border-y border-ink-100">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Engagement models</span>
            <h2 className="mt-4 h-section">Pick the model that matches your stage.</h2>
            <p className="mt-5 lead">
              Every service above can be delivered as shared support, a dedicated resource, or a fully managed team. See <Link to="/pricing" className="text-brand-700 font-semibold underline-offset-4 hover:underline">pricing</Link> for ranges.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              ['Starter Support', 'Shared resources for low-volume, recurring work. Best for testing offshore execution before scaling.'],
              ['Dedicated Resource', 'A full-time or part-time person who owns specific work end-to-end and reports to you weekly.'],
              ['Managed Team', 'Multiple specialists led by a Baxio team lead. Process management and KPI reporting included.'],
            ].map(([t, d]) => (
              <div key={t} className="card p-7">
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-ink-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Not sure which service fits?"
        body="Send us your scope or your problem. We’ll come back with a recommended model, suggested roles, and a structured proposal."
      />
    </>
  )
}

function PageHero({ eyebrow, title, body }) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="container-x relative pt-20 pb-16 sm:pt-28 sm:pb-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 h-display max-w-4xl">{title}</h1>
        {body && <p className="mt-6 lead max-w-2xl">{body}</p>}
      </div>
    </section>
  )
}
