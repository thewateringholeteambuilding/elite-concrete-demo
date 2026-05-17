import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'var(--color-steel-deep)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-brass)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.3)' : 'none',
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo + tagline */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.1rem',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--color-off-white)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            ELITE <span style={{ color: 'var(--color-brass)' }}>CONCRETE</span>
          </span>
          <span
            className="nav-tagline"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.5rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-gray)',
              opacity: 0.5,
            }}
          >
            Form. Pour. Finish.&trade;
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            alignItems: 'center',
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: location.pathname === link.to
                    ? 'var(--color-brass)'
                    : 'var(--color-warm-gray)',
                  transition: 'color 150ms ease',
                  paddingBottom: '4px',
                  borderBottom: location.pathname === link.to
                    ? '2px solid var(--color-brass)'
                    : '2px solid transparent',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop phone CTA */}
        <a
          href="tel:+18082813018"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--color-brass)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
          className="nav-phone"
        >
          <Phone size={14} />
          (808) 281-3018
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-off-white)',
            padding: '0.25rem',
          }}
          className="nav-hamburger"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: 'var(--color-steel-deep)',
            borderTop: '1px solid var(--color-steel-light)',
            padding: '1.5rem',
          }}
          className="nav-mobile-menu"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: location.pathname === link.to
                      ? 'var(--color-brass)'
                      : 'var(--color-warm-gray)',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--color-steel-light)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+18082813018"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--color-brass)',
              textDecoration: 'none',
            }}
          >
            <Phone size={16} />
            (808) 281-3018
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-phone { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-tagline { display: none !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  )
}
