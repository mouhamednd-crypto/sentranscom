import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SENTRANSCOM SAURL | Transport • Logistique • BTP • Terrassement au Sénégal",
    template: "%s | SENTRANSCOM",
  },

  description:
    "SENTRANSCOM est une entreprise sénégalaise spécialisée dans le transport, la logistique, le terrassement, l'exploitation de carrière, l'aménagement de pistes et la vente de pièces détachées.",

  keywords: [
  "SENTRANSCOM",
  "SENTRANSCOM SAURL",
  "Transport Sénégal",
  "Entreprise de transport Sénégal",
  "Transport de marchandises",
  "Transport portuaire",
  "Logistique Sénégal",
  "BTP Sénégal",
  "Terrassement",
  "Entreprise BTP",
  "Travaux publics Sénégal",
  "Carrière",
  "Exploitation de carrière",
  "Aménagement de pistes",
  "Location d'engins",
  "Pièces détachées",
  "Diamniadio",
  "Dakar",
  "Sénégal",
],

  authors: [
    {
      name: "SENTRANSCOM",
    },
  ],

  creator: "SENTRANSCOM",

  metadataBase: new URL("https://www.sentranscom.com"),

  openGraph: {
    title: "SENTRANSCOM",
    description:
      "Transport • Logistique • BTP • Terrassement • Carrière au Sénégal.",
    url: "https://www.sentranscom.com",
    siteName: "SENTRANSCOM",
    locale: "fr_SN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SENTRANSCOM",
    description:
      "Transport • Logistique • BTP • Terrassement • Carrière au Sénégal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
  {children}
  <WhatsAppButton />
  <Toaster
    position="top-right"
    richColors
    closeButton
  />
</body>
    </html>
  );
}
