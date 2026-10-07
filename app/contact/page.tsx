import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { HOURS, SITE } from "@/lib/site";
import { badge, btn, btnDark, btnLine, card, wrap } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Clinical Reception & Contact",
  description: "Contact Life Medical Spa & Wellness Center at 7 Kontagora Close, Area 3, Garki, Abuja. Call or WhatsApp clinic reception."
};

export default function Contact() {
  return (
    <section className={`${wrap} py-14`}>
      <div className="max-w-3xl">
        <span className={badge}>Clinic Navigation</span>
        <h1 className="rule mt-2 font-display text-4xl font-semibold md:text-5xl">
          Clinical Reception &amp; Location
        </h1>
        <p className="mt-4 text-base text-ink/80 leading-relaxed">
          Our clinic is located in a discreet, peaceful residential close in Area 3, Garki, Abuja. Contact our front desk for appointment scheduling, clinical inquiries, or directions.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-3">
        {SITE.phones.map((p) => (
          <a key={p.tel} href={`tel:${p.tel}`} className={btn}>
            Call Reception: {p.label}
          </a>
        ))}
        <a href={SITE.wa} target="_blank" rel="noopener noreferrer" className={btnLine}>
          WhatsApp Consultation Desk
        </a>
        {SITE.fb && (
          <a href={SITE.fb} target="_blank" rel="noopener noreferrer" className={btnLine}>
            Facebook Page
          </a>
        )}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Left Column: Facility Details */}
        <div className={`${card} p-7 flex flex-col justify-between`}>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-green">Sanctuary Address</span>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{SITE.address}</h2>
            <p className="mt-2 text-xs text-ink/70">
              Area 3, Garki, Federal Capital Territory, Abuja. Discrete ground-floor reception with designated patient parking.
            </p>

            <div className="mt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green">Clinical Hours</span>
              <dl className="mt-2.5 grid gap-2">
                {HOURS.map(([d, h]) => (
                  <div key={d} className="flex justify-between items-center border-b border-line pb-2 text-xs">
                    <dt className="font-medium text-ink">{d}</dt>
                    <dd className="font-semibold text-green">{h}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              <Photo
                src="location-front.jpg"
                alt="Life Medical Spa & Wellness Center entrance in Area 3 Garki Abuja"
                sizes="(min-width:768px) 50vw, 100vw"
                className="aspect-[3/2] w-full"
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-line flex flex-wrap gap-3">
            <a href={SITE.map} target="_blank" rel="noopener noreferrer" className={btnDark}>
              Open in Google Maps
            </a>
            <Link href="/book" className={btn}>
              Schedule Appointment
            </Link>
          </div>
        </div>

        {/* Right Column: Embedded Map */}
        <div className={`${card} p-7 flex flex-col justify-between`}>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-green">Interactive Map</span>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">Find Us in Area 3, Garki</h2>
            <p className="mt-2 text-xs text-ink/70">
              Easily accessible from Central Business District, Wuse, and Asokoro.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line h-[360px] lg:h-[450px]">
            <iframe
              title="Map to Life Medical Spa in Garki Abuja"
              src={SITE.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>

          <div className="mt-6 text-xs text-ink/70">
            Need driving assistance? Call our reception at <a href={`tel:${SITE.phones[0].tel}`} className="font-bold text-green hover:underline">{SITE.phones[0].label}</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
