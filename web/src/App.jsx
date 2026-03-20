import { useState, useEffect } from 'react'
import { client } from './sanity/client'
import {
  SITE_SETTINGS_QUERY,
  HOMEPAGE_QUERY,
  YOGA_PAGE_QUERY,
  PROGRAM_PAGE_QUERY,
  RESOURCES_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
} from './sanity/queries'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Yoga from './components/sections/Yoga'
import Program from './components/sections/Program'
import Resources from './components/sections/Resources'
import Testimonials from './components/sections/Testimonials'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

async function fetchAll() {
  const [siteSettings, homepage, yogaPage, programPage, resourcesPage, contactPage] =
    await Promise.all([
      client.fetch(SITE_SETTINGS_QUERY).catch(() => null),
      client.fetch(HOMEPAGE_QUERY).catch(() => null),
      client.fetch(YOGA_PAGE_QUERY).catch(() => null),
      client.fetch(PROGRAM_PAGE_QUERY).catch(() => null),
      client.fetch(RESOURCES_PAGE_QUERY).catch(() => null),
      client.fetch(CONTACT_PAGE_QUERY).catch(() => null),
    ])
  return { siteSettings, homepage, yogaPage, programPage, resourcesPage, contactPage }
}

export default function App() {
  const [data, setData] = useState({
    siteSettings: null,
    homepage: null,
    yogaPage: null,
    programPage: null,
    resourcesPage: null,
    contactPage: null,
  })

  useEffect(() => {
    fetchAll().then(setData)
  }, [])

  const bookCall = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navigation siteSettings={data.siteSettings} />

      <main>
        <Hero
          data={data.homepage}
          siteSettings={data.siteSettings}
          onBookCall={bookCall}
        />

        <Services data={data.homepage} />

        <Yoga data={data.yogaPage} onBookCall={bookCall} />

        <Program data={data.programPage} onBookCall={bookCall} />

        <Testimonials data={data.homepage} />

        <About data={data.homepage} onBookCall={bookCall} />

        <Resources data={data.resourcesPage} onBookCall={bookCall} />

        <Contact data={data.contactPage} siteSettings={data.siteSettings} />
      </main>

      <Footer siteSettings={data.siteSettings} />
    </>
  )
}
