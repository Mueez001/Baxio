import CTASection from '../components/CTASection.jsx'

const values = [
  ['Operator-led', 'Founded by people who ran offshore teams inside US companies — not a recruiting agency that pivoted.'],
  ['Process before people', 'We document the work first. The right person is hired against a clearly defined role, not the other way around.'],
  ['Honest reporting', 'You hear the bad news first. Misses are surfaced with a fix attached.'],
  ['Long engagements', 'We optimize for clients who stay for years — not for headcount we can churn through.'],
]

const stats = [
  ['2017', 'Founded'],
  ['180+', 'Operators across our delivery centers'],
  ['98%', 'Client retention'],
  ['12+', 'Industries served'],
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-100">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="container-x relative pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow">About Baxio</span>
            <h1 className="mt-5 h-display">Built for operators who can’t afford execution to slip.</h1>
            <p className="mt-6 lead">
              Baxio was founded inside the same problem our clients face: how do you scale operations across borders without losing quality, accountability, or visibility? We built the company we wished existed.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="h-section">Our story</h2>
            <div className="mt-6 space-y-5 text-ink-600 leading-relaxed text-lg">
              <p>
                Before Baxio, our founders ran finance and operations functions inside US-based mid-market companies. They built offshore teams the hard way — through trial, error, and a long list of providers that promised execution and delivered headcount.
              </p>
              <p>
                The pattern was always the same: low cost up front, drift in the middle, and quiet failures showing up months later in the form of bad reporting, missed escalations, and process knowledge that walked out the door with whoever left.
              </p>
              <p>
                Baxio was built to solve that pattern. Documented SOPs, named team leads, weekly reporting, and KPI accountability — all packaged so a CFO or COO can stop managing offshore vendors and start scaling a function.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="card p-7">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">By the numbers</div>
              <div className="mt-5 grid grid-cols-2 gap-6">
                {stats.map(([k, v]) => (
                  <div key={v}>
                    <div className="font-display text-3xl font-bold text-ink-900">{k}</div>
                    <div className="mt-1 text-sm text-ink-500">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-xl bg-ink-50 p-5 text-sm text-ink-600">
                Delivery centers in South Asia · Account teams in the United States · Coverage across US Eastern through Pacific business hours.
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-ink-50/60 border-y border-ink-100">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">What we believe</span>
            <h2 className="mt-4 h-section">Four principles that shape every engagement.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {values.map(([t, d]) => (
              <div key={t} className="card p-7">
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-ink-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 h-section">Operators who’ve sat in your seat.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                'Shahid Latif Khan',
                'Chairman of Board of Directors',
                "Currently President and CEO of Metropolitan Warehouse & Delivery, a US-based logistics and final-mile delivery company serving the furniture industry. His leadership background adds strong operational credibility to Baxio, connecting the company's BPO, finance, accounting, analytics, and customer support services with real-world logistics execution at scale.",
              ],
              [
                'Peet Van Der Schyff',
                'Chief Executive Officer',
                "Also the Chief Finance Officer of MWD, Peet brings senior finance leadership and logistics finance experience to Metropolitan Warehouse & Delivery. As CFO, he oversees financial operations, supports disciplined growth, and strengthens the financial governance behind the company's nationwide logistics platform. His background adds credibility to Baxio's finance, accounting, FP&A, reporting, and back-office support services.",
              ],
              [
                'Mueez Ur Rehman',
                'Head of Offshore Operations',
                "Mueez leads FP&A, pricing, financial reporting, and data analytics functions, with a strong focus on operational finance, process improvement, and automation. His work connects financial planning with real business operations, helping Baxio deliver practical support across accounting, reporting, analytics, and back-office processes for US-based clients.",
              ],
              [
                'Mohsin Abbasi',
                'Operations & Client Support Leader',
                "Mohsin supports Baxio's service delivery through strong coordination, operational follow-up, and client-focused execution. His role helps ensure that day-to-day processes remain organized, responsive, and aligned with client expectations across back-office and support functions.",
              ],
              [
                'Zeeshan Ali',
                'IT Support',
                "Zeeshan Ali provides IT support services to Baxio's clients, helping businesses maintain reliable technology systems and day-to-day technical operations. His hands-on technical expertise extends Baxio's service offering beyond finance and back-office functions, ensuring clients receive dependable IT assistance as part of a fully integrated support model.",
              ],
            ].map(([n, r, b]) => (
              <div key={n} className="card p-7">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white font-display font-bold text-sm">
                  {n.split(' ').map(s => s[0]).join('')}
                </div>
                <div className="mt-5 font-display text-lg font-semibold">{n}</div>
                <div className="text-sm text-brand-700 font-semibold">{r}</div>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="If your operation deserves a serious partner, let’s talk."
      />
    </>
  )
}
