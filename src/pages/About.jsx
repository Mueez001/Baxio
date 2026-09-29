import usePageMeta from '../hooks/usePageMeta.js'
import CTASection from '../components/CTASection.jsx'
import { coverage, values, leadership } from '../content/site.js'

export default function About() {
  usePageMeta({
    title: 'About | Baxio',
    description:
      'Baxio started in mid-2025. Baxio Inc. is registered in New Jersey. Our team works in Islamabad, Pakistan.',
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
            Baxio grew out of the Pakistan office of Metropolitan Warehouse & Delivery (MWD), a US logistics company. That office has run MWD’s own payables, receivables, invoicing, customer service and dispatch for about 25 years.
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
                Baxio itself started in mid-2025. Baxio Inc. is registered in New Jersey. Our team works in
                Islamabad, Pakistan.
              </p>
              <p className="body">
                A named person is accountable for your work, and you get a written status every week.
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
            The operating rigor comes from running a business, not from running a BPO.
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
