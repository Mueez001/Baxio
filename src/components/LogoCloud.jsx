import barami from '../../TrustedClients/barami.png'
import ddc from '../../TrustedClients/ddc.png'
import mwd from '../../TrustedClients/mwd.avif'
import mwdPremier from '../../TrustedClients/mwd-premier.avif'
import patrizialuca from '../../TrustedClients/patrizialuca.png'
import { clientLogos } from '../content/site.js'

const files = {
  'barami.png': barami,
  'ddc.png': ddc,
  'mwd.avif': mwd,
  'mwd-premier.avif': mwdPremier,
  'patrizialuca.png': patrizialuca,
}

// The strip is always on paper: the source logos are raster files with white grounds.
// Below sm it is a single scroll row (the row scrolls, never the page); from sm up it is
// five equal cells separated by 1px rules, with no outer border and no top or bottom rule.
export default function LogoCloud() {
  return (
    <section className="ground-paper py-12 lg:py-24" aria-labelledby="logos-title">
      <div className="container-page">
        <h2 id="logos-title" className="meta">
          Working with operators at
        </h2>

        <ul className="mt-8 -mx-6 flex overflow-x-auto px-6 snap-x snap-proximity divide-x divide-rule [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0">
          {clientLogos.map((logo) => (
            <li
              key={logo.file}
              className="group flex h-[88px] min-w-[160px] shrink-0 snap-start items-center justify-center px-4 sm:min-w-0 sm:shrink"
            >
              <img
                src={files[logo.file]}
                alt={logo.name}
                loading="lazy"
                className={
                  logo.tall
                    ? 'w-auto max-h-9 grayscale opacity-60 transition duration-150 group-hover:grayscale-0 group-hover:opacity-100'
                    : 'w-auto max-h-7 grayscale opacity-60 transition duration-150 group-hover:grayscale-0 group-hover:opacity-100'
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
