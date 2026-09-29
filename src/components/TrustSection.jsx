import { Link } from 'react-router-dom'
import { trustPoints } from '../content/site.js'

// Trust from facts only: security and process lines that are already confirmed.
// No badges, certifications, counts or testimonials. The client logos sit under the hero.
export default function TrustSection() {
  return (
    <section className="ground-paper section" aria-labelledby="trust-title">
      <div className="container-page">
        <h2 id="trust-title" className="h2 md:max-w-[66%]">
          What you can hold us to.
        </h2>
        <p className="lead container-prose mt-6">
          How your data is protected and how the work is run, stated plainly. Ask us about any line on the
          scoping call.
        </p>

        <ul className="section-air grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <li key={point.name} className="border-t-2 border-ink pt-6">
              <h3 className="text-question text-ink">{point.name}</h3>
              <p className="body-sm text-ink-2 mt-3">{point.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 md:mt-12">
          <Link to="/how-we-work" className="link-quiet">
            Read how we work
          </Link>
        </p>
      </div>
    </section>
  )
}
