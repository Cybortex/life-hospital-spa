import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { HOURS, SITE } from "@/lib/site";
import { btn, btnLine, btnDark, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Contact Us", description: "Call, WhatsApp or visit Life Medical Spa & Wellness Center at 7 Kontagora Close, Area 3, Garki, Abuja." };

export default function Contact() {
  return (
    <section className={`${wrap} py-12`}>
      <h1 className="rule font-display text-5xl font-semibold">Contact Us</h1>
      <div className="mt-6 flex flex-wrap gap-3">
        {SITE.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className={btn}>Call {p.label}</a>)}
        <a href={SITE.wa} target="_blank" rel="noopener noreferrer" className={btnLine}>WhatsApp</a>
        {SITE.ig && <a href={SITE.ig} target="_blank" rel="noopener noreferrer" className={btnLine}>Instagram</a>}
        {SITE.fb && <a href={SITE.fb} target="_blank" rel="noopener noreferrer" className={btnLine}>Facebook</a>}
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold">Find us</h2>
          <p className="mt-2 text-lg">{SITE.address}</p>
          <dl className="mt-4 grid gap-2">{HOURS.map(([d, h]) => <div key={d} className="flex justify-between border-b border-line pb-2"><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
          <Photo src="location-front.jpg" alt="Life Medical Spa entrance" sizes="(min-width:768px) 50vw, 100vw" className="mt-5 aspect-[3/2] rounded-2xl border border-orange/60" />
          <a href={SITE.map} target="_blank" rel="noopener noreferrer" className={`${btnDark} mt-4`}>Get directions</a>
        </div>
        <iframe title="Map to Life Medical Spa" src={SITE.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-square w-full rounded-2xl border border-orange/60 md:aspect-auto md:min-h-96" />
      </div>
      <p className="mt-8"><Link href="/book" className="text-orange-deep underline underline-offset-4">Prefer to book online? Book Now</Link></p>
    </section>
  );
}
