export default function SectionHeader({ eyebrow, title, body, align = 'left' }) {
  const center = align === 'center'
  return (
    <div className={center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-4 h-section`}>{title}</h2>
      {body && <p className={`mt-5 lead ${center ? 'mx-auto' : ''}`}>{body}</p>}
    </div>
  )
}
