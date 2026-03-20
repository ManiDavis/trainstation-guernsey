import { useReveal } from '../useReveal'

const DEFAULT_CLASSES = [
  {
    _id: '1',
    title: 'One-on-One Yoga',
    classType: 'one-on-one',
    description: 'A fully personalised session designed around your body, goals, and energy levels. Perfect if you want undivided attention and a practice that truly fits you.',
    duration: '60 minutes',
    price: 'From $75/session',
    priceNote: 'Packages available',
    highlights: ['Personalised sequences', 'Flexible scheduling', 'All levels welcome', 'Online or in-person'],
    isOnline: true,
    isInPerson: true,
  },
  {
    _id: '2',
    title: 'Chair Yoga',
    classType: 'chair',
    description: 'Accessible yoga for those with mobility challenges, seniors, or anyone who prefers a seated practice. No mat needed — just a sturdy chair and an open mind.',
    duration: '45–60 minutes',
    price: 'From $65/session',
    priceNote: 'Group rates available',
    highlights: ['Seated & supported', 'Gentle on joints', 'Seniors welcome', 'Great for desk workers'],
    isOnline: true,
    isInPerson: true,
  },
  {
    _id: '3',
    title: "Children's Yoga",
    classType: 'children',
    description: 'Fun, engaging, age-appropriate yoga that helps kids build focus, flexibility, and emotional regulation through playful movement and breathing.',
    duration: '30–45 minutes',
    price: 'From $55/session',
    priceNote: 'Family packages available',
    highlights: ['Ages 4–14', 'Playful & engaging', 'Builds focus', 'Safe & nurturing'],
    isOnline: true,
    isInPerson: false,
  },
  {
    _id: '4',
    title: 'Group Classes',
    classType: 'group',
    description: 'Join a small, supportive group for a shared yoga experience. A wonderful way to stay motivated, build community, and make yoga a regular ritual.',
    duration: '60 minutes',
    price: 'From $25/session',
    priceNote: 'Monthly memberships available',
    highlights: ['Small groups (max 8)', 'Community energy', 'Mixed levels', 'Online via Zoom'],
    isOnline: true,
    isInPerson: false,
  },
]

const CLASS_ICONS = {
  'one-on-one': '🧘',
  'chair': '🪑',
  'children': '🌟',
  'group': '👥',
  'private': '🔒',
}

export default function Yoga({ data, onBookCall }) {
  const headRef = useReveal()
  const headline = data?.headline || 'Yoga for Every Body, Every Stage of Life'
  const subheadline = data?.subheadline || 'Whether you\'re brand new to yoga or returning after a long break, there\'s a class here with your name on it. All sessions are led with warmth, expertise, and zero judgement.'
  const ctaText = data?.ctaText || 'Ready to begin your yoga journey?'
  const ctaLabel = data?.ctaButtonLabel || 'Book a Class'
  const classes = data?.classes?.length ? data.classes : DEFAULT_CLASSES

  return (
    <section id="yoga" className="section section--teal-pale" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decoration */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,155,138,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div ref={headRef} className="reveal" style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="section-label">Yoga Classes</span>
          <h2 className="section-title" style={{ maxWidth: '640px' }}>{headline}</h2>
          <p className="section-sub">{subheadline}</p>
        </div>

        <div className="grid-2" style={{ gap: 'clamp(20px, 3vw, 32px)', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          {classes.map((cls, i) => (
            <YogaCard key={cls._id} cls={cls} delay={i + 1} onBookCall={onBookCall} />
          ))}
        </div>

        {/* Location note & CTA */}
        <div className="reveal" style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(32px, 4vw, 48px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.4rem' }}>{ctaText}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', margin: 0 }}>
              {data?.locationNote || 'Online worldwide · In-person in Florida, USA'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={onBookCall} className="btn btn-primary">
              {ctaLabel}
            </button>
            <button onClick={onBookCall} className="btn btn-secondary">
              Ask a question
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function YogaCard({ cls, delay, onBookCall }) {
  const ref = useReveal()
  const icon = CLASS_ICONS[cls.classType] || '🧘'

  return (
    <div
      ref={ref}
      className={`card reveal reveal-delay-${delay}`}
      style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
        <div style={{
          width: '52px', height: '52px', flexShrink: 0,
          borderRadius: '50%',
          background: 'var(--teal-pale)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem',
        }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{cls.title}</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {cls.isOnline && <Tag label="Online" color="var(--teal)" />}
            {cls.isInPerson && <Tag label="In-Person (FL)" color="var(--terracotta)" />}
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.9375rem', color: 'var(--charcoal-mid)', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
        {cls.description}
      </p>

      {cls.highlights?.length > 0 && (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
          {cls.highlights.slice(0, 4).map((h) => (
            <li key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--charcoal-mid)' }}>
              <span style={{ color: 'var(--teal)', fontSize: '1rem' }}>✓</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div style={{
        borderTop: '1px solid var(--cream-dark)',
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--charcoal)' }}>
            {cls.price || 'Contact for pricing'}
          </div>
          {cls.duration && (
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '2px' }}>
              {cls.duration}
              {cls.priceNote && ` · ${cls.priceNote}`}
            </div>
          )}
        </div>
        <button
          onClick={onBookCall}
          className="btn btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.875rem' }}
        >
          Book This
        </button>
      </div>
    </div>
  )
}

function Tag({ label, color }) {
  return (
    <span style={{
      background: color + '15',
      color: color,
      padding: '2px 10px',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: 600,
      border: `1px solid ${color}30`,
    }}>
      {label}
    </span>
  )
}
