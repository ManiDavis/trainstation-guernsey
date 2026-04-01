import { useState, useEffect } from 'react'
import { VisualEditing } from '@sanity/visual-editing/react'
import { client } from './sanity/client'
import { SITE_SETTINGS_QUERY } from './sanity/queries'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import GymShowcase from './components/GymShowcase'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TermsAndConditions from './components/TermsAndConditions'
import AnnouncementBanner from './components/AnnouncementBanner'
import CustomSection from './components/CustomSection'

const inPresentation = typeof window !== 'undefined' && window.parent !== window

// Default all sections to visible when settings haven't loaded yet
const defaultVisibility = {
  showWhyUs: true,
  showGymShowcase: true,
  showPricing: true,
  showReviews: true,
  showContact: true,
}

export default function App() {
  const [showTerms, setShowTerms] = useState(false)
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    client.fetch(SITE_SETTINGS_QUERY).then(setSettings).catch(() => {})
  }, [])

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

  const vis = settings ?? defaultVisibility

  return (
    <>
      {settings?.announcementEnabled && <AnnouncementBanner settings={settings} />}
      <Navbar />
      <main>
        <Hero />
        {vis.showWhyUs !== false && <WhyUs />}
        {vis.showGymShowcase !== false && <GymShowcase />}
        {vis.showPricing !== false && <Pricing />}
        {vis.showReviews !== false && <Reviews />}
        {settings?.customSectionEnabled && <CustomSection settings={settings} />}
        {vis.showContact !== false && <Contact />}
      </main>
      <Footer onOpenTerms={openTerms} />
      {inPresentation && <VisualEditing />}
    </>
  )
}

