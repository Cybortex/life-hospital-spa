import type { Metadata } from "next";
import ServiceTabs from "@/components/ServiceTabs";
import { wrap, badge } from "@/lib/ui";
import { DISCLAIMER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clinical Services & Therapy Directory",
  description: "Physician-guided wellness therapies, hyperbaric oxygen therapy, wIRA photothermal sessions, and clinical aesthetics in Area 3, Garki, Abuja."
};

export default async function Services({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams;

  return (
    <section className={`${wrap} py-14`}>
      <div className="max-w-3xl">
        <span className={badge}>Treatment Directory</span>
        <h1 className="rule mt-2 font-display text-4xl font-semibold md:text-5xl">
          Clinical Therapies &amp; Aesthetic Care
        </h1>
        <p className="mt-4 text-base text-ink/80 leading-relaxed">
          Our therapies combine advanced medical wellness technology with restorative clinical bodywork. Every procedure is administered under standardized hygiene protocols with dedicated practitioner supervision.
        </p>
      </div>

      {/* Clinical Disclaimer Banner */}
      <div className="mt-6 rounded-2xl border border-line bg-white p-4 text-xs text-ink/75 flex items-start gap-3 shadow-2xs">
        <span className="size-5 rounded-full bg-green/10 text-green flex items-center justify-center font-bold shrink-0 mt-0.5">
          ℹ
        </span>
        <div>
          <strong className="text-green font-semibold">Pre-Screening &amp; Clinical Safety Protocol: </strong>
          {DISCLAIMER}
        </div>
      </div>

      <ServiceTabs initial={cat} />
    </section>
  );
}
