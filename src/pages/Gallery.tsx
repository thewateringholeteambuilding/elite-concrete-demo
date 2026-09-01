const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1616179058441-37aa58affac8?auto=format&fit=crop&w=900&q=80',
    caption: 'Foundation footing with rebar, 1,420 SF residential addition, Wailuku Heights',
    spec: 'Completed Nov 2024 · 4,000 PSI · #4 rebar at 12" O.C.',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1694521787162-5373b598945c?auto=format&fit=crop&w=700&q=80',
    caption: 'Concrete pour in progress, 3,200 SF commercial slab, Kahului Industrial Park',
    spec: 'Completed Jan 2025 · 4,500 PSI',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=700&q=80',
    caption: 'Finished driveway, 640 SF exposed aggregate, Makawao',
    spec: 'Completed Sept 2024 · Sealed for UV',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?auto=format&fit=crop&w=900&q=80',
    caption: 'Retaining wall, 68 LF poured wall with drainage core, Haiku',
    spec: 'Completed Aug 2024 · Engineered for slope drainage',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1574757987642-5755f0839101?auto=format&fit=crop&w=700&q=80',
    caption: 'Stamped concrete lanai, 380 SF Ashlar Slate pattern, Paia',
    spec: 'Completed Mar 2025 · UV-rated sealer',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1575971637203-d6255d9947a9?auto=format&fit=crop&w=700&q=80',
    caption: 'Site prep and equipment staging, commercial job, Kahului',
    spec: '95% modified Proctor compaction verified',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1517011453931-c30f571a4fab?auto=format&fit=crop&w=900&q=80',
    caption: 'Warehouse floor slab, 2,800 SF, joints cut at 24 hours, Maui Lani',
    spec: 'Completed Dec 2024 · Floor flatness spec documented',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1514514188727-ff38e839635e?auto=format&fit=crop&w=700&q=80',
    caption: 'Sidewalk flatwork, 120 LF ADA-compliant ramp, Wailuku Elementary',
    spec: 'Completed Feb 2025 · Community project, third year',
    wide: false,
  },
]

