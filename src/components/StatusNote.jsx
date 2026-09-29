// The hero visual: a schematic of the weekly written status every engagement receives.
// It is an illustration, not a real report, so it carries no numbers, names or dates.
// Grey bars stand in for text. The visible caption below it says what the real note covers.
const sections = [
  { label: 'Throughput', bars: ['w-[82%]', 'w-[64%]'] },
  { label: 'KPIs', bars: ['w-[74%]', 'w-[88%]', 'w-[52%]'] },
  { label: 'Exceptions', bars: ['w-[70%]'], flag: true },
  { label: 'Next week’s plan', bars: ['w-[86%]', 'w-[60%]'] },
]

export default function StatusNote() {
  let bar = 0
  return (
    <figure className="status-note">
      <div className="status-note-sheet" aria-hidden="true">
        <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-4">
          <p className="text-[18px] font-semibold tracking-[-0.01em] text-ink">Weekly status</p>
          <p className="text-meta stretch-110 text-ink-2">Sent every week</p>
        </div>
        <div className="divide-y divide-rule">
          {sections.map((s) => (
            <div key={s.label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]">
              <p className={s.flag ? 'text-caption font-medium text-crimson' : 'text-caption font-medium text-ink'}>
                {s.label}
              </p>
              <div className="flex flex-col gap-2 pt-1.5">
                {s.bars.map((w) => {
                  bar += 1
                  return (
                    <span
                      key={w + bar}
                      className={'status-bar ' + w + (s.flag ? ' bg-crimson-200' : ' bg-neutral-200')}
                      style={{ animationDelay: 520 + bar * 70 + 'ms' }}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-rule pt-4">
          <span className="h-7 w-7 shrink-0 rounded-full bg-ink" />
          <span className="flex flex-col gap-1.5">
            <span className="block h-2 w-24 rounded-full bg-neutral-200" />
            <span className="block h-2 w-16 rounded-full bg-neutral-100" />
          </span>
          <span className="ml-auto text-meta stretch-110 text-ink-2">Your named lead</span>
        </div>
      </div>
      <figcaption className="caption mt-4 max-w-[34rem]">
        Illustration. Every engagement includes a written weekly status: throughput, KPIs, exceptions and next
        week’s plan.
      </figcaption>
    </figure>
  )
}
