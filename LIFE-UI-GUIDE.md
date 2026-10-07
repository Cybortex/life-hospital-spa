# Life Medical Spa & Wellness Center: Next.js + Tailwind v4 UI

UI only, mock site. No backend yet. The booking form opens WhatsApp with the request filled in.

## Setup

```bash
npx create-next-app@latest life --ts --tailwind --app --eslint --no-src-dir --import-alias "@/*"
cd life
```

Copy `app/`, `components/`, `lib/` and `public/images/` over the generated project (replace existing files). Tailwind v4 is configured in `app/globals.css`. Run `npm run dev`, then `npm run build`.

## Colours (estimated from their Facebook post; confirm with the clinic)

| Token | Hex | Use |
|---|---|---|
| `green` | #1F6B38 | Hero, closing band, headings |
| `leaf` | #2E8B4A | Accents and hover |
| `orange` | #E8832A | Main CTA buttons, borders, lines |
| `orange-deep` | #A35208 | Orange text on cream |
| `cream` | #F4EEE6 | Page background |
| `ink` | #1E2B22 | Text, footer, mobile bar |
| `line` | #E3D9CB | Dividers, image placeholders |

Orange buttons use dark text for contrast.

## Images: exact filenames (public/images/)

| Filename | Size | Where |
|---|---|---|
| `logo.png` | 512x512, transparent | Header |
| `hero-spa.jpg` | 1600x1200 (4:3) | Home hero |
| `therapy-room.jpg` | 1200x800 (3:2) | Home wellness therapies band |
| `team-photo.jpg` | 1920x1080 (16:9) | Team page |
| `location-front.jpg` | 1200x800 | Contact page |
| `offer-massage.jpg` | 1200x900 (4:3) | Offer page and Home card |
| `offer-facials.jpg` | 1200x900 | Offer page and Home card |
| `offer-therapies.jpg` | 1200x900 | Offer page and Home card |
| `service-swedish.jpg` | 800x800 | Services row |
| `service-deep-tissue.jpg` | 800x800 | Services row |
| `service-lomi-lomi.jpg` | 800x800 | Services row |
| `service-trigger-point.jpg` | 800x800 | Services row |
| `service-facials.jpg` | 800x800 | Services row |
| `service-scrub-sauna.jpg` | 800x800 | Services row |
| `service-body-polishing.jpg` | 800x800 | Services row |
| `service-waxing.jpg` | 800x800 | Services row |
| `service-green-led.jpg` | 800x800 | Services row |
| `service-infrared-sauna.jpg` | 800x800 | Services row |
| `service-hyperbaric.jpg` | 800x800 | Services row |
| `service-colonic.jpg` | 800x800 | Services row |
| `service-wira.jpg` | 800x800 | Services row |

Also add `app/icon.png` (512x512) and `app/opengraph-image.jpg` (1200x630). Use only photos the clinic has permission to share; avoid patient photos unless there is written consent.

## Pages

`/` Home, `/services` (tabs: All, Spa & Beauty, Wellness Therapies; `?cat=therapy`), `/team`, `/contact`, `/book` (`?service=`), `/offers/massage`, `/offers/facials`, `/offers/therapies`.

All content is in `lib/site.ts`.

## Content decisions for a medical spa

- The site lists what is offered, not what it treats or cures. The clinic's posts contain health claims (for example for cancer, heart disease, diabetes, infertility, stroke, "no side effects") that are NOT copied here. They are unproven or overstated, can mislead patients, and health advertising may be regulated in Nigeria.
- Clinical therapy descriptions need approval from the clinic's doctor before launch. Check the rules with the clinic's regulators or a lawyer.
- A short disclaimer shows on Home, Services and the footer.
- Therapies are booked as a consultation first.
- Integrative cancer care and other advanced programmes are intentionally not listed in this mock. Add only with clinician-approved, accurate wording.

## TODO from the clinic

- Prices and durations, full services list, instagram URL, WhatsApp confirmation for 08111113993.
- Confirm hours (Mon-Sat 9 AM-5 PM, closed Sunday).
- Photos of the facility and team, reviews, staff names and qualifications, any licence or registration to show.
- Doctor-approved copy for each wellness therapy.

## Next phase

Real booking (Convex), consultation requests, reminders, owner dashboard and click tracking.
