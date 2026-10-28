import { useEffect } from 'react'

function setMeta(attr, key, content) {
  let meta = document.head.querySelector('meta[' + attr + '="' + key + '"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

// Social images are the 1200x630 brand renders from Marketing_Assets/03_Web/og/, copied to public/og/.
// og:image needs an absolute URL.
const OG_BASE = 'https://mueez001.github.io/Baxio/og/'

// Sets document.title verbatim and keeps the description, social titles and social image in sync.
// Pages call usePageMeta({ title: 'Services | Baxio', description: '...', image: 'og-services.png' }).
// The canonical URL stays the site root: the site uses hash routes, which search engines
// treat as one page.
export default function usePageMeta({ title, description, image = 'og-home.png' } = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (title) {
      document.title = title
      setMeta('property', 'og:title', title)
      setMeta('name', 'twitter:title', title)
      setMeta('property', 'og:image:alt', title)
    }
    if (description != null) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
    setMeta('property', 'og:image', OG_BASE + image)
    setMeta('name', 'twitter:image', OG_BASE + image)
  }, [title, description, image])
}
