import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Phone, Star, Award, ShieldCheck, ChevronDown, ChevronsDown } from 'lucide-react'

/* ── Photo constants (all confirmed working Unsplash IDs from niche guide) ─ */
const HERO_IMG   = 'https://images.unsplash.com/photo-1575971637203-d6255d9947a9?auto=format&fit=crop&w=900&q=80'
const CTA_IMG    = 'https://images.unsplash.com/photo-1574757987642-5755f0839101?auto=format&fit=crop&w=1920&q=80'

const stats = [
  { value: 'A+',    label: 'BBB Rating' },
  { value: 'C-27903', label: 'Hawaii License' },
  { value: '487',   label: 'Maui Projects' },
  { value: '73,840', label: 'Sq Ft Poured' },
  { value: '68%',   label: 'Repeat Clients' },
]

/* Services with distinct layout: left-side nav list + right featured panel */
const services = [
  {
    title: 'Concrete Foundations',
    desc: 'Stem walls, grade beams, and slab-on-grade poured to Hawaii State seismic code. Red volcanic soil documented and drainage verified before any form goes up.',
    ideal: 'Homeowners adding square footage, new builds, ADU projects',
    img: 'https://images.unsplash.com/photo-1616179058441-37aa58affac8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Driveways & Parking',
    desc: 'Broom-finish, exposed aggregate, or stamped. Sub-base compacted to spec. Drainage slopes away from structure. Built for Maui rain events, not mainland averages.',
    ideal: 'Residential replacements, new construction, rental properties',
    img: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Retaining Walls',
    desc: 'Gravity and poured-wall systems engineered for Wailuku hillsides and Iao Valley slopes. Drainage core standard on every job.',
    ideal: 'Hillside lots, erosion control, tiered landscaping',
    img: 'https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Decorative Concrete',
    desc: 'Stamped, stained, and polished finishes for lanais, pool decks, and commercial lobbies. Pattern and color matched to your design before the pour.',
    ideal: 'Vacation rentals, restaurant patios, residential upgrades',
    img: 'https://images.unsplash.com/photo-1574757987642-5755f0839101?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Commercial Slabs',
    desc: 'Warehouse floors, loading docks, and retail pads. Floor flatness specs documented. Joints cut at 24 hours. Re-temp protection on high-heat Maui afternoons.',
    ideal: 'Warehouses, retail build-outs, loading facilities',
    img: 'https://images.unsplash.com/photo-1517011453931-c30f571a4fab?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Concrete Sawing',
    desc: 'Precision saw-cutting for control joints, utility openings, and slab removal. Dust and slurry managed on-site. Available for contractor and owner-direct projects.',
    ideal: 'GCs needing sub work, utility installs, slab demolition',
    img: 'https://images.unsplash.com/photo-1514514188727-ff38e839635e?auto=format&fit=crop&w=800&q=80',
  },
]

