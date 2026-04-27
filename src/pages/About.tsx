import { Link } from 'react-router-dom'
import { Phone, ShieldCheck, Award } from 'lucide-react'

const ABOUT_IMG = 'https://images.unsplash.com/photo-1694521787162-5373b598945c?auto=format&fit=crop&w=900&q=80'
const TEAM_IMG  = 'https://images.unsplash.com/photo-1575971637203-d6255d9947a9?auto=format&fit=crop&w=800&q=80'

export default function About() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* ── Page header ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '5rem 1.5rem 4rem',
          borderBottom: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '1rem' }}>About Us</p>
          <h1
            id="about-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '1.25rem',
            }}
          >
            WAILUKU-BASED.<br />
            <span style={{ color: 'var(--color-brass)' }}>MAUI-ROOTED.</span>
          </h1>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '560px' }}>
            Elite Concrete LLC operates out of Wailuku, serving residential and commercial concrete needs across Maui County. Licensed, BBB A+ rated, and built on Central Maui's actual ground conditions.
          </p>
        </div>
      </section>

      {/* ── Story section ─────────────────────────────────────────────── */}
      <section
        aria-label="Company story"
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
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="story-grid"
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 1rem + 3vw, 3rem)',
                fontWeight: 700,
                color: 'var(--color-off-white)',
                marginBottom: '1.5rem',
              }}
            >
              CONCRETE THAT HOLDS IN HAWAII
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--color-warm-gray)', fontSize: '0.975rem', lineHeight: 1.8 }}>
              <p>
                Elite Concrete LLC was started to do one thing: pour concrete that holds on Maui. Not mainland concrete work adapted for Hawaii, but work designed from the ground up for volcanic soil, salt air, tropical humidity, and the seismic loads this island actually sees.
              </p>
              <p>
                Our base is Wailuku, which puts us close to Central Maui's growth corridor and a short drive from Kahului, Kihei, and Upcountry. We work residential pours alongside commercial slabs and concrete sawing. The licensing, crew size, and mix engineering stay the same regardless of project scale.
              </p>
              <p>
                Every quote comes with a site visit. We document soil conditions before we price the job. Drainage is engineered before any form gets set. That's the process on a $4,000 driveway and a $40,000 foundation.
              </p>
              <p>
                Hawaii Contractor License C-27903. BBB A+ rated. Fully insured.
              </p>
            </div>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-brass">Request a Quote</Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>

          <div>
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <img
                src={ABOUT_IMG}
                alt="Concrete pour in progress on Maui"
                loading="lazy"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1px',
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: 'var(--color-brass)',
                }}
              />
            </div>
            <img
              src={TEAM_IMG}
              alt="Construction equipment on a Maui jobsite"
              loading="lazy"
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── License & credentials ─────────────────────────────────────── */}
      <section
        aria-label="Licensing and credentials"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: 'var(--space-section) 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 1rem + 3vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            LICENSED. INSURED. RATED.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: <ShieldCheck size={22} style={{ color: 'var(--color-brass)' }} />,
                title: 'Hawaii Contractor License C-27903',
                desc: 'Licensed by the Hawaii Department of Commerce and Consumer Affairs. Verified active. Concrete contracting and concrete sawing.',
              },
              {
                icon: <Award size={22} style={{ color: 'var(--color-brass)' }} />,
                title: 'BBB Accreditation',
                desc: 'A+ rating with the Better Business Bureau. Rating reflects consistent resolution of client concerns.',
              },
              {
                icon: <ShieldCheck size={22} style={{ color: 'var(--color-brass)' }} />,
                title: 'Fully Insured',
                desc: 'General liability and workers compensation insurance maintained on all projects. Certificates of insurance available for GCs and property owners.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'var(--color-steel-mid)',
                  borderTop: '3px solid var(--color-brass)',
                  padding: '2rem',
                }}
              >
                <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-off-white)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maui service area ─────────────────────────────────────────── */}
      <section
        aria-label="Service area"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          borderTop: '1px solid var(--color-steel-light)',
          padding: 'var(--space-section) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 1rem + 3vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '1rem',
            }}
          >
            WE SERVE ALL OF MAUI
          </h2>
          <p style={{ color: 'var(--color-warm-gray)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Based in Wailuku. Our crew travels for the right project. Residential, commercial, and contractor-direct work across Maui County.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            {['Wailuku', 'Kahului', 'Kihei', 'Wailea', 'Lahaina', 'Kaanapali', 'Makawao', 'Paia', 'Haiku', 'Pukalani', 'Upcountry Maui'].map((town) => (
              <span
                key={town}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-warm-gray)',
                  backgroundColor: 'var(--color-steel-mid)',
                  border: '1px solid var(--color-steel-light)',
                  padding: '0.4rem 1rem',
                }}
              >
                {town}
              </span>
            ))}
          </div>
          <a
            href="tel:+18082813018"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--color-brass)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            <Phone size={16} />
            (808) 281-3018
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
