import { useState } from 'react'
import { faqItems } from '../content/site.js'

// A 16px plus made of two 1px ink strokes. The vertical stroke turns 90deg when open,
// so the plus reads as a minus. This is a control, not an icon.
function Plus({ open }) {
  return (
    <span className="relative block h-4 w-4 shrink-0" aria-hidden="true">
      <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink" />
      <span
        className={
          open
            ? 'absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink transition-transform duration-240 rotate-90'
            : 'absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink transition-transform duration-240'
        }
      />
    </span>
  )
}

export default function FAQ({ items = faqItems, title = 'Questions operators ask.', id = 'faq', ground = 'ground-paper' }) {
  const [openIndex, setOpenIndex] = useState(0)
  const titleId = `${id}-title`

  return (
    <section className={ground + ' section scroll-mt-16'} id={id} aria-labelledby={titleId}>
      <div className="container-page">
        <h2 className="h2" id={titleId}>
          {title}
        </h2>

        <div className="section-air container-prose">
          <div className="rows">
            {items.map((item, index) => {
              const open = openIndex === index
              const buttonId = `${id}-q${index}`
              const panelId = `${id}-a${index}`
              return (
                <div key={buttonId} className="border-b border-rule">
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-question"
                    >
                      <span>{item.q}</span>
                      <Plus open={open} />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={
                      open
                        ? 'grid transition-[grid-template-rows] duration-240 ease-out grid-rows-[1fr]'
                        : 'grid transition-[grid-template-rows] duration-240 ease-out grid-rows-[0fr]'
                    }
                  >
                    <div className="overflow-hidden" aria-hidden={open ? undefined : 'true'}>
                      <p className="body text-ink-2 pb-6">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
