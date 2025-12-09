import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg">أتلانتا سند</p>
                <p className="text-xs text-background/60">وكالة معتمدة</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              وكالة تأمين معتمدة من Atlanta Sanad، نقدم حلول تأمينية شاملة وموثوقة للأفراد والشركات.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "خدماتنا" },
                { href: "#how-it-works", label: "كيف نعمل" },
                { href: "#advantages", label: "مميزاتنا" },
                { href: "#testimonials", label: "آراء العملاء" },
                { href: "#faq", label: "الأسئلة الشائعة" },
                { href: "#contact", label: "تواصل معنا" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                "تأمين السيارات",
                "تأمين الشاحنات",
                "تأمين الشركات",
                "خدمات السفر",
                "التأمين الصحي",
                "خدمات إدارية",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/70">
                  شارع محمد الخامس، رقم 123
                  <br />
                  الدار البيضاء، المغرب
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+212600000000"
                  className="text-background/70 hover:text-primary transition-colors"
                  dir="ltr"
                >
                  +212 600 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@example.com"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  contact@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} أتلانتا سند. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
            </div>
            <p className="text-xs">
              رقم الترخيص: XXX-XXXX-XXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
