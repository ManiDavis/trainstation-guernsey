import { useEffect, useRef } from 'react'

const MEMBERSHIPS = [
  {
    name: 'Gold Membership',
    headline: '£44.50',
    headlineSub: '/month by standing order',
    alt: 'or £490 per annum',
    badge: 'Best Value',
    highlight: true,
    description: 'Unlimited gym access — the full package.',
    features: [
      'Unlimited gym use',
      'Both training floors',
      'Indoor & outdoor areas',
      'New changing rooms & showers',
      'Monthly standing order (1st of month)',
      'Cancel anytime with your bank',
    ],
  },
  {
    name: 'Casual Membership',
    headline: '£49',
    headlineSub: '/month',
    alt: 'or £130 for 3 months',
    badge: 'Flexible',
    highlight: false,
    description: 'Flexible access, no standing order required.',
    features: [
      'Full gym access',
      'Pay monthly or quarterly',
      '£130 for 3 months upfront',
      'All areas included',
      'No long-term commitment',
    ],
  },
  {
    name: 'Student Membership',
    headline: '£30',
    headlineSub: '/month by standing order',
    alt: 'or £35/month casual',
    badge: 'Student Rate',
    highlight: false,
    description: 'Special rate for students — valid ID required.',
    features: [
      'Full gym access',
      '£30/mo by standing order',
      '£35/mo pay as you go',
      'All areas included',
      'Valid student ID required',
    ],
  },
  {
    name: 'Over 65 Off-Peak',
    headline: '£30',
    headlineSub: '/month by standing order',
    alt: 'or £35/month casual',
    badge: 'Senior Rate',
    highlight: false,
    description: 'Off-peak access at a reduced rate for over 65s.',
    features: [
      'Off-peak gym access',
      '£30/mo by standing order',
      '£35/mo pay as you go',
      'Full equipment access',
      'Valid during off-peak hours',
    ],
  },
]

const PT_PACKAGES = [
  {
    name: 'Gym Starter',
    price: '£100',
    period: 'one-time',
    badge: 'New Members',
    features: [
      '2 Personal Training Sessions',
      'Understand your routine',
      '6-week customised plan',
      'Goal-setting consultation',
    ],
  },
  {
    name: 'Block Offer',
    price: '£150',
    period: '4 sessions',
    badge: 'Most Popular PT',
    features: [
      '4 Personal Training Sessions',
      '45 minutes per session',
      'Personalised workout plan',
      'Flexible scheduling',
    ],
  },
  {
    name: 'Non-Member Session',
    price: '£8',
    period: 'per session',
    badge: 'No Membership Needed',
    features: [
      'Single gym session',
      'Valid before 4:30pm weekdays',
      'Valid all day weekends',
      'No commitment required',
    ],
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

function MembershipCard({ plan, index }) {
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
      className={`reveal reveal-delay-${(index % 4) + 1}`}
      style={{
        background: plan.highlight ? 'var(--red)' : 'var(--dark-card)',
        border: plan.highlight ? '2px solid var(--red)' : '1px solid var(--dark-border)',
        borderRadius: 'var(--radius-md)',
        padding: '32px 26px',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: plan.highlight ? 'var(--shadow-red)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = plan.highlight ? '0 16px 48px rgba(227,30,36,0.5)' : '0 12px 40px rgba(227,30,36,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = plan.highlight ? 'var(--shadow-red)' : 'none'
      }}
    >
      <div style={{
        display: 'inline-block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em',
        textTransform: 'uppercase', padding: '4px 10px', borderRadius: 20,
        background: plan.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(227,30,36,0.12)',
        color: plan.highlight ? 'var(--white)' : 'var(--red)',
        marginBottom: 16, alignSelf: 'flex-start',
      }}>
        {plan.badge}
      </div>

      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--white)', letterSpacing: '0.03em', marginBottom: 14 }}>{plan.name}</h3>

      <div style={{ marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.6rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>{plan.headline}</span>
        <span style={{ fontSize: '0.82rem', color: plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--muted)', marginLeft: 4 }}>{plan.headlineSub}</span>
      </div>
      {plan.alt && (
        <div style={{ fontSize: '0.82rem', color: plan.highlight ? 'rgba(255,255,255,0.65)' : 'var(--muted)', marginBottom: 4, fontStyle: 'italic' }}>{plan.alt}</div>
      )}
      <p style={{ fontSize: '0.85rem', color: plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--muted-light)', margin: '10px 0 16px', lineHeight: 1.5 }}>{plan.description}</p>

      <div style={{ height: 1, background: plan.highlight ? 'rgba(255,255,255,0.2)' : 'var(--dark-border)', marginBottom: 16 }} />

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, flex: 1, marginBottom: 24 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: '0.87rem', color: plan.highlight ? 'rgba(255,255,255,0.9)' : 'var(--muted-light)' }}>
            <CheckIcon />{f}
          </li>
        ))}
      </ul>

      <button
        className="btn"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          background: plan.highlight ? 'var(--white)' : 'transparent',
          color: plan.highlight ? 'var(--red)' : 'var(--white)',
          border: plan.highlight ? 'none' : '2px solid rgba(255,255,255,0.25)',
          fontWeight: 700, justifyContent: 'center', fontSize: '0.85rem',
        }}
      >
        Enquire Now
      </button>
    </div>
  )
}