const testimonials = [
  {
    stars: 5,
    quote: 'Elite poured the foundation for our Wailuku home addition. Everything was level, drainage was handled before the forms went up, and they finished two days ahead of schedule.',
    name: 'James Kahele, Wailuku',
    detail: 'Foundation Addition · Project Manager, Wailuku Heights HOA',
    date: 'November 2024',
  },
  {
    stars: 5,
    quote: 'We had an eroding slope behind our property in Haiku. They assessed the hillside conditions, recommended the right wall type, and completed it with no surprise costs. Still holding solid.',
    name: 'Yoko Tanaka, Haiku',
    detail: 'Retaining Wall · Retired Landscape Architect',
    date: 'August 2024',
  },
  {
    stars: 5,
    quote: 'Stamped concrete lanai for our rental. The color matched our vision on the first mix. Cleanup was thorough. Phone calls got answered every time. Rare on Maui.',
    name: 'Ben & Sara Medeiros, Makawao',
    detail: 'Decorative Lanai · Vacation Rental Owners, Hale Makawao LLC',
    date: 'March 2025',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          paddingTop: '68px',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
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
          {/* Left col, copy */}
          <div>
            <p className="iron-label" style={{ marginBottom: '1.5rem' }}>
              #1 Rated on Google &middot; Central Maui
            </p>
            <h1
              id="hero-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 1.5rem + 5vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '0.01em',
                color: 'var(--color-off-white)',
                marginBottom: '1.5rem',
              }}
            >
              MAUI CONCRETE,<br />
              <span style={{ color: 'var(--color-brass)' }}>DONE SOLID.</span>
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--color-warm-gray)',
                maxWidth: '480px',
                marginBottom: '2rem',
              }}
            >
              Pouring Maui concrete since 2014, but small enough that the owner still answers the phone. Foundations, driveways, retaining walls, decorative finishes, and precision saw-cutting. Licensed. BBB A+. Mix designed for Hawaii's volcanic soil and salt air.
            </p>

            {/* Credential badges */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a
                href="https://cca.hawaii.gov/pvl/holders/active-contractors/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  backgroundColor: 'var(--color-steel-mid)',
                  border: '1px solid var(--color-steel-light)',
                  padding: '0.4rem 0.9rem',
                  textDecoration: 'none',
                  transition: 'border-color 150ms ease',
                }}
                className="credential-badge"
              >
                <ShieldCheck size={13} style={{ color: 'var(--color-brass)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--color-warm-gray)' }}>
                  LIC C-27903
                </span>
              </a>
              <a
                href="https://www.bbb.org/us/hi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  backgroundColor: 'var(--color-steel-mid)',
                  border: '1px solid var(--color-steel-light)',
                  padding: '0.4rem 0.9rem',
                  textDecoration: 'none',
                  transition: 'border-color 150ms ease',
                }}
                className="credential-badge"
              >
                <Award size={13} style={{ color: 'var(--color-brass)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--color-warm-gray)' }}>
                  BBB A+
                </span>
              </a>
            </div>

            {/* Service quick-jump */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.75rem',
              padding: '0.65rem 1rem',
              backgroundColor: 'var(--color-steel-mid)',
              border: '1px solid var(--color-steel-light)',
              maxWidth: '420px',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-gray)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>
                I need
              </span>
              <select
                onChange={(e) => {
                  if (e.target.value) window.location.href = e.target.value
                }}
                defaultValue=""
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-off-white)',
                  cursor: 'pointer',
                  outline: 'none',
                  appearance: 'auto',
                }}
              >
                <option value="" disabled>Select a service...</option>
                <option value="/services#foundations">Foundation Work</option>
                <option value="/services#driveways">Driveway / Parking</option>
                <option value="/services#retaining-walls">Retaining Wall</option>
                <option value="/services#decorative">Decorative Concrete</option>
                <option value="/services#commercial">Commercial Slab</option>
                <option value="/services#sawing">Concrete Sawing</option>
              </select>
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
                color: 'var(--color-warm-gray)',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              <Phone size={15} style={{ color: 'var(--color-brass)' }} />
              <span>
                Call direct:{' '}
                <strong style={{ color: 'var(--color-off-white)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>
                  (808) 281-3018
                </strong>
              </span>
            </a>
          </div>

          {/* Right col, photo + trust badge */}
          <div style={{ position: 'relative' }}>
            {/* Brass border offset frame, top-right corner to distinguish from RVS */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                width: '100%',
                height: '100%',
                border: '3px solid var(--color-brass)',
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
              className="hero-ken-burns"
              style={{
                width: '100%',
                aspectRatio: '4/5',
                objectFit: 'cover',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
            {/* Floating trust badge, bottom-right instead of bottom-left */}
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                right: '-2.5rem',
                backgroundColor: 'var(--color-brass)',
                color: 'var(--color-steel-deep)',
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

        {/* Scroll indicator */}
        <div
          className="scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            opacity: 0.5,
          }}
        >
          <ChevronsDown size={20} style={{ color: 'var(--color-warm-gray)' }} />
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────── */}
      <section
        aria-label="Credentials and numbers"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          borderTop: '3px solid var(--color-brass)',
          borderBottom: '1px solid var(--color-steel-light)',
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
                  color: 'var(--color-brass)',
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
                  color: 'var(--color-warm-gray)',
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
          backgroundColor: 'var(--color-steel-deep)',
          padding: '2rem 1.5rem',
          borderBottom: '1px solid var(--color-steel-light)',
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
            { label: 'Hawaii License C-27903', detail: 'DCCA Verified' },
            { label: 'ACI Concrete Practices', detail: 'Industry Standard' },
            { label: 'BBB A+ Accredited', detail: 'Zero Complaints' },
            { label: '$2M General Liability', detail: 'Full Workers Comp' },
            { label: '2024 MCA Safety Recognition', detail: 'Maui Contractors Assoc.' },
          ].map((a) => (
            <div
              key={a.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'var(--color-steel-mid)',
                borderLeft: '3px solid var(--color-brass)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-off-white)',
                    display: 'block',
                  }}
                >
                  {a.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-gray)',
                    opacity: 0.6,
                  }}
                >
                  {a.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Project Breakdown Strip ───────────────────────────────────── */}
      <section
        aria-label="Project type breakdown"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '1.75rem 1.5rem',
          borderBottom: '1px solid var(--color-steel-light)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-gray)',
              opacity: 0.6,
            }}
          >
            487 Projects by Type
          </p>
          {[
            { type: 'Residential', count: 312 },
            { type: 'Commercial', count: 94 },
            { type: 'Retaining', count: 53 },
            { type: 'Sawing', count: 28 },
          ].map((cat) => (
            <div key={cat.type} style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-brass)',
                }}
              >
                {cat.count}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-warm-gray)',
                }}
              >
                {cat.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services, 2-col layout: list nav left + featured card right ─ */}
      <section
        aria-labelledby="services-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: 'var(--space-section) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p className="iron-label" style={{ marginBottom: '1rem' }}>Our Services</p>
            <h2
              id="services-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 1.2rem + 3vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--color-off-white)',
                marginBottom: '1rem',
              }}
            >
              WHAT WE BUILD
            </h2>
            <p style={{ color: 'var(--color-warm-gray)', maxWidth: '520px', lineHeight: 1.7 }}>
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
              className="service-card"
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
              <div className="service-gradient" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-steel-deep) 0%, transparent 65%)' }} />
              <div style={{ position: 'relative', padding: '2rem' }}>
                <p className="iron-label" style={{ marginBottom: '0.5rem' }}>
                  Foundation Work
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-off-white)', marginBottom: '0.75rem' }}>
                  {services[0].title}
                </h3>
                <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.9rem', lineHeight: 1.65, maxWidth: '400px' }}>
                  {services[0].desc}
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brass)', marginTop: '0.75rem' }}>
                  Ideal for: <span style={{ color: 'var(--color-warm-gray)' }}>{services[0].ideal}</span>
                </p>
              </div>
            </div>

            {/* Sidebar card, Driveways */}
            <ServiceCard service={services[1]} />

            {/* Row 2: 3 equal cards */}
            {services.slice(2, 5).map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}

            {/* Row 3: Full-width strip, Concrete Sawing (unique to Elite, not in RVS) */}
            <div
              style={{
                gridColumn: '1 / -1',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
                backgroundColor: 'var(--color-steel-mid)',
                borderLeft: '4px solid var(--color-brass)',
                overflow: 'hidden',
                minHeight: '160px',
              }}
              className="strip-card"
            >
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="iron-label" style={{ marginBottom: '0.5rem' }}>
                  Specialized Service
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-off-white)', marginBottom: '0.5rem' }}>
                  {services[5].title}
                </h3>
                <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {services[5].desc}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '2rem', borderLeft: '1px solid var(--color-steel-light)' }}>
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-brass)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Full service list <ArrowRight size={13} className="strip-chevron" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work, numbered approach (distinct from RVS checklist) ─ */}
      <section
        aria-labelledby="how-heading"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          padding: 'var(--space-section) 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
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
            <p className="iron-label" style={{ marginBottom: '1rem' }}>
              FORM. POUR. FINISH.&trade;
            </p>
            <h2
              id="how-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 1.2rem + 3vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--color-off-white)',
                marginBottom: '1rem',
              }}
            >
              ONE CREW. ONE SEQUENCE. EVERY JOB.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { phrase: 'Salt Air Corrodes Rebar.', expansion: 'Every pour uses corrosion-rated steel and cover depths above code minimum.' },
                { phrase: 'Volcanic Soil Drains Different.', expansion: 'Sub-base spec changes from Wailuku clay to Upcountry cinder. We test before we quote.' },
                { phrase: 'Maui Heat Accelerates Set.', expansion: 'Afternoon pours get adjusted water-cement ratios. One shot to finish means no guessing.' },
              ].map((pillar) => (
                <div key={pillar.phrase}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-off-white)', marginBottom: '0.2rem' }}>
                    {pillar.phrase}
                  </p>
                  <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {pillar.expansion}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { num: '01', title: 'Site Assessment', desc: 'Soil type, drainage path, and seismic zone documented before we quote. Compaction tested to 95% modified Proctor.', timeline: 'Same-day visit, written report within 48 hours' },
                { num: '02', title: 'Mix Engineering', desc: '4,000 PSI minimum residential. Water-cement ratio adjusted for Maui humidity and pour-day temps. #4 rebar at 12-inch centers standard. All concrete batched through HC&D Kahului plant.', timeline: 'Quote delivered within 36 hours of site visit' },
                { num: '03', title: 'Single Crew', desc: 'Same people estimate, pour, and finish. Average crew tenure: 8 years. No sub-subcontracting.', timeline: 'Most residential pours scheduled within 2 weeks' },
                { num: '04', title: 'Licensed & Insured', desc: 'Hawaii Contractor License C-27903. $2M general liability. Full workers comp on every project.', timeline: 'COI delivered before mobilization' },
              ].map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '3rem 1fr',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: 'var(--color-steel-mid)',
                    borderTop: '2px solid transparent',
                    borderImage: 'linear-gradient(to right, var(--color-brass) 0%, transparent 100%) 1',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--color-brass)',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-off-white)', marginBottom: '0.25rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {step.title}
                    </p>
                    <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                    {'timeline' in step && (
                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-brass)',
                        marginTop: '0.5rem',
                        opacity: 0.8,
                      }}>
                        {step.timeline}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA panel */}
          <div>
            <div
              style={{
                backgroundColor: 'var(--color-steel-mid)',
                border: '1px solid var(--color-steel-light)',
                padding: '2.5rem 2rem',
              }}
            >
              <p className="iron-label" style={{ marginBottom: '1rem' }}>Free Estimates</p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--color-off-white)',
                  marginBottom: '1rem',
                  lineHeight: 1.1,
                }}
              >
                WHAT DO YOU NEED POURED?
              </h3>
              <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Driveway, foundation, retaining wall, lanai, or commercial slab. Tell us the job and we'll quote it within 36 hours. Owner answers the phone.
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
                  color: 'var(--color-brass)',
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
                backgroundColor: 'var(--color-brass)',
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
                  color: 'var(--color-steel-deep)',
                  textAlign: 'center',
                }}
              >
                Serving all of Maui County
              </p>
            </div>
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
              }}
            >
              <div className="cta-stat-box" style={{ textAlign: 'center', padding: '0.5rem 1rem', borderTop: '2px solid transparent', transition: 'border-color 200ms ease, transform 200ms ease', cursor: 'default' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brass)', lineHeight: 1 }}>36 hrs</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-gray)', marginTop: '0.2rem' }}>Avg Quote Turnaround</p>
              </div>
              <div className="cta-stat-box" style={{ textAlign: 'center', padding: '0.5rem 1rem', borderTop: '2px solid transparent', transition: 'border-color 200ms ease, transform 200ms ease', cursor: 'default' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-brass)', lineHeight: 1 }}>92%</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-gray)', marginTop: '0.2rem' }}>Jobs Start Within 2 Weeks</p>
              </div>
            </div>
            {/* Delivery methods */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                borderTop: '1px solid var(--color-steel-light)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-warm-gray)', opacity: 0.6, marginBottom: '0.6rem', textAlign: 'center' }}>
                We work as
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Owner-Direct', 'GC Subcontractor', 'Design-Assist'].map((method) => (
                  <span
                    key={method}
                    style={{
                      padding: '0.3rem 0.7rem',
                      border: '1px solid var(--color-steel-light)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.55rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      color: 'var(--color-warm-gray)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Owner Credibility Strip ──────────────────────────────────────── */}
      <section
        aria-label="Owner-operated business"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          padding: '3rem 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Initials badge */}
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--color-brass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--color-steel-deep)',
                letterSpacing: '0.05em',
              }}
            >
              EC
            </span>
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-off-white)',
                marginBottom: '0.3rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Owner-Operated. Owner on Every Job.
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brass)', marginBottom: '0.35rem' }}>
              Eric Cantrell, Owner &amp; Licensed Contractor
            </p>
            <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem', lineHeight: 1.65 }}>
              I write every quote myself. I run the crew on every job. You call this number, you're talking to me, not a scheduler. One point of contact from estimate through final walkthrough.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-gray)', opacity: 0.7 }}>
                <span style={{ color: 'var(--color-brass)', fontWeight: 700, fontSize: '0.75rem' }}>11</span> yrs on Maui
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-gray)', opacity: 0.7 }}>
                <span style={{ color: 'var(--color-brass)', fontWeight: 700, fontSize: '0.75rem' }}>8</span> yr avg crew tenure
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-gray)', opacity: 0.7 }}>
                <span style={{ color: 'var(--color-brass)', fontWeight: 700, fontSize: '0.75rem' }}>0</span> sub-subcontractors
              </span>
            </div>
          </div>
          <a
            href="tel:+18082813018"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-brass)',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            <Phone size={15} />
            (808) 281-3018
          </a>
        </div>
      </section>

      {/* ── Community Involvement ─────────────────────────────────────────── */}
      <section
        aria-label="Community involvement"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '2.5rem 1.5rem',
          borderTop: '2px solid var(--color-brass)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '1.5rem' }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Beyond the Job Site</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 1rem + 2vw, 2rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              lineHeight: 1.1,
            }}
          >
            GIVING BACK TO THE COMMUNITY WE POUR FOR
          </h2>
        </div>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
          className="community-grid"
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'var(--color-brass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-steel-deep)' }}>2</span>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-off-white)', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                Habitat for Humanity Maui
              </p>
              <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                Two driveways poured pro-bono in 2024 for families transitioning to homeownership.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'var(--color-brass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-steel-deep)' }}>3</span>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-off-white)', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                Wailuku Elementary Sidewalk Repair
              </p>
              <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                Annual sidewalk repair, third year running. Safe walking paths for students and staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Happens When You Wait ─────────────────────────────────── */}
      <section
        aria-labelledby="wait-heading"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          padding: 'var(--space-section) 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '1rem' }}>Before It Gets Worse</p>
          <h2
            id="wait-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 1rem + 3vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '0.5rem',
            }}
          >
            WHAT HAPPENS WHEN YOU WAIT
          </h2>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.9rem', marginBottom: '2.5rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Concrete problems on Maui don't stay small. Salt air, volcanic soil, and tropical rain accelerate every crack.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
            }}
            className="wait-grid"
          >
            {/* Risks column */}
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#b54a3a',
                marginBottom: '1.25rem',
              }}>
                Delay costs more
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { risk: 'Hairline cracks widen to structural fractures', cost: 'Repair cost doubles every 6 months' },
                  { risk: 'Salt air corrodes exposed rebar', cost: 'Full tear-out instead of patching' },
                  { risk: 'Settled slabs create trip hazards', cost: 'Liability exposure for homeowners and landlords' },
                  { risk: 'Water channels under cracked flatwork', cost: 'Soil erosion undermines adjacent structures' },
                ].map((item) => (
                  <div key={item.risk} style={{
                    padding: '1rem',
                    backgroundColor: 'var(--color-steel-deep)',
                    borderLeft: '3px solid #b54a3a',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-off-white)',
                      marginBottom: '0.25rem',
                    }}>
                      {item.risk}
                    </p>
                    <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                      {item.cost}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Act now column */}
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-brass)',
                marginBottom: '1.25rem',
              }}>
                Act now, save later
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { benefit: 'Catch cracks early with a surface seal', saving: 'Seal: $800. Full replacement: $8,000+' },
                  { benefit: 'Rebar protection before corrosion starts', saving: 'Preventive coating vs. full tear-out and re-pour' },
                  { benefit: 'Level settled slabs with precision grinding', saving: 'Leveling: $1,200. Replacement: $6,000+' },
                  { benefit: 'Proper drainage installed with the pour', saving: 'Prevents $15,000+ in foundation damage' },
                ].map((item) => (
                  <div key={item.benefit} style={{
                    padding: '1rem',
                    backgroundColor: 'var(--color-steel-deep)',
                    borderLeft: '3px solid var(--color-brass)',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--color-off-white)',
                      marginBottom: '0.25rem',
                    }}>
                      {item.benefit}
                    </p>
                    <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                      {item.saving}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn-brass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Get a Free Assessment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service Area Strip ────────────────────────────────────────────── */}
      <section
        aria-label="Service area"
        style={{
          backgroundColor: 'var(--color-steel-mid)',
          padding: '2.5rem 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
          borderBottom: '1px solid var(--color-steel-light)',
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
              color: 'var(--color-brass)',
              marginBottom: '1.75rem',
            }}
          >
            Serving All of Maui County
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              maxWidth: '960px',
              margin: '0 auto',
            }}
            className="region-grid"
          >
            {[
              { region: 'Central Maui', count: 218, towns: ['Wailuku', 'Kahului', 'Sprecklesville'] },
              { region: 'South Maui', count: 147, towns: ['Kihei', 'Wailea', 'Makena'] },
              { region: 'West Maui', count: 64, towns: ['Lahaina', 'Napili', 'Kapalua'] },
              { region: 'Upcountry', count: 58, towns: ['Makawao', 'Haiku', 'Paia', 'Pukalani', 'Kula'] },
            ].map((r) => (
              <div
                key={r.region}
                className="region-card"
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-steel-mid)',
                  borderTop: '2px solid var(--color-brass)',
                  transition: 'transform 200ms ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-off-white)' }}>
                    {r.region}
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-brass)' }}>
                    {r.count}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {r.towns.map((town) => (
                    <span
                      key={town}
                      style={{
                        padding: '0.2rem 0.6rem',
                        border: '1px solid var(--color-steel-light)',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        color: 'var(--color-warm-gray)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Jobs (dated activity strip) ──────────────────────────── */}
      <section
        aria-label="Recent job activity"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: '2rem 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Recent Jobs
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { date: 'Apr 2025', job: 'Completed driveway tear-out and replacement, Kehalani', sqft: '1,800 sq ft' },
              { date: 'Mar 2025', job: 'Stamped lanai pour, Wailea Ekolu Village', sqft: '640 sq ft' },
              { date: 'Feb 2025', job: '120 ft retaining wall, Iao Valley hillside', sqft: '120 linear ft' },
              { date: 'Jan 2025', job: 'Commercial slab, Kahului industrial park', sqft: '3,200 sq ft' },
            ].map((entry, i) => (
              <div
                key={entry.date}
                className="timeline-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '5.5rem 1.5rem 1fr auto',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.65rem 0.5rem',
                  borderBottom: i < 3 ? '1px solid var(--color-steel-light)' : 'none',
                  borderLeft: '3px solid transparent',
                  transition: 'border-color 200ms ease, background-color 200ms ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    color: 'var(--color-off-white)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                    textAlign: 'right',
                  }}
                >
                  {entry.date}
                </span>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--color-brass)',
                      borderRadius: '0',
                      transform: 'rotate(45deg)',
                      flexShrink: 0,
                    }}
                  />
                </div>
                <span style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                  {entry.job}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--color-brass)',
                    opacity: 0.6,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {entry.sqft}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Work Strip ──────────────────────────────────────────── */}
      <section
        aria-label="Recent projects"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: 'var(--space-section) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-brass)',
              marginBottom: '2rem',
            }}
          >
            Recent Work
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
            className="recent-work-grid"
          >
            {[
              { ref: 'EC-087', name: 'Kehalani Residence Foundation', town: 'Wailuku', gc: 'Architect: Maui Architectural Group', scope: '2,400 sq ft slab-on-grade. Previous grading left 3 ft of loose fill on the mauka side. We removed and recompacted before forming 28 stem wall footings with seismic tie-downs.', outcome: 'Completed 4 days ahead of schedule. Passed county inspection first attempt.', featured: true },
              { ref: 'EC-091', name: 'Maui Lani Driveway Replacement', town: 'Kahului', gc: 'GC: Arisumi Brothers', scope: '1,800 sq ft exposed aggregate. Original slab had settled 2 inches from root intrusion. Full removal, root barrier, recompacted base, new drainage slope away from the garage.', outcome: 'Zero settling after 14 months. Owner referred two neighbors.', featured: false },
              { ref: 'EC-094', name: 'Wailea Resort Retaining Wall', town: 'Wailea', gc: 'GC: Swinerton Builders Hawaii', scope: '120 linear ft, 6 ft height. Hillside had a seasonal runoff channel cutting across the property. Engineered drainage core with 4-inch perforated pipe handles peak flow without hydrostatic pressure buildup.', outcome: 'Held through two winter storm seasons. No drainage backup.', featured: false },
            ].map((project) => (
              <div
                key={project.name}
                className="recent-work-card"
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--color-steel-mid)',
                  borderTop: project.featured ? '4px solid var(--color-brass)' : '3px solid var(--color-brass)',
                  transition: 'transform 250ms ease, box-shadow 250ms ease',
                  boxShadow: project.featured ? 'inset 0 0 0 1px var(--color-steel-light)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      color: 'var(--color-warm-gray)',
                      opacity: 0.5,
                    }}
                  >
                    {project.ref}
                  </p>
                  {project.featured && (
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.5rem',
                        fontWeight: 700,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--color-steel-deep)',
                        backgroundColor: 'var(--color-brass)',
                        padding: '0.15rem 0.5rem',
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-off-white)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2,
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brass)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {project.town}, Maui
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--color-warm-gray)',
                    opacity: 0.6,
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.gc}
                </p>
                <p
                  style={{
                    color: 'var(--color-warm-gray)',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                  }}
                >
                  {project.scope}
                </p>
                <p
                  className="project-outcome"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-brass)',
                    marginTop: '0.75rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--color-steel-light)',
                    opacity: 0,
                    maxHeight: 0,
                    overflow: 'hidden',
                    transition: 'opacity 250ms ease, max-height 250ms ease',
                  }}
                >
                  Outcome: <span style={{ color: 'var(--color-warm-gray)', fontWeight: 500 }}>{project.outcome}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="testimonials-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: 'var(--space-section) 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
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
              <p className="iron-label" style={{ marginBottom: '1rem' }}>Client Reviews</p>
              <h2
                id="testimonials-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 1.2rem + 3vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--color-off-white)',
                  marginBottom: '0.5rem',
                }}
              >
                68% COME BACK. THE REST REFER.
              </h2>
              <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.9rem' }}>
                Wailuku, Kihei, Haiku, Makawao. Real jobs, real outcomes.
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
                backgroundColor: 'var(--color-steel-mid)',
                border: '1px solid var(--color-steel-light)',
                padding: '0.65rem 1.25rem',
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4285F4' }}>G</span>
              <span style={{ color: '#FFC107' }}>★★★★★</span>
              <span style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                5.0 from 31 Reviews
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
                  backgroundColor: 'var(--color-steel-mid)',
                  borderLeft: '3px solid var(--color-brass)',
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
                    color: 'var(--color-warm-gray)',
                    lineHeight: 1.75,
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    fontFamily: 'Georgia, "Times New Roman", serif',
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
                        color: 'var(--color-off-white)',
                        fontSize: '0.9rem',
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        color: 'var(--color-warm-gray)',
                        fontSize: '0.75rem',
                        marginTop: '0.2rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t.detail} · {t.date}
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

      {/* ── Warranty Commitment Block ────────────────────────────────────── */}
      <section
        aria-label="Workmanship warranty"
        style={{
          backgroundColor: 'var(--color-brass)',
          padding: '3.5rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-steel-deep)',
              marginBottom: '1rem',
              opacity: 0.6,
            }}
          >
            2014. One Crew. Every Pour.
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 1rem + 3vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-steel-deep)',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
            }}
          >
            POURED BY HAND. WARRANTED IN WRITING.
          </h2>
          <p
            style={{
              color: 'var(--color-steel-light)',
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            5-year structural warranty on foundations and retaining walls. 3-year cosmetic warranty on stamped, stained, and polished finishes. 2-year flatwork warranty on driveways, sidewalks, and slabs. If something cracks, settles, or fails within term, we come back and make it right. Written on every contract.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-steel-deep)',
              textDecoration: 'none',
              borderBottom: '2px solid var(--color-steel-deep)',
              paddingBottom: '0.2rem',
            }}
          >
            Request Warranty Details <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        style={{
          backgroundColor: 'var(--color-steel-deep)',
          padding: 'var(--space-section) 1.5rem',
          borderTop: '1px solid var(--color-steel-light)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Concrete Knowledge authority block */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '3rem 1fr',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: 'var(--color-steel-mid)',
            borderLeft: '3px solid var(--color-brass)',
            marginBottom: '3rem',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--color-brass)',
              lineHeight: 1,
            }}>
              11
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--color-off-white)',
                marginBottom: '0.35rem',
              }}>
                Years Pouring on Maui
              </p>
              <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                Maui concrete behaves differently than mainland concrete. Salt air accelerates rebar corrosion. Volcanic soil drains unpredictably from Wailuku clay to Upcountry cinder. Afternoon heat in Kihei can cut working time by half. These questions come from 487 projects across every condition this island produces.
              </p>
            </div>
          </div>

          <p className="iron-label" style={{ marginBottom: '1rem' }}>Before You Pour</p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 1.2rem + 3vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-off-white)',
              marginBottom: '0.75rem',
            }}
          >
            WHAT MAUI HOMEOWNERS ASK
          </h2>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
            Answered on-site, by phone, and in writing across 487 projects.
          </p>
          <FAQAccordion />
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
              color: 'var(--color-off-white)',
              lineHeight: 1.05,
              maxWidth: '700px',
              marginBottom: '1rem',
            }}
          >
            FREE ESTIMATES. OWNER ANSWERS THE PHONE.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '480px' }}>
            You bring the plans. We bring 487 pours of Maui experience. Same crew, same owner, same phone number since 2014.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-brass">
              Request a Free Estimate
            </Link>
            <Link to="/gallery" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              See 487 Maui Pours
            </Link>
            <a href="tel:+18082813018" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              (808) 281-3018
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .credential-badge:hover {
          border-color: var(--color-brass) !important;
        }
        .strip-chevron {
          transition: transform 200ms ease;
        }
        a:hover .strip-chevron {
          transform: translateX(4px);
        }
        @keyframes kenBurnsZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
        .hero-ken-burns {
          animation: kenBurnsZoom 12s ease-in-out infinite alternate;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .scroll-indicator {
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ken-burns { animation: none; }
          .scroll-indicator { animation: none; }
        }
        .region-card:hover {
          transform: translateY(-2px);
        }
        .timeline-row:hover {
          border-left-color: var(--color-brass) !important;
          background-color: rgba(255, 255, 255, 0.02);
        }
        .cta-stat-box:hover {
          border-top-color: var(--color-brass) !important;
          transform: translateY(-2px);
        }
        .recent-work-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3), inset 0 3px 0 var(--color-brass);
        }
        .recent-work-card:hover .project-outcome {
          opacity: 1 !important;
          max-height: 60px !important;
        }
        .service-card .service-gradient {
          transition: opacity 300ms ease;
        }
        .service-card:hover .service-gradient {
          opacity: 0.6;
        }
        .service-card img {
          transition: transform 400ms ease;
        }
        .service-card:hover img {
          transform: scale(1.05);
        }
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
          .recent-work-grid {
            grid-template-columns: 1fr !important;
          }
          .region-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .community-grid {
            grid-template-columns: 1fr !important;
          }
          .wait-grid {
            grid-template-columns: 1fr !important;
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
      <div className="service-gradient" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-steel-deep) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', padding: '1.5rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--color-off-white)',
            marginBottom: '0.4rem',
          }}
        >
          {service.title}
        </h3>
        <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.8rem', lineHeight: 1.6 }}>
          {service.desc}
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brass)', marginTop: '0.5rem' }}>
          Ideal for: <span style={{ color: 'var(--color-warm-gray)' }}>{service.ideal}</span>
        </p>
      </div>
    </div>
  )
}

