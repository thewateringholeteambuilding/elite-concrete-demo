import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-steel-deep)',
        borderTop: '3px solid var(--color-brass)',
        padding: '4rem 1.5rem 2rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            ELITE <span style={{ color: 'var(--color-brass)' }}>CONCRETE</span>
          </p>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>
            Wailuku-based concrete contractor. Foundations, driveways, retaining walls, and decorative work across Maui. Hawaii License C-27903.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-brass)',
              marginBottom: '1.25rem',
            }}
          >
            Navigate
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Gallery', to: '/gallery' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--color-warm-gray)',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services (deep links) */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-brass)',
              marginBottom: '1.25rem',
            }}
          >
            What We Pour
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Foundations', to: '/services#foundations' },
              { label: 'Driveways', to: '/services#driveways' },
              { label: 'Retaining Walls', to: '/services#retaining-walls' },
              { label: 'Decorative', to: '/services#decorative' },
              { label: 'Commercial Slabs', to: '/services#commercial-slabs' },
              { label: 'Sidewalks', to: '/services#sidewalks' },
              { label: 'Sawing', to: '/services#sawing' },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--color-warm-gray)',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas Served */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-brass)',
              marginBottom: '1.25rem',
            }}
          >
            Areas Served
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Central Maui', count: 218 },
              { label: 'South Maui', count: 147 },
              { label: 'West Maui', count: 64 },
              { label: 'Upcountry', count: 58 },
            ].map((area) => (
              <li key={area.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Link
                  to="/"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--color-warm-gray)',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                >
                  {area.label}
                </Link>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--color-brass)',
                    opacity: 0.5,
                  }}
                >
                  {area.count}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-brass)',
              marginBottom: '1.25rem',
            }}
          >
            Reach Us
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <a
                href="tel:+18082813018"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--color-warm-gray)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                <Phone size={14} style={{ color: 'var(--color-brass)', flexShrink: 0 }} />
                (808) 281-3018
              </a>
            </li>
            <li>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--color-warm-gray)', fontSize: '0.875rem' }}>
                <MapPin size={14} style={{ color: 'var(--color-brass)', flexShrink: 0, marginTop: '2px' }} />
                <span>750 Malaihi Rd<br />Wailuku, HI 96793</span>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-warm-gray)', fontSize: '0.875rem' }}>
                <Mail size={14} style={{ color: 'var(--color-brass)' }} />
                License C-27903 · BBB A+
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Brand promise */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 0',
          paddingBottom: '2rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-off-white)',
            marginBottom: '0.5rem',
          }}
        >
          Form. Pour. Finish.&trade;
        </p>
        <p
          style={{
            color: 'var(--color-warm-gray)',
            fontSize: '0.8rem',
            lineHeight: 1.6,
            opacity: 0.7,
            marginBottom: '1rem',
          }}
        >
          487 pours across Maui since 2014. One crew, one owner, one phone number.
        </p>
        <a
          href="tel:+18082813018"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: 'var(--color-brass)',
            textDecoration: 'none',
          }}
        >
          <Phone size={16} />
          (808) 281-3018
        </a>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-steel-light)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Elite Concrete LLC. All rights reserved.
        </p>
        <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem' }}>
          Wailuku, Maui, Hawaii
        </p>
      </div>
    </footer>
  )
}
