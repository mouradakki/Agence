import { Helmet } from "react-helmet-async";
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

const Index = () => {
  const { language, dir } = useLanguage();
  
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
      <Helmet>
        <html lang={language} dir={dir} />
        <title>
          {language === "ar" 
            ? "وكالة تأمين معتمدة – Atlanta Sanad | خدمات السيارات والسفر والشركات"
            : "Agence d'assurance agréée – Atlanta Sanad | Auto, Voyage, Entreprises"}
        </title>
        <meta
          name="description"
          content={language === "ar"
            ? "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad. تأمين سيارات وشاحنات وشركات، مع خدمات السفر وجوازات السفر. تواصل معنا الآن."
            : "Obtenez les meilleures solutions d'assurance auprès d'une agence agréée Atlanta Sanad. Assurance auto, camions, entreprises et services de voyage. Contactez-nous maintenant."}
        />
        <meta name="keywords" content={language === "ar" 
          ? "تأمين السيارات، تأمين الشاحنات، تأمين الشركات، تأمين السفر، Atlanta Sanad، المغرب، الدار البيضاء"
          : "assurance auto, assurance camions, assurance entreprises, assurance voyage, Atlanta Sanad, Maroc, Casablanca"} />
        <meta name="author" content={language === "ar" ? "وكالة أتلانتا سند للتأمين" : "Agence Atlanta Sanad Assurance"} />
        <meta property="og:title" content={language === "ar" 
          ? "وكالة تأمين معتمدة – Atlanta Sanad | خدمات السيارات والسفر والشركات"
          : "Agence d'assurance agréée – Atlanta Sanad | Auto, Voyage, Entreprises"} />
        <meta property="og:description" content={language === "ar"
          ? "أحصل على أفضل حلول التأمين من وكالة معتمدة من Atlanta Sanad. تأمين سيارات وشاحنات وشركات."
          : "Obtenez les meilleures solutions d'assurance auprès d'une agence agréée Atlanta Sanad. Assurance auto, camions, entreprises."} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === "ar" ? "ar_MA" : "fr_MA"} />
        <link rel="canonical" href="https://example.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
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
};

export default Index;
