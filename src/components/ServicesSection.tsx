"use client";

import { motion } from "framer-motion";
import {
  Car,
  Truck,
  Building2,
  Plane,
  Heart,
  FileCheck,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Car,
      title: t("services.carInsurance"),
      description: t("services.carInsuranceDesc"),
      features: [
        t("services.feature1"),
        t("services.feature2"),
        t("services.feature3"),
      ],
    },
    {
      icon: Truck,
      title: t("services.truckInsurance"),
      description: t("services.truckInsuranceDesc"),
      features: [
        t("services.feature4"),
        t("services.feature5"),
        t("services.feature6"),
      ],
    },
    {
      icon: Building2,
      title: t("services.companyInsurance"),
      description: t("services.companyInsuranceDesc"),
      features: [
        t("services.feature7"),
        t("services.feature8"),
        t("services.feature6"),
      ],
    },
    {
      icon: Plane,
      title: t("services.travelInsurance"),
      description: t("services.travelInsuranceDesc"),
      features: [
        t("services.feature9"),
        t("services.feature10"),
        t("services.feature11"),
      ],
    },
    {
      icon: Heart,
      title: t("services.healthInsurance"),
      description: t("services.healthInsuranceDesc"),
      features: [
        t("services.feature12"),
        t("services.feature13"),
        t("services.feature14"),
      ],
    },
    {
      icon: FileCheck,
      title: t("services.adminServices"),
      description: t("services.adminDesc"),
      features: [
        t("services.feature15"),
        t("services.feature16"),
        t("services.feature17"),
      ],
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

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full group/btn" asChild>
                <a href="#contact">
                  <span>{t("services.requestQuote")}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
