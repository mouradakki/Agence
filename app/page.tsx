"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import Script from "next/script";

export default function Home() {
  const { dir, t } = useLanguage();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "وكالة أتلانتا سند للتأمين",
    description:
      "وكالة تأمين معتمدة من AtlantaSanad. خدمات تأمين السيارات والشاحنات والشركات وتأمين السفر للخارج.",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpeg`,
    image: `${siteUrl}/Agent-photo.png`,
    telephone: "0535383218",
    email: "ag.assuranceskhenifra@atlantasanad.ma",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "شارع أمالو, مقابل بريد أمالو : لافتة AtlantaSanad",
      addressLocality: "الدار البيضاء",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.5731",
      longitude: "-7.5898",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "AtlantaSanad",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
  };

  const structuredDataString = JSON.stringify(structuredData, null, 0);

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataString }}
      />
      <ErrorBoundary>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold"
        >
          {t("skipToContent") ||
            "تخطي إلى المحتوى الرئيسي | Skip to main content"}
        </a>
        <div className="min-h-screen m-0 p-0" dir={dir}>
          <Header />
          <main id="main-content" role="main">
            <HeroSection />
            <ServicesSection />
            <AdvantagesSection />
            <TestimonialsSection />
            <ContactSection />
            <LocationSection />
            <FAQSection />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </>
  );
}
