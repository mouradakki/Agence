"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
      style={{ border: "none", outline: "none" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8"
            >
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">
                {t("hero.approvedBadge")}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("hero.title")}
              <span className="block mt-2 text-accent">
                {t("hero.subtitle")}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  {t("hero.getQuote")}
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#services">{t("hero.discoverServices")}</a>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6">
              {[
                t("advantages.fast"),
                t("advantages.support"),
                t("advantages.prices"),
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image - Welcome Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl z-0" />

              {/* Main Image Container */}
              <div className="relative z-10">
                {/* Outer Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary-foreground/20 to-transparent rounded-3xl blur-xl -z-10" />

                {/* Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm group">
                  {/* Gradient Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10 pointer-events-none" />

                  <Image
                    src="/profile-Fouad.jpg"
                    priority
                    alt="Fouad ABI - وكالة تأمين معتمدة"
                    width={600}
                    height={800}
                    className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-accent z-20" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-primary-foreground rounded-2xl p-4 shadow-xl border-2 border-accent/30 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">
                        {t("advantages.approved")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Atlanta Sanad
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ border: "none", outline: "none" }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
            style={{ stroke: "none" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
