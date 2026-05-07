import baramiLogo from '../../TrustedClients/barami.png'
import ddcLogo from '../../TrustedClients/ddc.png'
import mwdPremierLogo from '../../TrustedClients/mwd-premier.avif'
import mwdLogo from '../../TrustedClients/mwd.avif'
import patriziaLucaLogo from '../../TrustedClients/patrizialuca.png'

export default function LogoCloud() {
  const logos = [
    { name: 'Barami', src: baramiLogo },
    { name: 'DDC', src: ddcLogo },
    { name: 'MWD Premier', src: mwdPremierLogo },
    { name: 'MWD', src: mwdLogo },
    { name: 'Patrizia Luca Milano', src: patriziaLucaLogo },
  ]
  return (
    <div className="container-x py-12">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
        Trusted by US operators across finance, ecommerce, healthcare, and SaaS
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8 items-center">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center rounded-xl border border-ink-100 bg-white/80 px-4 py-3">
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className="h-10 w-auto max-w-full object-contain sm:h-12"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
