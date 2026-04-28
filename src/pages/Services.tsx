import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Service {
  id: string
  title: string
  shortLabel: string
  desc: string[]
  img: string
  tags: string[]
}

const services: Service[] = [
  {
    id: 'foundations',
    title: 'Concrete Foundations',
    shortLabel: 'Foundations',
    desc: [
      'Stem walls, grade beams, continuous footings, and slab-on-grade systems. Every foundation starts with a soil profile and drainage assessment. Volcanic soils on Maui range from compact basalt to loose cinder, and each pours differently.',
      'Seismic zone requirements and Hawaii building code followed on all foundation work. Rebar schedule documented. Inspection-ready framing before pour day.',
    ],
    img: 'https://images.unsplash.com/photo-1616179058441-37aa58affac8?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Commercial', 'IBC Compliant', 'Permit-Ready'],
  },
  {
    id: 'driveways',
    title: 'Driveways & Parking Areas',
    shortLabel: 'Driveways',
    desc: [
      'Broom-finish, exposed aggregate, and stamped concrete driveways. Sub-base compacted and inspected. Drainage pitch engineered before forms are placed.',
      'Salt air and tropical moisture are factored into every mix design. Surface sealers specified for coastal exposure. Minimum 3,500 PSI mix on all flatwork.',
    ],
    img: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Commercial', 'Stamped Available', 'Sealed Finish'],
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    shortLabel: 'Retaining Walls',
    desc: [
      'Gravity and poured-concrete retaining walls for residential lots and hillside properties across Maui. Drainage core is standard on every wall, not an add-on.',
      'Upcountry slopes, Wailuku hillsides, and coastal lots all present different soil saturation profiles. Engineered to the conditions, not a standard template.',
    ],
    img: 'https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Hillside Properties', 'Drainage Engineered'],
  },
  {
    id: 'decorative',
    title: 'Decorative Concrete',
    shortLabel: 'Decorative',
    desc: [
      'Stamped, stained, acid-etched, and polished finishes for lanais, pool decks, walkways, and commercial lobbies. Pattern and color selection before the pour. Samples available.',
      "Hawaii's UV exposure bleaches untreated surfaces. Sealers rated for tropical conditions specified on every decorative job. Color holds for years with proper maintenance.",
    ],
    img: 'https://images.unsplash.com/photo-1574757987642-5755f0839101?auto=format&fit=crop&w=800&q=80',
    tags: ['Lanai', 'Pool Deck', 'Commercial', 'UV-Rated Sealers'],
  },
  {
    id: 'commercial-slabs',
    title: 'Commercial Slabs',
    shortLabel: 'Commercial',
    desc: [
      'Warehouse floors, loading docks, retail slabs, and commercial parking. Floor flatness specifications documented. Control joints cut at 24 hours. Re-temp protection on hot Maui afternoons when rapid evaporation is a risk.',
      'Experience with GC-direct and owner-direct projects. Certificate of insurance available. Licensed C-27903.',
    ],
    img: 'https://images.unsplash.com/photo-1517011453931-c30f571a4fab?auto=format&fit=crop&w=800&q=80',
    tags: ['Warehouse', 'Retail', 'Loading Docks', 'GC-Direct'],
  },
  {
    id: 'sidewalks',
    title: 'Sidewalks & Walkways',
    shortLabel: 'Sidewalks',
    desc: [
      'Residential walkways, ADA-compliant ramps, and commercial pedestrian paving. Expansion joints placed to standard. Surface texture and slip resistance matched to application.',
      'Trenching and sub-base preparation included. Existing concrete sawing for tie-in work available.',
    ],
    img: 'https://images.unsplash.com/photo-1514514188727-ff38e839635e?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'ADA Ramps', 'Commercial'],
  },
  {
    id: 'sawing',
    title: 'Concrete Sawing',
    shortLabel: 'Sawing',
    desc: [
      'Precision saw-cutting for control joints, utility access openings, and slab removal. Dry and wet cutting available. Dust and slurry contained and managed on-site.',
      'Available as a standalone service for GCs, property managers, and owner-direct clients. Core drilling also available for utility penetrations.',
    ],
    img: 'https://images.unsplash.com/photo-1575971637203-d6255d9947a9?auto=format&fit=crop&w=800&q=80',
    tags: ['Control Joints', 'Core Drilling', 'GC-Direct', 'Standalone Service'],
  },
]

