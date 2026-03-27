import { useState, useEffect } from 'react'

const links = [
  { href: '#why-us',  label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.35s ease',
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <img src="/logo.png" alt="TrainStation" style={{ width: 40, height: 40, objectFit: 'contain' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--white)', textTransform: 'uppercase', lineHeight: 1 }}>TrainStation</div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase', marginTop: 3 }}>Strength · Fitness · Results</div>
          </div>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
          {links.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)} style={{
              background: 'none', border: 'none', color: 'var(--muted-light)', fontSize: '0.85rem',
              fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-light)'}
            >
              {l.label}
            </button>
          ))}
          <button className="btn btn-red" onClick={() => handleNav('#contact')} style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
            Free Trial
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-burger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2, background: 'var(--white)',
              transition: 'all 0.3s',
              transform: open && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                         open && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#111', borderTop: '1px solid #222', padding: '20px 0',
        }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(l => (
              <button key={l.href} onClick={() => handleNav(l.href)} style={{
                background: 'none', border: 'none', color: 'var(--off-white)', fontSize: '1rem',
                fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer', padding: '12px 0', textAlign: 'left',
                borderBottom: '1px solid #222',
              }}>
                {l.label}
              </button>
            ))}
            <button className="btn btn-red" onClick={() => handleNav('#contact')} style={{ marginTop: 16, alignSelf: 'flex-start' }}>
              Free Trial
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

