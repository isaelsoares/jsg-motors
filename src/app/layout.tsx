import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { BUSINESS, SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const title = "JSG Motors | Oficina mecânica em Concórdia SC com leva e traz grátis";
const description =
  "Oficina mecânica em Concórdia (SC): manutenção preventiva, troca de óleo Valvoline, freios, suspensão, injeção eletrônica e motor. Buscamos seu carro em casa ou no trabalho, grátis em Concórdia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: BUSINESS.name,
  keywords: [
    "oficina mecânica Concórdia",
    "mecânico Concórdia SC",
    "troca de óleo Concórdia",
    "Valvoline Concórdia",
    "leva e traz oficina",
    "injeção eletrônica Concórdia",
    "freios e suspensão Concórdia",
    "JSG Motors",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: BUSINESS.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#010203",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