export default function Gallery() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* ── Page header ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="gallery-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '5rem 1.5rem 4rem',
          borderBottom: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1
            id="gallery-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '1rem',
            }}
          >
            BEFORE THE FORMS. AFTER THE CURE.
          </h1>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '520px' }}>
            487 projects across Maui. Foundations, driveways, walls, and decorative concrete. License C-27903. BBB A+.
          </p>
        </div>
      </section>

      {/* ── Gallery metrics strip ───────────────────────────────────── */}
      <section
        aria-label="Portfolio metrics"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          borderBottom: '1px solid var(--color-steel-light)',
          padding: '2rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="metrics-grid"
        >
          {[
            { value: '487', label: 'Projects Completed' },
            { value: '13', label: 'Maui Towns Served' },
            { value: 'A+', label: 'BBB Rating' },
            { value: '5.0', label: 'Google Rating' },
          ].map((m) => (
            <div key={m.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-brass)',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-warm-gray)',
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery grid ─────────────────────────────────────────────── */}
      <section
        aria-label="Project gallery"
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
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item, i) => (
            <figure
              key={i}
              style={{
                gridColumn: item.wide ? 'span 2' : 'span 1',
                margin: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
              className={item.wide ? 'gallery-wide' : ''}
            >
              <img
                src={item.img}
                alt={item.caption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 400ms ease',
                }}
                className="gallery-img"
              />
              {/* Brass bottom bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'var(--color-steel-deep)',
                  borderTop: '2px solid var(--color-brass)',
                  padding: '0.65rem 1rem',
                }}
              >
                <figcaption
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-gray)',
                  }}
                >
                  {item.caption}
                </figcaption>
                {'spec' in item && (
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.5rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-warm-gray)',
                      opacity: 0.5,
                      marginTop: '0.2rem',
                    }}
                  >
                    {item.spec}
                  </p>
                )}
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Recent completions timeline ─────────────────────────────── */}
      <section
        aria-label="Recent project completions"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '3rem 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-gray)',
              opacity: 0.6,
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Recent Completions
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { date: 'Mar 2025', project: '380 SF Stamped Lanai', location: 'Hale Makawao, Paia', type: 'Decorative' },
              { date: 'Feb 2025', project: '120 LF Sidewalk Repair', location: 'Wailuku Elementary', type: 'Community' },
              { date: 'Jan 2025', project: '3,200 SF Commercial Slab', location: 'Kahului Industrial Park', type: 'Commercial' },
              { date: 'Dec 2024', project: '2,800 SF Warehouse Floor', location: 'Maui Lani Business Park', type: 'Commercial' },
              { date: 'Nov 2024', project: '1,420 SF Foundation Addition', location: 'Wailuku Heights', type: 'Residential' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 3px 1fr',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--color-steel-light)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brass)',
                    textAlign: 'right',
                    paddingTop: '0.15rem',
                  }}
                >
                  {item.date}
                </p>
                <div style={{ backgroundColor: 'var(--color-brass)', width: '3px' }} />
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-off-white)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.project}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.55rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      color: 'var(--color-warm-gray)',
                      opacity: 0.6,
                    }}
                  >
                    {item.location} · {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Structures Still Standing ──────────────────────────────────── */}
      <section
        aria-label="Oldest projects still in service"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          padding: '2.5rem 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-gray)',
              opacity: 0.6,
              marginBottom: '0.3rem',
              textAlign: 'center',
            }}
          >
            Structures Still Standing
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.5rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-gray)',
              opacity: 0.4,
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
            Our earliest pours, verified in service
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0.75rem',
            }}
            className="legacy-grid"
          >
            {[
              { year: '2014', age: '11 yrs', project: 'Wailuku Heights Residence', scope: '2,400 SF slab-on-grade foundation', status: 'Zero cracks, zero settling' },
              { year: '2015', age: '10 yrs', project: 'Kahului Auto Repair', scope: '1,800 SF commercial floor slab', status: 'Original surface, no resurfacing needed' },
              { year: '2016', age: '9 yrs', project: 'Iao Valley Hillside Home', scope: '84 LF gravity retaining wall', status: 'Held through 3 major storm seasons' },
              { year: '2017', age: '8 yrs', project: 'Kihei Vacation Rental', scope: '520 SF broom-finish driveway', status: 'Owner rebooked for lanai 2023' },
            ].map((legacy) => (
              <div
                key={legacy.year}
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-steel-deep)',
                  borderLeft: '3px solid var(--color-brass)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-brass)',
                  }}>
                    {legacy.year}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-gray)',
                    opacity: 0.5,
                  }}>
                    {legacy.age} in service
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-off-white)',
                  marginBottom: '0.2rem',
                }}>
                  {legacy.project}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.55rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: 'var(--color-warm-gray)',
                  opacity: 0.6,
                  marginBottom: '0.3rem',
                }}>
                  {legacy.scope}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.5rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4ade80',
                  opacity: 0.8,
                }}>
                  ✓ {legacy.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Gallery CTA"
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
            YOUR SLAB. YOUR TIMELINE. ONE CREW.
          </h2>
          <p style={{ color: 'var(--color-warm-gray)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Driveway replacement, new foundation, retaining wall, or commercial slab. Free estimates across Maui.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-brass">Get a Free Estimate</a>
            <a href="tel:+18082813018" className="btn-outline">(808) 281-3018</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-wide {
            grid-column: 1 !important;
          }
        }
        .gallery-grid figure {
          border-left: 3px solid transparent;
          transition: border-color 300ms ease;
        }
        .gallery-grid figure:hover {
          border-left-color: var(--color-brass);
        }
        .gallery-img:hover {
          transform: scale(1.03);
        }
      `}</style>
    </main>
  )
}
