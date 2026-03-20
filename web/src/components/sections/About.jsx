import { useReveal } from '../useReveal'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../sanity/client'

const DEFAULT_HIGHLIGHTS = [
  'Certified Yoga Instructor',
  'Health & Wellness Advocate',
  'Health Food Shop Owner',
  'Accountability Coach',
  'Florida-Based, Online Worldwide',
  'Author — "Fatigue With Me"',
]

const DEFAULT_BIO = [
  {
    _type: 'block',
    children: [{
      _type: 'span',
      text: "Hi, I'm Maria — but many of you know me as Ria Samuels. I\'m a yoga instructor, wellness advocate, and the founder of Soothing Solutions.",
    }],
  },
  {
    _type: 'block',
    children: [{
      _type: 'span',
      text: "After years of running a health food shop and teaching yoga across Florida, I noticed the same pattern in my clients: they knew what to do — they just couldn\'t stay consistent. That\'s why I created the 30 Day Accountability Blueprint.",
    }],
  },
  {
    _type: 'block',
    children: [{
      _type: 'span',
      text: "My mission is simple: to help you feel relatable options, find what works for your body and life, and build the daily habits that make wellness feel natural — not like a chore.",
    }],
  },
]

export default function About({ data, onBookCall }) {
  const imgRef = useReveal()
  const textRef = useReveal()

  const headline = data?.aboutHeadline || 'Meet Maria — Your Wellness Guide'
  const bio = data?.aboutBio || DEFAULT_BIO
  const highlights = data?.aboutHighlights || DEFAULT_HIGHLIGHTS
  const hasPhoto = data?.aboutPhoto?.asset?.url

  return (
    <section id="about" className="section section--cream">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Photo */}
          <div ref={imgRef} className="reveal">
            <div style={{ position: 'relative' }}>
              {/* Decorative blob behind image */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '40% 60% 55% 45% / 50% 45% 55% 50%',
                background: 'var(--teal-pale)',
                zIndex: 0,
              }} />
              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '30% 70% 65% 35% / 45% 40% 60% 55%',
                overflow: 'hidden',
                aspectRatio: '3/4',
                maxWidth: '380px',
                margin: '0 auto',
                border: '3px solid rgba(255,255,255,0.9)',
                boxShadow: 'var(--shadow-lg)',
              }}>
                {hasPhoto ? (
                  <img
                    src={data.aboutPhoto.asset.url}
                    alt="Maria — Soothing Solutions"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: 'linear-gradient(160deg, var(--sage) 0%, var(--teal) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                  }}>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                      <circle cx="36" cy="36" r="36" fill="rgba(255,255,255,0.1)" />
                      <circle cx="36" cy="24" r="13" fill="rgba(255,255,255,0.6)" />
                      <path d="M8 62c0-15.5 12.5-28 28-28s28 12.5 28 28" fill="rgba(255,255,255,0.4)" />
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                      Photo of Maria
                    </span>
                  </div>
                )}
              </div>

              {/* Floating credential badge */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                right: '-12px',
                zIndex: 2,
                background: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 18px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{ fontSize: '1.5rem' }}>🌿</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>Certified</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--charcoal)' }}>Yoga Instructor</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={textRef} className="reveal reveal-delay-2">
            <span className="section-label">About Maria</span>
            <h2 className="section-title">{headline}</h2>

            <div style={{ marginBottom: '28px' }}>
              <PortableText
                value={bio}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p style={{ marginBottom: '16px', fontSize: '1.0625rem', color: 'var(--charcoal-mid)', lineHeight: 1.75 }}>
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
              {highlights.map((h) => (
                <span key={h} style={{
                  background: 'var(--teal-pale)',
                  color: 'var(--teal-dark)',
                  padding: '6px 14px',
                  borderRadius: '50px',
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  border: '1px solid rgba(45,155,138,0.2)',
                }}>
                  {h}
                </span>
              ))}
            </div>

            <button onClick={onBookCall} className="btn btn-primary">
              Work with Maria →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
