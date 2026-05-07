import { useState } from 'react'

export default function FAQ({ items, title = 'Frequently asked questions', eyebrow = 'FAQ' }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 h-section">{title}</h2>
          <p className="mt-5 lead">
            Straight answers to what CFOs, COOs, and operators usually ask before engaging us.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
            {items.map((it, i) => {
              const isOpen = open === i
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-ink-900">{it.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-200 text-ink-600 transition-transform ${isOpen ? 'rotate-45 bg-ink-900 text-white border-ink-900' : ''}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 -mt-2 text-ink-500 leading-relaxed">{it.a}</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
