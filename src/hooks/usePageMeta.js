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

// Sets document.title verbatim and keeps the description and social titles in sync.
// Pages call usePageMeta({ title: 'Pricing | Baxio', description: '...' }).
// The canonical URL stays the site root: the site uses hash routes, which search engines
// treat as one page.
export default function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (title) {
      document.title = title
      setMeta('property', 'og:title', title)
      setMeta('name', 'twitter:title', title)
    }
    if (description != null) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
  }, [title, description])
}
