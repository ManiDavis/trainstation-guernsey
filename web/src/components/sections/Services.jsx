import { useReveal } from '../useReveal'

const DEFAULT_SERVICES = [
  {
    icon: '🧘',
    title: 'Yoga Classes',
    description: 'One-on-one, chair yoga, and children\'s classes — online or in-person in Florida. Every session is crafted for your body and your life.',
    link: 'yoga',
    color: 'var(--teal)',
    bg: 'var(--teal-pale)',
  },
  {
    icon: '📋',
    title: '30 Day Blueprint',
    description: 'A structured 30-day accountability program with daily scorecards, habit tracking, and personal coaching calls. Our flagship program.',
    link: 'program',
    color: 'var(--gold)',
    bg: 'var(--gold-light)',
  },
  {
    icon: '📖',
    title: 'Fatigue With Me',
    description: 'A 30-day journey to restore your energy. This ebook walks you through the small, powerful shifts that rebuild vitality from the inside out.',
    link: 'program',
    color: 'var(--terracotta)',
    bg: '#FBF0EA',
  },
  {
    icon: '🌿',
    title: 'Wellness Resources',
    description: 'Guides, articles, and community support to keep you inspired, informed, and connected on your wellness journey.',
    link: 'resources',
    color: 'var(--sage)',
    bg: 'var(--sage-light)',
  },
]

export default function Services({ data }) {
  const headRef = useReveal()
  const headline = data?.servicesHeadline || 'Everything You Need to Thrive'
  const subtext = data?.servicesSubtext || 'From yoga mats to habit trackers — Soothing Solutions brings together all the support you need for a healthier, more energised life.'

  return (
    <section id="services-overview" className="section section--white">
      <div className="container">
        <div ref={headRef} className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">{headline}</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>{subtext}</p>
        </div>

        <div className="grid-4" style={{ gap: 'clamp(16px, 3vw, 28px)' }}>
          {DEFAULT_SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay + 1}`}
      style={{
        background: service.bg,
        borderRadius: 'var(--radius-md)',
        padding: '32px 28px',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        border: '1px solid transparent',
      }}
      onClick={() => document.getElementById(service.link)?.scrollIntoView({ behavior: 'smooth' })}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
        e.currentTarget.style.borderColor = service.color + '33'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'transparent'
      }}
    >
      <div style={{
        width: '52px', height: '52px',
        borderRadius: '50%',
        background: service.color + '22',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: '18px',
      }}>
        {service.icon}
      </div>
      <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--charcoal)' }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--charcoal-mid)' }}>
        {service.description}
      </p>
      <div style={{ marginTop: '18px', color: service.color, fontSize: '0.875rem', fontWeight: 600 }}>
        Learn more →
      </div>
    </div>
  )
}
