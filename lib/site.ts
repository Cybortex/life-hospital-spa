export const SITE = {
  name: "Life Medical Spa & Wellness Center",
  short: "Life Medical Spa",
  tagline: "Integrative Medical Spa & Clinical Wellness",
  slogan: "Where Medical Science Meets Restorative Wellness",
  subheading: "Doctor-supervised wellness therapies, clinical skincare, and therapeutic bodywork in a private medical sanctuary in Garki, Abuja.",
  address: "No 7 Kontagora Close, Area 3, Garki, Abuja",
  phones: [{ label: "0811 111 3993", tel: "+2348111113993" }],
  wa: "https://wa.me/2348111113993",
  ig: "",
  fb: "https://www.facebook.com/lifehospitalandmedicalspa1",
  map: "https://www.google.com/maps/search/?api=1&query=7+Kontagora+Close+Area+3+Garki+Abuja",
  embed: "https://www.google.com/maps?q=7+Kontagora+Close+Area+3+Garki+Abuja&output=embed",
};

export const DISCLAIMER = "Clinical wellness therapies are conducted under professional guidance and doctor-approved protocols. They complement, but do not replace, primary medical consultation or acute hospital emergency care.";

export const HOURS: [string, string][] = [
  ["Monday to Saturday", "9:00 AM – 5:00 PM"],
  ["Sunday", "Closed (Sanitation & Sterilization)"],
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Clinical Services" },
  { href: "/team", label: "Clinical Team" },
  { href: "/contact", label: "Contact & Clinic" },
];

export type Cat = "spa" | "therapy";
export const CATS: { id: Cat | "all"; label: string; desc: string }[] = [
  { id: "all", label: "All Treatments", desc: "Complete clinical and aesthetic treatment catalogue" },
  { id: "therapy", label: "Medical Wellness Therapies", desc: "Doctor-guided chamber, sauna and hydrotherapy protocols" },
  { id: "spa", label: "Aesthetic & Therapeutic Care", desc: "Clinical skincare, organic facials and bodywork" },
];

export type Service = {
  slug: string;
  name: string;
  blurb: string;
  cats: Cat[];
  price?: string;
  duration: string;
  protocol?: string;
  requiresConsultation?: boolean;
  categoryLabel: string;
};

export const SERVICES: Service[] = [
  { 
    slug: "hyperbaric", 
    name: "Hyperbaric Oxygen Therapy (HBOT)", 
    blurb: "Breathe 100% medical-grade oxygen in a pressurized chamber under continuous monitoring to support cellular recovery and tissue oxygenation.", 
    cats: ["therapy"],
    duration: "60 mins",
    protocol: "Monoplace Medical Chamber • Continuous Monitoring",
    requiresConsultation: true,
    categoryLabel: "Medical Therapy"
  },
  { 
    slug: "wira", 
    name: "Water-filtered Infrared-A (wIRA)", 
    blurb: "Targeted deep-tissue warmth therapy utilizing the German Hydrosun® 750 system to promote local circulation and soothe chronic musculoskeletal tension.", 
    cats: ["therapy"],
    duration: "30–45 mins",
    protocol: "Hydrosun® 750 Patented Water-Filtered Technology",
    requiresConsultation: true,
    categoryLabel: "Medical Therapy"
  },
  { 
    slug: "infrared-sauna", 
    name: "Medical Infrared Sauna", 
    blurb: "Full-spectrum far, mid, and near-infrared thermal sessions engineered to induce gentle cardiovascular activation and deep metabolic sweating.", 
    cats: ["therapy"],
    duration: "45 mins",
    protocol: "Full-Spectrum Cedar Sanctuary • Temperature Calibrated",
    requiresConsultation: true,
    categoryLabel: "Medical Therapy"
  },
  { 
    slug: "colonic", 
    name: "Colonic Hydrotherapy", 
    blurb: "A hygienic colon cleansing protocol performed by trained technicians in a sterile, private clinical suite. Intake assessment required.", 
    cats: ["therapy"],
    duration: "45–60 mins",
    protocol: "Sterile Single-Use Tubing • Pre-Procedure Vetting",
    requiresConsultation: true,
    categoryLabel: "Medical Therapy"
  },
  { 
    slug: "green-led", 
    name: "Green LED Phototherapy", 
    blurb: "Targeted monochromatic phototherapy to calm hyperpigmentation, soothe reactive capillaries, and restore balanced skin tone.", 
    cats: ["spa"],
    duration: "40 mins",
    protocol: "Medical Spectrum Wavelength (525nm)",
    categoryLabel: "Clinical Aesthetic"
  },
  { 
    slug: "facials", 
    name: "Clinical Organic Facials", 
    blurb: "Medical-grade extraction, deep enzymatic purification, and high-potency antioxidant infusion customized to your skin profile.", 
    cats: ["spa"],
    duration: "60 mins",
    protocol: "Dermatological-Grade Botanical Extracts",
    categoryLabel: "Clinical Aesthetic"
  },
  { 
    slug: "deep-tissue", 
    name: "Deep Tissue Neuromuscular Therapy", 
    blurb: "Focused anatomical pressure targeting chronic myofascial restriction, postural tension, and deep tendon knots.", 
    cats: ["spa"],
    duration: "60–90 mins",
    protocol: "Anatomical Trigger-Point Assessment",
    categoryLabel: "Therapeutic Bodywork"
  },
  { 
    slug: "trigger-point", 
    name: "Trigger Point Myofascial Release", 
    blurb: "Ischemic compression techniques targeting localized hyper-irritable muscular nodules to alleviate referred pain.", 
    cats: ["spa"],
    duration: "45–60 mins",
    protocol: "Targeted Kinetic Chain Release",
    categoryLabel: "Therapeutic Bodywork"
  },
  { 
    slug: "swedish", 
    name: "Therapeutic Swedish Massage", 
    blurb: "Long effleurage strokes and petrissage designed to lower systemic cortisol, stimulate lymphatic drainage, and calm the autonomic nervous system.", 
    cats: ["spa"],
    duration: "60 mins",
    protocol: "Circulatory & Lymphatic Stimulation",
    categoryLabel: "Therapeutic Bodywork"
  },
  { 
    slug: "lomi-lomi", 
    name: "Lomi-Lomi Restorative Bodywork", 
    blurb: "A continuous rhythmic forearm therapy that balances energy meridians and relieves generalized tension.", 
    cats: ["spa"],
    duration: "75 mins",
    protocol: "Full-Body Rhythmic Mobilization",
    categoryLabel: "Therapeutic Bodywork"
  },
  { 
    slug: "scrub-sauna", 
    name: "Brightening Exfoliation + Thermal Sauna", 
    blurb: "Full-body mineral salt exfoliation to accelerate cellular turnover, paired with a gentle detoxifying thermal sauna session.", 
    cats: ["spa"],
    duration: "75 mins",
    protocol: "Epidermal Resurfacing + Thermal Detox",
    categoryLabel: "Aesthetic Treatment"
  },
  { 
    slug: "body-polishing", 
    name: "Nutrient Body Polishing", 
    blurb: "Micronized walnut and cold-pressed botanical oil infusion to hydrate and refine texture across the entire dermal barrier.", 
    cats: ["spa"],
    duration: "60 mins",
    protocol: "Dermal Hydration & Barrier Restoration",
    categoryLabel: "Aesthetic Treatment"
  },
  { 
    slug: "waxing", 
    name: "Aesthetic Waxing", 
    blurb: "Clinical-grade depilatory waxing for Brazilian, underarm, and bikini line in a completely private, sanitized room.", 
    cats: ["spa"],
    duration: "30–45 mins",
    protocol: "Hypoallergenic Hard Wax & Antiseptic Finish",
    categoryLabel: "Aesthetic Treatment"
  },
];

