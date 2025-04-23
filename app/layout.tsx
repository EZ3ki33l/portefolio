import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#038C8C",
};

export const metadata: Metadata = {
  title: "Romain Rousset - Portfolio",
  description:
    "Bienvenue sur mon portfolio ! Je suis Romain Rousset, développeur web - React, Angular, Next.JS, Nest.JS",
  keywords: ["développeur web", "React", "Angular", "Next.JS", "Nest.JS", "portfolio", "Romain Rousset"],
  authors: [{ name: "Romain Rousset" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portefolio-alpha-steel.vercel.app",
    title: "Romain Rousset - Portfolio",
    description: "Bienvenue sur mon portfolio ! Je suis Romain Rousset, développeur web - React, Angular, Next.JS, Nest.JS",
    siteName: "Romain Rousset - Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" style={{ fontFamily: `${geistSans.style.fontFamily}, ${geistMono.style.fontFamily}` }}>
      <body className={`${geistSans.className} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
