import { useState, useEffect } from 'react'
import { client } from '../sanity/client'
import { PERSONAL_TRAINERS_QUERY, TRAINERS_QUERY } from '../sanity/queries'
import { urlFor } from '../sanity/imageUrl'

export default function PersonalTrainers() {
  const [section, setSection] = useState(null)
  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    Promise.all([
      client.fetch(PERSONAL_TRAINERS_QUERY).catch(() => null),
      client.fetch(TRAINERS_QUERY).catch(() => []),
    ]).then(([s, t]) => {
      setSection(s)
      setTrainers(t || [])
    })
  }, [])

  if (!trainers.length && !section) return null

  const eyebrow   = section?.eyebrow   || 'Meet The Team'
  const heading   = section?.heading   || 'Our Personal Trainers'
  const subheading = section?.subheading || ''

  return (
    <section id="trainers" style={{ background: '#0d0d0d', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            color: '#e63946',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            {eyebrow}
          </p>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: subheading ? '20px' : 0,
          }}>
            {heading}
          </h2>
          {subheading && (
            <p style={{
              color: '#aaa',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: '0 auto',
            }}>
              {subheading}
            </p>
          )}
        </div>

        {/* Trainer cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '40px',
        }}>
          {trainers.map(t => (
            <TrainerCard key={t._id} trainer={t} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #trainers .trainer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function TrainerCard({ trainer }) {
  const imgUrl = trainer.image ? urlFor(trainer.image).width(600).height(700).fit('crop').url() : null

  return (
    <div style={{
      background: '#161616',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid #222',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Photo */}
      {imgUrl ? (
        <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
          <img
            src={imgUrl}
            alt={trainer.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Red gradient overlay at bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          }} />
        </div>
      ) : (
        <div style={{
          aspectRatio: '3/4',
          background: '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontSize: '3rem', color: '#444' }}>👤</span>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
            {trainer.name}
          </h3>
          {trainer.role && (
            <p style={{ color: '#e63946', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '4px' }}>
              {trainer.role}
            </p>
          )}
        </div>

        {/* Accolades */}
        {trainer.accolades?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {trainer.accolades.map((a, i) => (
              <span key={i} style={{
                background: 'rgba(230, 57, 70, 0.12)',
                border: '1px solid rgba(230, 57, 70, 0.3)',
                color: '#e63946',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                padding: '4px 10px',
                borderRadius: '20px',
                textTransform: 'uppercase',
              }}>
                {a}
              </span>
            ))}
          </div>
        )}

        {/* Bio */}
        {trainer.bio && (
          <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
            {trainer.bio}
          </p>
        )}
      </div>
    </div>
  )
}
