import { useState } from 'react'
import { useReveal } from '../useReveal'

export default function Contact({ data, siteSettings }) {
  const headRef = useReveal()
  const formRef = useReveal()

  const headline = data?.headline || 'Let\'s Talk Wellness'
  const subheadline = data?.subheadline || 'Whether you\'re curious about yoga, interested in the Blueprint, or just want to say hi — Maria would love to hear from you.'
  const bookingHeadline = data?.bookingHeadline || 'Book a Free Discovery Call'
  const bookingDesc = data?.bookingDescription || 'Not sure where to start? A 20-minute discovery call is completely free, completely pressure-free, and 100% focused on you. Let\'s figure out what your next best step is.'
  const calendlyUrl = data?.calendlyUrl || siteSettings?.calendlyUrl || null
  const formHeadline = data?.formHeadline || 'Or Send a Message'
  const formSubtext = data?.formSubtext || 'Maria personally reads every message and replies within 2 business days.'
  const email = siteSettings?.email || 'hello@soothing-solutions.com'
  const location = siteSettings?.location || 'Florida, USA'

  return (
    <section id="contact" className="section section--white" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
        background: 'linear-gradient(180deg, var(--teal-pale) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div ref={headRef} className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">{headline}</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>{subheadline}</p>
        </div>

        {/* Quick contact info */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '56px',
        }}>
          {[
            { icon: '📍', label: 'Location', value: location },
            { icon: '✉️', label: 'Email', value: email },
            { icon: '🌐', label: 'Services', value: 'Online Worldwide' },
          ].map((item) => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: 'var(--white)', borderRadius: 'var(--radius-md)',
              padding: '14px 20px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--cream-dark)',
            }}>
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)' }}>
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 'clamp(32px, 5vw, 60px)',
          alignItems: 'start',
        }}>
          {/* Booking */}
          <div className="reveal">
            <div style={{
              background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(28px, 4vw, 40px)',
              color: 'white',
              marginBottom: '24px',
            }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }}>📅</span>
              <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '1.4rem' }}>
                {bookingHeadline}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.9375rem' }}>
                {bookingDesc}
              </p>

              {/* Calendly embed area */}
              {calendlyUrl ? (
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white"
                  style={{ display: 'inline-flex' }}
                >
                  Choose Your Time →
                </a>
              ) : (
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '2px dashed rgba(255,255,255,0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px 20px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📆</div>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                    Calendly Booking Widget
                  </div>
                  <div style={{ fontSize: '0.775rem', color: 'rgba(255,255,255,0.55)', marginTop: '6px' }}>
                    Add your Calendly URL in Site Settings to enable booking
                  </div>
                </div>
              )}
            </div>

            {/* What to expect */}
            <div style={{
              background: 'var(--teal-pale)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
            }}>
              <h4 style={{ marginBottom: '12px', fontSize: '0.9rem', color: 'var(--teal-dark)' }}>
                What to expect on the call:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Tell Maria where you are & where you want to be',
                  'Discover which service is the right fit',
                  'Get honest, personalised guidance',
                  'No pressure, no sales pitch',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '8px', fontSize: '0.875rem', color: 'var(--teal-dark)' }}>
                    <span style={{ flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="reveal reveal-delay-2">
            <h3 style={{ marginBottom: '6px', fontSize: '1.4rem' }}>{formHeadline}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '24px' }}>{formSubtext}</p>
            <ContactForm email={email} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function ContactForm({ email }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Placeholder — integrate with email service
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid var(--cream-dark)',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.9375rem',
    fontFamily: 'var(--font-body)',
    background: 'var(--white)',
    color: 'var(--charcoal)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  if (status === 'sent') {
    return (
      <div style={{
        background: 'var(--sage-light)',
        borderRadius: 'var(--radius-md)',
        padding: '40px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🌿</div>
        <h3 style={{ color: 'var(--teal-dark)', marginBottom: '8px' }}>Message received!</h3>
        <p style={{ color: 'var(--charcoal-mid)', fontSize: '0.9375rem' }}>
          Maria will get back to you within 2 business days. In the meantime, feel free to explore the resources section!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--charcoal-mid)', marginBottom: '6px' }}>
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--cream-dark)'}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--charcoal-mid)', marginBottom: '6px' }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--cream-dark)'}
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--charcoal-mid)', marginBottom: '6px' }}>
          I\'m interested in...
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--cream-dark)'}
        >
          <option value="">Select a topic</option>
          <option value="yoga-one-on-one">One-on-One Yoga</option>
          <option value="yoga-chair">Chair Yoga</option>
          <option value="yoga-children">Children\'s Yoga</option>
          <option value="yoga-group">Group Classes</option>
          <option value="blueprint">30 Day Accountability Blueprint</option>
          <option value="ebook">Fatigue With Me Ebook</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--charcoal-mid)', marginBottom: '6px' }}>
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell Maria a bit about where you are and what you\'re looking for..."
          required
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--cream-dark)'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary"
        style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message →'}
      </button>

      <p style={{ fontSize: '0.775rem', color: 'var(--muted)', textAlign: 'center' }}>
        Or email directly: <a href={`mailto:${email}`} style={{ color: 'var(--teal)', fontWeight: 500 }}>{email}</a>
      </p>
    </form>
  )
}
