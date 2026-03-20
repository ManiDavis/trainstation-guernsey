import { useReveal } from '../useReveal'

const DEFAULT_INCLUSIONS = [
  { title: 'Full 30-Day Program', description: 'A structured daily plan that builds healthy habits one step at a time.' },
  { title: 'Daily Scorecards', description: 'Track your wins, habits, and progress every single day.' },
  { title: 'Habit Tracking System', description: 'A clear, visual system to identify patterns and celebrate growth.' },
  { title: 'Accountability Calls', description: 'Regular partner calls to keep you motivated and on track.' },
  { title: 'Community Support', description: 'A private group of like-minded people on the same journey.' },
  { title: 'Fatigue With Me Ebook', description: 'The 30-day energy restoration guide included in your membership.' },
]

const DEFAULT_WEEKS = [
  { weekLabel: 'Week 1', theme: 'Foundation & Awareness', description: 'We start by getting honest. You\'ll establish your baseline, identify your biggest energy drains, and set realistic, meaningful goals.' },
  { weekLabel: 'Week 2', theme: 'Building the Rituals', description: 'Small daily habits become powerful over time. Week 2 introduces your morning and evening rituals — the cornerstones of lasting change.' },
  { weekLabel: 'Week 3', theme: 'Momentum & Motivation', description: 'This is where most programs fall apart. We dig into the mindset tools, accountability strategies, and community support that keep you going.' },
  { weekLabel: 'Week 4', theme: 'Integration & Beyond', description: 'Celebrate how far you\'ve come, consolidate your new habits, and map your path forward beyond the 30 days.' },
]

export default function Program({ data, onBookCall }) {
  const headRef = useReveal()
  const priceRef = useReveal()
  const inclRef = useReveal()
  const weekRef = useReveal()
  const ebookRef = useReveal()

  const headline = data?.headline || 'The 30 Day Accountability Blueprint'
  const subheadline = data?.subheadline || 'Stop starting over. Start building the life you want — one intentional day at a time. The Blueprint gives you the structure, support, and strategy to create real, lasting change in 30 days.'
  const trialPrice = data?.trialPrice || '$9.99'
  const fullPrice = data?.fullPrice || '$35.99'
  const pricingNote = data?.pricingNote || 'Beta Pricing — Limited Time'
  const trialCta = data?.trialCtaLabel || 'Start Your 7-Day Trial'
  const fullCta = data?.fullCtaLabel || 'Join the Full 30-Day Program'
  const inclusions = data?.inclusions?.length ? data.inclusions : DEFAULT_INCLUSIONS
  const weeks = data?.programWeeks?.length ? data.programWeeks : DEFAULT_WEEKS
  const ebookHeadline = data?.ebookHeadline || 'Also Included: Fatigue With Me Ebook'
  const ebookDesc = data?.ebookDescription || 'A 30-day guided journey specifically designed to help you understand, address, and overcome chronic fatigue. Written from lived experience, this ebook pairs perfectly with the Blueprint program — giving you the "why" behind the habits you\'re building.'
  const hasEbookCover = data?.ebookCover?.asset?.url

  return (
    <section id="program" style={{ background: 'var(--cream)' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--charcoal) 0%, #1a3a35 100%)',
          padding: 'clamp(64px, 10vw, 120px) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(45,155,138,0.15) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <div ref={headRef} className="reveal" style={{ maxWidth: '720px' }}>
            <span className="section-label section-label--gold">Flagship Program</span>
            <h2 style={{ color: 'var(--white)', marginBottom: '20px', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
              {headline}
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '600px' }}>
              {subheadline}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button onClick={onBookCall} className="btn btn-gold" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                {trialCta} →
              </button>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem',
              }}>
                <span style={{ color: 'var(--teal-light)', fontSize: '1.2rem' }}>✓</span>
                No commitment · Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="section section--white">
        <div className="container">
          <div ref={priceRef} className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 56px)' }}>
            <span className="section-label section-label--gold">{pricingNote}</span>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Try it for 7 days, or go all-in with the full 30-day experience. Either way, you\'re investing in you.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '720px',
            margin: '0 auto',
          }}>
            <PricingCard
              badge="Try It First"
              price={trialPrice}
              period="7 days"
              description="Dip your toes in. Get access to the first week of the program, daily scorecards, and the community."
              features={['7 days full access', 'Daily scorecards', 'Habit tracker', 'Community group']}
              ctaLabel="Start Free Trial"
              onCta={onBookCall}
              accent="var(--teal)"
            />
            <PricingCard
              badge="Best Value"
              price={fullPrice}
              period="30 days"
              description="The complete Blueprint experience. All 30 days, accountability calls, the ebook, and full community access."
              features={['Full 30-day program', 'Daily scorecards', 'Habit tracker', 'Accountability calls', 'Fatigue With Me ebook', 'Community group']}
              ctaLabel={fullCta}
              onCta={onBookCall}
              accent="var(--gold)"
              featured
            />
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="section section--sage-light">
        <div className="container">
          <div ref={inclRef} className="reveal" style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <span className="section-label">Everything You Get</span>
            <h2 className="section-title">What\'s Inside the Blueprint</h2>
          </div>
          <div className="grid-3" style={{ gap: '20px' }}>
            {inclusions.map((item, i) => (
              <InclusionCard key={i} item={item} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Week Breakdown */}
      <div className="section section--white">
        <div className="container">
          <div ref={weekRef} className="reveal" style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <span className="section-label">Program Structure</span>
            <h2 className="section-title">Your 30-Day Journey</h2>
            <p className="section-sub">Here\'s exactly what to expect — week by week.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {weeks.map((week, i) => (
              <WeekCard key={i} week={week} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Ebook showcase */}
      <div className="section" style={{ background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--cream) 100%)' }}>
        <div className="container">
          <div
            ref={ebookRef}
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
              gap: 'clamp(40px, 6vw, 72px)',
              alignItems: 'center',
            }}
          >
            {/* Book cover placeholder */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 'clamp(200px, 30vw, 280px)',
                aspectRatio: '3/4',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                transform: 'rotate(-3deg)',
              }}>
                {hasEbookCover ? (
                  <img src={data.ebookCover.asset.url} alt="Fatigue With Me Ebook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(160deg, var(--gold) 0%, var(--terracotta) 100%)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '24px', textAlign: 'center', gap: '12px',
                  }}>
                    <span style={{ fontSize: '2.5rem' }}>📚</span>
                    <div style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.2 }}>
                      Fatigue<br />With Me
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem' }}>
                      by Maria
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginTop: '8px', fontStyle: 'italic' }}>
                      A 30-Day Journey to Restore Your Energy
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-label section-label--gold">Included Free</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                {ebookHeadline}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--charcoal-mid)', lineHeight: 1.75, marginBottom: '24px' }}>
                {ebookDesc}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {[
                  'Understand the root causes of your fatigue',
                  '30 days of guided journaling & reflection',
                  'Practical energy-boosting habits',
                  'Written from lived experience by Maria',
                ].map((point) => (
                  <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9375rem', color: 'var(--charcoal-mid)' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>✦</span>
                    {point}
                  </li>
                ))}
              </ul>
              <button onClick={onBookCall} className="btn btn-gold">
                Get the Blueprint + Ebook →
              </button>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            #program .container > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

