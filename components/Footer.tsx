import Link from "next/link";
import { DISCLAIMER, HOURS, NAV, SITE } from "@/lib/site";

export default function Footer() {
  const a = "text-xs text-cream/80 hover:text-orange transition-colors";
  return (
    <footer className="border-t-2 border-orange/60 bg-green text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        {/* Col 1: Brand & Clinical Identity */}
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-white">{SITE.name}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-orange">{SITE.tagline}</p>
          <p className="mt-3 text-xs text-cream/80 leading-relaxed">{SITE.address}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white">
            <span className="size-1.5 rounded-full bg-orange" />
            <span>Doctor-Supervised Facility</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <nav aria-label="Footer" className="grid content-start gap-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-orange">Clinical Navigation</p>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={a}>
              {n.label}
            </Link>
          ))}
          <Link href="/book" className={a}>
            Book Clinical Consultation
          </Link>
          <Link href="/services?cat=therapy" className={a}>
            Medical Wellness Therapies
          </Link>
          <Link href="/services?cat=spa" className={a}>
            Aesthetics &amp; Bodywork
          </Link>
        </nav>

        {/* Col 3: Clinical Contact & Reception */}
        <div className="grid content-start gap-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-orange">Reception &amp; Contact</p>
          {SITE.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className={a}>
              Desk: {p.label}
            </a>
          ))}
          <a href={SITE.wa} target="_blank" rel="noopener noreferrer" className={a}>
            WhatsApp Consultation Desk
          </a>
          {SITE.fb && (
            <a href={SITE.fb} target="_blank" rel="noopener noreferrer" className={a}>
              Official Facebook Page
            </a>
          )}
          <a href={SITE.map} target="_blank" rel="noopener noreferrer" className={a}>
            Directions (Area 3, Garki)
          </a>
        </div>

        {/* Col 4: Clinical Hours */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-orange">Appointment Hours</p>
          <dl className="mt-3 grid gap-2 text-xs">
            {HOURS.map(([d, h]) => (
              <div key={d} className="flex flex-col border-b border-white/10 pb-1.5">
                <dt className="text-cream/60">{d}</dt>
                <dd className="font-semibold text-white">{h}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Clinical Disclaimer Bar */}
      <div className="border-t border-white/15 bg-black/20 py-6">
        <div className="mx-auto max-w-6xl px-5 text-xs text-cream/70 leading-relaxed">
          <p className="font-semibold text-white mb-1">Medical Governance Statement:</p>
          <p>{DISCLAIMER}</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved. Area 3, Garki, Abuja.
      </div>
    </footer>
  );
}
