import { urlFor } from '../sanity/imageUrl'

export default function Gallery({ settings }) {
  const {
    galleryEyebrow,
    galleryHeading,
    galleryImages = [],
  } = settings

  if (!galleryImages.length) return null

  return (
    <section id="gallery" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {(galleryHeading || galleryEyebrow) && (
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            {galleryEyebrow && (
              <p style={{
                color: '#e63946',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                {galleryEyebrow}
              </p>
            )}
            {galleryHeading && (
              <h2 style={{
                color: '#fff',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
              }}>
                {galleryHeading}
              </h2>
            )}
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
        }}>
          {galleryImages.map((img, i) => {
            const src = urlFor(img).width(600).height(450).fit('crop').url()
            // First image spans 2 columns on wider screens for a feature effect
            return (
              <div
                key={img._key || i}
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  gridColumn: i === 0 ? 'span 2' : undefined,
                }}
              >
                <img
                  src={src}
                  alt={img.alt || `Gallery photo ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #gallery div[style*="grid"] > div { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
