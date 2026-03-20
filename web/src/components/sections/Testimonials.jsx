import { useReveal } from '../useReveal'

const DEFAULT_TESTIMONIALS = [
  {
    _id: '1',
    name: 'Sarah M.',
    role: 'Chair Yoga Student',
    quote: "Maria has completely transformed my relationship with movement. After my knee surgery, I thought yoga wasn't for me anymore. Chair yoga changed everything — I feel stronger and more flexible than I have in years.",
    rating: 5,
  },
  {
    _id: '2',
    name: 'Danielle R.',
    role: '30 Day Blueprint Member',
    quote: "The accountability scorecards are a game-changer. I've tried programs before but never had that daily check-in structure. Maria genuinely cares about your progress. I lost 8 lbs and gained so much energy in 30 days.",
    rating: 5,
  },
  {
    _id: '3',
    name: 'Tanya B.',
    role: 'One-on-One Yoga Client',
    quote: "I was nervous about one-on-one classes but Maria made it so welcoming. She meets you exactly where you are, no judgement. My stress levels have dropped dramatically since we started working together.",
    rating: 5,
  },
]

export default function Testimonials({ data }) {
  const headRef = useReveal()
  const testimonials = data?.testimonials?.length ? data.testimonials : DEFAULT_TESTIMONIALS

  return (
    <section className="section section--charcoal" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(45,155,138,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,168,83,0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div ref={headRef} className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="section-label section-label--white">Real Results</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            What Our Community Says
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', margin: '0 auto', maxWidth: '580px' }}>
            Real stories from real people who chose to invest in their wellbeing — and never looked back.
          </p>
        </div>

        <div className="grid-3" style={{ gap: 'clamp(16px, 3vw, 28px)' }}>
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t._id} testimonial={t} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, delay }) {
  const ref = useReveal()
  const stars = testimonial.rating || 5

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'var(--radius-md)',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'background 0.25s, border-color 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.borderColor = 'rgba(45,155,138,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
      }}
    >
      {/* Stars */}
      <div style={{ display: 'flex', gap: '4px' }}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>★</span>
        ))}
      </div>

      {/* Quote mark */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '3.5rem',
        lineHeight: 0.8,
        color: 'var(--teal)',
        opacity: 0.5,
        display: 'block',
      }}>
        "
      </span>

      <p style={{
        fontSize: '0.9875rem',
        lineHeight: 1.75,
        color: 'rgba(255,255,255,0.8)',
        fontStyle: 'italic',
        flex: 1,
      }}>
        {testimonial.quote}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
        {/* Avatar */}
        {testimonial.photo?.asset?.url ? (
          <img
            src={testimonial.photo.asset.url}
            alt={testimonial.name}
            style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '44px', height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--teal), var(--sage))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '1rem',
          }}>
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.9rem' }}>
            {testimonial.name}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  )
}
