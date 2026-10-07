"use client";
import Link from "next/link";
import { useState } from "react";
import Photo from "./Photo";
import { CATS, SERVICES, SITE, type Cat } from "@/lib/site";
import { btnSm, btnSmLine } from "@/lib/ui";

export default function ServiceTabs({ initial = "all" }: { initial?: string }) {
  const [tab, setTab] = useState<Cat | "all">(CATS.some((c) => c.id === initial) ? (initial as Cat | "all") : "all");
  const list = SERVICES.filter((s) => tab === "all" || s.cats.includes(tab));

  return (
    <div className="mt-8">
      {/* Tab Selectors */}
      <div role="tablist" aria-label="Service category" className="flex flex-wrap gap-2.5 border-b border-line pb-4">
        {CATS.map((c) => {
          const count = c.id === "all" ? SERVICES.length : SERVICES.filter((s) => s.cats.includes(c.id)).length;
          const isActive = tab === c.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(c.id)}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
                isActive
                  ? "border-green bg-green text-white shadow-xs"
                  : "border-line bg-white text-ink/80 hover:border-leaf hover:bg-cream"
              }`}
            >
              <span>{c.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-cream text-ink/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category Overview */}
      <p className="mt-4 text-xs font-medium text-ink/60">
        {CATS.find((c) => c.id === tab)?.desc}
      </p>

      {/* Services List in Clinical Cards */}
      <div className="mt-6 grid gap-4">
        {list.map((s) => (
          <div
            key={s.slug}
            className="clinical-card flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl p-5"
          >
            <Photo
              src={`service-${s.slug}.jpg`}
              alt={s.name}
              sizes="120px"
              className="size-24 sm:size-28 shrink-0 rounded-xl border border-line"
            />

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-green/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green">
                  {s.categoryLabel}
                </span>
                {s.requiresConsultation && (
                  <span className="rounded-md bg-orange/15 px-2 py-0.5 text-[10px] font-semibold text-orange-deep">
                    Pre-Screening Required
                  </span>
                )}
                <span className="text-xs text-ink/50 ml-auto font-medium">
                  Duration: {s.duration}
                </span>
              </div>

              <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink leading-tight">
                {s.name}
              </h2>

              <p className="mt-1 text-xs text-ink/75 leading-relaxed">
                {s.blurb}
              </p>

              {s.protocol && (
                <p className="mt-2 text-[11px] font-medium text-leaf flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-leaf shrink-0" />
                  Protocol: {s.protocol}
                </p>
              )}
            </div>

            <div className="flex w-full sm:w-auto sm:flex-col items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-line/60">
              <Link
                href={`/book?service=${encodeURIComponent(s.name)}`}
                className={`${btnSm} w-full sm:w-auto text-center`}
              >
                Book Consultation
              </Link>
              <a
                href={`${SITE.wa}?text=${encodeURIComponent(`Hello, I would like to inquire about the ${s.name} protocol at Life Medical Spa.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnSmLine} w-full sm:w-auto text-center`}
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
