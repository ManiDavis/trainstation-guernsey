const STYLES = {
  red: {
    background: '#c0392b',
    color: '#fff',
    linkColor: '#fff',
    linkBorder: 'rgba(255,255,255,0.7)',
  },
  dark: {
    background: '#111',
    color: '#fff',
    linkColor: '#e63946',
    linkBorder: '#e63946',
  },
  yellow: {
    background: '#f4c430',
    color: '#111',
    linkColor: '#111',
    linkBorder: '#111',
  },
}

export default function AnnouncementBanner({ settings }) {
  const {
    announcementText,
    announcementLinkLabel,
    announcementLinkUrl,
    announcementStyle = 'red',
  } = settings

  if (!announcementText) return null

  const s = STYLES[announcementStyle] ?? STYLES.red

  return (
    <div
      style={{
        background: s.background,
        color: s.color,
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        lineHeight: 1.4,
        zIndex: 9999,
        position: 'relative',
      }}
    >
      <span>{announcementText}</span>
      {announcementLinkLabel && announcementLinkUrl && (
        <a
          href={announcementLinkUrl}
          style={{
            color: s.linkColor,
            border: `1px solid ${s.linkBorder}`,
            borderRadius: '4px',
            padding: '3px 10px',
            textDecoration: 'none',
            fontSize: '0.8rem',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          {announcementLinkLabel}
        </a>
      )}
    </div>
  )
}
