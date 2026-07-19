import { useEffect, useRef, useState } from 'react'
import { client } from '../sanity/client'
import { PRICING_QUERY } from '../sanity/queries'

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
      className={`card reveal reveal-delay-${(index % 4) + 1} pricing-card`}
      style={{
        padding: '32px 28px',
        position: 'relative',
        border: plan.highlighted ? '1px solid var(--red)' : '1px solid var(--dark-border)',
        background: plan.highlighted ? 'rgba(227,30,36,0.05)' : 'var(--dark-card)',
      }}
    >
      {plan.badge && (
        <div style={{
          position: 'absolute', top: -12, left: 24,
          background: plan.highlighted ? 'var(--red)' : 'var(--dark-mid)',
          color: 'white', fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: 4,
        }}>
          {plan.badge}
        </div>
      )}

      {/* Head region — kept as one subgrid track so the divider lines up
          across every card regardless of how tall the content above it is. */}
      <div className="pricing-card-head" style={{ paddingBottom: 20, borderBottom: '1px solid var(--dark-border)' }}>
        <div style={{ marginBottom: plan.description ? 20 : 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--muted-light)', textTransform: 'uppercase', marginBottom: 12 }}>
            {plan.name}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 700, color: plan.highlighted ? 'var(--red)' : 'var(--white)', lineHeight: 1 }}>
              {plan.price}
            </span>
            {plan.priceNote && (
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.3 }}>{plan.priceNote}</span>
            )}
          </div>
          {plan.altPrice && (
            <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 6 }}>{plan.altPrice}</div>
          )}
        </div>

        {plan.description && (
          <p style={{ fontSize: '0.88rem', color: 'var(--muted-light)', lineHeight: 1.6, margin: 0 }}>
            {plan.description}
          </p>
        )}
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 20 }}>
        {(plan.features || []).map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem', color: 'var(--off-white)' }}>
            <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
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
      className={`card reveal reveal-delay-${(index % 3) + 1}`}
      style={{
        padding: '28px 24px', position: 'relative',
        border: plan.highlighted ? '1px solid var(--red)' : '1px solid var(--dark-border)',
        background: plan.highlighted ? 'rgba(227,30,36,0.05)' : 'var(--dark-card)',
      }}
    >
      {plan.badge && (
        <div style={{
          position: 'absolute', top: -12, left: 24,
          background: plan.highlighted ? 'var(--red)' : '#333',
          color: 'white', fontSize: '0.65rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '3px 10px', borderRadius: 4,
        }}>
          {plan.badge}
        </div>
      )}
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--muted-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
        {plan.name}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: plan.highlighted ? 'var(--red)' : 'var(--white)', lineHeight: 1 }}>{plan.price}</span>
        {plan.priceNote && <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{plan.priceNote}</span>}
      </div>
      {plan.description && (
        <p style={{ fontSize: '0.83rem', color: 'var(--muted)', marginBottom: 16, lineHeight: 1.5 }}>{plan.description}</p>
      )}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {(plan.features || []).map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 8, fontSize: '0.85rem', color: 'var(--off-white)' }}>
            <span style={{ color: 'var(--red)', flexShrink: 0 }}>✓</span>{f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Pricing() {
  const [plans, setPlans] = useState([])
  const headerRef = useRef(null)
  const ptRef = useRef(null)

  useEffect(() => {
    client.fetch(PRICING_QUERY).then(setPlans)
  }, [])

  useEffect(() => {
    const els = [headerRef.current, ptRef.current].filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const memberships = plans.filter(p => p.category === 'membership')
  const ptPackages = plans.filter(p => p.category === 'pt-package')

  return (
    <section id="pricing" className="section section--darker">
      <div className="container">
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-eyebrow">Membership Prices</span>
          <h2 style={{ color: 'var(--white)' }}>Transparent Pricing.<br />Zero Surprises.</h2>
          <div className="red-line red-line--center" />
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Monthly standing orders are deducted on the 1st of each month. Cancel anytime by contacting your bank before the next payment date.
          </p>
        </div>

        <div className="grid-4 pricing-grid">
          {memberships.map((plan, i) => <MembershipCard key={plan._id} plan={plan} index={i} />)}
        </div>

        <div style={{ margin: '72px 0 56px', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--dark-border)' }} />
          <div ref={ptRef} className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ margin: 0 }}>Personal Training</span>
            <h3 style={{ color: 'var(--white)', fontSize: '1.6rem' }}>Coached Packages</h3>
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--dark-border)' }} />
        </div>

        <div className="grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
          {ptPackages.map((plan, i) => <PTCard key={plan._id} plan={plan} index={i} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 20 }}>
            Not sure which plan is right for you?
          </p>
          <button className="btn btn-red" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Talk to Us →
          </button>
        </div>
      </div>

      <style>{`
        /* Align the divider across every membership card: each card becomes a
           2-row subgrid sharing the parent's row tracks, so the head region
           sizes to the tallest card and the divider lands at one level. */
        .pricing-card { display: grid; row-gap: 0; }
        @supports (grid-template-rows: subgrid) {
          .pricing-grid > .pricing-card {
            grid-row: span 2;
            grid-template-rows: subgrid;
          }
        }
      `}</style>
    </section>
  )
}
