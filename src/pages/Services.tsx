import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Service {
  title: string
  desc: string[]
  img: string
  tags: string[]
}

const services: Service[] = [
  {
    title: 'Concrete Foundations',
    desc: [
      'Stem walls, grade beams, continuous footings, and slab-on-grade systems. Every foundation starts with a soil profile and drainage assessment. Volcanic soils on Maui range from compact basalt to loose cinder, and each pours differently.',
      'Seismic zone requirements and Hawaii building code followed on all foundation work. Rebar schedule documented. Inspection-ready framing before pour day.',
    ],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Commercial', 'IBC Compliant', 'Permit-Ready'],
  },
  {
    title: 'Driveways & Parking Areas',
    desc: [
      'Broom-finish, exposed aggregate, and stamped concrete driveways. Sub-base compacted and inspected. Drainage pitch engineered before forms are placed.',
      'Salt air and tropical moisture are factored into every mix design. Surface sealers specified for coastal exposure. Minimum 3,500 PSI mix on all flatwork.',
    ],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Commercial', 'Stamped Available', 'Sealed Finish'],
  },
  {
    title: 'Retaining Walls',
    desc: [
      'Gravity and poured-concrete retaining walls for residential lots and hillside properties across Maui. Drainage core is standard on every wall, not an add-on.',
      'Upcountry slopes, Wailuku hillsides, and coastal lots all present different soil saturation profiles. Engineered to the conditions, not a standard template.',
    ],
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'Hillside Properties', 'Drainage Engineered'],
  },
  {
    title: 'Decorative Concrete',
    desc: [
      'Stamped, stained, acid-etched, and polished finishes for lanais, pool decks, walkways, and commercial lobbies. Pattern and color selection before the pour. Samples available.',
      "Hawaii's UV exposure bleaches untreated surfaces. Sealers rated for tropical conditions specified on every decorative job. Color holds for years with proper maintenance.",
    ],
    img: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=800&q=80',
    tags: ['Lanai', 'Pool Deck', 'Commercial', 'UV-Rated Sealers'],
  },
  {
    title: 'Commercial Slabs',
    desc: [
      'Warehouse floors, loading docks, retail slabs, and commercial parking. Floor flatness specifications documented. Control joints cut at 24 hours. Re-temp protection on hot Maui afternoons when rapid evaporation is a risk.',
      'Experience with GC-direct and owner-direct projects. Certificate of insurance available. Licensed C-27903.',
    ],
    img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
    tags: ['Warehouse', 'Retail', 'Loading Docks', 'GC-Direct'],
  },
  {
    title: 'Sidewalks & Walkways',
    desc: [
      'Residential walkways, ADA-compliant ramps, and commercial pedestrian paving. Expansion joints placed to standard. Surface texture and slip resistance matched to application.',
      'Trenching and sub-base preparation included. Existing concrete sawing for tie-in work available.',
    ],
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
    tags: ['Residential', 'ADA Ramps', 'Commercial'],
  },
  {
    title: 'Concrete Sawing',
    desc: [
      'Precision saw-cutting for control joints, utility access openings, and slab removal. Dry and wet cutting available. Dust and slurry contained and managed on-site.',
      'Available as a standalone service for GCs, property managers, and owner-direct clients. Core drilling also available for utility penetrations.',
    ],
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
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
          backgroundColor: 'hsl(220, 30%, 10%)',
          padding: '5rem 1.5rem 4rem',
          borderBottom: '1px solid hsl(220, 15%, 18%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '1rem' }}>§ Services</p>
          <h1
            id="services-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
              fontWeight: 700,
              color: 'hsl(40, 20%, 96%)',
              marginBottom: '1.25rem',
            }}
          >
            EVERYTHING<br />
            <span style={{ color: 'hsl(38, 85%, 55%)' }}>IN CONCRETE.</span>
          </h1>
          <p style={{ color: 'hsl(220, 10%, 60%)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '560px' }}>
            Seven concrete services. All engineered for Maui's soil, climate, and building code. License C-27903.
          </p>
        </div>
      </section>

      {/* ── Services list — alternating layout ────────────────────────── */}
      <section aria-label="Services list" style={{ backgroundColor: 'hsl(220, 20%, 13%)' }}>
        {services.map((service, i) => (
          <article
            key={service.title}
            style={{
              borderBottom: '1px solid hsl(220, 15%, 20%)',
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
                    borderLeft: i % 2 === 0 ? 'none' : '4px solid hsl(38, 85%, 55%)',
                    borderRight: i % 2 === 0 ? '4px solid hsl(38, 85%, 55%)' : 'none',
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
                    color: 'hsl(40, 20%, 96%)',
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
                      color: 'hsl(220, 10%, 60%)',
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
                        color: 'hsl(38, 85%, 55%)',
                        border: '1px solid hsl(38, 85%, 40%)',
                        padding: '0.3rem 0.75rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'hsl(38, 85%, 55%)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Get a quote <ArrowRight size={13} />
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
          backgroundColor: 'hsl(220, 30%, 10%)',
          borderTop: '3px solid hsl(38, 85%, 55%)',
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
              color: 'hsl(40, 20%, 96%)',
              marginBottom: '1rem',
            }}
          >
            READY TO PLAN YOUR JOB?
          </h2>
          <p style={{ color: 'hsl(220, 10%, 55%)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Free estimates for all Maui projects. Owner-operated. Hawaii License C-27903.
          </p>
          <Link to="/contact" className="btn-brass">
            Contact Us
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-article {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </main>
  )
}
