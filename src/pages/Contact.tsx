import { useState } from 'react'
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Honeypot: real users leave this empty; bots fill it.
    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem(
      "company_website"
    ) as HTMLInputElement | null
    if (honeypot && honeypot.value.trim() !== "") {
      setSubmitted(true)
      return
    }

    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* ── Page header ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '5rem 1.5rem 4rem',
          borderBottom: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '1rem' }}>Contact</p>
          <h1
            id="contact-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '1.25rem',
            }}
          >
            LET'S TALK<br />
            <span style={{ color: 'var(--color-brass)' }}>CONCRETE.</span>
          </h1>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px' }}>
            Free estimates for Maui concrete work. Owner answers the phone. Call direct or use the form below.
          </p>
        </div>
      </section>

      {/* ── Contact section ──────────────────────────────────────────── */}
      <section
        aria-label="Contact information and form"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          padding: 'var(--space-section) 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '2fr 3fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: contact info */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-off-white)',
                marginBottom: '2rem',
                textTransform: 'uppercase',
              }}
            >
              REACH US DIRECTLY
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Phone */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'var(--color-brass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={16} color="var(--color-steel-deep)" />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '0.25rem' }}>
                    Phone
                  </p>
                  <a
                    href="tel:+18082813018"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-off-white)',
                      textDecoration: 'none',
                      letterSpacing: '0.03em',
                    }}
                  >
                    (808) 281-3018
                  </a>
                  <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Owner answers directly</p>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'var(--color-steel-mid)',
                    border: '1px solid var(--color-steel-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={16} color="var(--color-brass)" />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '0.25rem' }}>
                    Address
                  </p>
                  <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    750 Malaihi Rd<br />Wailuku, HI 96793
                  </p>
                </div>
              </div>

              {/* License */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'var(--color-steel-mid)',
                    border: '1px solid var(--color-steel-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={16} color="var(--color-brass)" />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '0.25rem' }}>
                    License & Rating
                  </p>
                  <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Hawaii License C-27903<br />BBB A+ Rating
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'var(--color-steel-mid)',
                    border: '1px solid var(--color-steel-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={16} color="var(--color-brass)" />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '0.25rem' }}>
                    Hours
                  </p>
                  <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Mon-Fri: 7am - 5pm<br />Saturday: By appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div style={{ marginTop: '2.5rem' }}>
              <iframe
                title="Elite Concrete LLC location map"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=750+Malaihi+Rd,Wailuku,HI+96793"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div
                style={{
                  backgroundColor: 'var(--color-steel-mid)',
                  borderTop: '3px solid var(--color-brass)',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--color-brass)',
                    marginBottom: '1rem',
                  }}
                >
                  MESSAGE RECEIVED.
                </p>
                <p style={{ color: 'var(--color-warm-gray)', lineHeight: 1.7 }}>
                  We'll follow up within one business day. For faster response, call (808) 281-3018 directly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: 'var(--color-steel-mid)',
                  borderTop: '3px solid var(--color-brass)',
                  padding: '2.5rem 2rem',
                }}
              >
                {/* Honeypot, hidden from real users, bots fill it */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                  <label htmlFor="company_website">Leave this field empty</label>
                  <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-off-white)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Request a Free Estimate
                </h3>
                <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.85rem', marginBottom: '2rem' }}>
                  Tell us about your project. We'll review and respond within one business day.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={inputStyle}
                    />
                  </div>

                  {/* Phone + Email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(808) 555-0100"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Service type */}
                  <div>
                    <label style={labelStyle}>Type of Work</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select a service</option>
                      <option>Concrete Foundation</option>
                      <option>Driveway or Parking</option>
                      <option>Retaining Wall</option>
                      <option>Decorative Concrete</option>
                      <option>Commercial Slab</option>
                      <option>Sidewalk or Walkway</option>
                      <option>Concrete Sawing</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Project Details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your project, location on Maui, and approximate timeline."
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-brass"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}
                  >
                    <Send size={14} />
                    Send Project Brief
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--color-brass) !important;
        }
        input::placeholder, textarea::placeholder {
          color: var(--color-warm-gray);
        }
      `}</style>
    </main>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-display)',
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--color-warm-gray)',
  marginBottom: '0.5rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'var(--color-steel-deep)',
  border: '1px solid var(--color-steel-light)',
  color: 'var(--color-warm-gray)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  padding: '0.75rem 1rem',
  borderRadius: 0,
  transition: 'border-color 150ms ease',
  boxSizing: 'border-box',
}