export const CLINICAL_STANDARDS = [
  {
    title: "Pre-Treatment Health Screening",
    desc: "Every clinical wellness therapy begins with an intake triage review. We evaluate vitals, medical history, and contraindications before administering care.",
    icon: "stethoscope"
  },
  {
    title: "Medical-Grade Technology",
    desc: "We utilize internationally certified equipment, including German Hydrosun® 750 wIRA systems and monoplace hyperbaric chambers.",
    icon: "award"
  },
  {
    title: "Hospital-Level Sterilization",
    desc: "Strict clinical hygiene protocols, autoclave sterilization of instruments, medical HEPA air filtration, and single-use consumables.",
    icon: "shield-check"
  },
  {
    title: "Certified Clinical Practitioners",
    desc: "Our therapists work under physician-developed clinical parameters, ensuring rigorous safety and personalized treatment intensity.",
    icon: "user-check"
  }
];

export const CLINICAL_METRICS = [
  { stat: "100%", label: "Doctor-Supervised Protocols" },
  { stat: "1:1", label: "Practitioner-Patient Ratio" },
  { stat: "Area 3", label: "Private Sanctuary in Garki" },
  { stat: "Hospital-Grade", label: "Sterilization & Hygiene" }
];

export const OFFERS: Record<string, { title: string; h: string; p: string; points: string[]; service: string; badge: string }> = {
  therapies: {
    title: "Medical Wellness Therapies",
    badge: "Doctor-Guided Care",
    h: "Evidence-grounded wellness therapies with medical screening",
    p: "Hyperbaric oxygen chamber sessions, full-spectrum infrared sauna, colonic hydrotherapy, and German wIRA photothermal therapy under practitioner supervision.",
    points: [
      "Mandatory pre-treatment medical screening",
      "Direct supervision by trained clinical staff",
      "Non-invasive physiological support",
      "Transparent consultation before any session"
    ],
    service: "Hyperbaric Oxygen Therapy (HBOT)",
  },
  massage: {
    title: "Therapeutic Neuromuscular Care",
    badge: "Clinical Bodywork",
    h: "Targeted myofascial release & therapeutic massage in Garki",
    p: "Doctor-advised massage therapy protocols for chronic tension, postural strain, and nervous system rebalancing.",
    points: [
      "Deep tissue, neuromuscular trigger-point & Swedish styles",
      "Intake assessment of musculoskeletal tension",
      "Private, sanitized clinical treatment rooms",
      "Adjusted therapeutic pressure calibrated to your body"
    ],
    service: "Deep Tissue Neuromuscular Therapy",
  },
  facials: {
    title: "Clinical Skincare & Facials",
    badge: "Aesthetic Dermatology",
    h: "Dermatological-grade organic facials & restorative skin therapies",
    p: "Medical extractions, green LED phototherapy, and antioxidant barrier restoration formulated for melanin-rich and sensitive skin types.",
    points: [
      "Professional skin type diagnosis prior to treatment",
      "Dermatologically tested organic botanicals & serums",
      "Green LED light therapy for hyperpigmentation balance",
      "Strict aseptic technique & disposable treatment materials"
    ],
    service: "Clinical Organic Facials",
  },
};

export const REVIEWS: { name: string; text: string; role?: string }[] = [];
