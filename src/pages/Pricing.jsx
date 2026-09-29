import usePageMeta from '../hooks/usePageMeta.js'
import CTASection from '../components/CTASection.jsx'
import { pricingLine } from '../content/site.js'

// No prices on the site. Quotes go in proposals.
export default function Pricing() {
  usePageMeta({
    title: 'Pricing | Baxio',
    description: pricingLine,
  })

  return (
    <>
      <section className="section-hero ground-paper" aria-labelledby="pricing-title">
        <div className="container-page">
          <h1 id="pricing-title" className="display-l text-center mx-auto max-w-statement">
            How pricing works.
          </h1>
          <p className="lead container-prose-centred mt-6">{pricingLine}</p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
