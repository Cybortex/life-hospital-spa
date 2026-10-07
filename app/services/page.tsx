import type { Metadata } from "next";
import ServiceTabs from "@/components/ServiceTabs";
import { wrap } from "@/lib/ui";
import { DISCLAIMER } from "@/lib/site";

export const metadata: Metadata = { title: "Services", description: "Massage, facials, waxing and wellness therapies in Garki, Abuja." };

export default async function Services({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams;
  return (
    <section className={`${wrap} py-12`}>
      <h1 className="rule font-display text-5xl font-semibold">Services</h1>
      <p className="mt-3 max-w-xl text-ink/75">Pick a category, then book in a minute. {DISCLAIMER}</p>
      <ServiceTabs initial={cat} />
    </section>
  );
}
