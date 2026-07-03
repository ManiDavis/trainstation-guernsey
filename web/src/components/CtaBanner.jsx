export default function CtaBanner({ settings }) {
  const {
    ctaBannerStyle = 'red',
    ctaBannerEyebrow,
    ctaBannerHeading,
    ctaBannerSubtext,
    ctaBannerCtaLabel,
    ctaBannerCtaUrl,
    ctaBannerSecondaryLabel,
    ctaBannerSecondaryUrl,
  } = settings

  if (!ctaBannerHeading) return null

  const isRed = ctaBannerStyle === 'red'

  return (
    <section style={{
      background: isRed ? '#c0392b' : '#0a0a0a',
      padding: '96px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isRed
          ? 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)'
          : 'radial-gradient(ellipse at center, rgba(230,57,70,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {ctaBannerEyebrow && (
          <p style={{
            color: isRed ? 'rgba(255,255,255,0.75)' : '#e63946',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            {ctaBannerEyebrow}
          </p>
        )}

        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: ctaBannerSubtext ? '16px' : '40px',
          fontFamily: 'var(--font-display, sans-serif)',
        }}>
          {ctaBannerHeading}
        </h2>

        {ctaBannerSubtext && (
          <p style={{
            color: isRed ? 'rgba(255,255,255,0.85)' : '#aaa',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            marginBottom: '40px',
          }}>
            {ctaBannerSubtext}
          </p>
        )}

        {(ctaBannerCtaLabel || ctaBannerSecondaryLabel) && (
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {ctaBannerCtaLabel && ctaBannerCtaUrl && (
              <a
                href={ctaBannerCtaUrl}
                style={{
                  display: 'inline-block',
                  background: isRed ? '#fff' : '#e63946',
                  color: isRed ? '#c0392b' : '#fff',
                  padding: '16px 40px',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {ctaBannerCtaLabel}
              </a>
            )}
            {ctaBannerSecondaryLabel && ctaBannerSecondaryUrl && (
              <a
                href={ctaBannerSecondaryUrl}
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: '#fff',
                  padding: '16px 40px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.5)',
                }}
              >
                {ctaBannerSecondaryLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
