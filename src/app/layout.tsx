import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

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
    default: "SENTRANSCOM | Transport, BTP et Logistique au Sénégal",
    template: "%s | SENTRANSCOM",
  },

  description:
    "SENTRANSCOM est une entreprise sénégalaise spécialisée dans le transport, la logistique, le terrassement, l'exploitation de carrière, l'aménagement de pistes et la vente de pièces détachées.",

  keywords: [
    "SENTRANSCOM",
    "Transport Sénégal",
    "Logistique Sénégal",
    "Terrassement",
    "BTP Sénégal",
    "Carrière",
    "Aménagement de pistes",
    "Pièces détachées",
    "Location d'engins",
    "Diamniadio",
    "Dakar",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
