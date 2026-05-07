import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center max-w-xl mx-auto">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 h-display">Page not found.</h1>
        <p className="mt-5 lead">The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn-accent mt-8 inline-flex">Back to home</Link>
      </div>
    </section>
  )
}
