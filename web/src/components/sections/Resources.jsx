import { useReveal } from '../useReveal'

const CATEGORY_LABELS = {
  wellness: 'Wellness Tips',
  nutrition: 'Nutrition',
  yoga: 'Yoga & Movement',
  mindset: 'Mindset & Motivation',
  energy: 'Energy & Fatigue',
  guides: 'Guides',
}

const CATEGORY_COLORS = {
  wellness: 'var(--teal)',
  nutrition: 'var(--sage)',
  yoga: 'var(--gold)',
  mindset: 'var(--terracotta)',
  energy: '#A85A8A',
  guides: 'var(--charcoal-mid)',
}

const DEFAULT_RESOURCES = [
  { _id: '1', title: '5 Morning Habits That Completely Changed My Energy', category: 'energy', excerpt: 'These aren\'t the habits you\'ve heard before. These are the small, specific things that actually moved the needle for me — and for my clients.', isFeatured: true },
  { _id: '2', title: 'The Beginner\'s Guide to Chair Yoga', category: 'yoga', excerpt: 'You don\'t need a yoga mat, flexible hips, or a yoga body. You just need a sturdy chair and five minutes. Here\'s how to get started.', isFeatured: true },
  { _id: '3', title: 'Why You Keep Falling Off the Wagon (And What To Do Instead)', category: 'mindset', excerpt: 'It\'s not about willpower. Here\'s the real reason consistency is hard — and the simple accountability system that actually works.', isFeatured: true },
  { _id: '4', title: 'Eating for Energy: 10 Foods I Keep in My Shop', category: 'nutrition', excerpt: 'As a health food shop owner, I\'ve seen what works. These are the ten foods I personally stock because they genuinely support sustained energy.', isFeatured: false },
  { _id: '5', title: 'Breathing Exercises to Calm Anxiety in Under 5 Minutes', category: 'wellness', excerpt: 'Your breath is the most powerful tool you have. These three techniques are backed by science and by thousands of students I\'ve taught them to.', isFeatured: false },
  { _id: '6', title: 'Yoga for Kids: Building Focus and Calm in 20 Minutes', category: 'yoga', excerpt: 'Children naturally love movement — when it\'s playful. Here\'s a simple 20-minute routine you can do with your child at home.', isFeatured: false },
]

const DEFAULT_COMMUNITY_BENEFITS = [
  'Weekly group accountability calls with Maria',
  'Private member community (no social media noise)',
  'Exclusive wellness tips and resources',
  'Early access to new programs and workshops',
  'A safe, encouraging space to share your journey',
]

export default function Resources({ data, onBookCall }) {
  const headRef = useReveal()
  const comRef = useReveal()

  const headline = data?.headline || 'Wellness Resources & Community'
  const subheadline = data?.subheadline || 'Your next step forward — whether that\'s a quick read, a practical guide, or the community you\'ve been looking for.'
  const communityHeadline = data?.communityHeadline || 'Join Our Wellness Community'
  const communityBenefits = data?.communityBenefits?.length ? data.communityBenefits : DEFAULT_COMMUNITY_BENEFITS
  const communityCtaLabel = data?.communityCtaLabel || 'Join the Community'
  const resources = data?.featuredResources?.length ? data.featuredResources : DEFAULT_RESOURCES

  return (
    <section id="resources" className="section section--cream" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="section-label">Resources & Community</span>
          <h2 className="section-title" style={{ maxWidth: '600px' }}>{headline}</h2>
          <p className="section-sub">{subheadline}</p>
        </div>

        {/* Resources grid */}
        <div className="grid-3" style={{ gap: 'clamp(16px, 3vw, 28px)', marginBottom: 'clamp(60px, 8vw, 100px)' }}>
          {resources.slice(0, 6).map((resource, i) => (
            <ResourceCard key={resource._id} resource={resource} delay={i + 1} />
          ))}
        </div>

        {/* Community Section */}
        <div
          ref={comRef}
          className="reveal"
          style={{
            background: 'linear-gradient(135deg, var(--teal-dark) 0%, #1a3a35 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(40px, 6vw, 64px)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 6fr) minmax(0, 6fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Background decoration */}
          <div style={{
            position: 'absolute', right: '-80px', top: '-80px',
            width: '300px', height: '300px',
            borderRadius: '50%',
            background: 'rgba(45,155,138,0.2)',
            pointerEvents: 'none',
          }} />

          {/* Text */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-label section-label--gold">Community</span>
            <h2 style={{ color: 'var(--white)', marginBottom: '16px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              {communityHeadline}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '28px' }}>
              Wellness is so much more powerful when you don\'t do it alone. Our community is a warm, private space where real people share real progress.
            </p>
            <button onClick={onBookCall} className="btn btn-white">
              {communityCtaLabel} →
            </button>
          </div>

          {/* Benefits list */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', zIndex: 1 }}>
            {communityBenefits.map((benefit) => (
              <li key={benefit} style={{
                display: 'flex', alignItems: 'flex-start', gap: '12px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{ color: 'var(--teal-light)', fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #resources .container > div[class="reveal"] > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function ResourceCard({ resource, delay }) {
  const ref = useReveal()
  const category = CATEGORY_LABELS[resource.category] || resource.category
  const color = CATEGORY_COLORS[resource.category] || 'var(--teal)'
  const hasCover = resource.coverImage?.asset?.url

  return (
    <div
      ref={ref}
      className={`card reveal reveal-delay-${delay}`}
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
    >
      {/* Card image */}
      <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
        {hasCover ? (
          <img src={resource.coverImage.asset.url} alt={resource.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <ResourcePlaceholderImage category={resource.category} />
        )}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          background: color,
          color: 'white',
          padding: '3px 10px',
          borderRadius: '50px',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          {category}
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '10px', lineHeight: 1.4, color: 'var(--charcoal)' }}>
          {resource.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-mid)', lineHeight: 1.65, flex: 1 }}>
          {resource.excerpt}
        </p>
        <div style={{ marginTop: '16px', color: color, fontSize: '0.875rem', fontWeight: 600 }}>
          Read more →
        </div>
      </div>
    </div>
  )
}

function ResourcePlaceholderImage({ category }) {
  const gradients = {
    wellness: 'linear-gradient(135deg, var(--teal-pale) 0%, var(--cream-dark) 100%)',
    nutrition: 'linear-gradient(135deg, var(--sage-light) 0%, var(--cream) 100%)',
    yoga: 'linear-gradient(135deg, var(--gold-light) 0%, var(--cream) 100%)',
    mindset: 'linear-gradient(135deg, #FBF0EA 0%, var(--cream-dark) 100%)',
    energy: 'linear-gradient(135deg, #F5EAF5 0%, var(--cream) 100%)',
    guides: 'linear-gradient(135deg, var(--cream-dark) 0%, var(--cream) 100%)',
  }
  const icons = { wellness: '🌿', nutrition: '🥗', yoga: '🧘', mindset: '💭', energy: '⚡', guides: '📋' }

  return (
    <div style={{
      width: '100%', height: '100%',
      background: gradients[category] || gradients.wellness,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '2.5rem',
    }}>
      {icons[category] || '🌿'}
    </div>
  )
}
