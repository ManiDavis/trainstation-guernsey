import { useEffect, useRef, useState } from 'react'
import { client } from '../sanity/client'
import { SITE_SETTINGS_QUERY } from '../sanity/queries'
import { urlFor } from '../sanity/imageUrl'

const FALLBACK_STATS = [
  { value: 100, suffix: '%', label: 'No Contracts' },
  { value: 5,   suffix: '★', label: 'Google Rating' },
  { value: 45,  suffix: 'min', label: 'PT Sessions' },
]

function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return count
}

function StatItem({ value, suffix, label, started, delay = 0 }) {
  const count = useCounter(value, 1600 + delay, started)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>{label}</div>
    </div>
  )
}

export default function Hero() {
  const [settings, setSettings] = useState(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    client.fetch(SITE_SETTINGS_QUERY).then(setSettings).catch(() => {})
    const timer = setTimeout(() => setStatsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const s = settings || {}
  const eyebrow  = s.heroEyebrow || "Guernsey's Premier Gym"
  const line1    = s.heroLine1   || 'UNLEASH'
  const line2    = s.heroLine2   || 'YOUR'
  const line3    = s.heroLine3   || 'POWER'
  const tagline  = s.heroTagline || "No contracts. No fluff. Just world-class equipment, expert personal trainers, and a community that pushes you to be your best — right here in Guernsey."
  const cta1     = s.heroCta1   || 'Book Free Trial'
  const cta2     = s.heroCta2   || 'View Pricing'
  const stats    = s.heroStats?.length ? s.heroStats : FALLBACK_STATS

  // Use uploaded Sanity image if available, otherwise fall back to local file
  const bgImage = s.heroImage ? urlFor(s.heroImage).width(1920).url() : '/gym-hero.jpg'

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToPricing = () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', background: 'var(--black)' }}>
      {/* Gym background photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.62)' }} />

      {/* Red brand tint */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(227,30,36,0.12) 0%, transparent 60%)' }} />

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(transparent, var(--black))', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 120, paddingBottom: 140 }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 32, height: 2, background: 'var(--red)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red)' }}>
            {eyebrow}
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 0.92, marginBottom: 0 }}>
          <span style={{ display: 'block', color: 'var(--white)', animation: 'slideUp 0.8s ease both' }}>{line1}</span>
          <span style={{ display: 'block', color: 'var(--red)', WebkitTextStroke: '2px var(--red)', WebkitTextFillColor: 'transparent', animation: 'slideUp 0.8s ease 0.15s both', textShadow: '0 0 12px rgba(227,30,36,0.45), 0 0 28px rgba(227,30,36,0.18)' }}>{line2}</span>
          <span style={{ display: 'block', color: 'var(--white)', animation: 'slideUp 0.8s ease 0.3s both' }}>{line3}</span>
        </h1>

        {/* Tagline */}
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--muted-light)', maxWidth: 520, lineHeight: 1.7, marginTop: 28, animation: 'fadeIn 1s ease 0.6s both' }}>
          {tagline}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 40, animation: 'fadeIn 1s ease 0.8s both' }}>
          <button className="btn btn-red" onClick={scrollToContact} style={{ fontSize: '0.9rem' }}>
            {cta1}
          </button>
          <button className="btn btn-outline" onClick={scrollToPricing} style={{ fontSize: '0.9rem' }}>
            {cta2}
          </button>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} style={{
          display: 'flex', gap: 'clamp(24px, 5vw, 60px)', flexWrap: 'wrap',
          marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--dark-border)',
          animation: 'fadeIn 1s ease 1s both',
        }}>
          {stats.map((s, i) => (
            <StatItem key={s._key || s.label} value={s.value} suffix={s.suffix} label={s.label} started={statsVisible} delay={i * 200} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'bounce 2s ease infinite 2s' }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="#444" strokeWidth="1.5"/>
          <rect x="6.5" y="5" width="3" height="6" rx="1.5" fill="#E31E24">
            <animate attributeName="y" values="5;11;5" dur="1.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  )
}
