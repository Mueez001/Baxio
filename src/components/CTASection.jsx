import { Link } from 'react-router-dom'
import { timeline, ctaLabel } from '../content/site.js'

const DEFAULT_TITLE = 'Get a written proposal in ' + timeline.proposal + '.'
const DEFAULT_BODY = 'Tell us your workflows and KPIs. We reply within ' + timeline.reply + '.'

// The black CTA band (spec 6.3). Extra bottom padding on mobile keeps the chat pill off the link.
export default function CTASection({ title = DEFAULT_TITLE, body = DEFAULT_BODY }) {
  return (
    <section className="ground-black section-cta pb-[168px] lg:pb-40" aria-labelledby="cta-title">
      <div className="container-statement text-center">
        <h2 id="cta-title" className="display-l text-paper">
          {title}
        </h2>
        <p className="lead mt-6">{body}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Link to="/contact" className="btn-crimson">
            {ctaLabel}
          </Link>
          <Link to="/contact?intent=proposal" className="link-quiet">
            Request a proposal
          </Link>
        </div>
      </div>
    </section>
  )
}
