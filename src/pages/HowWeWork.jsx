import usePageMeta from '../hooks/usePageMeta.js'
import CTASection from '../components/CTASection.jsx'
import CoverageRule from '../components/CoverageRule.jsx'
import Sheet from '../components/Sheet.jsx'
import { stages, coverage, cadence, principles, timeline } from '../content/site.js'

export default function HowWeWork() {
  usePageMeta({
    title: 'How we work | Baxio',
    description:
      'A managed engagement, not a staffing agency: a named lead, documented SOPs, a ' +
      timeline.pilot +
      ' and a written status every week.',
  })

  return (
    <>
      {/* Hero */}
      <section className="section-hero ground-paper pb-0 lg:pb-0" aria-labelledby="how-title">
        <div className="container-page">
          <h1 className="display-l md:max-w-[75%]" id="how-title">
            A managed engagement, not a staffing agency.
          </h1>
          <p className="lead container-prose mt-6">
            We sell ownership of work, not hours. Every engagement is structured around a clear scope, a named lead and
            reporting you can put in front of leadership without rewriting it.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="ground-paper section" aria-labelledby="stages-title">
        <div className="container-page">
          <h2 className="h2" id="stages-title">
            From first call to steady state.
          </h2>
          <ol className="section-air rows list-none">
            {stages.map((stage) => (
              <li key={stage.name} className="row">
                <p className="meta col-span-4 md:col-span-2">{stage.when}</p>
                <div className="col-span-4 md:col-span-5 md:col-start-3">
                  <h3 className="h3">{stage.name}</h3>
                  <p className="body mt-3">{stage.body}</p>
                </div>
                <div className="col-span-4 md:col-span-4 md:col-start-9">
                  <p className="meta">You receive</p>
                  {stage.receive.map((item) => (
                    <p key={item} className="caption mt-1">
                      {item}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Coverage */}
      <section className="ground-paper-2 section" aria-labelledby="coverage-title">
        <div className="container-page">
          <h2 className="h2" id="coverage-title">
            Coverage without the handover gap.
          </h2>
          <div className="section-air">
            <CoverageRule />
          </div>
          <dl className="rows mt-12 container-prose">
            {coverage.rows.map(([term, detail]) => (
              <div key={term} className="grid grid-cols-4 gap-x-6 border-b border-rule py-4">
                <dt className="meta col-span-2 sm:col-span-1">{term}</dt>
                <dd className="body col-span-2 sm:col-span-3">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cadence beside the sheet */}
      <section className="ground-paper section" aria-labelledby="cadence-title">
        <div className="container-page">
          <h2 className="h2 md:max-w-[66%]" id="cadence-title">
            You should never have to ask what happened this week.
          </h2>
          <p className="lead container-prose mt-6">
            Every engagement reports on a fixed rhythm. Nothing waits for you to chase it.
          </p>
          <div className="section-air grid-12 gap-y-12">
            <div className="col-span-4 md:col-span-5 rows">
              {cadence.map(([label, line]) => (
                <div key={label} className="row-sm block">
                  <h3 className="h3">{label}</h3>
                  <p className="body-sm text-ink-2 mt-2">{line}</p>
                </div>
              ))}
            </div>
            <div className="col-span-4 md:col-span-7">
              <Sheet size="sm" />
              <p className="caption text-center mt-4">Illustrative figures from a Finance &amp; Accounting engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Six things */}
      <section className="ground-black section" aria-labelledby="principles-title">
        <div className="container-page">
          <h2 className="h2 text-paper" id="principles-title">
            Six things we never compromise on.
          </h2>
          <div className="section-air rows">
            {principles.map(([name, line]) => (
              <div key={name} className="row-sm">
                <h3 className="h3 text-paper col-span-4 md:col-span-4">{name}</h3>
                <p className="body text-on-black-2 col-span-4 md:col-span-7 md:col-start-5">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
