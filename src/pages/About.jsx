import usePageMeta from '../hooks/usePageMeta.js'
import CTASection from '../components/CTASection.jsx'
import { coverage, values, leadership, purpose } from '../content/site.js'

export default function About() {
  usePageMeta({
    title: 'About | Baxio',
    description:
      'Baxio Inc. is a New Jersey company. Our finance team works in Pakistan on US business hours.',
  })

  return (
    <>
      {/* Hero */}
      <section className="section-hero ground-paper pb-0 lg:pb-0" aria-labelledby="about-title">
        <div className="container-page">
          <h1 className="display-l md:max-w-[80%]" id="about-title">
            Where Baxio comes from.
          </h1>
          <p className="lead container-prose mt-6">
            Baxio Inc. is a New Jersey company. Our finance team works in Pakistan on US business hours. Each person works on a company laptop with their own login and multi-factor sign-in, every task runs from a written procedure, and you get a written status every week.
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
                Baxio grew out of the Pakistan office of Metropolitan Warehouse & Delivery (MWD), a US logistics company. That office has run MWD’s own Procure-to-Pay, Order-to-Cash, invoicing, customer service and dispatch for about 20 years.
              </p>
              <p className="body">
                Baxio itself started in mid-2025, founded by people who ran offshore teams inside a US company.
              </p>
              <p className="body">
                Every task runs from a written procedure and is reviewed before it reaches you, so the work never depends on one person.
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

      {/* Vision, mission, goals, objectives */}
      <section className="ground-paper section" aria-labelledby="purpose-title">
        <div className="container-page">
          <h2 className="h2" id="purpose-title">What we are building.</h2>
          <div className="section-air rows">
            <div className="row">
              <h3 className="h3 col-span-4">Vision</h3>
              <p className="body col-span-4 md:col-span-7 md:col-start-5">{purpose.vision}</p>
            </div>
            <div className="row">
              <h3 className="h3 col-span-4">Mission</h3>
              <p className="body col-span-4 md:col-span-7 md:col-start-5">{purpose.mission}</p>
            </div>
            <div className="row">
              <h3 className="h3 col-span-4">In one line</h3>
              <p className="body col-span-4 md:col-span-7 md:col-start-5">{purpose.statement}</p>
            </div>
            <div className="row">
              <h3 className="h3 col-span-4">Goals</h3>
              <div className="col-span-4 md:col-span-7 md:col-start-5">
                {purpose.goals.map(([name, line]) => (
                  <div key={name} className="mb-6 last:mb-0">
                    <p className="body font-semibold">{name}</p>
                    <p className="body mt-1">{line}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <h3 className="h3 col-span-4">Objectives</h3>
              <ul className="body col-span-4 md:col-span-7 md:col-start-5 list-disc pl-5 space-y-2">
                {purpose.objectives.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="ground-paper-2 section" aria-labelledby="values-title">
        <div className="container-page">
          <h2 className="h2" id="values-title">Three principles that shape every engagement.</h2>
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
          <h2 className="h2" id="team-title">Leadership.</h2>
          <p className="lead container-prose mt-6">
            The operating rigor comes from running a business, not from running a BPO.
          </p>
          <div className="section-air rows">
            {leadership.filter((p) => !p.pending).map(({ name, title, bio }) => (
              <div key={name} className="row">
                <div className="col-span-4 md:col-span-4">
                  <h3 className="h3">{name}</h3>
                  <p className="caption mt-1">{title}</p>
                </div>
                {bio && <p className="body col-span-4 md:col-span-7 md:col-start-5">{bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
