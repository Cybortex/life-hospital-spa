import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { SITE } from "@/lib/site";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-cormorant" });
const sans = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Life Medical Spa & Wellness Center | Massage, Facials & Wellness Therapies in Garki, Abuja", template: "%s | Life Medical Spa" },
  description: "Massage, facials, waxing and wellness therapies in Garki, Abuja. Call or book online.",
};
export const viewport: Viewport = { viewportFit: "cover", themeColor: "#1e2b22" };

const ld = {
  "@context": "https://schema.org", "@type": "HealthAndBeautyBusiness", name: SITE.name, telephone: SITE.phones[0].tel,
  address: { "@type": "PostalAddress", streetAddress: "7 Kontagora Close, Area 3, Garki", addressLocality: "Abuja", addressCountry: "NG" },
  sameAs: [SITE.ig, SITE.fb].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="h-14 md:hidden" aria-hidden />
        <StickyBar />
      </body>
    </html>
  );
}
