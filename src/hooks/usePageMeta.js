import { useEffect } from 'react'

// Sets document.title verbatim and keeps <meta name="description"> in sync.
// Pages call usePageMeta({ title: 'Pricing | Baxio', description: '...' }).
export default function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (title) document.title = title
    if (description != null) {
      let meta = document.head.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
