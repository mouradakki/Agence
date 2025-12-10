"use client";

import { motion } from "framer-motion";
import { Handshake, Shield, Award, Users, TrendingUp, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WelcomeSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: t("welcome.clients"),
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      value: "15+",
      label: t("welcome.experience"),
      color: "text-green-500",
    },
    {
      icon: Heart,
      value: "98%",
      label: t("welcome.satisfaction"),
      color: "text-red-500",
    },
  ];

  const commitments = [
    {
      icon: Shield,
      title: t("advantages.approved"),
      description: t("advantages.approvedDesc"),
    },
    {
      icon: Award,
      title: t("advantages.prices"),
      description: t("advantages.pricesDesc"),
    },
    {
      icon: Handshake,
      title: t("advantages.support"),
      description: t("advantages.supportDesc"),
    },
  ];

  return (
    <section id="welcome" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            {t("welcome.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("welcome.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("welcome.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Welcome Message Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 lg:p-10 card-shadow border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center">
                <Handshake className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t("welcome.subtitle")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("header.brandName")}
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {t("welcome.message")}
            </p>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                {t("welcome.commitment")}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t("welcome.commitmentDesc")}
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Commitment Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 card-shadow border border-border hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <commitment.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {commitment.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;

