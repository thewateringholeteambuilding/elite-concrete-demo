# Demo Brief — Elite Concrete LLC

**Lead ID:** 836a24b5-7ef7-4826-9c45-cbb6dfa5bb66
**Business:** Elite Concrete LLC
**Address:** 750 Malaihi Rd, Wailuku, HI 96793
**Phone:** (808) 281-3018
**Google CID:** 4007577259043496869
**License:** C-27903
**BBB Rating:** A+
**Services:** Concrete Sawing, Concrete Contractor
**Service Area:** Island of Maui, Hawaii

---

## Style System

- **Style:** Iron Edge (1)
- **Palette:** Brass-Navy
- **Display font:** Oswald
- **Body font:** Archivo
- **Brass accent:** hsl(38, 85%, 55%)
- **Steel deep bg:** hsl(220, 30%, 10%)
- **Border radius:** 0px (full Iron Edge, zero-radius throughout)

---

## Pages Built

1. **Home** — Split-hero (md:grid-cols-2, photo on right with brass corner frame top-right), credential badges (LIC C-27903 + BBB A+), stats strip (A+, C-27903, 500+, 100%), services bento grid (featured 2-col + 1 + 3-col + full-width strip with 2-col layout), numbered process section (01-04), testimonials with left-brass-border cards, prefooter CTA band
2. **About** — Split-layout story, 2-photo panel, credentials section (3 cards), Maui service area town tags
3. **Services** — Alternating article layout (7 services: foundations, driveways, retaining walls, decorative, commercial slabs, sidewalks, concrete sawing)
4. **Gallery** — 3-col iron-frame grid with wide (span-2) flagship shots + brass figcaption bars
5. **Contact** — 2-col layout (info left, form right), Google Maps embed, free estimate form

---

## Differentiation from RVS Construction Demo (same niche, same island)

- **Hero photo:** Equipment/site photo (1565008447742) vs RVS pour photo (1504307651254)
- **Floating trust badge position:** Bottom-right corner vs RVS bottom-left
- **Brass frame position:** Top-right offset vs RVS top-left offset
- **Stats:** A+ BBB + License # + 500+ projects vs RVS years/project count
- **Services section:** 2-col strip with horizontal split for Sawing card vs pure bento
- **Why-choose:** Numbered 01-04 steps in card layout vs RVS checklist items
- **Testimonial borders:** Left brass border vs RVS top border
- **Testimonial names:** Wailuku/Haiku/Makawao clients vs RVS Kihei/Wailea/Kahului
- **Featured service:** Concrete Sawing in strip vs RVS Repair/Resurfacing
- **CTA headline:** "Free Estimates. Owner Answers the Phone." vs RVS "Ready to Start Your Maui Concrete Project?"

---

## Key Trust Signals Used

- License C-27903 in hero floating badge (prominent)
- BBB A+ in hero credential badge and About page
- License C-27903 in JSON-LD schema
- BBB A+ in footer
- Phone number in: Nav, Hero, How We Work panel, Footer, Contact page

---

## Photos Used

All from confirmed-working list in `_System/niche-guides/construction-concrete.md`:
- Hero: photo-1565008447742-97f6f38c985c (equipment/site)
- CTA band: photo-1503387837-b154d5074bd2 (decorative/stamped patio)
- Foundation: photo-1558618666-fcd25c85cd64
- Driveway: photo-1600585154340-be6161a56a0c
- Retaining wall: photo-1541888946425-d81bb19240f5
- Commercial slab: photo-1553440569-bcc63803a83d
- Sidewalk: photo-1583608205776-bfd35f0d9f83
- Pour: photo-1504307651254-35680f356dfd

---

## Audit Status

Pass 1: Auto-fixed em-dashes in Gallery captions (replaced with commas), em-dash in About copy (replaced with period)
Pass 2: PASS
- Zero critical/high issues
- No gradient text, no gradient icons, no soft radii
- No copy anti-patterns found
- Kickers: 2 on Home, 1 on each other page (all within limit)
- All Unsplash images return 200
- favicon.svg wired and deployed
- JSON-LD LocalBusiness schema in index.html
- Google Maps keyless embed in Contact
- Build clean: 223kb JS gzipped 65kb

---

## Outreach Notes

Wailuku-based (Central Maui) vs RVS in Kihei (South Maui). Different geographic angle. Lead angle: "Concrete contractors in Wailuku are hard to find online."
