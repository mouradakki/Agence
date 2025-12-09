import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Header
    "nav.services": "خدماتنا",
    "nav.howItWorks": "كيف نعمل",
    "nav.advantages": "مميزاتنا",
    "nav.testimonials": "آراء العملاء",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "تواصل معنا",
    "header.getQuote": "احصل على عرض سعر",
    "header.approvedAgency": "وكالة معتمدة",
    "header.brandName": "أتلانتا سند",
    
    // Hero
    "hero.title": "حماية ما يهمّك",
    "hero.subtitle": "وكالة تأمين معتمدة من Atlanta Sanad",
    "hero.description": "تأمين السيارات، الشاحنات، الشركات، وخدمات السفر — حلول موثوقة وسريعة في مدينتكم.",
    "hero.getQuote": "احصل على عرض سعر",
    "hero.discoverServices": "تعرّف على خدماتنا",
    "hero.approvedBadge": "وكالة محلية معتمدة من Atlanta Sanad",
    "hero.trustedClients": "أكثر من 5000 عميل يثقون بنا",
    
    // Services
    "services.title": "خدماتنا التأمينية",
    "services.subtitle": "نقدم لكم مجموعة شاملة من حلول التأمين المصممة لتلبية احتياجاتكم",
    "services.carInsurance": "تأمين السيارات",
    "services.carInsuranceDesc": "حماية شاملة لسيارتك ضد جميع المخاطر. تغطية الحوادث والسرقة والأضرار الطبيعية.",
    "services.truckInsurance": "تأمين الشاحنات",
    "services.truckInsuranceDesc": "تأمين متخصص للشاحنات ومركبات النقل. حماية أسطولكم التجاري بأفضل الأسعار.",
    "services.companyInsurance": "تأمين الشركات",
    "services.companyInsuranceDesc": "حلول تأمينية متكاملة للشركات والمؤسسات. حماية الأصول والموظفين والمسؤولية المدنية.",
    "services.travelInsurance": "خدمات السفر",
    "services.travelInsuranceDesc": "تأمين السفر وخدمات جواز السفر. سفر آمن مع تغطية طبية وحماية الأمتعة.",
    "services.healthInsurance": "التأمين الصحي",
    "services.healthInsuranceDesc": "تغطية صحية شاملة لك ولعائلتك. الوصول لأفضل المستشفيات والأطباء.",
    "services.familyInsurance": "التأمين العائلي",
    "services.familyInsuranceDesc": "حماية شاملة لجميع أفراد العائلة. راحة البال مع تغطية متعددة الجوانب.",
    "services.moreDetails": "المزيد من التفاصيل",
    
    // How it works
    "howItWorks.title": "كيف نعمل؟",
    "howItWorks.subtitle": "ثلاث خطوات بسيطة للحصول على تأمينك",
    "howItWorks.step1Title": "التواصل معنا",
    "howItWorks.step1Desc": "تواصل معنا عبر الهاتف أو النموذج الإلكتروني وأخبرنا عن احتياجاتك التأمينية",
    "howItWorks.step2Title": "الحصول على عرض سعر",
    "howItWorks.step2Desc": "نقدم لك عرض سعر مخصص يناسب احتياجاتك وميزانيتك خلال 24 ساعة",
    "howItWorks.step3Title": "إتمام العقد",
    "howItWorks.step3Desc": "بعد الموافقة، نُتمّ العقد وتستلم بوليصة التأمين فوراً",
    
    // Advantages
    "advantages.title": "لماذا تختارنا؟",
    "advantages.subtitle": "مميزات تجعلنا الخيار الأفضل لاحتياجاتكم التأمينية",
    "advantages.approved": "وكالة معتمدة رسمياً",
    "advantages.approvedDesc": "وكالة معتمدة رسمياً من Atlanta Sanad مع جميع التراخيص والشهادات المطلوبة",
    "advantages.fast": "إجراءات سريعة وواضحة",
    "advantages.fastDesc": "إجراءات مبسطة وسريعة مع الشفافية الكاملة في جميع المراحل",
    "advantages.support": "دعم محلي متميز",
    "advantages.supportDesc": "فريق دعم محلي متاح لمساعدتك ومرافقتك في جميع الإجراءات",
    "advantages.compensation": "تسليم التعويضات السريع",
    "advantages.compensationDesc": "تعويضات سريعة ومضمونة عبر الشركة الأم Atlanta Sanad",
    "advantages.prices": "أسعار تنافسية",
    "advantages.pricesDesc": "أفضل الأسعار في السوق مع خيارات دفع مرنة تناسب الجميع",
    "advantages.coverage": "تغطية شاملة",
    "advantages.coverageDesc": "تغطية تأمينية شاملة لجميع أنواع المخاطر والاحتياجات",
    
    // Testimonials
    "testimonials.title": "آراء عملائنا",
    "testimonials.subtitle": "ماذا يقول عملاؤنا عن تجربتهم معنا",
    
    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية",
    "contact.name": "الاسم الكامل",
    "contact.phone": "رقم الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.insuranceType": "نوع التأمين",
    "contact.selectType": "اختر نوع التأمين",
    "contact.carInsurance": "تأمين السيارات",
    "contact.truckInsurance": "تأمين الشاحنات",
    "contact.companyInsurance": "تأمين الشركات",
    "contact.travelInsurance": "خدمات السفر",
    "contact.healthInsurance": "التأمين الصحي",
    "contact.message": "رسالتك",
    "contact.messagePlaceholder": "اكتب رسالتك هنا...",
    "contact.send": "إرسال الطلب",
    "contact.sending": "جاري الإرسال...",
    "contact.success": "تم إرسال طلبك بنجاح!",
    "contact.successDesc": "سنتواصل معك في أقرب وقت ممكن.",
    "contact.callUs": "اتصل بنا",
    "contact.whatsapp": "واتساب",
    "contact.emailUs": "راسلنا",
    "contact.visitUs": "زورونا",
    
    // Location
    "location.title": "موقعنا",
    "location.subtitle": "يسعدنا استقبالكم في مكتبنا",
    "location.address": "العنوان",
    "location.addressValue": "شارع محمد الخامس، الدار البيضاء، المغرب",
    "location.workingHours": "ساعات العمل",
    "location.workingHoursValue": "الإثنين - الجمعة: 9:00 - 18:00\nالسبت: 9:00 - 13:00",
    "location.phoneLabel": "الهاتف",
    
    // FAQ
    "faq.title": "الأسئلة الشائعة",
    "faq.subtitle": "إجابات على أكثر الأسئلة شيوعاً",
    
    // Footer
    "footer.description": "وكالة تأمين معتمدة من Atlanta Sanad. نقدم حلول تأمينية شاملة وموثوقة للأفراد والشركات.",
    "footer.quickLinks": "روابط سريعة",
    "footer.ourServices": "خدماتنا",
    "footer.contactUs": "تواصل معنا",
    "footer.allRights": "جميع الحقوق محفوظة",
    "footer.privacyPolicy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",
    "footer.license": "رقم الترخيص",
  },
  fr: {
    // Header
    "nav.services": "Nos Services",
    "nav.howItWorks": "Comment ça marche",
    "nav.advantages": "Nos Avantages",
    "nav.testimonials": "Témoignages",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "header.getQuote": "Demander un devis",
    "header.approvedAgency": "Agence agréée",
    "header.brandName": "Atlanta Sanad",
    
    // Hero
    "hero.title": "Protégez ce qui compte",
    "hero.subtitle": "Agence d'assurance agréée par Atlanta Sanad",
    "hero.description": "Assurance auto, camions, entreprises et services de voyage — des solutions fiables et rapides dans votre ville.",
    "hero.getQuote": "Demander un devis",
    "hero.discoverServices": "Découvrir nos services",
    "hero.approvedBadge": "Agence locale agréée par Atlanta Sanad",
    "hero.trustedClients": "Plus de 5000 clients nous font confiance",
    
    // Services
    "services.title": "Nos Services d'Assurance",
    "services.subtitle": "Nous vous proposons une gamme complète de solutions d'assurance adaptées à vos besoins",
    "services.carInsurance": "Assurance Auto",
    "services.carInsuranceDesc": "Protection complète pour votre véhicule contre tous les risques. Couverture accidents, vol et dommages naturels.",
    "services.truckInsurance": "Assurance Camions",
    "services.truckInsuranceDesc": "Assurance spécialisée pour camions et véhicules de transport. Protégez votre flotte commerciale aux meilleurs prix.",
    "services.companyInsurance": "Assurance Entreprises",
    "services.companyInsuranceDesc": "Solutions d'assurance intégrées pour entreprises. Protection des actifs, employés et responsabilité civile.",
    "services.travelInsurance": "Services Voyage",
    "services.travelInsuranceDesc": "Assurance voyage et services passeport. Voyagez en toute sécurité avec couverture médicale et protection bagages.",
    "services.healthInsurance": "Assurance Santé",
    "services.healthInsuranceDesc": "Couverture santé complète pour vous et votre famille. Accès aux meilleurs hôpitaux et médecins.",
    "services.familyInsurance": "Assurance Familiale",
    "services.familyInsuranceDesc": "Protection complète pour toute la famille. Tranquillité d'esprit avec une couverture multi-aspects.",
    "services.moreDetails": "Plus de détails",
    
    // How it works
    "howItWorks.title": "Comment ça marche ?",
    "howItWorks.subtitle": "Trois étapes simples pour obtenir votre assurance",
    "howItWorks.step1Title": "Contactez-nous",
    "howItWorks.step1Desc": "Contactez-nous par téléphone ou formulaire et parlez-nous de vos besoins d'assurance",
    "howItWorks.step2Title": "Recevez un devis",
    "howItWorks.step2Desc": "Nous vous proposons un devis personnalisé adapté à vos besoins et budget sous 24h",
    "howItWorks.step3Title": "Finalisez le contrat",
    "howItWorks.step3Desc": "Après accord, nous finalisons le contrat et vous recevez votre police immédiatement",
    
    // Advantages
    "advantages.title": "Pourquoi nous choisir ?",
    "advantages.subtitle": "Des avantages qui font de nous le meilleur choix pour vos besoins d'assurance",
    "advantages.approved": "Agence officiellement agréée",
    "advantages.approvedDesc": "Agence officiellement agréée par Atlanta Sanad avec toutes les licences et certifications requises",
    "advantages.fast": "Procédures rapides et claires",
    "advantages.fastDesc": "Procédures simplifiées et rapides avec transparence totale à toutes les étapes",
    "advantages.support": "Support local dédié",
    "advantages.supportDesc": "Équipe de support local disponible pour vous aider et vous accompagner dans toutes les démarches",
    "advantages.compensation": "Indemnisation rapide",
    "advantages.compensationDesc": "Indemnisations rapides et garanties via la société mère Atlanta Sanad",
    "advantages.prices": "Prix compétitifs",
    "advantages.pricesDesc": "Les meilleurs prix du marché avec des options de paiement flexibles pour tous",
    "advantages.coverage": "Couverture complète",
    "advantages.coverageDesc": "Couverture d'assurance complète pour tous types de risques et besoins",
    
    // Testimonials
    "testimonials.title": "Témoignages Clients",
    "testimonials.subtitle": "Ce que nos clients disent de leur expérience avec nous",
    
    // Contact
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes là pour vous aider. Contactez-nous pour une consultation gratuite",
    "contact.name": "Nom complet",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.insuranceType": "Type d'assurance",
    "contact.selectType": "Choisir le type d'assurance",
    "contact.carInsurance": "Assurance Auto",
    "contact.truckInsurance": "Assurance Camions",
    "contact.companyInsurance": "Assurance Entreprises",
    "contact.travelInsurance": "Services Voyage",
    "contact.healthInsurance": "Assurance Santé",
    "contact.message": "Votre message",
    "contact.messagePlaceholder": "Écrivez votre message ici...",
    "contact.send": "Envoyer la demande",
    "contact.sending": "Envoi en cours...",
    "contact.success": "Votre demande a été envoyée !",
    "contact.successDesc": "Nous vous contacterons dans les plus brefs délais.",
    "contact.callUs": "Appelez-nous",
    "contact.whatsapp": "WhatsApp",
    "contact.emailUs": "Email",
    "contact.visitUs": "Rendez-nous visite",
    
    // Location
    "location.title": "Notre Emplacement",
    "location.subtitle": "Nous serons ravis de vous accueillir dans notre bureau",
    "location.address": "Adresse",
    "location.addressValue": "Boulevard Mohammed V, Casablanca, Maroc",
    "location.workingHours": "Heures d'ouverture",
    "location.workingHoursValue": "Lundi - Vendredi: 9h00 - 18h00\nSamedi: 9h00 - 13h00",
    "location.phoneLabel": "Téléphone",
    
    // FAQ
    "faq.title": "Questions Fréquentes",
    "faq.subtitle": "Réponses aux questions les plus courantes",
    
    // Footer
    "footer.description": "Agence d'assurance agréée par Atlanta Sanad. Nous proposons des solutions d'assurance complètes et fiables pour les particuliers et les entreprises.",
    "footer.quickLinks": "Liens Rapides",
    "footer.ourServices": "Nos Services",
    "footer.contactUs": "Contactez-nous",
    "footer.allRights": "Tous droits réservés",
    "footer.privacyPolicy": "Politique de confidentialité",
    "footer.terms": "Conditions générales",
    "footer.license": "N° de licence",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
