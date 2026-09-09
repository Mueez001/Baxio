import usePageMeta from '../hooks/usePageMeta.js'
import CTASection from '../components/CTASection.jsx'
import { coverage, values, leadership } from '../content/site.js'

export default function About() {
  usePageMeta({
    title: 'About | Baxio',
    description:
      'Baxio was built inside Metropolitan Warehouse & Delivery, a US logistics operator. The people accountable to you run a business, not a BPO.',
  })

  return (
    <>
      {/* Hero */}
      <section className="section-hero ground-paper pb-0 lg:pb-0" aria-labelledby="about-title">
        <div className="container-page">
          <h1 className="display-l md:max-w-[80%]" id="about-title">
            Built inside a US logistics company, not sold to one.
          </h1>
          <p className="lead container-prose mt-6">
            Baxio’s leadership runs Metropolitan Warehouse & Delivery, a nationwide furniture logistics
            operator. The finance, support and operations practices exist because MWD needed them first.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="ground-paper section" aria-labelledby="story-title">
        <div className="container-page grid-12">
          <div className="col-span-4 md:col-span-7">
            <h2 className="h2" id="story-title">Our story.</h2>
            <div className="mt-6">
              <p className="body">
                Before Baxio, the leadership team ran finance and operations inside a US mid-market
                logistics business. Growing the back office meant building offshore teams the hard way:
                through trial, error and a long list of providers that promised execution and delivered
                headcount. Each one read well in the proposal and ran thin on the ground.
              </p>
              <p className="body">
                The pattern was always the same. Low cost up front, drift in the middle, and quiet
                failures showing up months later as bad reporting, missed escalations and process
                knowledge that left with whoever left. By the time the problem was visible, the work
                had to be rebuilt from the start.
              </p>
              <p className="body">
                Baxio was built to end that pattern. The work is documented in SOPs before anyone is
                hired against it. Every account has a named team lead, a weekly written status note and
                KPIs the team is held to. All of it is packaged so a CFO or COO can stop managing
                offshore vendors and start scaling a function.
              </p>
            </div>
          </div>

          <dl className="col-span-4 md:col-span-4 md:col-start-9 rows mt-12 md:mt-0 self-start">
            {coverage.rows.map(([term, detail]) => (
              <div key={term} className="border-b border-rule py-4">
                <dt className="meta">{term}</dt>
                <dd className="body mt-1">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Principles */}
      <section className="ground-paper-2 section" aria-labelledby="values-title">
        <div className="container-page">
          <h2 className="h2" id="values-title">Four principles that shape every engagement.</h2>
          <div className="section-air rows">
            {values.map(([name, line]) => (
              <div key={name} className="row">
                <h3 className="h3 col-span-4">{name}</h3>
                <p className="body col-span-4 md:col-span-7 md:col-start-5">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="ground-paper section" aria-labelledby="team-title">
        <div className="container-page">
          <h2 className="h2" id="team-title">The people accountable to you.</h2>
          <p className="lead container-prose mt-6">
            The operating rigour comes from running a business, not from running a BPO.
          </p>
          <div className="section-air rows">
            {leadership.map(({ name, title, bio }) => (
              <div key={name} className="row">
                <div className="col-span-4 md:col-span-4">
                  <h3 className="h3">{name}</h3>
                  <p className="caption mt-1">{title}</p>
                </div>
                <p className="body col-span-4 md:col-span-7 md:col-start-5">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
