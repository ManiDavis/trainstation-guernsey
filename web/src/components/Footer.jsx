import { useEffect, useState } from 'react'
import { client } from '../sanity/client'
import { SITE_SETTINGS_QUERY } from '../sanity/queries'
import { urlFor } from '../sanity/imageUrl'

const NAV_LINKS = [
  { href: '#why-us', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

const QUICK_LINKS = [
  { href: '#pricing', label: 'Gym Starter Package' },
  { href: '#pricing', label: 'Block PT Sessions' },
  { href: '#pricing', label: 'Monthly Membership' },
  { href: '#pricing', label: 'Annual Membership' },
  { href: '#contact', label: 'Free Trial' },
]

export default function Footer({ onOpenTerms }) {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    client.fetch(SITE_SETTINGS_QUERY).then(setSettings).catch(() => {})
  }, [])

  const s = settings || {}
  // Prefer the Sanity-managed logo; fall back to the baked-in asset.
  const logoUrl    = s.navLogo ? urlFor(s.navLogo).width(76).url() : '/logo.png'
  const brandName  = s.navBrandName      || 'TrainStation'
  const tagline    = s.navTagline        || 'Strength · Fitness · Results'
  const desc       = s.footerDescription || "Guernsey's premier gym. No contracts, premium equipment, expert trainers."
  const phone      = s.phone             || '01481 726684'
  const facebook   = s.socialFacebook   || 'https://www.facebook.com/TrainStationFitnessGuernsey/'
  const instagram  = s.socialInstagram  || 'https://www.instagram.com/trainstationgsy/'
  const addr       = s.address || {}
  const addrLine   = [addr.line1, addr.line2].filter(Boolean).join(', ')
  const addrCity   = [addr.city, addr.postcode].filter(Boolean).join(', ')

  const handleNav = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid var(--dark-border)', paddingTop: 72, paddingBottom: 32 }}>
      <div className="container">
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                {logoUrl
                  ? <img src={logoUrl} alt={brandName} style={{ width: 38, height: 38, objectFit: 'contain' }} />
                  : <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#111' }}>TS</span>
                }
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--white)', textTransform: 'uppercase' }}>{brandName}</div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.16em', color: 'var(--muted)', textTransform: 'uppercase' }}>{tagline}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
              {desc}
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <SocialLink href={facebook} label="Facebook"><FacebookIcon /></SocialLink>
              <SocialLink href={instagram} label="Instagram"><InstagramIcon /></SocialLink>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20 }}>Navigate</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <button onClick={() => handleNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: '0.9rem', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20 }}>Memberships</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUICK_LINKS.map(l => (
                <li key={l.label}>
                  <button onClick={() => handleNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: '0.9rem', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 20 }}>Find Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: 'var(--muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                📞 {phone}
              </a>
              {(addrLine || addrCity) && (
                <a href="https://maps.google.com/?q=The+Guernsey+Tennis+Club+Longcamps+St+Sampsons+GY2+4UQ" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--muted)', fontSize: '0.9rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                  📍 {addrLine && <>{addrLine}<br /></>}{addrCity}
                </a>
              )}
              <a href="https://www.thetrainstation.co.gg" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--muted)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                🌐 thetrainstation.co.gg
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>
            © {new Date().getFullYear()} TrainStation Guernsey. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="#terms" onClick={onOpenTerms} style={{ fontSize: '0.8rem', color: 'var(--muted)', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
              Terms &amp; Conditions
            </a>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>Strength · Fitness · Results</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
      width: 36, height: 36, borderRadius: 'var(--radius-sm)',
      background: 'var(--dark-mid)', border: '1px solid var(--dark-border)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--muted)', transition: 'all 0.2s', textDecoration: 'none',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.color = 'var(--muted)' }}>
      {children}
    </a>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}