function PricingCard({ badge, price, period, description, features, ctaLabel, onCta, accent, featured }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: featured ? accent : 'var(--white)',
        borderRadius: 'var(--radius-md)',
        padding: '36px 28px',
        boxShadow: featured ? `0 12px 40px ${accent}40` : 'var(--shadow-sm)',
        border: `2px solid ${featured ? accent : 'var(--cream-dark)'}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'rgba(255,255,255,0.25)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '50px',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
        }}>
          POPULAR
        </div>
      )}

      <div style={{
        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: featured ? 'rgba(255,255,255,0.8)' : accent,
        marginBottom: '12px',
      }}>
        {badge}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3.2rem',
          fontWeight: 700,
          color: featured ? 'white' : 'var(--charcoal)',
          lineHeight: 1,
        }}>
          {price}
        </span>
        <span style={{ fontSize: '0.9rem', color: featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)', marginLeft: '6px' }}>
          / {period}
        </span>
      </div>

      <p style={{ fontSize: '0.9rem', color: featured ? 'rgba(255,255,255,0.8)' : 'var(--charcoal-mid)', marginBottom: '24px', lineHeight: 1.65 }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
        {features.map((f) => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: featured ? 'rgba(255,255,255,0.85)' : 'var(--charcoal-mid)' }}>
            <span style={{ color: featured ? 'rgba(255,255,255,0.9)' : accent, fontSize: '1rem', flexShrink: 0 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={onCta}
        style={{
          background: featured ? 'white' : accent,
          color: featured ? accent : 'white',
          padding: '14px 24px',
          borderRadius: '50px',
          fontWeight: 700,
          fontSize: '0.925rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s',
          width: '100%',
        }}
        onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.opacity = '0.92' }}
        onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.opacity = '1' }}
      >
        {ctaLabel}
      </button>
    </div>
  )
}

function InclusionCard({ item, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        padding: '28px 24px',
        display: 'flex',
        gap: '14px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
    >
      <div style={{
        width: '40px', height: '40px', flexShrink: 0,
        borderRadius: '50%', background: 'var(--sage-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--sage)', fontSize: '1.2rem',
      }}>
        ✓
      </div>
      <div>
        <h4 style={{ marginBottom: '6px', fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
          {item.title}
        </h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-mid)', lineHeight: 1.6, margin: 0 }}>
          {item.description}
        </p>
      </div>
    </div>
  )
}

function WeekCard({ week, index }) {
  const ref = useReveal()
  const colors = ['var(--teal)', 'var(--sage)', 'var(--gold)', 'var(--terracotta)']
  const color = colors[index % colors.length]

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: '0',
        background: 'var(--cream)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--cream-dark)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{
        background: color,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '20px 12px',
        color: 'white',
      }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.8 }}>
          {week.weekLabel || `Week ${index + 1}`}
        </span>
      </div>
      <div style={{ padding: '20px 24px' }}>
        <h4 style={{ marginBottom: '6px', color: 'var(--charcoal)', fontSize: '1rem' }}>
          {week.theme}
        </h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-mid)', lineHeight: 1.65, margin: 0 }}>
          {week.description}
        </p>
      </div>
    </div>
  )
}
