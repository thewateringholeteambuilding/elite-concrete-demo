import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Star, Award, ShieldCheck } from 'lucide-react'

/* ── Photo constants (all confirmed working Unsplash IDs from niche guide) ─ */
const HERO_IMG   = 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80'
const CTA_IMG    = 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1920&q=80'

const stats = [
  { value: 'A+',    label: 'BBB Rating' },
  { value: 'C-27903', label: 'Hawaii License' },
  { value: '487',   label: 'Maui Projects' },
  { value: '100%',  label: 'Insured Crew' },
]

/* Services with distinct layout: left-side nav list + right featured panel */
const services = [
  {
    title: 'Concrete Foundations',
    desc: 'Stem walls, grade beams, and slab-on-grade poured to Hawaii State seismic code. Red volcanic soil documented and drainage verified before any form goes up.',
    ideal: 'Homeowners adding square footage, new builds, ADU projects',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Driveways & Parking',
    desc: 'Broom-finish, exposed aggregate, or stamped. Sub-base compacted to spec. Drainage slopes away from structure. Built for Maui rain events, not mainland averages.',
    ideal: 'Residential replacements, new construction, rental properties',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Retaining Walls',
    desc: 'Gravity and poured-wall systems engineered for Wailuku hillsides and Iao Valley slopes. Drainage core standard on every job.',
    ideal: 'Hillside lots, erosion control, tiered landscaping',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Decorative Concrete',
    desc: 'Stamped, stained, and polished finishes for lanais, pool decks, and commercial lobbies. Pattern and color matched to your design before the pour.',
    ideal: 'Vacation rentals, restaurant patios, residential upgrades',
    img: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Commercial Slabs',
    desc: 'Warehouse floors, loading docks, and retail pads. Floor flatness specs documented. Joints cut at 24 hours. Re-temp protection on high-heat Maui afternoons.',
    ideal: 'Warehouses, retail build-outs, loading facilities',
    img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Concrete Sawing',
    desc: 'Precision saw-cutting for control joints, utility openings, and slab removal. Dust and slurry managed on-site. Available for contractor and owner-direct projects.',
    ideal: 'GCs needing sub work, utility installs, slab demolition',
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
  },
]

