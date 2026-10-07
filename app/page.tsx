import Link from "next/link";
import Photo from "@/components/Photo";
import Divider from "@/components/Divider";
import { DISCLAIMER, HOURS, OFFERS, REVIEWS, SERVICES, SITE } from "@/lib/site";
import { btn, btnDark, btnLine, card, wrap } from "@/lib/ui";

const groups = [
  { id: "spa", title: "Spa & beauty", note: "Massage, facials, scrubs and waxing." },
  { id: "therapy", title: "Wellness therapies", note: "Speak to our team to see what suits you." },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero: one headline, one action, one image */}
      <section className="bg-green text-white">
        <div className={`${wrap} grid items-center gap-10 py-10 md:grid-cols-2 md:py-16`}>
          <div>
            <p className="mb-3 text-sm tracking-widest text-cream/80 uppercase">{SITE.tagline}</p>
            <h1 className="font-display text-5xl leading-[1.05] font-semibold md:text-7xl">Massage, skin care and wellness therapies in <em className="text-cream">Garki, Abuja.</em></h1>
            <p className="mt-5 max-w-md text-lg text-cream/90">Spa treatments and wellness therapies in one place. Pick a time or call us.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/book" className={btn}>Book Now</Link>
              <a href={`tel:${SITE.phones[0].tel}`} className={btnLine}>Call {SITE.phones[0].label}</a>
            </div>
          </div>
          <Photo src="hero-spa.jpg" alt="Life Medical Spa & Wellness Center" priority sizes="(min-width:768px) 50vw, 100vw" className="aspect-[4/3] rounded-3xl border-2 border-orange" />
        </div>
      </section>

      <div className={`${wrap} flex flex-wrap gap-x-8 gap-y-1 border-b border-orange/40 py-5 text-sm text-ink/75`}>
        <span>Mon–Sat, 9 AM to 5 PM</span><span>Area 3, Garki, Abuja</span><span>Spa treatments &amp; wellness therapies</span>
      </div>

      <section className={`${wrap} reveal py-14`}>
        <h2 className="rule font-display text-4xl font-semibold md:text-5xl">What we offer</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.id} className={`${card} p-6`}>
              <h3 className="font-display text-3xl font-semibold text-green">{g.title}</h3>
              <p className="mt-1 text-ink/70">{g.note}</p>
              <ul className="mt-4 grid gap-1">{SERVICES.filter((s) => s.cats.includes(g.id)).map((s) => <li key={s.slug} className="border-b border-line py-1.5">{s.name}</li>)}</ul>
              <Link href={`/services?cat=${g.id}`} className="mt-4 inline-block text-orange-deep underline underline-offset-4">See details and book</Link>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} reveal pb-14`}>
        <h2 className="rule font-display text-4xl font-semibold md:text-5xl">Start here</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {Object.entries(OFFERS).map(([slug, o]) => (
            <Link key={slug} href={`/offers/${slug}`} className={`${card} group overflow-hidden transition hover:-translate-y-1`}>
              <Photo src={`offer-${slug}.jpg`} alt={o.title} sizes="(min-width:640px) 33vw, 100vw" className="aspect-[4/3]" />
              <div className="p-4"><h3 className="font-display text-2xl font-semibold">{o.title}</h3><p className="mt-1 text-orange-deep">See more</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="reveal bg-ink text-cream">
        <div className={`${wrap} grid items-center gap-8 py-12 md:grid-cols-2`}>
          <Photo src="therapy-room.jpg" alt="Wellness therapy room" sizes="(min-width:768px) 50vw, 100vw" className="aspect-[3/2] rounded-2xl border border-orange" />
          <div>
            <h2 className="rule font-display text-4xl font-semibold">Wellness therapies, explained</h2>
            <p className="mt-4 text-cream/85">Infrared sauna, hyperbaric oxygen therapy, colonic irrigation and wIRA therapy. Talk to our team first so you know what to expect.</p>
            <p className="mt-3 text-sm text-cream/60">{DISCLAIMER}</p>
            <Link href="/offers/therapies" className={`${btn} mt-6`}>Book a consultation</Link>
          </div>
        </div>
      </section>

      {REVIEWS.length > 0 && (
        <section className={`${wrap} reveal py-14`}>
          <h2 className="rule font-display text-4xl font-semibold">What clients say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r) => <blockquote key={r.name} className={`${card} p-5`}><p className="font-display text-xl italic">“{r.text}”</p><footer className="mt-3 text-sm text-ink/70">{r.name}</footer></blockquote>)}
          </div>
        </section>
      )}

      <section className={`${wrap} reveal grid gap-8 py-14 md:grid-cols-2`}>
        <div className={`${card} p-6`}>
          <h2 className="rule font-display text-3xl font-semibold">Hours</h2>
          <dl className="mt-4 grid gap-2">{HOURS.map(([d, h]) => <div key={d} className="flex justify-between border-b border-line pb-2"><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
        </div>
        <div className={`${card} p-6`}>
          <h2 className="rule font-display text-3xl font-semibold">Find us</h2>
          <p className="mt-4 text-lg">{SITE.address}</p>
          <div className="mt-5 flex flex-wrap gap-3"><a href={SITE.map} target="_blank" rel="noopener noreferrer" className={btnDark}>Get directions</a><Link href="/contact" className={btnLine}>Call or WhatsApp</Link></div>
        </div>
      </section>

      <section className="bg-green py-14 text-center text-white">
        <Divider />
        <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{SITE.slogan}</h2>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/book" className={btn}>Book Now</Link><a href={`tel:${SITE.phones[0].tel}`} className={btnLine}>Call {SITE.phones[0].label}</a></div>
      </section>
    </>
  );
}
