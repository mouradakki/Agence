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
  title: "وكالة تأمين معتمدة – Atlanta Sanad | خدمات السيارات والسفر والشركات",
  description: "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad. تأمين سيارات وشاحنات وشركات، مع خدمات السفر وجوازات السفر. تواصل معنا الآن.",
  keywords: "تأمين السيارات، تأمين الشاحنات، تأمين الشركات، تأمين السفر، Atlanta Sanad، المغرب، الدار البيضاء",
  authors: [{ name: "وكالة أتلانتا سند للتأمين" }],
  openGraph: {
    title: "وكالة تأمين معتمدة – Atlanta Sanad | خدمات السيارات والسفر والشركات",
    description: "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad. تأمين سيارات وشاحنات وشركات.",
    type: "website",
    locale: "ar_MA",
    images: ["/placeholder.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "وكالة تأمين معتمدة – Atlanta Sanad",
    description: "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad.",
    images: ["/placeholder.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} suppressHydrationWarning>
      <body className="font-cairo antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

