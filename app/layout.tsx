import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Sevenhood — سابع جار | Premium Community Management Platform",
  description:
    "Sevenhood connects residents, operators, and service providers in one seamless platform built for Saudi Arabia's finest communities. Smart living, brilliantly managed.",
  keywords:
    "community management, Saudi Arabia, residential, smart home, KSA, سابع جار, إدارة المجتمع, المملكة العربية السعودية",
  authors: [{ name: "Sevenhood" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon:      [
      { url: '/icon',       sizes: '32x32',   type: 'image/png' },
      { url: '/icon.svg',   type: 'image/svg+xml' },
    ],
    apple:     [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
    shortcut:  [{ url: '/icon', type: 'image/png' }],
  },
  openGraph: {
    title: "Sevenhood — Premium Community Management Platform",
    description:
      "The platform built for Saudi Arabia's finest residential communities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevenhood — سابع جار",
    description: "Premium community management for Saudi Arabia's finest.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D2818",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Kufi+Arabic:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
