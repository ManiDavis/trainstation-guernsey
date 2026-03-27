import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import GymShowcase from './components/GymShowcase'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TermsAndConditions from './components/TermsAndConditions'

export default function App() {
  const [showTerms, setShowTerms] = useState(false)

  // Allow hash-based navigation to terms
  useEffect(() => {
    const checkHash = () => setShowTerms(window.location.hash === '#terms')
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  const openTerms = (e) => {
    e.preventDefault()
    window.location.hash = '#terms'
    setShowTerms(true)
  }

  const closeTerms = () => {
    window.location.hash = ''
    setShowTerms(false)
    window.scrollTo(0, 0)
  }

  if (showTerms) {
    return <TermsAndConditions onClose={closeTerms} />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <GymShowcase />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer onOpenTerms={openTerms} />
    </>
  )
}
