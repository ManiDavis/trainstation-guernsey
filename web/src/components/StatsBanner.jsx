export default function StatsBanner({ settings }) {
  const {
    statsBannerHeading,
    statsBannerStyle = 'red',
    statsBannerStats = [],
  } = settings

  if (!statsBannerStats.length) return null

  const isRed = statsBannerStyle === 'red'

  return (
    <section style={{
      background: isRed ? '#c0392b' : '#111',
      padding: '64px 24px',
      borderTop: isRed ? 'none' : '1px solid #222',
      borderBottom: isRed ? 'none' : '1px solid #222',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {statsBannerHeading && (
          <p style={{
            textAlign: 'center',
            color: isRed ? 'rgba(255,255,255,0.85)' : '#aaa',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}>
            {statsBannerHeading}
          </p>
        )}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '48px 72px',
        }}>
          {statsBannerStats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 900,
                color: isRed ? '#fff' : '#e63946',
                lineHeight: 1,
                fontFamily: 'var(--font-display, sans-serif)',
                letterSpacing: '-0.02em',
              }}>
                {stat.value}
              </div>
              <div style={{
                color: isRed ? 'rgba(255,255,255,0.8)' : '#888',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '8px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
