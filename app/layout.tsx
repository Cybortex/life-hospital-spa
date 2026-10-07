import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { SITE } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Life Medical Spa & Wellness Center | Integrative Clinical Wellness & Aesthetics in Garki, Abuja",
    template: "%s | Life Medical Spa & Wellness Center",
  },
  description:
    "Doctor-supervised wellness therapies, hyperbaric oxygen therapy, German wIRA photothermal care, clinical facials, and therapeutic bodywork in Area 3, Garki, Abuja.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#0D3A2D",
};

const ld = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE.name,
  telephone: SITE.phones[0].tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Kontagora Close, Area 3, Garki",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  sameAs: [SITE.ig, SITE.fb].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="h-16 md:hidden" aria-hidden />
        <StickyBar />
      </body>
    </html>
  );
}
