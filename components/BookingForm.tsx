"use client";
import { useState } from "react";
import { SERVICES, SITE } from "@/lib/site";
import { btn, field } from "@/lib/ui";

const TIMES = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:00"];

export default function BookingForm({ service }: { service?: string }) {
  const [time, setTime] = useState("");
  const [err, setErr] = useState("");
  const [sunday, setSunday] = useState(false);
  const [consultType, setConsultType] = useState<"consultation" | "treatment">(
    service ? "treatment" : "consultation"
  );

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sunday) return setErr("The clinic is closed on Sundays for deep sterilization. Please choose another date.");
    if (!time) return setErr("Please select an appointment time slot.");
    
    const f = new FormData(e.currentTarget);
    const selectedService = consultType === "consultation" 
      ? "Comprehensive Clinical Intake & Wellness Consultation" 
      : f.get("service");
    const notes = f.get("notes") ? ` Focus/Health notes: ${f.get("notes")}.` : "";
    
    const msg = `Hello Life Medical Spa Reception,

I would like to schedule an appointment:
• Type: ${consultType === "consultation" ? "Initial Clinical Assessment" : "Direct Treatment Protocol"}
• Service: ${selectedService}
• Date: ${f.get("date")}
• Time Slot: ${time}
• Patient Name: ${f.get("name")}
• Contact: ${f.get("phone")}${notes}

Please confirm availability. Thank you.`;

    window.open(`${SITE.wa}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={submit} className="clinical-card grid max-w-xl gap-5 rounded-2xl p-6 sm:p-8">
      {/* Consultation Type Selector */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-green">
          Appointment Classification
        </label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setConsultType("consultation")}
            className={`rounded-xl border p-3 text-left transition-all ${
              consultType === "consultation"
                ? "border-green bg-green/5 text-green ring-1 ring-green"
                : "border-line bg-white text-ink/70 hover:border-leaf"
            }`}
          >
            <span className="block text-xs font-bold">Clinical Consultation</span>
            <span className="block text-[11px] text-ink/60 mt-0.5">Doctor triage &amp; custom therapy plan</span>
          </button>

          <button
            type="button"
            onClick={() => setConsultType("treatment")}
            className={`rounded-xl border p-3 text-left transition-all ${
              consultType === "treatment"
                ? "border-green bg-green/5 text-green ring-1 ring-green"
                : "border-line bg-white text-ink/70 hover:border-leaf"
            }`}
          >
            <span className="block text-xs font-bold">Specific Treatment</span>
            <span className="block text-[11px] text-ink/60 mt-0.5">Direct therapy protocol selection</span>
          </button>
        </div>
      </div>

      {/* Service Selector (when in treatment mode) */}
      {consultType === "treatment" && (
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-green">
            Selected Clinical Service
          </label>
          <select name="service" defaultValue={service ?? SERVICES[0].name} className={field}>
            <optgroup label="Medical Wellness Therapies">
              {SERVICES.filter((s) => s.cats.includes("therapy")).map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name} ({s.duration})
                </option>
              ))}
            </optgroup>
            <optgroup label="Clinical Aesthetics & Bodywork">
              {SERVICES.filter((s) => s.cats.includes("spa")).map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name} ({s.duration})
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      )}

      {/* Preferred Date */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-green">
          Preferred Date (Monday – Saturday)
        </label>
        <input
          type="date"
          name="date"
          required
          suppressHydrationWarning
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) =>
            setSunday(!!e.target.value && new Date(e.target.value + "T12:00:00").getDay() === 0)
          }
          className={field}
        />
        {sunday && (
          <p className="mt-1.5 text-xs font-medium text-orange-deep">
            Notice: Sundays are reserved for facility-wide medical disinfection and autoclave sterilization. Please select Monday to Saturday.
          </p>
        )}
      </div>

      {/* Time Slots */}
      <fieldset>
        <legend className="text-xs font-bold uppercase tracking-wider text-green">
          Available Clinical Time Slot
        </legend>
        <div className="mt-2 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {TIMES.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={time === t}
              onClick={() => {
                setTime(t);
                setErr("");
              }}
              className={`rounded-xl border py-2.5 text-xs font-semibold transition-all ${
                time === t
                  ? "border-green bg-green text-white shadow-xs"
                  : "border-line bg-white text-ink hover:border-leaf hover:bg-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Contact Details */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-green">
            Full Patient Name
          </label>
          <input
            name="name"
            placeholder="e.g. Dr. / Mr. / Mrs. Okon"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-green">
            Phone / WhatsApp Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+234..."
            required
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>

      {/* Health Notes */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-green">
          Health Notes or Therapy Focus <span className="font-normal text-ink/50">(Optional)</span>
        </label>
        <textarea
          name="notes"
          rows={2}
          placeholder="e.g. chronic lower back strain, sensitive skin, previous hyperbaric experience..."
          className={field + " resize-none"}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button className={`${btn} w-full py-3.5 !bg-green hover:!bg-leaf font-bold text-white`}>
          Confirm Appointment Request on WhatsApp
        </button>
        <p role="status" className="mt-2 text-center text-xs text-ink/65 min-h-5">
          {err || "Transfers your intake details securely to clinic reception on WhatsApp for final scheduling."}
        </p>
      </div>

      <div className="rounded-xl border border-line bg-cream/60 p-3 text-[11px] text-ink/70">
        🔒 <strong className="text-green">Patient Confidentiality Guarantee:</strong> Your health details and consultation notes remain strictly confidential between you and the clinical care team.
      </div>
    </form>
  );
}
