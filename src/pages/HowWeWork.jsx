import CTASection from '../components/CTASection.jsx'

const phases = [
  {
    n: '01',
    t: 'Discovery',
    d: 'A 45-minute working session with your operator. We map workflows, volumes, tools, edge cases, and the reporting you actually need.',
    out: ['Documented current-state workflow', 'Volume & complexity baseline', 'Suggested engagement model'],
  },
  {
    n: '02',
    t: 'Proposal & scope',
    d: 'Within 3 business days you receive a written proposal: roles, hours, KPIs, reporting cadence, pricing, and a 30-day pilot plan.',
    out: ['Statement of work', 'Pilot success metrics', 'Pricing range with assumptions'],
  },
  {
    n: '03',
    t: 'Onboarding (week 1–2)',
    d: 'We document SOPs, provision access through your security model, and your assigned team lead runs a structured kickoff with your stakeholders.',
    out: ['SOPs in your knowledge base', 'Access & tooling configured', 'Team lead introductions'],
  },
  {
    n: '04',
    t: '30-day pilot',
    d: 'The team runs live work against the agreed KPIs. We meet weekly, share a written status note, and adjust scope before steady state.',
    out: ['Weekly status report', 'KPI dashboard', 'Pilot review at day 30'],
  },
  {
    n: '05',
    t: 'Steady state',
    d: 'Predictable execution with monthly business reviews. Quarterly we propose process improvements and capacity changes — up or down.',
    out: ['Monthly business review', 'Quarterly optimization plan', 'Single point of escalation'],
  },
]

const principles = [
  ['Process ownership', 'A named team lead is accountable for the work end-to-end — not a pool of anonymous agents.'],
  ['Reporting discipline', 'You receive a written status every week and a structured business review every month.'],
  ['Documented SOPs', 'Every workflow we run is documented in your system. If a person leaves, the process doesn’t.'],
  ['KPI accountability', 'Pilots and steady-state engagements are measured against KPIs you sign off on in writing.'],
  ['Security by design', 'Role-based access, MFA, device controls, and signed NDAs across every engagement.'],
  ['Scale without re-hiring', 'Add or reduce capacity within two weeks. No re-recruiting, no re-onboarding from scratch.'],
]

export default function HowWeWork() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-100">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="container-x relative pt-20 pb-16 sm:pt-28 sm:pb-20">
          <span className="eyebrow">How we work</span>
          <h1 className="mt-5 h-display max-w-4xl">A managed engagement model — not a staffing agency.</h1>
          <p className="mt-6 lead max-w-2xl">
            We sell ownership of work, not hours. Every engagement is structured around clear scope, a named lead, and reporting you can put in front of leadership without rewriting it.
          </p>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Engagement process</span>
            <h2 className="mt-4 h-section">From first call to steady state.</h2>
          </div>

          <div className="mt-14 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-ink-100 hidden md:block" />
            <ol className="space-y-6">
              {phases.map((p) => (
                <li key={p.n} className="md:pl-16 relative">
                  <div className="hidden md:grid absolute left-0 top-6 h-10 w-10 place-items-center rounded-full bg-ink-900 text-white text-sm font-bold">
                    {p.n}
                  </div>
                  <div className="card p-7 sm:p-8 grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-5">
                      <div className="md:hidden text-sm font-bold text-brand-600">{p.n}</div>
                      <h3 className="mt-1 font-display text-xl font-semibold">{p.t}</h3>
                      <p className="mt-3 text-ink-500 leading-relaxed">{p.d}</p>
                    </div>
                    <div className="md:col-span-7">
                      <div className="rounded-xl bg-ink-50/70 border border-ink-100 p-5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">Deliverables</div>
                        <ul className="mt-3 space-y-2">
                          {p.out.map((o) => (
                            <li key={o} className="flex items-start gap-2.5 text-sm text-ink-700">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section bg-ink-50/60 border-y border-ink-100">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Operating principles</span>
            <h2 className="mt-4 h-section">Six things we never compromise on.</h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(([t, d]) => (
              <div key={t} className="card p-7">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-ink-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTING */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Reporting cadence</span>
            <h2 className="mt-4 h-section">You should never have to ask, “what happened this week?”</h2>
            <p className="mt-5 lead">
              Every Baxio engagement comes with a fixed reporting rhythm. Status arrives in your inbox before your Monday meeting — not after you chase it.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                ['Daily', 'Internal team standup. Blockers escalated within the day.'],
                ['Weekly', 'Written status note: throughput, KPIs, exceptions, next-week plan.'],
                ['Monthly', 'Business review with your team lead and account owner.'],
                ['Quarterly', 'Process optimization plan and capacity recommendations.'],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-5">
                  <div className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-brand-700">{k}</div>
                  <div className="text-ink-700">{v}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="card p-7">
              <div className="flex items-center justify-between border-b border-ink-100 pb-4">
                <div>
                  <div className="text-sm font-semibold text-ink-900">Weekly status — Wk 17</div>
                  <div className="text-xs text-ink-400">Account: Cedarworks · Team Lead: Priya N.</div>
                </div>
                <span className="text-xs font-semibold text-accent-600 bg-accent-500/10 rounded-full px-2.5 py-1">Delivered Mon 8:00 ET</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[['DSO', '41d'], ['QA', '96%'], ['SLA', '99%']].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-ink-100 p-3 text-center">
                    <div className="text-xs text-ink-400">{k}</div>
                    <div className="font-display font-bold text-lg">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">Highlights</div>
                <ul className="mt-2 space-y-1.5 text-ink-700">
                  <li>• Closed 14 aged invoices over 60 days.</li>
                  <li>• Reduced response time on Tier-1 tickets to 38 min.</li>
                  <li>• 1 escalation (vendor data error) — resolved Thu.</li>
                </ul>
              </div>
              <div className="mt-5 text-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">Next week</div>
                <ul className="mt-2 space-y-1.5 text-ink-700">
                  <li>• Begin migration to v3 SOPs.</li>
                  <li>• Cross-train second analyst on reporting pack.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to scope it?"
        title="Get a written proposal in 3 business days."
        body="Tell us your workflows and KPIs. We’ll come back with roles, hours, reporting cadence, and pricing — in writing."
      />
    </>
  )
}
