"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: language === "ar" ? "مراد عكي" : "Mourad Akki",
      city: language === "ar" ? "خنيفرة" : "Khenifra",
      rating: 5,
      text: t("testimonials.testimonial1"),
      avatar: language === "ar" ? "م" : "M",
      email: "akkimourad177@gmail.com",
    },
    {
      name:
        language === "ar" ? "فاطمة الزهراء بنعيسى" : "Fatima Zahra Benaissa",
      city: language === "ar" ? "خنيفرة" : "Khenifra",
      rating: 5,
      text: t("testimonials.testimonial2"),
      avatar: language === "ar" ? "ف" : "F",
    },
    {
      name: language === "ar" ? "محمد العلوي" : "Mohamed Alaoui",
      city: language === "ar" ? "خنيفرة" : "Khenifra",
      rating: 5,
      text: t("testimonials.testimonial3"),
      avatar: language === "ar" ? "م" : "M",
    },
  ];
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("testimonials.mainTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.mainSubtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border relative"
            >
              <div className="absolute top-6 left-6">
                <Quote className="w-10 h-10 text-primary/10" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city}
                  </p>
                  {testimonial.email && (
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {testimonial.email}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
