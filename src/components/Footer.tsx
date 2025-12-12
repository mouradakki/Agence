"use client";

import { memo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                <Image
                  src="/logo-1.png"
                  alt={`${t("header.brandName")} - ${t("header.approvedAgency")}`}
                  width={48}
                  height={48}
                  className="object-contain"
                  style={{ transform: "rotate(0deg)" }}
                />
              </div>
              <div>
                <p className="font-bold text-lg">{t("header.brandName")}</p>
                <p className="text-xs text-background/60">
                  {t("header.approvedAgency")}
                </p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {[
                { href: "#services", label: t("nav.services") },
                { href: "#advantages", label: t("nav.advantages") },
                { href: "#testimonials", label: t("nav.testimonials") },
                { href: "#contact", label: t("nav.contact") },
                { href: "#faq", label: t("nav.faq") },
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

          <div>
            <h3 className="font-bold text-lg mb-6">
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-3">
              {[
                t("footer.services.car"),
                t("footer.services.truck"),
                t("footer.services.company"),
                t("footer.services.travel"),
                t("footer.services.health"),
                t("footer.services.admin"),
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

          <div>
            <h3 className="font-bold text-lg mb-6">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors"
                  aria-label={`${t("location.openMaps") || "Open location in Google Maps"}: ${t("location.addressValue")}`}
                >
                  {t("location.addressValue")}
                  {t("location.addressValue2") &&
                    t("location.addressValue2") !==
                      "location.addressValue2" && (
                      <>
                        <br />
                        {t("location.addressValue2")}
                      </>
                    )}
                  {t("location.addressValue3") &&
                    t("location.addressValue3") !==
                      "location.addressValue3" && (
                      <>
                        <br />
                        {t("location.addressValue3")}
                      </>
                    )}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:0535383218"
                  className="text-background/70 hover:text-primary transition-colors"
                  dir="ltr"
                  aria-label={`${t("contact.phoneLabel") || "Phone"}: 0535383218`}
                >
                  0535383218
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:ag.assuranceskhenifra@atlantasanad.ma"
                  className="text-background/70 hover:text-primary transition-colors"
                  aria-label={`${t("contact.emailLabel") || "Email"}: ag.assuranceskhenifra@atlantasanad.ma`}
                >
                  ag.assuranceskhenifra@atlantasanad.ma
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {currentYear} {t("header.brandName")}. {t("footer.allRights")}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
