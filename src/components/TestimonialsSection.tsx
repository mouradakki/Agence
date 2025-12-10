"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "أحمد المنصوري",
    city: "الدار البيضاء",
    rating: 5,
    text: "تجربة ممتازة مع الوكالة. حصلت على تأمين سيارتي بسرعة وبسعر منافس جداً. الفريق محترف ومتعاون.",
    avatar: "أ",
  },
  {
    name: "فاطمة الزهراء بنعيسى",
    city: "الرباط",
    rating: 5,
    text: "خدمة تأمين السفر كانت رائعة. ساعدوني في كل الإجراءات وكانوا متاحين للإجابة على استفساراتي.",
    avatar: "ف",
  },
  {
    name: "محمد العلوي",
    city: "مراكش",
    rating: 5,
    text: "أنصح بشدة بهذه الوكالة لتأمين الشاحنات. تعاملهم محترم وأسعارهم معقولة مقارنة بالمنافسين.",
    avatar: "م",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
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
            آراء العملاء
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ثقة عملائنا هي أكبر شهادة على جودة خدماتنا
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <Quote className="w-10 h-10 text-primary/10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
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
