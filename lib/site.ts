export const SITE = {
  name: "Life Medical Spa & Wellness Center",
  short: "Life Medical Spa",
  tagline: "Spa treatments and wellness therapies",
  slogan: "Feel your best, starting today",
  address: "No 7 Kontagora Close, Area 3, Garki, Abuja",
  phones: [{ label: "0811 111 3993", tel: "+2348111113993" }],
  wa: "https://wa.me/2348111113993", // TODO: confirm this number is on WhatsApp
  ig: "", // TODO: add the Instagram profile URL (leave "" to hide)
  fb: "https://www.facebook.com/lifehospitalandmedicalspa1",
  map: "https://www.google.com/maps/search/?api=1&query=7+Kontagora+Close+Area+3+Garki+Abuja",
  embed: "https://www.google.com/maps?q=7+Kontagora+Close+Area+3+Garki+Abuja&output=embed",
};

export const DISCLAIMER = "General information only. Therapies are not a substitute for advice or treatment from your doctor.";

// From their Facebook post: 9 AM - 5 PM, Mon - Sat. TODO: confirm with the clinic.
export const HOURS: [string, string][] = [
  ["Monday to Saturday", "9:00 AM – 5:00 PM"],
  ["Sunday", "Closed"],
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact Us" },
];

export type Cat = "spa" | "therapy";
export const CATS: { id: Cat | "all"; label: string }[] = [
  { id: "all", label: "All" }, { id: "spa", label: "Spa & Beauty" }, { id: "therapy", label: "Wellness Therapies" },
];

export type Service = { slug: string; name: string; blurb: string; cats: Cat[]; price?: string };
// TODO: prices and durations. Clinical descriptions must be approved by the clinic's doctor before launch.
// image: /public/images/service-<slug>.jpg
export const SERVICES: Service[] = [
  { slug: "swedish", name: "Swedish Massage", blurb: "Long, flowing strokes to ease tension.", cats: ["spa"] },
  { slug: "deep-tissue", name: "Deep Tissue Massage", blurb: "Firm pressure for knots and tight muscles.", cats: ["spa"] },
  { slug: "lomi-lomi", name: "Lomi-Lomi Massage", blurb: "A flowing, rhythmic Hawaiian-style massage.", cats: ["spa"] },
  { slug: "trigger-point", name: "Trigger Point Massage", blurb: "Focused pressure on tight spots in the muscle.", cats: ["spa"] },
  { slug: "facials", name: "Facials", blurb: "Deep cleansing and brightening organic facials.", cats: ["spa"] },
  { slug: "scrub-sauna", name: "Brightening Scrub + Sauna", blurb: "A brightening body scrub followed by a sauna session.", cats: ["spa"] },
  { slug: "body-polishing", name: "Body Polishing", blurb: "Body polishing with organic oil.", cats: ["spa"] },
  { slug: "waxing", name: "Waxing", blurb: "Brazilian, underarm and bikini line waxing.", cats: ["spa"] },
  { slug: "green-led", name: "Green LED Skin Therapy", blurb: "A light-based skin treatment. Ask us if it suits your skin.", cats: ["spa"] },
  { slug: "infrared-sauna", name: "Infrared Sauna", blurb: "Far and near infrared sauna sessions.", cats: ["therapy"] },
  { slug: "hyperbaric", name: "Hyperbaric Oxygen Therapy", blurb: "Breathe pure oxygen in a pressurised chamber, with guidance from our team.", cats: ["therapy"] },
  { slug: "colonic", name: "Colonic Irrigation", blurb: "A colon cleansing procedure. Speak to our team first.", cats: ["therapy"] },
  { slug: "wira", name: "Water-filtered Infrared A (wIRA)", blurb: "Infrared A warmth therapy using the Hydrosun 750.", cats: ["therapy"] },
];

// landing pages at /offers/<slug>; image: /public/images/offer-<slug>.jpg
// No discounts and no health claims here until the clinic approves them.
export const OFFERS: Record<string, { title: string; h: string; p: string; points: string[]; service: string }> = {
  massage: {
    title: "Massage", h: "Massage to ease tension in Garki, Abuja",
    p: "Swedish, deep tissue, lomi-lomi and trigger point massage. Pick a time and book.",
    points: ["Four massage styles to choose from", "Pressure adjusted to your comfort", "A calm room in Area 3, Garki", "Book online or call"],
    service: "Swedish Massage",
  },
  facials: {
    title: "Facials & skin care", h: "Facials and skin care that fit your skin",
    p: "Deep cleansing and brightening organic facials, scrubs and body polishing.",
    points: ["Deep cleansing and brightening facials", "Organic oils and products", "Green LED skin therapy available", "Book online or call"],
    service: "Facials",
  },
  therapies: {
    title: "Wellness therapies", h: "Wellness therapies, with a consultation first",
    p: "Infrared sauna, hyperbaric oxygen therapy, colonic irrigation and more. Speak to our team to see what suits you.",
    points: ["Talk to our team before you start", "Therapies explained in plain language", "Not a replacement for care from your doctor", "Book a consultation by call or online"],
    service: "Infrared Sauna",
  },
};

// Add real reviews here. The reviews section only renders when this has items.
export const REVIEWS: { name: string; text: string }[] = [];
