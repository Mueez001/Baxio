export default function LogoCloud() {
  const logos = ['NORTHWIND', 'CEDARWORKS', 'HARBOR&CO', 'ATLASLINE', 'KESTREL', 'BLUERIDGE']
  return (
    <div className="container-x py-12">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
        Trusted by US operators across finance, ecommerce, healthcare, and SaaS
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
        {logos.map((name) => (
          <div key={name} className="text-center font-display font-bold tracking-wider text-ink-300 text-sm select-none">
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
