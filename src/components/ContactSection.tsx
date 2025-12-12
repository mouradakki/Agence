"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("contact.mainTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t("contact.mainSubtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <a
                href="tel:0535383218"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-lg card-shadow hover:card-shadow-hover transition-all duration-300 group"
                aria-label={`${t("contact.phoneLabel") || "Phone"}: 0535383218`}
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {t("contact.phoneLabel")}
                  </p>
                  <p
                    className="text-muted-foreground break-all group-hover:text-foreground/80 transition-colors"
                    dir="ltr"
                  >
                    0535383218
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/212535383218"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-[#25D366]/30 hover:shadow-lg card-shadow hover:card-shadow-hover transition-all duration-300 group"
                aria-label={`${t("contact.whatsapp") || "WhatsApp"}: 0535383218`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground group-hover:text-[#25D366] transition-colors">
                    {t("contact.whatsapp")}
                  </p>
                  <p
                    className="text-muted-foreground break-all group-hover:text-foreground/80 transition-colors"
                    dir="ltr"
                  >
                    0535383218
                  </p>
                </div>
              </a>

              <a
                href="mailto:ag.assuranceskhenifra@atlantasanad.ma"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-[#EA4335]/30 hover:shadow-lg card-shadow hover:card-shadow-hover transition-all duration-300 group"
                aria-label={`${t("contact.emailLabel") || "Email"}: ag.assuranceskhenifra@atlantasanad.ma`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#EA4335] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground group-hover:text-[#EA4335] transition-colors">
                    {t("contact.emailLabel")}
                  </p>
                  <p className="text-muted-foreground break-all group-hover:text-foreground/80 transition-colors">
                    ag.assuranceskhenifra@atlantasanad.ma
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-lg card-shadow hover:card-shadow-hover transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {t("contact.workingHours")}
                  </p>
                  <p className="text-muted-foreground break-words group-hover:text-foreground/80 transition-colors">
                    {t("contact.workingHoursValue")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
