import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import HowWeWork from './pages/HowWeWork.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function App() {
  const location = useLocation()
  // The location the page tree renders. It lags the router by one view transition on page changes.
  const [displayed, setDisplayed] = useState(location)
  // True once the visitor has navigated at least once: only then does <main> get its enter animation.
  const navigated = useRef(false)

  useEffect(() => {
    if (location === displayed) return
    const pageChanged = location.pathname !== displayed.pathname
    if (pageChanged) navigated.current = true
    const canTransition =
      pageChanged && typeof document.startViewTransition === 'function' && !prefersReducedMotion()
    if (!canTransition) {
      setDisplayed(location)
      return
    }
    document.startViewTransition(() => {
      flushSync(() => setDisplayed(location))
    })
  }, [location, displayed])

  return (
    <Routes location={displayed}>
      <Route element={<Layout enter={navigated.current} />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
