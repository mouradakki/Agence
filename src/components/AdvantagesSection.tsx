"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, BadgeCheck, HeadphonesIcon, Banknote } from "lucide-react";

const advantages = [
  {
    icon: BadgeCheck,
    title: "وكالة معتمدة رسمياً",
    description: "شريك رسمي لـ Atlanta Sanad مع جميع التراخيص والاعتمادات اللازمة.",
  },
  {
    icon: Clock,
    title: "إجراءات سريعة وواضحة",
    description: "نضمن لك سرعة في المعاملات والحصول على وثيقة التأمين في أقصر وقت.",
  },
  {
    icon: Users,
    title: "دعم محلي متميز",
    description: "فريق عمل محلي متخصص لخدمتك ومساعدتك في جميع احتياجاتك التأمينية.",
  },
  {
    icon: Banknote,
    title: "تسليم التعويضات بضمان",
    description: "تسليم التعويضات عبر الشركة الأم Atlanta Sanad بكل موثوقية وشفافية.",
  },
  {
    icon: HeadphonesIcon,
    title: "خدمة عملاء على مدار الساعة",
    description: "نحن متاحون دائماً للإجابة على استفساراتكم ومساعدتكم في أي وقت.",
  },
  {
    icon: Shield,
    title: "تغطية شاملة ومتنوعة",
    description: "نوفر لك باقات تأمينية متكاملة تلبي جميع احتياجاتك وبأسعار تنافسية.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              لماذا تختارنا
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              مميزات تجعلنا
              <span className="text-gradient block">الخيار الأفضل</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              نحرص على تقديم أفضل خدمات التأمين مع التزامنا بالجودة والشفافية في كل تعاملاتنا، 
              مما يجعلنا الشريك الموثوق لآلاف العملاء.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-muted/50 rounded-2xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+5000</p>
                <p className="text-sm text-muted-foreground">عميل سعيد</p>
              </div>
              <div className="text-center border-x border-border">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">سنة خبرة</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">دعم متاح</p>
              </div>
            </div>
          </motion.div>

          {/* Advantages Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
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
                <h3 className="font-bold text-foreground mb-2">{advantage.title}</h3>
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
