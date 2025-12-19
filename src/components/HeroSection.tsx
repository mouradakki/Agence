"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-x-hidden border-none outline-none">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/30 rounded-full blur-[150px]" />
      </div>

      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="container-custom relative z-10 pt-28 sm:pt-24 md:pt-24 lg:pt-8 pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground w-full lg:order-1"
          >
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block" style={{ color: "#e40050" }}>
                {t("hero.subtitle")}
              </span>
            </h1>

            {/* الصورة تظهر هنا في الشاشات الصغيرة */}
            <div className="lg:hidden mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full"
              >
                <div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl z-0" />

                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary-foreground/20 to-transparent rounded-2xl blur-xl -z-10" />

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm group hover:shadow-3xl transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10 pointer-events-none" />

                      <Image
                        src="/agent-fouad-photo.jpg"
                        priority
                        alt="Fouad ABI - وكالة تأمين معتمدة"
                        width={600}
                        height={800}
                        className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      />

                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-accent z-20" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute -bottom-4 -left-4 bg-primary-foreground rounded-xl p-3 shadow-xl border-2 border-accent/30 z-20 max-w-[calc(100%-2rem)]"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0"
                          style={{
                            background:
                              "linear-gradient(to bottom right, hsl(220 100% 52%), #e40050)",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="w-5 h-5 text-white"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-foreground text-xs truncate">
                            {t("advantages.approved")}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            AtlantaSanad
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  {t("nav.contact")}
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#services">{t("hero.discoverServices")}</a>
              </Button>
            </div>

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
                  <div className="relative w-7 h-7 shrink-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full border-2"
                      style={{
                        borderColor: "#9ca3af", // رمادي
                        backgroundColor: "#ffffff", // أبيض
                      }}
                    ></div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="relative z-10 w-4 h-4"
                      style={{ color: "#6b7280" }} // رمادي غامق للعلامة
                    />
                  </div>
                  <span className="text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* الصورة في الشاشات الكبيرة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full hidden lg:block lg:order-2"
          >
            <div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl z-0" />

              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary-foreground/20 to-transparent rounded-2xl lg:rounded-3xl blur-xl -z-10" />

                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 lg:border-4 border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm group hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10 pointer-events-none" />

                  <Image
                    src="/agent-fouad-photo.jpg"
                    priority
                    alt="Fouad ABI - وكالة تأمين معتمدة"
                    width={600}
                    height={800}
                    className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />

                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-accent z-20" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-primary-foreground rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl border-2 border-accent/30 z-20 max-w-[calc(100%-2rem)] lg:max-w-none"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(to bottom right, hsl(220 100% 52%), #e40050)",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-foreground text-xs lg:text-sm truncate">
                        {t("advantages.approved")}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        AtlantaSanad
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20 sm:h-24 lg:h-32"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            className="transition-colors duration-300"
          />
          <path
            d="M0,80 C300,120 600,40 900,80 C1050,100 1150,60 1200,80 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
            fillOpacity="0.8"
            className="transition-colors duration-300"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
