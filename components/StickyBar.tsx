import Link from "next/link";
import { SITE } from "@/lib/site";

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between border-t border-line bg-white/95 px-4 py-2.5 pb-[calc(0.6rem+env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${SITE.phones[0].tel}`}
          className="inline-flex items-center justify-center rounded-xl border-2 border-green/30 bg-white px-3 py-1.5 text-xs font-bold text-green transition hover:bg-green hover:text-white active:scale-95"
        >
          📞 Call
        </a>
        <a
          href={SITE.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border-2 border-green/30 bg-white px-3 py-1.5 text-xs font-bold text-green transition hover:bg-green hover:text-white active:scale-95"
        >
          💬 WhatsApp
        </a>
      </div>
      <Link
        href="/book"
        className="inline-flex items-center justify-center rounded-xl bg-green px-5 py-2 text-xs font-bold text-white shadow-xs transition active:scale-95 hover:bg-leaf"
      >
        Book Consultation
      </Link>
    </div>
  );
}