const testimonials = [
  {
    stars: 5,
    quote: 'Elite poured the foundation for our Wailuku home addition. Everything was level, drainage was handled before the forms went up, and they finished two days ahead of schedule.',
    name: 'James K.',
    detail: 'Foundation Addition, Wailuku',
  },
  {
    stars: 5,
    quote: 'We had an eroding slope behind our property in Haiku. They assessed the hillside conditions, recommended the right wall type, and completed it with no surprise costs. Still holding solid.',
    name: 'Yoko T.',
    detail: 'Retaining Wall, Haiku',
  },
  {
    stars: 5,
    quote: 'Stamped concrete lanai for our rental. The color matched our vision on the first mix. Cleanup was thorough. Phone calls got answered every time. Rare on Maui.',
    name: 'Ben & Sara M.',
    detail: 'Decorative Lanai, Makawao',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        style={{
          backgroundColor: 'hsl(220, 30%, 10%)',
          paddingTop: '68px',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
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
            width: '100%',
          }}
          className="hero-grid"
        >
          {/* Left col — copy */}
          <div>
            <p className="iron-label" style={{ marginBottom: '1.5rem' }}>
              § Wailuku, Maui
            </p>
            <h1
              id="hero-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 1.5rem + 5vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '0.01em',
                color: 'hsl(40, 20%, 96%)',
                marginBottom: '1.5rem',
              }}
            >
              MAUI CONCRETE,<br />
              <span style={{ color: 'hsl(38, 85%, 55%)' }}>DONE SOLID.</span>
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'hsl(220, 10%, 65%)',
                maxWidth: '480px',
                marginBottom: '2rem',
              }}
            >
              Elite Concrete LLC handles foundations, driveways, retaining walls, decorative concrete, and precision saw-cutting across Maui. Licensed. BBB A+. Mix designed for Hawaii's volcanic soil and salt air.
            </p>

            {/* Credential badges */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                backgroundColor: 'hsl(220, 20%, 18%)',
                border: '1px solid hsl(220, 15%, 28%)',
                padding: '0.4rem 0.9rem',
              }}>
                <ShieldCheck size={13} style={{ color: 'hsl(38, 85%, 55%)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'hsl(40, 20%, 80%)' }}>
                  LIC C-27903
                </span>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                backgroundColor: 'hsl(220, 20%, 18%)',
                border: '1px solid hsl(220, 15%, 28%)',
                padding: '0.4rem 0.9rem',
              }}>
                <Award size={13} style={{ color: 'hsl(38, 85%, 55%)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'hsl(40, 20%, 80%)' }}>
                  BBB A+
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/contact" className="btn-brass" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Request a Quote <ArrowRight size={14} />
              </Link>
              <Link to="/services" className="btn-outline">
                Our Services
              </Link>
            </div>
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
              <Phone size={15} style={{ color: 'hsl(38, 85%, 55%)' }} />
              <span>
                Call direct:{' '}
                <strong style={{ color: 'hsl(40, 20%, 96%)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>
                  (808) 281-3018
                </strong>
              </span>
            </a>
          </div>

          {/* Right col — photo + trust badge */}
          <div style={{ position: 'relative' }}>
            {/* Brass border offset frame — top-right corner to distinguish from RVS */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                width: '100%',
                height: '100%',
                border: '3px solid hsl(38, 85%, 55%)',
                zIndex: 0,
              }}
            />
            <img
              src={HERO_IMG}
              alt="Concrete construction equipment on a Maui job site"
              width={700}
              height={840}
              fetchPriority="high"
              loading="eager"
              style={{
                width: '100%',
                aspectRatio: '4/5',
                objectFit: 'cover',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
            {/* Floating trust badge — bottom-right instead of bottom-left */}
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                right: '-2.5rem',
                backgroundColor: 'hsl(38, 85%, 55%)',
                color: 'hsl(220, 30%, 10%)',
                padding: '1rem 1.5rem',
                zIndex: 2,
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}
              >
                Hawaii License
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                C-27903
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────── */}
      <section
        aria-label="Credentials and numbers"
        style={{
          backgroundColor: 'hsl(220, 20%, 18%)',
          borderTop: '3px solid hsl(38, 85%, 55%)',
          borderBottom: '1px solid hsl(220, 15%, 24%)',
          padding: '2.5rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          {stats.map((s) => (
            <div key={s.value} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: s.value.length > 4 ? '1.8rem' : '2.8rem',
                  fontWeight: 700,
                  color: 'hsl(38, 85%, 55%)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'hsl(220, 10%, 55%)',
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Industry Affiliations Strip ────────────────────────────────── */}
      <section
        aria-label="Industry affiliations"
        style={{
          backgroundColor: 'hsl(220, 30%, 10%)',
          padding: '2rem 1.5rem',
          borderBottom: '1px solid hsl(220, 15%, 18%)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            { icon: '⬡', label: 'Licensed Hawaii Contractor' },
            { icon: '◆', label: 'ACI Concrete Practices' },
            { icon: '★', label: 'BBB Accredited Business' },
            { icon: '◉', label: 'Fully Insured & Bonded' },
          ].map((a) => (
            <div
              key={a.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'hsl(220, 20%, 13%)',
                border: '1px solid hsl(220, 15%, 22%)',
              }}
            >
              <span style={{ fontSize: '1.1rem', color: 'hsl(38, 85%, 55%)' }}>{a.icon}</span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(220, 10%, 55%)',
                }}
              >
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services — 2-col layout: list nav left + featured card right ─ */}
      <section
        aria-labelledby="services-heading"
        style={{
          backgroundColor: 'hsl(220, 30%, 10%)',
          padding: 'var(--space-section) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2
              id="services-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 1.2rem + 3vw, 3.5rem)',
                fontWeight: 700,
                color: 'hsl(40, 20%, 96%)',
                marginBottom: '1rem',
              }}
            >
              WHAT WE BUILD
            </h2>
            <p style={{ color: 'hsl(220, 10%, 55%)', maxWidth: '520px', lineHeight: 1.7 }}>
              Seven concrete services. One crew that knows Maui's conditions from Wailuku to Wailea.
            </p>
          </div>

          {/* Row 1: featured (col-span-2) + sidebar card */}
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="services-grid"
          >
            {/* Featured card */}
            <div
              style={{
                gridColumn: 'span 2',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <img
                src={services[0].img}
                alt={services[0].title}
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, hsl(220,30%,6%) 0%, transparent 65%)' }} />
              <div style={{ position: 'relative', padding: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'hsl(38, 85%, 55%)', marginBottom: '0.5rem' }}>
                  Foundation Work
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'hsl(40, 20%, 96%)', marginBottom: '0.75rem' }}>
                  {services[0].title}
                </h3>
                <p style={{ color: 'hsl(40, 20%, 80%)', fontSize: '0.9rem', lineHeight: 1.65, maxWidth: '400px' }}>
                  {services[0].desc}
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(38, 85%, 55%)', marginTop: '0.75rem' }}>
                  Ideal for: <span style={{ color: 'hsl(220, 10%, 55%)' }}>{services[0].ideal}</span>
                </p>
              </div>
            </div>

            {/* Sidebar card — Driveways */}
            <ServiceCard service={services[1]} />

            {/* Row 2: 3 equal cards */}
            {services.slice(2, 5).map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}

            {/* Row 3: Full-width strip — Concrete Sawing (unique to Elite, not in RVS) */}
            <div
              style={{
                gridColumn: '1 / -1',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
                backgroundColor: 'hsl(220, 20%, 18%)',
                borderLeft: '4px solid hsl(38, 85%, 55%)',
                overflow: 'hidden',
                minHeight: '160px',
              }}
              className="strip-card"
            >
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(38, 85%, 55%)', marginBottom: '0.5rem' }}>
                  Specialized Service
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'hsl(40, 20%, 96%)', marginBottom: '0.5rem' }}>
                  {services[5].title}
                </h3>
                <p style={{ color: 'hsl(220, 10%, 55%)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {services[5].desc}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '2rem', borderLeft: '1px solid hsl(220, 15%, 26%)' }}>
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'hsl(38, 85%, 55%)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Full service list <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work — numbered approach (distinct from RVS checklist) ─ */}
      <section
        aria-labelledby="how-heading"
        style={{
          backgroundColor: 'hsl(220, 20%, 13%)',
          padding: 'var(--space-section) 1.5rem',
          borderTop: '1px solid hsl(220, 15%, 22%)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '5fr 4fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="how-grid"
        >
          {/* Left: numbered steps */}
          <div>
            <h2
              id="how-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 1.2rem + 3vw, 3.5rem)',
                fontWeight: 700,
                color: 'hsl(40, 20%, 96%)',
                marginBottom: '1rem',
              }}
            >
              EVERY JOB, SAME SEQUENCE
            </h2>
            <p style={{ color: 'hsl(220, 10%, 55%)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: '1rem' }}>
              Concrete in Hawaii is not standard mainland work. Salt air corrodes rebar. Volcanic soil drains differently than mainland clay. Maui's afternoon heat can accelerate set on a slab you have one shot to finish. We've been reading these conditions from Central Maui out to Upcountry for years.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { num: '01', title: 'Site Assessment', desc: 'Soil type, drainage path, and seismic zone documented before we quote.' },
                { num: '02', title: 'Mix Engineering', desc: '3,500 PSI minimum. Water-cement ratio adjusted for Maui humidity and pour-day temps.' },
                { num: '03', title: 'Single Crew', desc: 'Same people estimate, pour, and finish. No sub-subcontracting.' },
                { num: '04', title: 'Licensed & Insured', desc: 'Hawaii Contractor License C-27903. Full liability and workers comp on every project.' },
              ].map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '3rem 1fr',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: 'hsl(220, 20%, 18%)',
                    borderTop: '2px solid transparent',
                    borderImage: 'linear-gradient(to right, hsl(38,85%,55%) 0%, transparent 100%) 1',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'hsl(38, 85%, 55%)',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'hsl(40, 20%, 96%)', marginBottom: '0.25rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {step.title}
                    </p>
                    <p style={{ color: 'hsl(220, 10%, 55%)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA panel */}
          <div>
            <div
              style={{
                backgroundColor: 'hsl(220, 20%, 18%)',
                border: '1px solid hsl(220, 15%, 28%)',
                padding: '2.5rem 2rem',
              }}
            >
              <p className="iron-label" style={{ marginBottom: '1rem' }}>§ Free Estimates</p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'hsl(40, 20%, 96%)',
                  marginBottom: '1rem',
                  lineHeight: 1.1,
                }}
              >
                READY TO START YOUR PROJECT?
              </h3>
              <p style={{ color: 'hsl(220, 10%, 55%)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Free estimates for residential and commercial concrete work anywhere on Maui. Owner answers the phone.
              </p>
              <Link to="/contact" className="btn-brass" style={{ display: 'block', textAlign: 'center', marginBottom: '1rem' }}>
                Request a Quote
              </Link>
              <a
                href="tel:+18082813018"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  color: 'hsl(38, 85%, 55%)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                }}
              >
                <Phone size={15} />
                (808) 281-3018
              </a>
            </div>
            <div
              style={{
                backgroundColor: 'hsl(38, 85%, 55%)',
                padding: '1rem 2rem',
                marginTop: '0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'hsl(220, 30%, 10%)',
                  textAlign: 'center',
                }}
              >
                Serving all of Maui County
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area Strip ────────────────────────────────────────────── */}
      <section
        aria-label="Service area"
        style={{
          backgroundColor: 'hsl(220, 20%, 13%)',
          padding: '2.5rem 1.5rem',
          borderTop: '1px solid hsl(220, 15%, 22%)',
          borderBottom: '1px solid hsl(220, 15%, 22%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
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
            Serving All of Maui County
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
            {[
              'Wailuku', 'Kahului', 'Kihei', 'Wailea', 'Lahaina',
              'Makawao', 'Haiku', 'Paia', 'Pukalani', 'Kula',
              'Sprecklesville', 'Napili', 'Kapalua',
            ].map((town) => (
              <span
                key={town}
                style={{
                  padding: '0.35rem 0.85rem',
                  backgroundColor: 'hsl(220, 20%, 18%)',
                  border: '1px solid hsl(220, 15%, 28%)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'hsl(40, 20%, 80%)',
                  textTransform: 'uppercase',
                }}
              >
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="testimonials-heading"
        style={{
          backgroundColor: 'hsl(220, 30%, 10%)',
          padding: 'var(--space-section) 1.5rem',
          borderTop: '1px solid hsl(220, 15%, 18%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
            className="testimonials-header"
          >
            <div>
              <h2
                id="testimonials-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 1.2rem + 3vw, 3rem)',
                  fontWeight: 700,
                  color: 'hsl(40, 20%, 96%)',
                  marginBottom: '0.5rem',
                }}
              >
                FROM MAUI CLIENTS
              </h2>
              <p style={{ color: 'hsl(220, 10%, 55%)', fontSize: '0.9rem' }}>
                Real jobs, real outcomes.
              </p>
            </div>
            <a
              href="https://maps.google.com/?cid=4007577259043496869"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'hsl(220, 20%, 18%)',
                border: '1px solid hsl(220, 15%, 28%)',
                padding: '0.65rem 1.25rem',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4285F4' }}>G</span>
              <span style={{ color: '#FFC107' }}>★★★★★</span>
              <span style={{ color: 'hsl(40, 20%, 80%)', fontSize: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                Google Reviews
              </span>
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                style={{
                  backgroundColor: 'hsl(220, 20%, 15%)',
                  borderLeft: '3px solid hsl(38, 85%, 55%)',
                  padding: '2rem',
                  margin: 0,
                }}
              >
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={13} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>
                <blockquote
                  style={{
                    color: 'hsl(40, 20%, 80%)',
                    lineHeight: 1.75,
                    fontSize: '0.95rem',
                    fontStyle: 'normal',
                    margin: '0 0 1.5rem 0',
                  }}
                >
                  "{t.quote}"
                </blockquote>
                <figcaption>
                  <cite style={{ fontStyle: 'normal', display: 'block' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        color: 'hsl(40, 20%, 96%)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        color: 'hsl(220, 10%, 50%)',
                        fontSize: '0.75rem',
                        marginTop: '0.2rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t.detail}
                    </span>
                  </cite>
                </figcaption>
              </figure>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://maps.google.com/?cid=4007577259043496869"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* ── Pre-footer CTA Band ───────────────────────────────────────────── */}
      <section
        aria-label="Contact call to action"
        style={{ position: 'relative', height: '420px', overflow: 'hidden' }}
      >
        <img
          src={CTA_IMG}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(13, 21, 32, 0.70)' }} />
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '2rem 1.5rem', zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 1rem + 4vw, 3.5rem)',
              fontWeight: 700,
              color: 'hsl(40, 20%, 96%)',
              lineHeight: 1.05,
              maxWidth: '700px',
              marginBottom: '1rem',
            }}
          >
            FREE ESTIMATES. OWNER ANSWERS THE PHONE.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '480px' }}>
            Residential and commercial concrete work across Maui. Call or submit a project brief.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-brass">
              Request a Free Estimate
            </Link>
            <a href="tel:+18082813018" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              (808) 281-3018
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > *:first-child {
            grid-column: 1 !important;
          }
          .strip-card {
            grid-column: 1 !important;
            grid-template-columns: 1fr !important;
          }
          .how-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .testimonials-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </main>
  )
}

interface ServiceItem {
  title: string
  desc: string
  ideal: string
  img: string
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div
      className="service-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '260px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <img
        src={service.img}
        alt={service.title}
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, hsl(220,30%,6%) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', padding: '1.5rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'hsl(40, 20%, 96%)',
            marginBottom: '0.4rem',
          }}
        >
          {service.title}
        </h3>
        <p style={{ color: 'hsl(40, 20%, 75%)', fontSize: '0.8rem', lineHeight: 1.6 }}>
          {service.desc}
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(38, 85%, 55%)', marginTop: '0.5rem' }}>
          Ideal for: <span style={{ color: 'hsl(220, 10%, 55%)' }}>{service.ideal}</span>
        </p>
      </div>
    </div>
  )
}
