import { Link } from 'react-router-dom'
import LogoCloud from '../components/LogoCloud.jsx'
import CTASection from '../components/CTASection.jsx'

const services = [
  {
    title: 'Finance & Accounting',
    desc: 'AR, AP, reconciliations, month-end close support, and reporting led by US-GAAP-trained staff.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M3 12h18M3 17h12"/></svg>
    ),
  },
  {
    title: 'Customer Support',
    desc: 'Email, chat, and voice teams with QA scoring, SLAs, and CSAT reporting built into delivery.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    ),
  },
  {
    title: 'Operations Support',
    desc: 'Order processing, vendor management, inventory ops, and back-office workflows you can document.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
    ),
  },
  {
    title: 'Data & Analytics',
    desc: 'Dashboards, KPI reporting, data cleanup, and analyst support across Looker, Power BI, and Sheets.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 14l4-4 4 4 5-6"/></svg>
    ),
  },
]

const stats = [
  { k: '12+', v: 'years offshore operations leadership' },
  { k: '98%', v: 'client retention since founding' },
  { k: '24h', v: 'standard onboarding turnaround' },
  { k: '40%', v: 'avg. cost reduction vs. US in-house' },
]

const proofs = [
  {
    quote:
      'Baxio rebuilt our AR process in three weeks. DSO dropped from 62 to 41 days and we get a clean weekly aging report — without us asking.',
    name: 'Maya Chen',
    role: 'Controller, mid-market SaaS',
  },
  {
    quote:
      'They feel like an extension of our ops team. Reporting is consistent, escalations are clean, and our in-house managers actually have time to think.',
    name: 'David Russo',
    role: 'COO, ecommerce brand ($60M revenue)',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />
        <div className="container-x relative pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                Offshore execution partner for US businesses
              </span>
              <h1 className="mt-5 h-display">
                Reliable offshore execution.
                <span className="block text-ink-500">Built for serious operators.</span>
              </h1>
              <p className="mt-6 lead max-w-2xl">
                Baxio runs finance, operations, customer service, and analytics for US companies — with the reporting discipline, process ownership, and accountability you’d expect from your own team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-accent">
                  Book a Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/pricing" className="btn-ghost">See Pricing</Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-500">
                <div className="flex items-center gap-2"><Check /> SOC 2-aligned controls</div>
                <div className="flex items-center gap-2"><Check /> US time-zone coverage</div>
                <div className="flex items-center gap-2"><Check /> Weekly reporting cadence</div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroCard />
            </div>
          </div>
        </div>
      </section>

      <LogoCloud />

      {/* VALUE PROPS */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-4 h-section">Execution, not just headcount.</h2>
            <p className="mt-5 lead">
              Most offshore providers sell hours. We sell outcomes wrapped in a managed process — owned by a lead, measured against KPIs, and reported to you on a fixed cadence.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card p-6 hover:shadow-ring transition-shadow">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.desc}</p>
                <Link to="/services" className="btn-link mt-5">
                  Explore
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-ink-100 bg-ink-50/60">
        <div className="container-x py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {stats.map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-ink-900">{s.k}</div>
              <div className="mt-2 text-sm text-ink-500 max-w-[18ch] mx-auto">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK PREVIEW */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-4 h-section">A managed engagement, not a staffing agency.</h2>
            <p className="mt-5 lead">
              Every engagement starts with a documented scope, named owners, and a reporting cadence. You get a partner accountable for the work — not a list of resumes.
            </p>
            <Link to="/how-we-work" className="btn-link mt-6">
              See our process
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-4">
              {[
                ['01', 'Discovery & scope', 'A 45-minute call to map workflows, volume, tools, and reporting requirements.'],
                ['02', 'Pilot design', 'We propose roles, hours, KPIs, and a 30-day pilot plan you can approve in writing.'],
                ['03', 'Onboarding', 'SOPs are documented, access is provisioned, and your team lead runs the kickoff.'],
                ['04', 'Steady state', 'Weekly reporting, monthly business reviews, and quarterly optimization.'],
              ].map(([n, t, d]) => (
                <li key={n} className="card p-6 flex gap-5">
                  <div className="font-display text-2xl font-bold text-brand-600 w-12">{n}</div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{t}</h3>
                    <p className="mt-1 text-ink-500">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-ink-950 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/10 bg-white/5 text-ink-200">Proof</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight text-white">
              Operators who hold themselves to a standard, hold us to one too.
            </h2>
          </div>
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {proofs.map((p) => (
              <figure key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <svg width="28" height="28" viewBox="0 0 24 24" className="text-brand-300" fill="currentColor"><path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z"/></svg>
                <blockquote className="mt-5 text-xl leading-relaxed text-white">“{p.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-ink-300">
                  <span className="font-semibold text-white">{p.name}</span> · {p.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

function Check() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500/10 text-accent-600">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  )
}

function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 via-transparent to-accent-500/20 blur-2xl rounded-3xl" />
      <div className="relative card p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-ink-900 text-white text-sm font-bold">B</div>
            <div>
              <div className="text-sm font-semibold text-ink-900">Weekly Ops Report</div>
              <div className="text-xs text-ink-400">Cedarworks · Wk 17</div>
            </div>
          </div>
          <span className="text-xs font-semibold text-accent-600 bg-accent-500/10 rounded-full px-2.5 py-1">On track</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            ['DSO', '41d', '↓ 12'],
            ['Tickets resolved', '1,284', '↑ 6%'],
            ['QA score', '96.4%', '↑ 1.2'],
            ['SLA met', '99.1%', '— '],
          ].map(([k, v, d]) => (
            <div key={k} className="rounded-xl border border-ink-100 p-4">
              <div className="text-xs text-ink-400">{k}</div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="font-display text-xl font-bold text-ink-900">{v}</span>
                <span className="text-xs font-semibold text-accent-600">{d}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-ink-50 p-4">
          <div className="text-xs font-semibold text-ink-600 uppercase tracking-wider">This week</div>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
            <li className="flex items-start gap-2"><Dot /> Closed 14 aged invoices &gt; 60 days</li>
            <li className="flex items-start gap-2"><Dot /> Migrated SOP v3 to Notion</li>
            <li className="flex items-start gap-2"><Dot /> Onboarded 1 new analyst</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Dot() {
  return <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
}
