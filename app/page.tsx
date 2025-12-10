"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  const { dir } = useLanguage();
  
  // JSON-LD Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "وكالة أتلانتا سند للتأمين",
    description: "وكالة تأمين معتمدة من Atlanta Sanad. خدمات تأمين السيارات والشاحنات والشركات والسفر.",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
    image: "https://example.com/hero-image.jpg",
    telephone: "+212600000000",
    email: "contact@example.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع محمد الخامس، رقم 123",
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
    sameAs: [
      "https://www.facebook.com/example",
      "https://www.instagram.com/example",
      "https://www.linkedin.com/company/example",
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
      <div className="min-h-screen" dir={dir}>
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
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

