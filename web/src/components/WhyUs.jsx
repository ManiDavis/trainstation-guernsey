import { useEffect, useRef } from 'react'

const FEATURES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 10v12l12 6 12-6V10L16 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 4v18M4 10l12 6 12-6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'No Contracts',
    desc: 'Train on your terms. No lock-ins, no hidden fees. Join, train, and leave whenever you like — total freedom.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Qualified PTs',
    desc: 'Our expert personal trainers build bespoke programmes tailored to your goals — whether strength, fat loss, or general fitness.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="8" width="26" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 14h26M10 8v16M22 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="3" r="2" fill="currentColor"/>
        <path d="M16 5v3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Indoor & Outdoor',
    desc: 'A fully equipped indoor gym plus outdoor training space — perfect for any workout style, any season, any weather.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7l3-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Unbeatable Prices',
    desc: 'Get access to premium Rogue equipment and expert coaching at prices that won\'t break the bank. The best value gym in Guernsey.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="14" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 14V10a6 6 0 1 1 12 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="21" r="2" fill="currentColor"/>
        <path d="M11 28h10M8 20h2M22 20h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'New Changing Rooms',
    desc: 'Brand-new, fully refurbished changing rooms and showers — everything you need for a seamless workout experience.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="22" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 26c0-3.866 3.134-7 7-7h12c3.866 0 7 3.134 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 10v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Great Community',
    desc: 'Join a supportive, motivating community of like-minded people. We\'re more than a gym — we\'re a fitness family.',
  },
]

function FeatureCard({ icon, title, desc, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`card reveal reveal-delay-${(index % 3) + 1}`} style={{ padding: '36px 32px' }}>
      <div style={{ color: 'var(--red)', marginBottom: 20 }}>{icon}</div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, letterSpacing: '0.04em' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--muted-light)' }}>{desc}</p>
    </div>
  )
}

export default function WhyUs() {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="why-us" className="section section--dark">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow">Why Train With Us</span>
          <h2 style={{ color: 'var(--white)' }}>Everything You Need.<br />Nothing You Don't.</h2>
          <div className="red-line red-line--center" />
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            TrainStation is built for serious training. We strip away the gimmicks and deliver what actually works — quality kit, expert coaches, and a no-nonsense environment.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid-3">
          {FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} index={i} />)}
        </div>

        {/* Free trial banner */}
        <div style={{
          marginTop: 64, padding: '40px 48px', borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
          boxShadow: 'var(--shadow-red)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 8 }}>No Commitment</div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--white)', fontWeight: 700 }}>CLAIM YOUR FREE TRIAL</h3>
          </div>
          <button
            className="btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'var(--white)', color: 'var(--red)', fontWeight: 700, whiteSpace: 'nowrap' }}
          >
            Claim Your Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}