function PTCard({ plan, index }) {
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
      className={`reveal reveal-delay-${index + 1}`}
      style={{
        background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
        borderRadius: 'var(--radius-md)', padding: '28px 24px',
        display: 'flex', flexDirection: 'column',
        transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.borderColor = 'var(--red)'
        e.currentTarget.style.boxShadow = '0 10px 32px rgba(227,30,36,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--dark-border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{
        display: 'inline-block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em',
        textTransform: 'uppercase', padding: '4px 10px', borderRadius: 20,
        background: 'rgba(227,30,36,0.12)', color: 'var(--red)', marginBottom: 14, alignSelf: 'flex-start',
      }}>
        {plan.badge}
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: 12 }}>{plan.name}</h3>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>{plan.price}</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)', marginLeft: 6 }}>{plan.period}</span>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1, marginBottom: 20 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: '0.86rem', color: 'var(--muted-light)' }}>
            <CheckIcon />{f}
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ background: 'transparent', color: 'var(--white)', border: '2px solid rgba(255,255,255,0.2)', fontWeight: 700, justifyContent: 'center', fontSize: '0.85rem' }}
      >
        Book Now
      </button>
    </div>
  )
}

export default function Pricing() {
  const headerRef = useRef(null)
  const ptRef = useRef(null)

  useEffect(() => {
    const els = [headerRef.current, ptRef.current].filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="pricing" className="section section--darker">
      <div className="container">
        {/* Memberships */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-eyebrow">Membership Prices</span>
          <h2 style={{ color: 'var(--white)' }}>Transparent Pricing.<br />Zero Surprises.</h2>
          <div className="red-line red-line--center" />
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Monthly standing orders are deducted on the 1st of each month. Cancel anytime by contacting your bank before the next payment date.
          </p>
        </div>

        <div className="grid-4">
          {MEMBERSHIPS.map((plan, i) => <MembershipCard key={plan.name} plan={plan} index={i} />)}
        </div>

        {/* Divider */}
        <div style={{ margin: '72px 0 56px', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--dark-border)' }} />
          <div ref={ptRef} className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ margin: 0 }}>Personal Training</span>
            <h3 style={{ color: 'var(--white)', fontSize: '1.6rem' }}>Coached Packages</h3>
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--dark-border)' }} />
        </div>

        <div className="grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
          {PT_PACKAGES.map((plan, i) => <PTCard key={plan.name} plan={plan} index={i} />)}
        </div>

        <p style={{ textAlign: 'center', marginTop: 36, fontSize: '0.88rem', color: 'var(--muted)' }}>
          Not sure which option suits you?{' '}
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem' }}>
            Get in touch
          </button>{' '}and we'll help you find the right fit.
        </p>
      </div>
    </section>
  )
}
