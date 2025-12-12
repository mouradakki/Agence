"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  BadgeCheck,
  HeadphonesIcon,
  Banknote,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AdvantagesSection = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: BadgeCheck,
      title: t("advantages.approved"),
      description: t("advantages.approvedDesc"),
    },
    {
      icon: Clock,
      title: t("advantages.fast"),
      description: t("advantages.fastDesc"),
    },
    {
      icon: Users,
      title: t("advantages.support"),
      description: t("advantages.supportDesc"),
    },
    {
      icon: Banknote,
      title: t("advantages.compensationGuaranteed"),
      description: t("advantages.compensationGuaranteedDesc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("advantages.customerService"),
      description: t("advantages.customerServiceDesc"),
    },
    {
      icon: Shield,
      title: t("advantages.diverseCoverage"),
      description: t("advantages.diverseCoverageDesc"),
    },
  ];
  return (
    <section id="advantages" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              {t("advantages.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.4]">
              {t("advantages.mainTitle")}
              <span className="text-gradient">
                {t("advantages.mainTitleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("advantages.mainDesc")}
            </p>

            <div className="flex flex-row justify-around items-center p-6 bg-muted/50 rounded-2xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+5000</p>
                <p className="text-sm text-muted-foreground">
                  {t("advantages.stats.clients")}
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">
                  {t("advantages.stats.support")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <advantage.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
