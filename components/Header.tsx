import Link from "next/link";
import Photo from "./Photo";
import { NAV, SITE } from "@/lib/site";
import { btnSm } from "@/lib/ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Photo src="logo.png" alt="Life Medical Spa" fit="contain" className="h-10 w-10 transition-transform group-hover:scale-105" sizes="40px" />
          <div>
            <span className="block font-display text-2xl font-bold tracking-tight text-green leading-none">
              Life Medical Spa
            </span>
            <span className="block text-[11px] font-semibold tracking-widest uppercase text-orange-deep mt-0.5">
              Wellness &amp; Clinical Aesthetics
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-ink transition-colors hover:text-green"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/book" className={btnSm}>
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/book" className={btnSm}>
            Book
          </Link>
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-lg border border-line p-2 text-lg text-ink hover:bg-cream" aria-label="Menu">
              ☰
            </summary>
            <div className="absolute right-0 mt-2 grid w-52 gap-1 rounded-2xl border border-line bg-white p-3 shadow-lg z-50">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-cream hover:text-green"
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-line text-xs font-semibold text-green px-3">
                Desk: {SITE.phones[0].label}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
