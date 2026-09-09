// The 24-hour coverage rule (spec 6.9): CSS only, no crimson, no glyphs. Labels sit left of
// each bar on md and up, above each bar below md. The 24-column grids use minmax(0,1fr) so the
// figure never scrolls horizontally, even at 320px. How We Work renders the definition list
// beneath this figure from site.js coverage.rows.
export default function CoverageRule() {
  return (
    <figure className="w-full" aria-label="Coverage across a 24-hour day in US Eastern time">
      <div className="space-y-4">
        <div className="grid-12 items-center">
          <p className="caption col-span-4 mb-2 md:col-span-3 md:mb-0">US business window, Eastern to Pacific</p>
          <div className="col-span-4 md:col-span-9 grid grid-cols-[repeat(24,minmax(0,1fr))] h-2">
            <div
              className="bg-ink h-2 col-start-9 col-end-[21]"
              role="img"
              aria-label="US business window, 08:00 to 20:00 Eastern"
            />
          </div>
        </div>

        <div className="grid-12 items-center">
          <p className="caption col-span-4 mb-2 md:col-span-3 md:mb-0">Baxio delivery shift</p>
          <div className="col-span-4 md:col-span-9 grid grid-cols-[repeat(24,minmax(0,1fr))] h-2">
            <div
              className="row-start-1 col-start-1 col-end-[25] grid grid-cols-[repeat(24,minmax(0,1fr))] h-2"
              role="img"
              aria-label="Overnight queue and stand-up prep, 20:00 to 08:00 Eastern"
            >
              <div className="bg-neutral-200 h-2 col-start-1 col-end-9" />
              <div className="bg-neutral-200 h-2 col-start-[21] col-end-[25]" />
            </div>
            <div
              className="row-start-1 bg-neutral-300 h-2 col-start-9 col-end-[21]"
              role="img"
              aria-label="Baxio delivery shift, 08:00 to 20:00 Eastern"
            />
          </div>
        </div>

        <div className="grid-12">
          <div className="col-span-4 md:col-span-9 md:col-start-4">
            <div className="relative h-1.5 border-t border-rule" aria-hidden="true">
              <span className="absolute left-0 top-0 h-1.5 w-px bg-ink" />
              <span className="absolute left-1/4 top-0 h-1.5 w-px bg-ink" />
              <span className="absolute left-1/2 top-0 h-1.5 w-px bg-ink" />
              <span className="absolute left-3/4 top-0 h-1.5 w-px bg-ink" />
              <span className="absolute right-0 top-0 h-1.5 w-px bg-ink" />
            </div>
            <div className="relative mt-1 h-5 meta tnum">
              <span className="absolute top-0 left-0">00</span>
              <span className="absolute top-0 left-1/4 -translate-x-1/2">06</span>
              <span className="absolute top-0 left-1/2 -translate-x-1/2">12</span>
              <span className="absolute top-0 left-3/4 -translate-x-1/2">18</span>
              <span className="absolute top-0 right-0 whitespace-nowrap">24 ET</span>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="caption mt-4">
        Coverage in US Eastern time. The delivery shift is staffed across the full US business window; the lighter span is the overnight queue and stand-up prep.
      </figcaption>
    </figure>
  )
}
