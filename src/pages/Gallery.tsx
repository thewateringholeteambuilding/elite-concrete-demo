const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    caption: 'Foundation footing with rebar,residential addition, Wailuku',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80',
    caption: 'Concrete pour in progress,commercial slab, Kahului',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80',
    caption: 'Finished driveway,exposed aggregate, Makawao',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
    caption: 'Retaining wall,hillside drainage system, Haiku',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=700&q=80',
    caption: 'Stamped concrete lanai,residential, Paia',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=700&q=80',
    caption: 'Site prep and equipment,commercial job, Kahului',
    wide: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80',
    caption: 'Warehouse floor slab,joints cut at 24 hours, Maui Lani',
    wide: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=700&q=80',
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
          backgroundColor: 'hsl(220, 30%, 10%)',
          padding: '5rem 1.5rem 4rem',
          borderBottom: '1px solid hsl(220, 15%, 18%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1
            id="gallery-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 1.5rem + 5vw, 5rem)',
              fontWeight: 700,
              color: 'hsl(40, 20%, 96%)',
              marginBottom: '1rem',
            }}
          >
            BEFORE THE FORMS. AFTER THE CURE.
          </h1>
          <p style={{ color: 'hsl(220, 10%, 60%)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '520px' }}>
            487 projects across Maui. Foundations, driveways, walls, and decorative concrete. License C-27903. BBB A+.
          </p>
        </div>
      </section>

      {/* ── Gallery metrics strip ───────────────────────────────────── */}
      <section
        aria-label="Portfolio metrics"
        style={{
          backgroundColor: 'hsl(220, 20%, 13%)',
          borderBottom: '1px solid hsl(220, 15%, 22%)',
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
                  color: 'hsl(38, 85%, 55%)',
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
                  color: 'hsl(220, 10%, 50%)',
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
          backgroundColor: 'hsl(220, 20%, 13%)',
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
                  backgroundColor: 'hsl(220, 30%, 10%)',
                  borderTop: '2px solid hsl(38, 85%, 55%)',
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
                    color: 'hsl(220, 10%, 55%)',
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
            YOUR SLAB. YOUR TIMELINE. ONE CREW.
          </h2>
          <p style={{ color: 'hsl(220, 10%, 55%)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
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
          border-left-color: hsl(38, 85%, 55%);
        }
        .gallery-img:hover {
          transform: scale(1.03);
        }
      `}</style>
    </main>
  )
}