export default function Services() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* ── Page header ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '5rem 1.5rem 4rem',
          borderBottom: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '1rem' }}>Services</p>
          <h1
            id="services-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '1.25rem',
            }}
          >
            EVERYTHING<br />
            <span style={{ color: 'var(--color-brass)' }}>IN CONCRETE.</span>
          </h1>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '560px' }}>
            Seven concrete services. All engineered for Maui's soil, climate, and building code. License C-27903.
          </p>
        </div>
      </section>

      {/* ── Sticky service quick-nav ──────────────────────────────────── */}
      <nav
        aria-label="Jump to service"
        style={{
          position: 'sticky',
          top: '68px',
          zIndex: 20,
          backgroundColor: 'var(--color-steel-deep)',
          borderBottom: '1px solid var(--color-steel-light)',
          padding: '0.75rem 1.5rem',
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
          }}
          className="service-pills"
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-gray)',
                border: '1px solid var(--color-steel-light)',
                padding: '0.4rem 0.85rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'border-color 150ms ease, color 150ms ease',
              }}
              className="service-pill"
            >
              {s.shortLabel}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Services list, alternating layout ────────────────────────── */}
      <section aria-label="Services list" style={{ backgroundColor: 'var(--color-steel-mid)' }}>
        {services.map((service, i) => (
          <article
            key={service.title}
            id={service.id}
            style={{
              borderBottom: '1px solid var(--color-steel-light)',
              scrollMarginTop: '120px',
            }}
          >
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                direction: i % 2 === 0 ? 'ltr' : 'rtl',
              }}
              className="service-article"
            >
              {/* Image */}
              <div style={{ direction: 'ltr' }}>
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    display: 'block',
                    borderLeft: i % 2 === 0 ? 'none' : '4px solid var(--color-brass)',
                    borderRight: i % 2 === 0 ? '4px solid var(--color-brass)' : 'none',
                  }}
                />
              </div>

              {/* Copy */}
              <div style={{ direction: 'ltr' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 1rem + 2vw, 2.2rem)',
                    fontWeight: 700,
                    color: 'var(--color-off-white)',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {service.title}
                </h2>
                {service.desc.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      color: 'var(--color-warm-gray)',
                      lineHeight: 1.75,
                      fontSize: '0.95rem',
                      marginBottom: j < service.desc.length - 1 ? '1rem' : '1.75rem',
                    }}
                  >
                    {para}
                  </p>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-brass)',
                        border: '1px solid var(--color-brass-dark)',
                        padding: '0.3rem 0.75rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="service-cta-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-brass)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'gap 200ms ease',
                  }}
                >
                  Get a quote <ArrowRight size={13} className="service-cta-chevron" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Contact CTA"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          borderTop: '3px solid var(--color-brass)',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 1rem + 3vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '1rem',
            }}
          >
            YOUR FOUNDATION. YOUR TIMELINE. ONE CREW.
          </h2>
          <p style={{ color: 'var(--color-warm-gray)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Driveway replacement, new foundation, retaining wall, or commercial slab. Free estimates for all Maui projects. Owner-operated. License C-27903.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-brass">
              Get a Free Estimate
            </Link>
            <Link to="/gallery" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .service-pill:hover {
          border-color: var(--color-brass) !important;
          color: var(--color-brass) !important;
        }
        .service-cta-chevron {
          transition: transform 200ms ease;
        }
        .service-cta-link:hover .service-cta-chevron {
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .service-article {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .service-pills {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </main>
  )
}
