import { Link } from 'react-router-dom'
import { homeProcess, timeline } from '../content/site.js'

// A real sequence, so the steps are numbered. On wide screens the steps sit on one line joined by
// a rule; on phones they stack with the rule running down the left.
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="ground-paper-2 section scroll-mt-16" aria-labelledby="how-it-works-title">
      <div className="container-page">
        <div className="grid-12 gap-y-6 items-end">
          <h2 id="how-it-works-title" className="h2 col-span-4 md:col-span-7">
            How it works.
          </h2>
          <p className="lead col-span-4 md:col-span-5">
            Four steps from the first call to steady state. You see the plan in writing within{" "}
            {timeline.proposal} of the call.
          </p>
        </div>

        <ol className="steps section-air list-none">
          {homeProcess.map((step, i) => (
            <li key={step.when} className="step">
              <span className="step-dot" aria-hidden="true">
                {i + 1}
              </span>
              <div className="step-body">
                <p className="meta">{step.when}</p>
                <h3 className="h3 mt-2">{step.name}</h3>
                <p className="body-sm text-ink-2 mt-3">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 md:mt-12">
          <Link to="/how-we-work" className="link-quiet">
            See the full process and what you receive at each step
          </Link>
        </p>
      </div>
    </section>
  )
}
