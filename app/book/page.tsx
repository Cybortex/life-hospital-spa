import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { DISCLAIMER, SITE } from "@/lib/site";
import { card, wrap } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Schedule Consultation & Appointments",
  description: "Book an integrative medical wellness consultation or treatment session at Life Medical Spa in Area 3, Garki, Abuja."
};

export default async function Book({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const q = await searchParams;

  return (
    <section className={`${wrap} py-14`}>
      <div className="max-w-3xl">
        <h1 className="rule font-display text-4xl font-semibold md:text-5xl">
          Schedule Your Consultation
        </h1>
        <p className="mt-4 text-base text-ink/80 leading-relaxed">
          Book your initial wellness assessment or reserve a direct therapy slot. Our reception team will confirm your appointment details directly on WhatsApp.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7">
          <BookingForm service={q.service} />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className={`${card} p-6`}>
            <h2 className="font-display text-2xl font-semibold text-green">First-Time Patient Protocol</h2>
            <ul className="mt-4 space-y-3 text-xs text-ink/80">
              <li className="flex gap-2.5">
                <span className="font-bold text-orange-deep">01.</span>
                <span><strong>Arrival:</strong> Please arrive 10 minutes before your slot for clinical intake verification.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-orange-deep">02.</span>
                <span><strong>Triage:</strong> Vitals and health contraindications are screened before hyperbaric or sauna sessions.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-orange-deep">03.</span>
                <span><strong>Attire:</strong> Single-use clinical robes and towels are provided in private sanitized change suites.</span>
              </li>
            </ul>
          </div>

          <div className={`${card} p-6`}>
            <h2 className="font-display text-2xl font-semibold text-green">Direct Clinic Contact</h2>
            <p className="mt-2 text-xs text-ink/75 leading-relaxed">
              Prefer to speak directly with our clinical triage officer before booking?
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <p><strong>Hotline:</strong> <a href={`tel:${SITE.phones[0].tel}`} className="text-green hover:underline">{SITE.phones[0].label}</a></p>
              <p><strong>Clinic Address:</strong> {SITE.address}</p>
              <p><strong>Working Days:</strong> Monday – Saturday (9:00 AM – 5:00 PM)</p>
            </div>
            <a
              href={SITE.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-orange-deep hover:underline"
            >
              Chat on WhatsApp Directly →
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-cream p-5 text-xs text-ink/70">
            <p className="font-bold text-green mb-1">Medical Disclaimer:</p>
            {DISCLAIMER}
          </div>
        </div>
      </div>
    </section>
  );
}
