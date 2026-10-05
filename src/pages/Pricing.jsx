import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import CTASection from '../components/CTASection.jsx'
import { practices, pricing, pricingSource } from '../content/site.js'

// One tab per service. Tab order and names come from practices; prices from pricing.
const tabs = practices
  .map((p) => ({ ...p, price: pricing.find((x) => x.id === p.id) }))
  .filter((t) => t.price)
const tabIds = tabs.map((t) => t.id)

function tabFromHash(hash) {
  const id = (hash || '').replace(/^#/, '')
  return tabIds.includes(id) ? id : null
}

function PricePanel({ tab }) {
  const { price } = tab
  return (
    <>
      <h2 className="h3">{tab.name}</h2>
      <p className="meta mt-2">{price.model}</p>
      <p className="body text-ink-2 container-prose mt-4">{price.intro}</p>
      {price.rows.length > 0 && (
        <ul className="rows mt-8">
          {price.rows.map((row) => (
            <li
              key={row.item}
              className="border-b border-rule py-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >
              <div className="min-w-0 sm:max-w-[38rem]">
                <p className="body font-medium text-ink">{row.item}</p>
                {row.desc && <p className="body-sm text-ink-2 mt-1">{row.desc}</p>}
                {row.covers && (
                  <ul className="mt-2 flex flex-col gap-1 list-disc pl-5 body-sm text-ink-2">
                    {row.covers.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="shrink-0 sm:text-right">
                <span className="body font-medium text-ink tnum">{row.price}</span>
                {row.unit && (
                  <>
                    {' '}
                    <span className="caption">{row.unit}</span>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
      {price.rows.length === 0 && tab.covers && (
        <>
          <p className="meta mt-8">What an implementation covers</p>
          <ul className="rows mt-4">
            {tab.covers.map((c) => (
              <li key={c} className="border-b border-rule py-3 body-sm">
                {c}
              </li>
            ))}
          </ul>
        </>
      )}
      {price.notes.length > 0 && (
        <ul className="mt-6 flex flex-col gap-1">
          {price.notes.map((note) => (
            <li key={note} className="caption">
              {note}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Link to={'/contact?service=' + tab.id} className="btn-primary">
          Get a custom quote
        </Link>
        <span className="caption">Final prices depend on your volumes and are confirmed in writing.</span>
      </div>
    </>
  )
}

export default function Pricing() {
  usePageMeta({
    title: 'Pricing | Baxio',
    description:
      'Starting prices by service: monthly roles in finance, support and operations, fixed-price analytics builds and analysts, and ERP projects by quote.',
  })

  const location = useLocation()
  const navigate = useNavigate()
  const [selected, setSelected] = useState(() => tabFromHash(location.hash) || tabIds[0])
  const tabRefs = useRef({})

  useEffect(() => {
    const fromHash = tabFromHash(location.hash)
    if (fromHash) setSelected(fromHash)
  }, [location.hash])

  function selectTab(id, focus) {
    setSelected(id)
    navigate({ hash: '#' + id }, { replace: true })
    if (focus && tabRefs.current[id]) tabRefs.current[id].focus()
  }

  function onTabKeyDown(e) {
    const index = tabIds.indexOf(selected)
    let next = null
    if (e.key === 'ArrowRight') next = tabIds[(index + 1) % tabIds.length]
    if (e.key === 'ArrowLeft') next = tabIds[(index - 1 + tabIds.length) % tabIds.length]
    if (e.key === 'Home') next = tabIds[0]
    if (e.key === 'End') next = tabIds[tabIds.length - 1]
    if (next) {
      e.preventDefault()
      selectTab(next, true)
    }
  }

  return (
    <>
      <section className="section-hero ground-paper" aria-labelledby="pricing-title">
        <div className="container-page">
          <h1 id="pricing-title" className="display-l text-center mx-auto max-w-statement">
            Starting prices, by service.
          </h1>
          <p className="lead container-prose-centred mt-6">
            Starting prices for every role and project. Monthly prices cover the person and everything around
            them: employment, office, equipment, supervision and replacement. Every client gets a custom quote.
          </p>

          <div
            role="tablist"
            aria-label="Services"
            className="mt-16 -mx-6 px-6 flex overflow-x-auto border-b border-rule [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
            onKeyDown={onTabKeyDown}
          >
            {tabs.map((t) => {
              const isSelected = t.id === selected
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={'tab-' + t.id}
                  ref={(el) => {
                    tabRefs.current[t.id] = el
                  }}
                  aria-selected={isSelected}
                  aria-controls={'panel-' + t.id}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => selectTab(t.id, false)}
                  className={
                    isSelected
                      ? 'shrink-0 whitespace-nowrap h-11 px-4 first:pl-0 text-nav text-ink font-medium border-b-2 border-ink -mb-px'
                      : 'shrink-0 whitespace-nowrap h-11 px-4 first:pl-0 text-nav text-ink-2 hover:text-ink'
                  }
                >
                  {t.name}
                </button>
              )
            })}
          </div>

          {tabs.map((t) => (
            <div
              key={t.id}
              id={'panel-' + t.id}
              role="tabpanel"
              aria-labelledby={'tab-' + t.id}
              tabIndex={0}
              hidden={t.id !== selected}
              className="pt-10"
            >
              <PricePanel tab={t} />
            </div>
          ))}

          <p className="caption mt-12 container-prose">{pricingSource}</p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
