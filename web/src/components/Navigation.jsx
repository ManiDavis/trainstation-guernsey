import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',        id: 'home' },
  { label: 'Yoga',        id: 'yoga' },
  { label: '30 Day Program', id: 'program' },
  { label: 'Resources',   id: 'resources' },
]

export default function Navigation({ siteSettings }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map((l) => l.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const siteName = siteSettings?.siteName || 'Soothing Solutions'

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(250,247,242,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 clamp(20px, 5vw, 60px)',
      }}
    >
      <nav style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scrolled ? '68px' : '80px',
        transition: 'height 0.3s ease',
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{
            background: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          aria-label="Soothing Solutions - Home"
        >
          <LogoMark />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--charcoal)',
            lineHeight: 1.1,
          }}>
            {siteName.split(' ')[0]}<br />
            <span style={{ color: 'var(--teal)', fontSize: '0.95rem', fontWeight: 400, fontStyle: 'italic' }}>
              {siteName.split(' ').slice(1).join(' ')}
            </span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          listStyle: 'none',
        }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none',
                  padding: '8px 14px',
                  fontSize: '0.9rem',
                  fontWeight: activeSection === link.id ? 600 : 400,
                  color: activeSection === link.id ? 'var(--teal)' : 'var(--charcoal-mid)',
                  borderRadius: '50px',
                  transition: 'all 0.2s',
                  position: 'relative',
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '2px',
                    background: 'var(--teal)',
                    borderRadius: '1px',
                  }} />
                )}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('contact')}
              className="btn btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.875rem' }}
            >
              Book a Call
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              width: '24px',
              height: '2px',
              background: 'var(--charcoal)',
              borderRadius: '1px',
              display: 'block',
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--cream)',
          borderTop: '1px solid var(--cream-dark)',
          padding: '16px clamp(20px, 5vw, 60px)',
        }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: activeSection === link.id ? 600 : 400,
                color: activeSection === link.id ? 'var(--teal)' : 'var(--charcoal)',
                borderBottom: '1px solid var(--cream-dark)',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="btn btn-primary"
            style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
          >
            Book a Call
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="var(--teal-pale)" />
      {/* Leaf shape */}
      <path d="M18 6 C24 10 28 16 22 26 C18 28 12 24 10 18 C8 12 12 8 18 6Z"
        fill="var(--teal)" opacity="0.25" />
      <path d="M18 8 C23 12 26 17 20 25 C17 22 13 18 14 12 C15 9 17 8 18 8Z"
        fill="var(--teal)" opacity="0.6" />
      {/* Stem */}
      <line x1="18" y1="26" x2="18" y2="30" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
