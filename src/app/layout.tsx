import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { BUSINESS, SITE_URL } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
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
    // Marca
    "JSG Motors",
    "JSG Motors Concórdia",

    // Oficina e Auto Center
    "oficina mecânica em Concórdia",
    "oficina mecânica Concórdia SC",
    "mecânica automotiva em Concórdia",
    "mecânico em Concórdia SC",
    "auto center em Concórdia",
    "autocenter Concórdia SC",
    "centro automotivo em Concórdia",
    "serviços automotivos Concórdia",

    // Serviços
    "manutenção automotiva Concórdia",
    "revisão automotiva Concórdia",
    "troca de óleo Concórdia",
    "injeção eletrônica Concórdia",
    "freios e suspensão Concórdia",
    "diagnóstico automotivo Concórdia",

    // Diferenciais
    "Valvoline Concórdia",
    "troca de óleo Valvoline",
    "oficina com leva e traz",
    "leva e traz oficina Concórdia",
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
      <body className="min-h-dvh">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
