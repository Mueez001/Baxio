import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import LogoCloud from '../components/LogoCloud'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import { practices, cadence, homeProcess } from '../content/site'

const description =
  'Finance, support, operations, analytics and ERP implementation for US mid-market companies, run by a named team and reported to you every week.'

export default function Home() {
  usePageMeta({ title: 'Baxio', description })

  return (
    <>
      <section className="section-hero ground-paper-2" aria-labelledby="hero-title">
        <div className="container-statement text-center">
          <h1 id="hero-title" className="display-xl animate-fade">
            The team you never<br className="sm:hidden" /> have to chase.
          </h1>
          <div className="container-prose-centred mt-6">
            <p className="lead animate-fade">{description}</p>
          </div>
          <Link to="/contact" className="btn-primary mt-8 animate-fade">
            Book a consultation
          </Link>
        </div>
      </section>

      <LogoCloud />

      <section className="ground-paper section" aria-labelledby="practices-title">
        <div className="container-page">
          <h2 id="practices-title" className="h2 md:max-w-[66%]">
            Five practices. One operating model.
          </h2>
          <p className="lead container-prose mt-6">
            Every practice runs on the same discipline: documented SOPs, a named person accountable for your work,
            a weekly written status and a monthly business review.
          </p>
          <div className="section-air rows">
            {practices.map((p) => (
              <Link key={p.id} to={'/services#' + p.id} className="row-link">
                <article className="row">
                  <h3 className="h3 col-span-4">{p.name}</h3>
                  <p className="body col-span-4 mt-2 md:mt-0 md:col-span-7 md:col-start-5">{p.short}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ground-black section" aria-labelledby="cadence-title">
        <div className="container-page">
          <h2 id="cadence-title" className="h2 text-paper md:max-w-[66%]">
            You should never have to ask what happened this week.
          </h2>
          <p className="lead container-prose mt-6">
            Every engagement reports on a fixed rhythm. Nothing waits for you to chase it.
          </p>
          <div className="section-air">
            {cadence.map(([period, line]) => (
              <div key={period} className="row last:border-b-0">
                <p className="ladder col-span-4 md:col-span-4">{period}</p>
                <p className="body text-on-black-2 col-span-4 md:col-span-6 md:col-start-5">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ground-paper section" aria-labelledby="process-title">
        <div className="container-page">
          <h2 id="process-title" className="h2">
            From first call to steady state.
          </h2>
          <div className="section-air rule-strong">
            <div className="grid sm:grid-cols-4 gap-x-6">
              {homeProcess.map((step) => (
                <div key={step.when} className="pt-6 border-b border-rule pb-8 sm:border-b-0">
                  <p className="meta">{step.when}</p>
                  <h3 className="h3 mt-3">{step.name}</h3>
                  <p className="body-sm mt-3">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-right mt-8">
            <Link to="/how-we-work" className="link-quiet">
              How we work
            </Link>
          </div>
        </div>
      </section>

      <FAQ />

      <CTASection />
    </>
  )
}
