import { useEffect, useRef, useState } from 'react'
import { client } from '../sanity/client'
import { GYM_SHOWCASE_QUERY } from '../sanity/queries'

const FALLBACK_EQUIPMENT = [
  { icon: '🏋️', label: 'Rogue Rig & Racks' },
  { icon: '🔴', label: 'Colored Bumper Plates' },
  { icon: '🚴', label: 'Air Bikes' },
  { icon: '⭕', label: 'Gymnastics Rings' },
  { icon: '💪', label: 'Free Weights' },
  { icon: '🏃', label: 'Cardio Machines' },
  { icon: '⬆️', label: 'Pull-up Bars' },
  { icon: '🔔', label: 'Kettlebells' },
]

export default function GymShowcase() {
  const [data, setData] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    client.fetch(GYM_SHOWCASE_QUERY).then(setData).catch(() => {})
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    items.forEach(item => obs.observe(item))
    return () => obs.disconnect()
  }, [])

  const d = data || {}
  const eyebrow    = d.eyebrow    || 'The Facility'
  const heading    = d.heading    || 'Built for\nSerious Athletes'
  const paragraph1 = d.paragraph1 || 'Our state-of-the-art facility features premium Rogue equipment throughout — the same brand trusted by elite athletes and CrossFit Games competitors worldwide. Whether you\'re lifting heavy, doing conditioning work, or training for a specific sport, we have everything you need.'
  const paragraph2 = d.paragraph2 || 'Separate cardio and weightlifting areas mean you can train without distraction. A dedicated space for serious weightlifters downstairs, plus full cardio and functional fitness areas. Plus, our brand-new changing rooms and showers mean you\'re always ready to go.'
  // Filter out legacy string items (label-less) from old schema
  const rawEquipment = d.equipment?.filter(e => e && typeof e === 'object' && e.label) ?? []
  const equipment = rawEquipment.length ? rawEquipment : FALLBACK_EQUIPMENT
  const panelBrand    = d.panelBrand    || 'ROGUE'
  const panelBrandSub = d.panelBrandSub || 'Equipment Throughout'
  const statNumber    = d.statNumber    || '2'
  const statLabel     = d.statLabel     || 'Training Zones'

  const headingLines = heading.split('\\n')

  return (
    <section ref={ref} className="section section--dark" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', gap: 80, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left: text */}
          <div style={{ flex: '1 1 340px' }}>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 style={{ color: 'var(--white)', marginBottom: 16 }}>
              {headingLines.map((line, i) => (
                <span key={i}>{line}{i < headingLines.length - 1 && <br />}</span>
              ))}
            </h2>
            <div className="red-line" />
            <p style={{ marginBottom: 32, color: 'var(--muted-light)' }}>{paragraph1}</p>
            <p style={{ marginBottom: 40, color: 'var(--muted-light)' }}>{paragraph2}</p>

            {/* Equipment chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {equipment.map(e => (
                <span key={e._key || e.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 30,
                  background: 'var(--dark-mid)', border: '1px solid var(--dark-border)',
                  fontSize: '0.82rem', fontWeight: 500, color: 'var(--muted-light)',
                  letterSpacing: '0.02em',
                }}>
                  <span>{e.icon}</span> {e.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: visual panels */}
          <div className="reveal reveal-delay-2" style={{ flex: '1 1 360px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 12, minHeight: 420 }}>
            {/* Top-left large panel — brand */}
            <div style={{
              gridRow: '1 / 3', background: 'var(--dark-mid)',
              borderRadius: 'var(--radius-md)', border: '1px solid var(--dark-border)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: 28, minHeight: 300, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.15">
                  <rect x="10" y="34" width="60" height="12" rx="6" fill="white"/>
                  <rect x="4" y="28" width="14" height="24" rx="4" fill="white"/>
                  <rect x="62" y="28" width="14" height="24" rx="4" fill="white"/>
                  <rect x="18" y="38" width="44" height="4" rx="2" fill="#E31E24"/>
                </svg>
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>{panelBrand}</div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--red)', textTransform: 'uppercase', marginTop: 4 }}>{panelBrandSub}</div>
              </div>
            </div>

            {/* Top-right — stat */}
            <div style={{
              background: 'linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%)',
              borderRadius: 'var(--radius-md)', padding: 24,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>{statNumber}</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', marginTop: 6 }}>
                {statLabel.split(' ').map((word, i) => <span key={i}>{word}<br /></span>)}
              </div>
            </div>

            {/* Bottom-right — rating */}
            <div style={{
              background: 'var(--dark-mid)', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--dark-border)', padding: 24,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>★★★★★</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginTop: 6 }}>Google<br />Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
