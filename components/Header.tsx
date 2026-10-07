import Link from "next/link";
import Photo from "./Photo";
import { NAV } from "@/lib/site";
import { btn, btnSm } from "@/lib/ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-semibold text-leaf">
          <Photo src="logo.png" alt="" fit="contain" className="h-9 w-9" sizes="36px" />
          Life Medical Spa
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map((n) => <Link key={n.href} href={n.href} className="hover:text-orange-deep">{n.label}</Link>)}
          <Link href="/book" className={btn}>Book Now</Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/book" className={btnSm}>Book Now</Link>
          <details className="relative">
            <summary className="cursor-pointer list-none p-2 text-xl" aria-label="Menu">☰</summary>
            <div className="absolute right-0 mt-2 grid w-48 gap-1 rounded-xl border border-line bg-cream p-3 shadow-lg">
              {NAV.map((n) => <Link key={n.href} href={n.href} className="rounded-lg px-3 py-2 hover:bg-line">{n.label}</Link>)}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
