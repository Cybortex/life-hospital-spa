import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { badge, btn, card, wrap } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Clinical & Aesthetic Practitioners",
  description: "Meet the multidisciplinary clinical wellness and aesthetic therapy team at Life Medical Spa in Area 3, Garki, Abuja."
};

const disciplines = [
  {
    role: "Clinical Wellness Technicians",
    desc: "Trained operators managing our monoplace hyperbaric oxygen chambers and German Hydrosun® wIRA systems under strict vital-monitoring protocols."
  },
  {
    role: "Neuromuscular & Bodywork Therapists",
    desc: "Certified specialists in anatomical trigger point release, chronic musculoskeletal relief, and nervous system restorative bodywork."
  },
  {
    role: "Clinical Aesthetic Specialists",
    desc: "Aestheticians focusing on barrier health, dermatological extractions, green LED phototherapy, and melanin-friendly organic skin resurfacing."
  },
  {
    role: "Hygiene & Sterilization Officers",
    desc: "Dedicated clinical compliance personnel overseeing autoclave instrument processing, HEPA air sterilization, and single-use protocol packs."
  }
];

export default function Team() {
  return (
    <section className={`${wrap} py-14`}>
      <div className="max-w-3xl">
        <span className={badge}>Practitioner Team</span>
        <h1 className="rule mt-2 font-display text-4xl font-semibold md:text-5xl">
          Multidisciplinary Clinical Care Team
        </h1>
        <p className="mt-4 text-base text-ink/80 leading-relaxed">
          At Life Medical Spa, your care is delivered by trained wellness technicians and certified therapists following doctor-supervised parameters. We bring clinical precision and genuine hospitality to every session.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border-2 border-line bg-white shadow-xl">
        <Photo
          src="team-photo.jpg"
          alt="The Life Medical Spa clinical and therapy team in Garki Abuja"
          priority
          sizes="(min-width:1152px) 1112px, 100vw"
          className="aspect-[16/9] w-full"
        />
        <div className="p-6 sm:p-8 bg-cream/40 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-green">
              Practitioners at 7 Kontagora Close, Area 3, Garki
            </p>
            <p className="font-display text-2xl font-semibold text-ink mt-0.5">
              Dedicated to Your Physiological &amp; Aesthetic Wellbeing
            </p>
          </div>
          <Link href="/book" className={btn}>
            Book Consultation With Our Team
          </Link>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl font-semibold text-green">Clinical Disciplines</h2>
        <p className="mt-2 text-xs text-ink/75">Our team operates across four specialized care divisions:</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => (
            <div key={d.role} className={`${card} p-6 flex flex-col justify-between`}>
              <div>
                <div className="size-2 rounded-full bg-orange mb-3" />
                <h3 className="font-display text-xl font-semibold text-green leading-snug">{d.role}</h3>
                <p className="mt-2.5 text-xs text-ink/75 leading-relaxed">{d.desc}</p>
              </div>
              <p className="mt-4 pt-3 border-t border-line/60 text-[10px] font-bold uppercase tracking-wider text-orange-deep">
                Certified Practice
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
