const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1616179058441-37aa58affac8?auto=format&fit=crop&w=900&q=80',
    caption: 'Foundation footing with rebar,residential addition, Wailuku',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1694521787162-5373b598945c?auto=format&fit=crop&w=700&q=80',
    caption: 'Concrete pour in progress,commercial slab, Kahului',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=700&q=80',
    caption: 'Finished driveway,exposed aggregate, Makawao',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?auto=format&fit=crop&w=900&q=80',
    caption: 'Retaining wall,hillside drainage system, Haiku',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1574757987642-5755f0839101?auto=format&fit=crop&w=700&q=80',
    caption: 'Stamped concrete lanai,residential, Paia',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1575971637203-d6255d9947a9?auto=format&fit=crop&w=700&q=80',
    caption: 'Site prep and equipment,commercial job, Kahului',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1517011453931-c30f571a4fab?auto=format&fit=crop&w=900&q=80',
    caption: 'Warehouse floor slab,joints cut at 24 hours, Maui Lani',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1514514188727-ff38e839635e?auto=format&fit=crop&w=700&q=80',
    caption: 'Sidewalk flatwork,ADA-compliant ramp, Wailuku',
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
              </div>
            </figure>
          ))}
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
