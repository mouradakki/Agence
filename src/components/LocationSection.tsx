"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();
  return (
    <section id="location" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            {t("location.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("location.mainTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("location.mainSubtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-2">
                    {t("location.address")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed break-words">
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
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-2">
                    {t("location.workingHours")}
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p className="break-words">
                      {t("location.workingHoursValue")}
                    </p>
                    <p className="break-words">
                      {t("location.workingHoursValue2")}
                    </p>
                    <p className="break-words">
                      {t("location.workingHoursValue3")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-2">
                    {t("location.contactLabel")}
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p dir="ltr" className="break-all">
                      0535383218
                    </p>
                    <p className="break-all">
                      ag.assuranceskhenifra@atlantasanad.ma
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl overflow-hidden card-shadow border border-border">
              <iframe
                src="https://maps.google.com/maps?q=Khenifra+Amalo+Morocco&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=ar"
                width="100%"
                height="500"
                className="w-full border-0 block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الوكالة - خنيفرة، حي أمالو"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
