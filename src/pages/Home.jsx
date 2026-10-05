import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import LogoCloud from '../components/LogoCloud'
import StatusNote from '../components/StatusNote'
import HowItWorks from '../components/HowItWorks'
import TrustSection from '../components/TrustSection'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import { practices, cadence, ctaLabel, heroLead, heroFacts } from '../content/site'

const description =
  'Finance, support, operations, analytics and ERP implementation for US mid-market companies, run by a named team and reported to you every week.'

export default function Home() {
  usePageMeta({ title: 'Baxio | Offshore finance, support and operations teams for US companies', description })

  return (
    <>
      {/* Hero: the promise on the left, the weekly status it produces on the right. */}
      <section className="ground-paper-2 pt-12 pb-16 md:pt-20 md:pb-20 lg:pt-28 lg:pb-24" aria-labelledby="hero-title">
        <div className="container-page">
          <div className="grid-12 gap-y-12 lg:items-center">
            <div className="col-span-4 md:col-span-12 lg:col-span-7">
              <span className="accent-rule hero-rise hero-rise-1" aria-hidden="true" />
              <h1 id="hero-title" className="display-xl mt-6 hero-rise hero-rise-1">
                Finance and operations teams for US companies.
              </h1>
              <p className="lead mt-6 max-w-[36rem] hero-rise hero-rise-2">{heroLead}</p>
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8 hero-rise hero-rise-3">
                <Link to="/contact" className="btn-primary">
                  {ctaLabel}
                </Link>
                <Link to="/#how-it-works" className="link-quiet text-center sm:text-left">
                  See how it works
                </Link>
              </div>
            </div>
            <div className="col-span-4 md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-8 hero-rise hero-rise-4">
              <StatusNote />
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-y-5 border-t border-rule pt-8 sm:grid-cols-2 sm:gap-x-6 lg:mt-20 lg:grid-cols-4">
            {heroFacts.map(([term, detail]) => (
              <div key={term}>
                <dt className="meta">{term}</dt>
                <dd className="body-sm mt-1 text-ink">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <LogoCloud />

      <section className="ground-paper section pt-0 md:pt-0 lg:pt-8" aria-labelledby="practices-title">
        <div className="container-page">
          <div className="grid-12 gap-y-6 items-end">
            <h2 id="practices-title" className="h2 col-span-4 md:col-span-7">
              Five practices. One operating model.
            </h2>
            <p className="lead col-span-4 md:col-span-5">
              Every practice runs on the same discipline: documented SOPs, a named person accountable for your
              work, a weekly written status and a monthly business review.
            </p>
          </div>
          <div className="section-air rows">
            {practices.map((p) => (
              <Link key={p.id} to={'/services#' + p.id} className="row-link group">
                <article className="row">
                  <h3 className="h3 col-span-4 group-hover:text-crimson transition-colors duration-150">{p.name}</h3>
                  <div className="col-span-4 mt-2 md:mt-0 md:col-span-7 md:col-start-6">
                    <p className="body">{p.short}</p>
                    {p.tools && <p className="caption mt-2">{p.tools.join(', ')}</p>}
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link to="/services" className="link-quiet">
              Explore services
            </Link>
            <Link to="/pricing" className="link-quiet">
              See starting prices
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="ground-black section" aria-labelledby="cadence-title">
        <div className="container-page">
          <h2 id="cadence-title" className="h2 text-paper md:max-w-[66%]">
            You should never have to ask what happened this week.
          </h2>
          <p className="lead container-prose mt-6">
            Every engagement reports on a fixed rhythm, so you always know where the work stands.
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

      <TrustSection />

      <FAQ ground="ground-paper-2" />

      <CTASection />
    </>
  )
}
