import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { DISCLAIMER, OFFERS, SITE } from "@/lib/site";
import { badge, btn, btnLine, card } from "@/lib/ui";

export function generateStaticParams() {
  return Object.keys(OFFERS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const o = OFFERS[(await params).slug];
  return o ? { title: `${o.title} | Clinical Protocol`, description: o.p } : {};
}

export default async function Offer({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const o = OFFERS[slug];
  if (!o) notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      {/* Header Eyebrow */}
      <div className="flex items-center gap-2">
        <span className={badge}>{o.badge}</span>
        <span className="text-xs text-ink/50">Clinical Treatment Pathway</span>
      </div>

      <h1 className="rule mt-3 font-display text-4xl leading-tight font-semibold md:text-5xl text-ink">
        {o.h}
      </h1>

      <p className="mt-4 text-base md:text-lg text-ink/80 leading-relaxed max-w-2xl">
        {o.p}
      </p>

      {/* Featured Photo */}
      <div className="mt-8 overflow-hidden rounded-3xl border-2 border-line bg-white shadow-xl">
        <Photo
          src={`offer-${slug}.jpg`}
          alt={o.title}
          priority
          sizes="(min-width:896px) 896px, 100vw"
          className="aspect-[16/9] sm:aspect-[21/9] w-full"
        />
      </div>

      {/* Clinical Highlights Card */}
      <div className="mt-10 grid gap-8 md:grid-cols-12 items-start">
        <div className="md:col-span-7 space-y-6">
          <div className={`${card} p-7`}>
            <h2 className="font-display text-2xl font-semibold text-green">
              Protocol Specifications
            </h2>
            <ul className="mt-5 space-y-3">
              {o.points.map((p) => (
                <li key={p} className="flex items-start gap-3 border-b border-line/70 pb-3 text-xs md:text-sm text-ink/80">
                  <span className="text-orange font-bold text-sm">✦</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-cream/70 p-5 text-xs text-ink/75 leading-relaxed">
            <strong className="text-green block mb-1">Clinical Safety &amp; Medical Disclaimer:</strong>
            {DISCLAIMER}
          </div>
        </div>

        <div className="md:col-span-5 space-y-5">
          <div className={`${card} p-6`}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-green">
              Ready to Proceed?
            </h3>
            <p className="mt-1 font-display text-xl font-semibold text-ink">
              Reserve Your Session
            </p>
            <p className="mt-2 text-xs text-ink/70">
              Assigned protocol: <strong className="text-ink">{o.service}</strong>. Triage and intake screening completed on arrival.
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                href={`/book?service=${encodeURIComponent(o.service)}`}
                className={`${btn} w-full text-center`}
              >
                Book This Protocol Now
              </Link>
              <a
                href={`${SITE.wa}?text=${encodeURIComponent(`Hello, I would like to consult about the ${o.title} protocol (${o.service}) at Life Medical Spa.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnLine} w-full text-center`}
              >
                Inquire on WhatsApp Desk
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-white p-4 text-xs text-ink/75">
            📍 <strong>Clinic Location:</strong> {SITE.address} (Area 3, Garki).
          </div>
        </div>
      </div>
    </article>
  );
}
