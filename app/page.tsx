import Link from "next/link";
import Photo from "@/components/Photo";
import Divider from "@/components/Divider";
import { CLINICAL_METRICS, CLINICAL_STANDARDS, DISCLAIMER, HOURS, OFFERS, REVIEWS, SERVICES, SITE } from "@/lib/site";
import { btn, btnDark, btnLine, btnSm, card, wrap } from "@/lib/ui";

const clinicalGroups = [
  {
    id: "therapy",
    title: "Medical Wellness Therapies",
    tagline: "Cellular oxygenation, deep thermal activation & systemic detoxification.",
    note: "All medical therapies begin with a preliminary health intake and clinical parameter screening.",
    featured: SERVICES.filter((s) => s.cats.includes("therapy")),
  },
  {
    id: "spa",
    title: "Clinical Aesthetics & Bodywork",
    tagline: "Targeted myofascial release, deep tissue relief & medical-grade facials.",
    note: "Customized protocols designed for barrier restoration, tension relief, and nervous system calm.",
    featured: SERVICES.filter((s) => s.cats.includes("spa")),
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-green text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,155,75,0.15),transparent_50%)] pointer-events-none" />
        
        <div className={`${wrap} relative z-10 grid items-center gap-12 py-14 md:grid-cols-12 md:py-20`}>
          <div className="md:col-span-7">
            <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4rem]">
              Where Medical Science Meets <em className="not-italic text-orange font-normal italic">Restorative Wellness.</em>
            </h1>
            
            <p className="mt-5 max-w-xl text-base text-cream/90 md:text-lg leading-relaxed">
              Experience physician-guided wellness therapies, medical-grade hyperbaric oxygen, German wIRA photothermal care, and clinical restorative aesthetics in a tranquil, private medical sanctuary in Garki, Abuja.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link href="/book" className={`${btn} !bg-orange !text-ink hover:!bg-white font-bold`}>
                Book Clinical Consultation
              </Link>
              <Link href="/services" className={btnLine + " !bg-white/10 !text-white !border-white/30 hover:!bg-white/20"}>
                View Clinical Directory
              </Link>
              <a href={`tel:${SITE.phones[0].tel}`} className="text-xs font-semibold text-cream hover:text-white underline underline-offset-4 ml-1">
                Call Reception: {SITE.phones[0].label}
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-y-2 gap-x-6 text-xs text-cream/80">
              <span className="flex items-center gap-1.5">
                <span className="text-orange">✓</span> Pre-Treatment Health Triage
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-orange">✓</span> Certified Monoplace &amp; wIRA Tech
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-orange">✓</span> Hospital-Grade Aseptic Standards
              </span>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative rounded-3xl border-2 border-orange/50 p-1.5 bg-white/5 backdrop-blur-xs shadow-2xl">
              <Photo
                src="hero-spa.jpg"
                alt="Life Medical Spa & Wellness Center treatment room"
                priority
                sizes="(min-width:768px) 45vw, 100vw"
                className="aspect-[4/3] rounded-2xl"
              />
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-line bg-white p-3.5 shadow-xl text-ink max-w-[210px] hidden sm:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-green">Clinical Sanctuary</p>
                <p className="text-xs font-bold mt-0.5">Area 3, Garki, Abuja</p>
                <p className="text-[11px] text-ink/80 mt-1 font-medium">Private sterile suites &amp; certified clinical care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section className="border-b border-line bg-white py-6 shadow-2xs">
        <div className={`${wrap} grid grid-cols-2 gap-6 sm:grid-cols-4`}>
          {CLINICAL_METRICS.map((m) => (
            <div key={m.label} className="border-l-2 border-orange/70 pl-4">
              <p className="font-display text-2xl font-bold text-green md:text-3xl">{m.stat}</p>
              <p className="text-xs font-semibold text-ink/80 mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Standards / "The Medical Difference" Section */}
      <section className={`${wrap} py-16 reveal`}>
        <div className="max-w-2xl">
          <h2 className="rule font-display text-3xl font-semibold md:text-4xl text-ink">
            Our Medical-Grade Standard
          </h2>
          <p className="mt-4 text-base text-ink/80 leading-relaxed">
            Unlike standard beauty salons or generic day spas, Life Medical Spa integrates rigorous clinical parameters, physician-directed safety triage, and certified therapy equipment into every patient experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLINICAL_STANDARDS.map((s, idx) => (
            <div key={s.title} className={`${card} p-6 flex flex-col justify-between`}>
              <div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-green/10 text-green font-bold text-base mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-semibold text-green leading-snug">{s.title}</h3>
                <p className="mt-2.5 text-xs text-ink/80 leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-line/60 text-[11px] font-bold text-orange-deep uppercase tracking-wider">
                Standard Protocol
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorized Clinical Services Directory */}
      <section className="bg-cream border-y border-line py-16 reveal">
        <div className={wrap}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="rule font-display text-3xl font-semibold md:text-4xl text-ink">
                Comprehensive Therapies &amp; Care
              </h2>
              <p className="mt-3 max-w-xl text-sm text-ink/80">
                Explore our full spectrum of non-invasive therapies and restorative clinical aesthetic treatments.
              </p>
            </div>
            <Link href="/services" className={btnDark}>
              Explore Full Treatment Menu →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {clinicalGroups.map((g) => (
              <div key={g.id} className={`${card} flex flex-col justify-between p-7`}>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-deep">
                      {g.title}
                    </span>
                    <span className="rounded-md bg-green/10 px-2 py-0.5 text-[10px] font-bold text-green">
                      {g.featured.length} Protocols
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-green">{g.title}</h3>
                  <p className="mt-1.5 text-xs text-ink/80 font-medium">{g.tagline}</p>
                  <p className="mt-1 text-xs text-ink/70">{g.note}</p>

                  <div className="mt-6 divide-y divide-line/70">
                    {g.featured.slice(0, 4).map((s) => (
                      <div key={s.slug} className="py-3 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-ink leading-tight">{s.name}</p>
                          <p className="text-xs text-ink/75 mt-0.5 line-clamp-1">{s.blurb}</p>
                          {s.protocol && (
                            <span className="inline-block mt-1 text-[10px] font-medium text-green bg-green/5 px-2 py-0.5 rounded">
                              {s.protocol}
                            </span>
                          )}
                        </div>
                        <span className="shrink-0 text-xs font-bold text-ink/60 whitespace-nowrap">
                          {s.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <Link href={`/services?cat=${g.id}`} className="text-xs font-bold text-green hover:text-leaf underline underline-offset-4">
                    View all {g.title}
                  </Link>
                  <Link href={`/book`} className={btnSm}>
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clinical Offerings */}
      <section className={`${wrap} py-16 reveal`}>
        <div className="max-w-xl">
          <h2 className="rule font-display text-3xl font-semibold md:text-4xl text-ink">
            Popular Clinical Protocols
          </h2>
          <p className="mt-3 text-sm text-ink/80">
            Designed for specific recovery goals, chronic strain alleviation, and dermatological renewal.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {Object.entries(OFFERS).map(([slug, o]) => (
            <Link
              key={slug}
              href={`/offers/${slug}`}
              className={`${card} group flex flex-col justify-between overflow-hidden transition hover:-translate-y-1.5`}
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                  <Photo src={`offer-${slug}.jpg`} alt={o.title} sizes="(min-width:640px) 33vw, 100vw" className="h-full w-full" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-semibold group-hover:text-green transition-colors">{o.title}</h3>
                  <p className="mt-2 text-xs text-ink/75 line-clamp-2 leading-relaxed">{o.p}</p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-orange-deep">
                <span>View Protocol Details</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Wellness Therapies Spotlight Band */}
      <section className="reveal bg-green text-white">
        <div className={`${wrap} grid items-center gap-10 py-16 md:grid-cols-2`}>
          <div className="relative">
            <Photo
              src="therapy-room.jpg"
              alt="Medical wellness therapy room with hyperbaric chamber and infrared sauna"
              sizes="(min-width:768px) 50vw, 100vw"
              className="aspect-[3/2] rounded-3xl border-2 border-orange/60 shadow-xl"
            />
            <div className="absolute bottom-4 right-4 rounded-xl bg-ink/90 border border-white/20 p-3 text-white text-xs backdrop-blur-sm max-w-[220px]">
              <p className="font-bold text-orange">Controlled Chamber Environment</p>
              <p className="text-[11px] text-cream/80 mt-0.5">Continuous vital parameters &amp; technician observation.</p>
            </div>
          </div>
          <div>
            <h2 className="rule font-display text-3xl font-semibold md:text-5xl leading-tight">
              Clinical Wellness Therapies, Explained
            </h2>
            <p className="mt-5 text-sm md:text-base text-cream/90 leading-relaxed">
              Our clinical facility houses specialized non-invasive technology including monoplace Hyperbaric Oxygen Therapy (HBOT), full-spectrum medical Infrared Sauna, Colonic Hydrotherapy, and German Hydrosun® wIRA photothermal therapy.
            </p>
            <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-4 text-xs text-cream/80 leading-relaxed">
              <p className="font-semibold text-white mb-1">Clinical Safety Guarantee:</p>
              {DISCLAIMER}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/offers/therapies" className={`${btn} !bg-orange !text-ink hover:!bg-white font-bold`}>
                Book a Therapy Consultation
              </Link>
              <Link href="/services?cat=therapy" className={btnLine + " !text-white !border-white/30 hover:!bg-white/10"}>
                View Therapy Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews (if available) */}
      {REVIEWS.length > 0 && (
        <section className={`${wrap} reveal py-16`}>
          <h2 className="rule font-display text-3xl font-semibold md:text-4xl">What Clients Say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className={`${card} p-6`}>
                <p className="font-display text-xl italic text-ink/90">“{r.text}”</p>
                <footer className="mt-4 pt-3 border-t border-line text-xs font-semibold text-green">{r.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Hours & Clinic Facility Location */}
      <section className={`${wrap} reveal grid gap-8 py-16 md:grid-cols-2`}>
        <div className={`${card} p-7`}>
          <h2 className="rule font-display text-3xl font-semibold text-green">Clinical Hours</h2>
          <p className="mt-2 text-xs text-ink/70">
            To ensure personalized care and strict sanitation standards, therapy sessions are scheduled by appointment.
          </p>
          <dl className="mt-5 grid gap-3">
            {HOURS.map(([d, h]) => (
              <div key={d} className="flex justify-between items-center border-b border-line pb-2.5 text-sm">
                <dt className="font-medium text-ink">{d}</dt>
                <dd className="font-semibold text-green">{h}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 rounded-xl bg-cream border border-line p-3.5 text-xs text-ink/75">
            <span className="font-bold text-green">Sunday Protocols:</span> Dedicated to deep clinical disinfection, autoclave sterilization, and chamber technical maintenance.
          </div>
        </div>

        <div className={`${card} p-7 flex flex-col justify-between`}>
          <div>
            <h2 className="rule font-display text-3xl font-semibold text-green">Visit Our Clinic</h2>
            <p className="mt-3 text-base font-semibold text-ink">{SITE.address}</p>
            <p className="mt-1 text-xs text-ink/70">
              Conveniently located in Area 3, Garki, Abuja. Discrete private parking and accessible ground-floor clinical reception.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-3">
            <a href={SITE.map} target="_blank" rel="noopener noreferrer" className={btnDark}>
              Get Google Maps Directions
            </a>
            <Link href="/contact" className={btnLine}>
              Contact Reception
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="bg-green py-16 text-center text-white border-t-2 border-orange/40">
        <div className={wrap}>
          <Divider />
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
            {SITE.slogan}
          </h2>
          <p className="mt-3 mx-auto max-w-lg text-sm text-cream/90">
            Schedule your personalized consultation with our clinical wellness team in Garki, Abuja today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/book" className={`${btn} !bg-orange !text-ink hover:!bg-white font-bold`}>
              Schedule Your Consultation
            </Link>
            <a href={`tel:${SITE.phones[0].tel}`} className={btnLine + " !text-white !border-white/30 hover:!bg-white/10"}>
              Call {SITE.phones[0].label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
