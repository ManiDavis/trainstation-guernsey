import { useEffect, useRef, useState } from 'react'

const REVIEWS = [
  {
    name: 'Dalton Beausire',
    initials: 'DB',
    rating: 5,
    date: '3 years ago',
    text: 'Most definitely the best gym on island for weightlifters, good range of cardio equipment, which is separate to the weightlifting room meaning you do not have to deal with the noise if that is not your thing. Prices great too especially for students.',
    color: '#2563EB',
  },
  {
    name: 'Joe Lampshire',
    initials: 'JL',
    rating: 5,
    date: '1 year ago',
    text: 'Brilliant gym, great atmosphere and a very good balance of equipment which caters for the need of all. We will be back!',
    color: '#16A34A',
  },
  {
    name: 'Chris Lewis',
    initials: 'CL',
    rating: 5,
    date: '6 years ago',
    text: 'Great gym in a convenient out of town location. Plenty of weight and cardio machines and free weights upstairs plus a separate area downstairs for serious weight lifters. All at a very reasonable price.',
    color: '#D97706',
  },
  {
    name: 'Alex M.',
    initials: 'AM',
    rating: 5,
    date: '6 years ago',
    text: 'Great equipment and friendly owner. More than I can say for other gyms around. Reasonably priced as well.',
    color: '#7C3AED',
  },
  {
    name: 'Natalie Jones',
    initials: 'NJ',
    rating: 5,
    date: '3 years ago',
    text: 'Fantastic gym with a welcoming atmosphere. Great variety of equipment and the staff are always helpful and motivating. Would highly recommend to anyone looking to get fit in Guernsey.',
    color: '#DB2777',
  },
  {
    name: 'Local Guide',
    initials: 'LG',
    rating: 5,
    date: '2 years ago',
    text: 'Top-notch facility. The Rogue equipment is in excellent condition, plenty of space, and never feels overcrowded. The personal trainers are knowledgeable and really help you make the most of your sessions.',
    color: '#0891B2',
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => <span key={i}>★</span>)}
    </div>
  )
}

function ReviewCard({ review, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`card reveal reveal-delay-${(index % 3) + 1}`}
      style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      {/* Google logo + stars */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Stars count={review.rating} />
        <GoogleLogo />
      </div>

      {/* Quote */}
      <p style={{
        fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--off-white)',
        flex: 1, fontStyle: 'italic',
      }}>
        "{review.text}"
      </p>

      {/* Reviewer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8, paddingTop: 16, borderTop: '1px solid var(--dark-border)' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
          background: review.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'white',
        }}>
          {review.initials}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--white)' }}>{review.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{review.date} · Google Review</div>
        </div>
      </div>
    </div>
  )
}

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.4a4.6 4.6 0 0 1-2 3.02v2.51h3.23c1.89-1.74 2.97-4.3 2.97-7.32z" fill="#4285F4"/>
      <path d="M10 20c2.7 0 4.96-.9 6.62-2.45l-3.23-2.51c-.9.6-2.05.95-3.39.95-2.6 0-4.8-1.76-5.59-4.12H1.1v2.6A10 10 0 0 0 10 20z" fill="#34A853"/>
      <path d="M4.41 11.87A5.94 5.94 0 0 1 4.1 10c0-.65.11-1.28.31-1.87V5.53H1.1A10 10 0 0 0 0 10c0 1.61.39 3.14 1.1 4.47l3.31-2.6z" fill="#FBBC05"/>
      <path d="M10 3.98c1.46 0 2.77.5 3.8 1.49l2.85-2.85C14.95.99 12.7 0 10 0A10 10 0 0 0 1.1 5.53l3.31 2.6C5.2 5.74 7.4 3.98 10 3.98z" fill="#EA4335"/>
    </svg>
  )
}

export default function Reviews() {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="reviews" className="section section--darker">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow">What Members Say</span>
          <h2 style={{ color: 'var(--white)' }}>Real Results.<br />Real Reviews.</h2>
          <div className="red-line red-line--center" />

          {/* Rating summary */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 700, color: 'var(--white)', lineHeight: 1 }}>5.0</div>
            <div>
              <Stars count={5} />
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 4 }}>Based on Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid-3">
          {REVIEWS.map((r, i) => <ReviewCard key={r.name + i} review={r} index={i} />)}
        </div>

        {/* Google CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 16 }}>Love TrainStation? Leave us a review on Google!</p>
          <a
            href="https://www.google.com/search?q=The+Train+Station+Guernsey"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-red"
            style={{ display: 'inline-flex' }}
          >
            <GoogleLogo /> Leave a Review
          </a>
        </div>
      </div>
    </section>
  )
}
