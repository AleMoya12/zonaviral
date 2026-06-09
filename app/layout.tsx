import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = defaultMetadata;

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={`${manrope.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
