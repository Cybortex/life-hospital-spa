"use client";
import Link from "next/link";
import { useState } from "react";
import Photo from "./Photo";
import { CATS, SERVICES, type Cat } from "@/lib/site";
import { btnSm } from "@/lib/ui";

export default function ServiceTabs({ initial = "all" }: { initial?: string }) {
  const [tab, setTab] = useState<Cat | "all">(CATS.some((c) => c.id === initial) ? (initial as Cat | "all") : "all");
  const list = SERVICES.filter((s) => tab === "all" || s.cats.includes(tab));
  return (
    <>
      <div role="tablist" aria-label="Service type" className="mt-6 flex flex-wrap gap-2">
        {CATS.map((c) => (
          <button key={c.id} role="tab" aria-selected={tab === c.id} onClick={() => setTab(c.id)}
            className={`rounded-full border px-4 py-2 ${tab === c.id ? "border-ink bg-ink text-cream" : "border-orange bg-white"}`}>{c.label}</button>
        ))}
      </div>
      <div className="mt-6 divide-y divide-line border-y border-orange/50">
        {list.map((s) => (
          <div key={s.slug} className="flex items-center gap-4 py-5">
            <Photo src={`service-${s.slug}.jpg`} alt={s.name} sizes="96px" className="size-20 shrink-0 rounded-xl border border-orange/60 md:size-24" />
            <div className="flex-1">
              <h2 className="font-display text-2xl font-semibold">{s.name}</h2>
              <p className="text-ink/75">{s.blurb}</p>
              <p className="text-sm text-orange-deep">{s.price ?? "Ask for price"}</p>
            </div>
            <Link href={`/book?service=${encodeURIComponent(s.name)}`} className={btnSm}>Book</Link>
          </div>
        ))}
      </div>
    </>
  );
}
