"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t, dir } = useLanguage();
  
  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
    {
      question: t("faq.q6"),
      answer: t("faq.a6"),
    },
  ];
  return (
    <section id="faq" className="bg-background pt-8 md:pt-10 lg:pt-12 pb-0">
      <div className="container-custom pb-8 md:pb-10 lg:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              {t("faq.title")}
            </span>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("faq.subtitle")}
            </p>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-foreground mb-2">{t("faq.haveQuestion")}</h3>
              <p className="text-muted-foreground mb-4">
                {t("faq.teamReady")}
              </p>
              <a
                href="#contact"
                className="text-primary font-semibold hover:underline flex items-center gap-2"
              >
                {t("faq.contactNow")}
                <span className={dir === "rtl" ? "←" : "→"} />
              </a>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className={`${dir === "rtl" ? "text-right" : "text-left"} font-bold text-foreground py-5 text-base cursor-pointer hover:no-underline`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className={`${dir === "rtl" ? "text-right" : "text-left"} text-muted-foreground pb-5 leading-relaxed`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
      {/* Mountain-like wave shape at the bottom */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 md:h-24 lg:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C240,80 480,40 720,60 C960,80 1200,100 1440,80 L1440,120 L0,120 Z"
            fill="hsl(var(--foreground))"
          />
          <path
            d="M0,100 C300,60 600,20 900,50 C1200,80 1350,90 1440,70 L1440,120 L0,120 Z"
            fill="hsl(var(--foreground))"
            opacity="0.9"
          />
        </svg>
      </div>
    </section>
  );
};

export default FAQSection;

