import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found | Baxio',
    description: 'There is nothing posted at this address. Go to the Baxio home page, services or contact.',
  })

  return (
    <section className="ground-paper flex min-h-[60vh] items-center">
      <div className="container-statement text-center">
        <h1 className="display-l">There is nothing posted at this address.</h1>
        <div className="mt-8 flex justify-center gap-8">
          <Link to="/" className="link-quiet">
            Home
          </Link>
          <Link to="/services" className="link-quiet">
            Services
          </Link>
          <Link to="/contact" className="link-quiet">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
