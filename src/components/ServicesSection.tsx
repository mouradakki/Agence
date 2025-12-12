"use client";

import { motion } from "framer-motion";
import {
  Car,
  Truck,
  Building2,
  Plane,
  Heart,
  FileCheck,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Car,
      title: t("services.carInsurance"),
      description: t("services.carInsuranceDesc"),
    },
    {
      icon: Truck,
      title: t("services.truckInsurance"),
      description: t("services.truckInsuranceDesc"),
    },
    {
      icon: Building2,
      title: t("services.companyInsurance"),
      description: t("services.companyInsuranceDesc"),
    },
    {
      icon: Plane,
      title: t("services.travelInsurance"),
      description: t("services.travelInsuranceDesc"),
    },
    {
      icon: Heart,
      title: t("services.healthInsurance"),
      description: t("services.healthInsuranceDesc"),
    },
    {
      icon: FileCheck,
      title: t("services.adminServices"),
      description: t("services.adminDesc"),
    },
  ];
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("services.mainTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.mainSubtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
