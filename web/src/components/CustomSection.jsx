import { urlFor } from '../sanity/imageUrl'

export default function CustomSection({ settings }) {
  const {
    contentBlockLayout = 'image-right',
    contentBlockEyebrow,
    contentBlockHeading,
    contentBlockBody,
    contentBlockImage,
    contentBlockCtaLabel,
    contentBlockCtaUrl,
  } = settings

  if (!contentBlockHeading && !contentBlockBody) return null

  const imageUrl = contentBlockImage
    ? urlFor(contentBlockImage).width(800).url()
    : null

  const textOnly = contentBlockLayout === 'text-only' || !imageUrl
  const imageLeft = contentBlockLayout === 'image-left'

  const textCol = (
    <div>
      {contentBlockEyebrow && (
        <p style={{
          color: '#e63946',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          {contentBlockEyebrow}
        </p>
      )}
      {contentBlockHeading && (
        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: '20px',
        }}>
          {contentBlockHeading}
        </h2>
      )}
      {contentBlockBody && (
        <p style={{
          color: '#ccc',
          fontSize: '1rem',
          lineHeight: 1.7,
          marginBottom: contentBlockCtaLabel ? '32px' : 0,
          whiteSpace: 'pre-line',
        }}>
          {contentBlockBody}
        </p>
      )}
      {contentBlockCtaLabel && contentBlockCtaUrl && (
        <a
          href={contentBlockCtaUrl}
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
          {contentBlockCtaLabel}
        </a>
      )}
    </div>
  )

  const imgCol = imageUrl && (
    <div>
      <img
        src={imageUrl}
        alt={contentBlockHeading || ''}
        style={{
          width: '100%',
          borderRadius: '12px',
          objectFit: 'cover',
          maxHeight: '480px',
          display: 'block',
        }}
      />
    </div>
  )

  return (
    <section id="extra" style={{ background: '#0a0a0a', color: '#fff', padding: '96px 24px' }}>
      <div style={{
        maxWidth: textOnly ? '760px' : '1100px',
        margin: '0 auto',
        display: textOnly ? 'block' : 'grid',
        gridTemplateColumns: imageUrl ? '1fr 1fr' : '1fr',
        gap: '64px',
        alignItems: 'center',
        textAlign: textOnly ? 'center' : 'left',
      }}>
        {imageLeft ? (
          <>{imgCol}{textCol}</>
        ) : (
          <>{textCol}{imgCol}</>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #extra > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
