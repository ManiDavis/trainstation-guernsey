import { useEffect, useRef } from 'react'

const PLANS = [
  {
    name: 'Gym Starter',
    price: '£100',
    period: 'one-time',
    badge: 'Best for Beginners',
    highlight: false,
    features: [
      '2 Personal Training Sessions',
      'Understand your routine',
      '6-week customised plan',
      'Goal-setting consultation',
      'Form & technique coaching',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Block Offer',
    price: '£150',
    period: '4 sessions',
    badge: 'Most Popular',
    highlight: true,
    features: [
      '4 Personal Training Sessions',
      '45 minutes per session',
      'Personalised workout plan',
      'Progress tracking',
      'Flexible scheduling',
    ],
    cta: 'Book Block Sessions',
  },
  {
    name: '3 Month Membership',
    price: '£130',
    period: '3 months',
    badge: 'Great Value',
    highlight: false,
    features: [
      'Full gym access',
      'All equipment included',
      'Indoor & outdoor areas',
      'Changing rooms & showers',
      'No contract commitment',
    ],
    cta: 'Start 3 Months',
  },
  {
    name: 'Annual Membership',
    price: '£450',
    period: 'per year',
    badge: 'Best Savings',
    highlight: false,
    features: [
      'Full year gym access',
      'Save vs monthly billing',
      'All equipment included',
      'Indoor & outdoor areas',
      'Priority booking',
    ],
    cta: 'Go Annual',
  },
  {
    name: 'Couples Membership',
    price: '£84',
    period: 'per month',
    badge: 'Joint Standing Order',
    highlight: false,
    features: [
      '2 members on one plan',
      'Joint standing order',
      'Full gym access for both',
      'All areas included',
      'Train together & save',
    ],
    cta: 'Join Together',
  },
  {
    name: 'Corporate',
    price: 'POA',
    period: 'flexible',
    badge: 'For Businesses',
    highlight: false,
    features: [
      'Multiple staff memberships',
      'Flexible group sizes',
      'Tailored packages',
      'Invoice billing available',
      'Ask for full details',
    ],
    cta: 'Contact Us',
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="7" fill="var(--red)" fillOpacity="0.15"/>
      <path d="M5 8l2 2 4-4" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PlanCard({ plan, index }) {
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
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1}`}
      style={{
        background: plan.highlight ? 'var(--red)' : 'var(--dark-card)',
        border: plan.highlight ? '2px solid var(--red)' : '1px solid var(--dark-border)',
        borderRadius: 'var(--radius-md)',
        padding: '36px 28px',
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: plan.highlight ? 'var(--shadow-red)' : 'none',
        transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = plan.highlight ? 'scale(1.03) translateY(-6px)' : 'translateY(-6px)'
        e.currentTarget.style.boxShadow = plan.highlight ? '0 16px 48px rgba(227,30,36,0.5)' : '0 12px 40px rgba(227,30,36,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = plan.highlight ? 'scale(1.03)' : 'scale(1)'
        e.currentTarget.style.boxShadow = plan.highlight ? 'var(--shadow-red)' : 'none'
      }}
    >
      {/* Badge */}
      <div style={{
        display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em',
        textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20,
        background: plan.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(227,30,36,0.12)',
        color: plan.highlight ? 'var(--white)' : 'var(--red)',
        marginBottom: 20, alignSelf: 'flex-start',
      }}>
        {plan.badge}
      </div>

      {/* Name */}
      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.04em', marginBottom: 12 }}>{plan.name}</h3>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginBottom: 8 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>{plan.price}</span>
        <span style={{ fontSize: '0.85rem', color: plan.highlight ? 'rgba(255,255,255,0.75)' : 'var(--muted)', marginBottom: 4 }}>{plan.period}</span>
      </div>

      <div style={{ height: 1, background: plan.highlight ? 'rgba(255,255,255,0.2)' : 'var(--dark-border)', margin: '20px 0' }} />

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1, marginBottom: 28 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: plan.highlight ? 'rgba(255,255,255,0.9)' : 'var(--muted-light)' }}>
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="btn"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          background: plan.highlight ? 'var(--white)' : 'transparent',
          color: plan.highlight ? 'var(--red)' : 'var(--white)',
          border: plan.highlight ? 'none' : '2px solid rgba(255,255,255,0.3)',
          fontWeight: 700, justifyContent: 'center',
          transition: 'all 0.25s',
        }}
        onMouseEnter={e => {
          if (!plan.highlight) {
            e.currentTarget.style.borderColor = 'var(--red)'
            e.currentTarget.style.color = 'var(--red)'
          }
        }}
        onMouseLeave={e => {
          if (!plan.highlight) {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            e.currentTarget.style.color = 'var(--white)'
          }
        }}
      >
        {plan.cta}
      </button>
    </div>
  )
}

export default function Pricing() {
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
    <section id="pricing" className="section section--darker">
      <div className="container">
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow">Membership & Packages</span>
          <h2 style={{ color: 'var(--white)' }}>Transparent Pricing.<br />Zero Surprises.</h2>
          <div className="red-line red-line--center" />
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            From personal training blocks to full memberships — find the plan that fits your goals and your budget.
          </p>
        </div>

        <div className="grid-3">
          {PLANS.map((plan, i) => <PlanCard key={plan.name} plan={plan} index={i} />)}
        </div>

        <p style={{ textAlign: 'center', marginTop: 36, fontSize: '0.9rem', color: 'var(--muted)' }}>
          Not sure which plan is right for you? <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}>Get in touch</button> and we'll help you choose.
        </p>
      </div>
    </section>
  )
}
