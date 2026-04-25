import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'hsl(220, 30%, 7%)',
        borderTop: '3px solid hsl(38, 85%, 55%)',
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
              color: 'hsl(40, 20%, 96%)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            ELITE <span style={{ color: 'hsl(38, 85%, 55%)' }}>CONCRETE</span>
          </p>
          <p style={{ color: 'hsl(220, 10%, 55%)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>
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
              color: 'hsl(38, 85%, 55%)',
              marginBottom: '1.25rem',
            }}
          >
            Pages
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
                    color: 'hsl(220, 10%, 60%)',
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

        {/* Contact info */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'hsl(38, 85%, 55%)',
              marginBottom: '1.25rem',
            }}
          >
            Contact
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <a
                href="tel:+18082813018"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'hsl(40, 20%, 80%)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                <Phone size={14} style={{ color: 'hsl(38, 85%, 55%)', flexShrink: 0 }} />
                (808) 281-3018
              </a>
            </li>
            <li>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'hsl(220, 10%, 55%)', fontSize: '0.875rem' }}>
                <MapPin size={14} style={{ color: 'hsl(38, 85%, 55%)', flexShrink: 0, marginTop: '2px' }} />
                <span>750 Malaihi Rd<br />Wailuku, HI 96793</span>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'hsl(220, 10%, 55%)', fontSize: '0.875rem' }}>
                <Mail size={14} style={{ color: 'hsl(38, 85%, 55%)' }} />
                License C-27903 · BBB A+
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '2rem',
          borderTop: '1px solid hsl(220, 15%, 16%)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <p style={{ color: 'hsl(220, 10%, 40%)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Elite Concrete LLC. All rights reserved.
        </p>
        <p style={{ color: 'hsl(220, 10%, 40%)', fontSize: '0.8rem' }}>
          Wailuku, Maui, Hawaii
        </p>
      </div>
    </footer>
  )
}
