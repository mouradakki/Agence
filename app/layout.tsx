import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005"
  ),
  title: "وكالة تأمين معتمدة – Atlanta Sanad | خدمات السيارات والسفر والشركات",
  description:
    "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad. تأمين سيارات وشاحنات وشركات، مع خدمات السفر وجوازات السفر. تواصل معنا الآن.",
  keywords:
    "تأمين السيارات، تأمين الشاحنات، تأمين الشركات، تأمين السفر، Atlanta Sanad، المغرب، الدار البيضاء",
  authors: [{ name: "وكالة أتلانتا سند للتأمين" }],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title:
      "وكالة تأمين معتمدة – Atlanta Sanad | خدمات السيارات والسفر والشركات",
    description:
      "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad. تأمين سيارات وشاحنات وشركات.",
    type: "website",
    locale: "ar_MA",
    alternateLocale: "fr_MA",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma",
    siteName: "Agent Generale Fouad ABI",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma"
        }/logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Agent Generale Fouad ABI - وكالة تأمين معتمدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وكالة تأمين معتمدة – Atlanta Sanad",
    description: "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad.",
    images: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma"
      }/logo.jpeg`,
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma",
    languages: {
      ar: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma"
      }/?lang=ar`,
      fr: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma"
      }/?lang=fr`,
    },
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" className={cairo.variable} suppressHydrationWarning>
      <body className="font-cairo antialiased m-0 p-0" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
