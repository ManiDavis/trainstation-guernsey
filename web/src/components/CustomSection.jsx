import { urlFor } from '../sanity/imageUrl'

export default function CustomSection({ settings }) {
  const {
    customSectionEyebrow,
    customSectionHeading,
    customSectionBody,
    customSectionImage,
    customSectionCtaLabel,
    customSectionCtaUrl,
  } = settings

  if (!customSectionHeading && !customSectionBody) return null

  const imageUrl = customSectionImage
    ? urlFor(customSectionImage).width(800).url()
    : null

  return (
    <section
      id="extra"
      style={{
        background: '#0a0a0a',
        color: '#fff',
        padding: '96px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: imageUrl ? '1fr 1fr' : '1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Text column */}
        <div>
          {customSectionEyebrow && (
            <p
              style={{
                color: '#e63946',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              {customSectionEyebrow}
            </p>
          )}
          {customSectionHeading && (
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              {customSectionHeading}
            </h2>
          )}
          {customSectionBody && (
            <p
              style={{
                color: '#ccc',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: customSectionCtaLabel ? '32px' : 0,
                whiteSpace: 'pre-line',
              }}
            >
              {customSectionBody}
            </p>
          )}
          {customSectionCtaLabel && customSectionCtaUrl && (
            <a
              href={customSectionCtaUrl}
              style={{
                display: 'inline-block',
                background: '#e63946',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              {customSectionCtaLabel}
            </a>
          )}
        </div>

        {/* Image column */}
        {imageUrl && (
          <div>
            <img
              src={imageUrl}
              alt={customSectionHeading || ''}
              style={{
                width: '100%',
                borderRadius: '12px',
                objectFit: 'cover',
                maxHeight: '420px',
              }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
