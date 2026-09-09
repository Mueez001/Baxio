import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import CTASection from '../components/CTASection.jsx'
import FAQ from '../components/FAQ.jsx'
import { plans, plansNote, erpNote, tco, timeline } from '../content/site.js'

const planIds = plans.map((p) => p.id)
const defaultPlan = 'dedicated'

function planFromHash(hash) {
  const id = (hash || '').replace(/^#/, '')
  return planIds.includes(id) ? id : null
}

// The inner content of a plan column and of a mobile plan panel; identical in both.
function PlanBody({ plan }) {
  return (
    <>
      <h3 className="h3">{plan.name}</h3>
      <p className="text-meta mt-2 h-5">
        {plan.flag ? <span className="flag-word">{plan.flag}</span> : null}
      </p>
      <p className="numeral mt-4">{plan.price}</p>
      <p className="meta mt-2">{plan.priceNote}</p>
      <p className="body mt-4 min-h-[5.2em]">{plan.body}</p>
      <Link to={'/contact?plan=' + plan.id} className="btn-primary mt-6">
        Book a consultation
      </Link>
      <ul className="rows mt-8">
        {plan.includes.map((item) => (
          <li key={item} className="border-b border-rule py-3 body-sm">
            {item}
          </li>
        ))}
      </ul>
      <p className="caption mt-6">{plan.roles}</p>
    </>
  )
}

export default function Pricing() {
  usePageMeta({
    title: 'Pricing | Baxio',
    description:
      'Three ways to engage: Starter Support, Dedicated Resource and Managed Team. Monthly ranges, confirmed in writing before a ' +
      timeline.pilot +
      '.',
  })

  const location = useLocation()
  const navigate = useNavigate()
  const [selected, setSelected] = useState(() => planFromHash(location.hash) || defaultPlan)
  const tabRefs = useRef({})

  useEffect(() => {
    const fromHash = planFromHash(location.hash)
    if (fromHash) setSelected(fromHash)
  }, [location.hash])

  function selectPlan(id, focus) {
    setSelected(id)
    navigate({ hash: '#' + id }, { replace: true })
    if (focus && tabRefs.current[id]) tabRefs.current[id].focus()
  }

  function onTabKeyDown(e) {
    const index = planIds.indexOf(selected)
    let next = null
    if (e.key === 'ArrowRight') next = planIds[(index + 1) % planIds.length]
    if (e.key === 'ArrowLeft') next = planIds[(index - 1 + planIds.length) % planIds.length]
    if (e.key === 'Home') next = planIds[0]
    if (e.key === 'End') next = planIds[planIds.length - 1]
    if (next) {
      e.preventDefault()
      selectPlan(next, true)
    }
  }

  const [tcoLabelHead, tcoInHouseHead, tcoBaxioHead] = tco.columns

  return (
    <>
      {/* Hero and the three plans */}
      <section className="section-hero ground-paper" aria-labelledby="pricing-title">
        <div className="container-page">
          <h1 id="pricing-title" className="display-l text-center mx-auto max-w-statement">
            Three ways to engage. One standard.
          </h1>
          <p className="lead container-prose-centred mt-6">
            Ranges are monthly. Final pricing is confirmed in writing before the {timeline.pilot} starts.
          </p>

          {/* Desktop: three columns on vertical hairlines */}
          <div className="mt-24 hidden lg:grid lg:grid-cols-3 lg:divide-x lg:divide-rule">
            {plans.map((p) => (
              <div key={p.id} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <PlanBody plan={p} />
              </div>
            ))}
          </div>

          {/* Mobile: segmented control and three panels, all in the DOM */}
          <div
            role="tablist"
            aria-label="Plans"
            className="mt-16 flex border-t border-b border-rule lg:hidden"
            onKeyDown={onTabKeyDown}
          >
            {plans.map((p) => {
              const isSelected = p.id === selected
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  id={'tab-' + p.id}
                  ref={(el) => {
                    tabRefs.current[p.id] = el
                  }}
                  aria-selected={isSelected}
                  aria-controls={p.id}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectPlan(p.id, false)}
                  className={
                    isSelected
                      ? 'flex-1 h-11 text-nav text-ink font-medium border-b-2 border-ink -mb-px'
                      : 'flex-1 h-11 text-nav text-ink'
                  }
                >
                  {p.name.split(' ')[0]}
                </button>
              )
            })}
          </div>
          <div className="lg:hidden">
            {plans.map((p) => (
              <div
                key={p.id}
                id={p.id}
                role="tabpanel"
                aria-labelledby={'tab-' + p.id}
                hidden={p.id !== selected}
                className="pt-8 scroll-mt-16"
              >
                <PlanBody plan={p} />
              </div>
            ))}
          </div>

          <p className="caption text-center mt-8">{plansNote}</p>
          <p className="caption text-center mt-2">{erpNote}</p>
        </div>
      </section>

      {/* What a dedicated resource replaces */}
      <section className="ground-paper-2 section" aria-labelledby="tco-title">
        <div className="container-page">
          <h2 id="tco-title" className="h2">
            What a dedicated resource replaces.
          </h2>
          <p className="lead container-prose mt-6">
            Like-for-like total cost of one full-time role. Illustrative; we model your scenario during scoping.
          </p>
          <p className="body text-ink-2 container-prose mt-4">
            Cost matters, but cost without process discipline produces rework and turnover. The table shows the
            like-for-like cost of one full-time role; the process is what you are actually buying.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block section-air">
            <table className="table">
              <caption className="sr-only">
                Estimated first-year cost of one role, in-house versus Baxio Dedicated Resource
              </caption>
              <thead>
                <tr>
                  <th scope="col">{tcoLabelHead}</th>
                  <th scope="col" className="num">
                    {tcoInHouseHead}
                  </th>
                  <th scope="col" className="num">
                    {tcoBaxioHead}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tco.rows.map(([label, inHouse, baxio]) => (
                  <tr key={label}>
                    <th scope="row" className="text-left pt-3.5 !pb-3.5 !align-top border-b border-rule">
                      <span className="body-sm font-normal stretch-100">{label}</span>
                    </th>
                    <td className="num">{inHouse}</td>
                    <td className="num emph">{baxio}</td>
                  </tr>
                ))}
                <tr className="total">
                  <th scope="row" className="text-left border-t-2 border-ink pt-4 !pb-3.5 !align-top">
                    <span className="text-[20px] font-semibold text-ink stretch-100">{tco.total[0]}</span>
                  </th>
                  <td className="num">{tco.total[1]}</td>
                  <td className="num emph">{tco.total[2]}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-left border-b-0 pt-2 !pb-0 !align-top">
                    <span className="caption font-normal stretch-100">{tco.monthly[0]}</span>
                  </th>
                  <td className="num !border-b-0 !pt-2 !pb-0 caption">{tco.monthly[1]}</td>
                  <td className="num !border-b-0 !pt-2 !pb-0 caption">{tco.monthly[2]}</td>
                </tr>
              </tbody>
            </table>
            <p className="caption mt-6 container-prose">{tco.caption}</p>
          </div>

          {/* Mobile: stacked blocks, nothing scrolls sideways */}
          <div className="md:hidden section-air">
            {tco.rows.map(([label, inHouse, baxio]) => (
              <div key={label} className="border-b border-rule py-4">
                <p className="meta">{label}</p>
                <div className="flex justify-between body-sm mt-2">
                  <span>In-house</span>
                  <span className="tnum">{inHouse}</span>
                </div>
                <div className="flex justify-between body-sm mt-1 font-medium">
                  <span>Baxio</span>
                  <span className="tnum">{baxio}</span>
                </div>
              </div>
            ))}
            <div className="rule-strong py-4">
              <p className="meta">{tco.total[0]}</p>
              <div className="flex justify-between items-baseline mt-2">
                <span className="body-sm">In-house</span>
                <span className="text-[20px] font-semibold text-ink tnum">{tco.total[1]}</span>
              </div>
              <div className="flex justify-between items-baseline mt-1">
                <span className="body-sm font-medium">Baxio</span>
                <span className="text-[20px] font-semibold text-ink tnum">{tco.total[2]}</span>
              </div>
            </div>
            <div className="pb-4">
              <p className="caption">{tco.monthly[0]}</p>
              <div className="flex justify-between caption mt-1">
                <span>In-house</span>
                <span className="tnum">{tco.monthly[1]}</span>
              </div>
              <div className="flex justify-between caption mt-1">
                <span>Baxio</span>
                <span className="tnum">{tco.monthly[2]}</span>
              </div>
            </div>
            <p className="caption mt-6">{tco.caption}</p>
          </div>
        </div>
      </section>

      <FAQ />

      <CTASection />
    </>
  )
}
