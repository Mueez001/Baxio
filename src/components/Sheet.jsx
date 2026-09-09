// The weekly status report specimen (spec 6.7). Content is fixed and illustrative; the page
// renders the "Illustrative figures..." caption beneath the sheet itself.
const wordmark = import.meta.env.BASE_URL + 'wordmark.png'

const kpis = [
  ['DSO', '41 days', 'down 12 on Q1'],
  ['Invoices closed', '214', 'aged over 60: 0'],
  ['Month-end close', 'Day 4', 'on schedule'],
]

const done = [
  'Reconciled three bank accounts through 26 April',
  'Moved the AP approval SOP to version 3 in Notion',
]

const next = [
  'Begin close, day 1 on 1 May',
  'Second analyst cross-trained on the reporting pack',
]

function Lines({ head, lines }) {
  return (
    <>
      <p className="sheet-head">{head}</p>
      {lines.map((line) => (
        <p key={line} className="sheet-line mt-1">
          {line}
        </p>
      ))}
    </>
  )
}

export default function Sheet({ size = 'md' }) {
  return (
    <article className={size === 'sm' ? 'sheet max-w-sheet-sm text-left' : 'sheet text-left'} aria-label="Weekly status report, illustrative">
      <div className="flex items-center justify-between gap-6">
        <p className="sheet-meta">Weekly status, week 17</p>
        <img src={wordmark} alt="Baxio" width="840" height="280" className="h-[18px] w-auto" />
      </div>
      <p className="sheet-meta mt-3">Finance &amp; Accounting</p>
      <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:justify-between">
        <p className="sheet-meta mt-0">Team lead: Priya N.</p>
        <p className="sheet-meta mt-0">Sent Monday 08:00 ET</p>
      </div>

      <hr className="rule my-5" />

      <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-4 items-baseline">
        {kpis.map(([label, value, note]) => (
          <div key={label} className="contents">
            <span className="body-sm text-ink-2">{label}</span>
            <span className="sheet-kpi text-right">{value}</span>
            <span className="caption sm:text-right hidden sm:block">{note}</span>
          </div>
        ))}
      </div>

      <hr className="rule my-5" />

      <div className="hidden sm:block">
        <Lines head="Done this week" lines={done} />
      </div>

      <p className="sheet-head">Exceptions</p>
      <div className="flag py-2">
        <p className="sheet-line">Vendor data error on one PO, resolved Thursday</p>
      </div>

      <div className="hidden sm:block">
        <Lines head="Next week" lines={next} />
      </div>

      <details className="group sm:hidden">
        <summary className="flex items-center justify-between sheet-head cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <span>Read the full note</span>
          <span className="relative block h-4 w-4 shrink-0" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink" />
            <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink transition-transform duration-240 group-open:rotate-90" />
          </span>
        </summary>
        <Lines head="Done this week" lines={done} />
        <Lines head="Next week" lines={next} />
      </details>

      <p className="sheet-sign">Priya N.</p>
    </article>
  )
}
