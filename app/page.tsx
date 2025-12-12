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
import Script from "next/script";

export default function Home() {
  const { dir } = useLanguage();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://agence-lovabel.ma";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "وكالة أتلانتا سند للتأمين",
    description:
      "وكالة تأمين معتمدة من Atlanta Sanad. خدمات تأمين السيارات والشاحنات والشركات والسفر.",
    url: siteUrl,
    logo: `${siteUrl}/logo-1.png`,
    image: `${siteUrl}/agence-photo.jpg`,
    telephone: "0535383218",
    email: "ag.assuranceskhenifra@atlantasanad.ma",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "شارع أمالو, مقابل لبوسطة أمالوا، إغريين، لافتة Atlas Sanad",
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
        closes: "18:00",
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
      name: "Atlanta Sanad",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen m-0 p-0" dir={dir}>
        <Header />
        <main>
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
    </>
  );
}