const faqItems = [
  {
    q: 'How long does concrete need to cure before we can use it?',
    a: "Initial set takes 24-48 hours depending on the mix and Maui\u2019s ambient temperature. Full structural cure is 28 days. In Kihei and Wailea where afternoon temps regularly exceed 90\u00B0F, we adjust water-cement ratios and may schedule pours before 10 AM to prevent rapid surface drying. Upcountry pours in Kula or Pukalani cure more predictably due to cooler air.",
  },
  {
    q: 'How often should concrete be sealed on Maui?',
    a: 'Coastal properties (Kihei, Wailea, Lahaina) should reseal every 2-3 years due to salt air exposure. Upcountry properties (Makawao, Kula, Pukalani) can go 4-5 years between applications. Decorative stamped or stained surfaces need resealing more frequently because UV breaks down color sealers faster in Hawaii than on the mainland. We specify UV-rated sealers on every decorative job.',
  },
  {
    q: 'Do I need a permit for residential concrete work?',
    a: 'Maui County requires permits for foundations, retaining walls over 4 feet, and any work affecting drainage or setbacks. Standard flatwork like driveways and patios under 200 sq ft typically does not require a permit, but we verify with the county on every job. Our License C-27903 covers all concrete work categories.',
  },
  {
    q: 'What PSI concrete do you use?',
    a: '4,000 PSI minimum for all residential flatwork and foundations. Commercial slabs spec to project requirements, typically 4,500-5,000 PSI. Coastal properties get corrosion-rated rebar (#4 at 12-inch centers standard) with increased concrete cover depth. Volcanic soil conditions on Maui can affect sub-base compaction, so we test to 95% modified Proctor before forming.',
  },
  {
    q: 'Can you match existing concrete for additions or repairs?',
    a: 'Color matching depends on the original mix, age, and exposure. We sample existing slabs and work with our batch plant to get within 90% color match on fresh pours. After 6-12 months of weathering, the match improves further. For decorative work, we do on-site color samples before committing to the full pour.',
  },
]

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? '1px solid var(--color-steel-light)' : 'none',
              borderBottom: '1px solid var(--color-steel-light)',
              borderLeft: isOpen ? '3px solid var(--color-brass)' : '3px solid transparent',
              paddingLeft: isOpen ? '1rem' : '0',
              transition: 'border-color 200ms ease, padding-left 200ms ease',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1.25rem 0',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-off-white)',
                  letterSpacing: '0.02em',
                }}
              >
                {item.q}
              </span>
              <ChevronDown
                size={16}
                style={{
                  color: 'var(--color-brass)',
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms ease',
                }}
              />
            </button>
            <div
              style={{
                maxHeight: isOpen ? '400px' : '0',
                overflow: 'hidden',
                transition: 'max-height 300ms ease',
              }}
            >
              <p
                style={{
                  color: 'var(--color-warm-gray)',
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  paddingBottom: '1.5rem',
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
