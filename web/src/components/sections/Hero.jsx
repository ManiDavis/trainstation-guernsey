import { urlFor } from '../../sanity/client'

export default function Hero({ data, siteSettings, onBookCall }) {
  const headline = data?.heroHeadline || 'Feel Like Yourself Again — With Yoga, Wellness & Real Accountability'
  const sub = data?.heroSubheadline || 'Maria guides you through movement, mindset, and daily habits so you can restore your energy, build momentum, and finally feel at home in your body.'
  const ctaLabel = data?.heroCtaLabel || siteSettings?.primaryCtaLabel || 'Book a Free Call'

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(150deg, var(--teal-pale) 0%, var(--cream) 55%, var(--gold-light) 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,155,138,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Leaf SVGs */}
      <LeafDecoration style={{ top: '10%', right: '8%', width: 180, opacity: 0.07, transform: 'rotate(-20deg)' }} />
      <LeafDecoration style={{ bottom: '15%', left: '3%', width: 120, opacity: 0.06, transform: 'rotate(40deg)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
          padding: 'clamp(40px, 6vw, 80px) 0',
        }}>
          {/* Text */}
          <div style={{ animationName: 'fadeSlideUp', animationDuration: '0.8s', animationFillMode: 'both' }}>
            <span className="section-label" style={{ marginBottom: '20px' }}>
              ✦ Wellness · Yoga · Accountability
            </span>
            <h1 style={{ marginBottom: '24px', color: 'var(--charcoal)' }}>
              {headline}
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '36px', maxWidth: '520px', color: 'var(--charcoal-mid)' }}>
              {sub}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <button
                onClick={onBookCall}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '16px 36px' }}
              >
                {ctaLabel} →
              </button>
              <button
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '16px 28px' }}
              >
                See the Program
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '40px' }}>
              {['Certified Yoga Instructor', 'Florida-Based, Online Worldwide', '30-Day Accountability Program'].map((badge) => (
                <div key={badge} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontSize: '0.825rem',
                  color: 'var(--charcoal-mid)',
                  fontWeight: 500,
                }}>
                  <span style={{ color: 'var(--teal)', fontSize: '1rem' }}>✓</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            animation: 'fadeSlideUp 0.8s 0.2s both',
          }}>
            <HeroImageArea image={data?.heroImage} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.5,
        animation: 'bounce 2s infinite',
      }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal-mid)' }}>
          Scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 768px) {
          #home > .container > div {
            grid-template-columns: 1fr !important;
          }
          #home > .container > div > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}

function HeroImageArea({ image }) {
  const hasImage = image?.asset?.url

  return (
    <div style={{
      width: 'clamp(280px, 45vw, 500px)',
      height: 'clamp(320px, 50vw, 560px)',
      borderRadius: '60% 40% 55% 45% / 50% 45% 55% 50%',
      overflow: 'hidden',
      border: '4px solid rgba(255,255,255,0.8)',
      boxShadow: '0 20px 60px rgba(45,155,138,0.2), 0 8px 20px rgba(0,0,0,0.08)',
      position: 'relative',
    }}>
      {hasImage ? (
        <img
          src={image.asset.url}
          alt="Maria — Soothing Solutions"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(160deg, var(--teal) 0%, var(--sage) 50%, var(--teal-dark) 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.1)" />
            <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.6)" />
            <path d="M12 68c0-15 12.7-28 28-28s28 12.7 28 28" fill="rgba(255,255,255,0.4)" />
          </svg>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1rem' }}>
            Maria's Photo
          </span>
        </div>
      )}
    </div>
  )
}

function LeafDecoration({ style }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
    >
      <path
        d="M100 10 C140 40 170 100 150 180 C130 240 60 270 30 220 C0 170 20 80 60 40 C80 20 90 10 100 10Z"
        fill="var(--teal)"
      />
      <line x1="100" y1="10" x2="90" y2="260" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      <line x1="90" y1="80" x2="50" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="95" y1="120" x2="40" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="97" y1="160" x2="45" y2="158" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="90" y1="80" x2="140" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <line x1="95" y1="120" x2="150" y2="115" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    </svg>
  )
}
