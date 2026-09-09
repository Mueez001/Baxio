import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import CTASection from '../components/CTASection'
import { practices, sopContents, plans } from '../content/site'

// Full literal class strings so the Tailwind scanner sees every name.
const grounds = [
  'ground-paper section scroll-mt-16',
  'ground-paper-2 section scroll-mt-16',
  'ground-paper section scroll-mt-16',
  'ground-paper-2 section scroll-mt-16',
]

export default function Services() {
  usePageMeta({
    title: 'Services | Baxio',
    description:
      'Finance, customer support, operations and analytics, each run by a named lead, documented in your systems and measured against KPIs you sign off on.',
  })

  return (
    <>
      <section className="section-hero ground-paper pb-0 lg:pb-0" aria-labelledby="services-title">
        <div className="container-page">
          <h1 id="services-title" className="display-l md:max-w-[75%]">
            Four practices. One operating model.
          </h1>
          <p className="lead container-prose mt-6">
            Each practice is run by a named lead, documented in your systems and measured against KPIs
            you sign off on.
          </p>
        </div>
      </section>

      {practices.map((p, i) => (
        <PracticeBlock key={p.id} practice={p} ground={grounds[i % grounds.length]} />
      ))}

      <section className="ground-paper section" aria-labelledby="sop-title">
        <div className="container-page">
          <h2 id="sop-title" className="h2">
            What a documented SOP contains.
          </h2>
          <ol className="section-air rows container-prose list-none">
            {sopContents.map((item) => (
              <li key={item} className="border-b border-rule py-5 lg:py-6 body">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ground-paper-2 section" aria-labelledby="delivery-title">
        <div className="container-page">
          <h2 id="delivery-title" className="h2">
            Every practice can be delivered three ways.
          </h2>
          <div className="section-air grid border-t border-rule md:border-t-0 md:grid-cols-3 md:divide-x md:divide-rule">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="py-6 border-b border-rule md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <h3 className="h3">{plan.name}</h3>
                <p className="body-sm mt-3">{plan.short}</p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link to="/pricing" className="link-quiet">
              See pricing
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}

function PracticeBlock({ practice: p, ground }) {
  const titleId = p.id + '-title'
  return (
    <section id={p.id} className={ground} aria-labelledby={titleId}>
      <div className="container-page grid-12">
        <div className="col-span-4 md:col-span-4">
          <h2 id={titleId} className="h2">
            {p.name}
          </h2>
          <p className="lead mt-4">{p.lead}</p>
        </div>

        <div className="col-span-4 mt-10 md:mt-0 md:col-span-8 md:col-start-5">
          <p className="meta">What we cover</p>
          <ul className="rows mt-3 sm:grid sm:grid-cols-2 sm:gap-x-6">
            {p.covers.map((item) => (
              <li key={item} className="border-b border-rule py-5 lg:py-6 body-sm">
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-8 rows">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-6 border-b border-rule py-5 lg:py-6">
              <dt className="meta col-span-4 md:col-span-2">Measured by</dt>
              <dd className="caption col-span-4 md:col-span-6">{p.measuredBy.join(', ')}</dd>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-6 border-b border-rule py-5 lg:py-6">
              <dt className="meta col-span-4 md:col-span-2">Tools</dt>
              <dd className="caption col-span-4 md:col-span-6">{p.tools.join(', ')}</dd>
            </div>
          </dl>

          <p className="mt-8">
            <Link to="/contact" className="link-quiet">
              Book a consultation
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
