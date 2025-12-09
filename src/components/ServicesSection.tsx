import { motion } from "framer-motion";
import { Car, Truck, Building2, Plane, Heart, FileCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "تأمين السيارات",
    description: "حماية شاملة لسيارتك ضد جميع المخاطر مع تغطية الأضرار والحوادث والسرقة.",
    features: ["تغطية الأضرار", "المسؤولية المدنية", "الحماية القانونية"],
  },
  {
    icon: Truck,
    title: "تأمين الشاحنات",
    description: "حلول تأمينية متكاملة لأسطول الشاحنات والنقل التجاري مع ضمانات موسعة.",
    features: ["تأمين الأسطول", "تغطية البضائع", "المسؤولية المهنية"],
  },
  {
    icon: Building2,
    title: "تأمين الشركات",
    description: "باقات تأمينية مخصصة للمؤسسات والشركات تشمل الممتلكات والموظفين.",
    features: ["تأمين الممتلكات", "تأمين الموظفين", "المسؤولية المهنية"],
  },
  {
    icon: Plane,
    title: "خدمات السفر",
    description: "تأمين السفر وخدمات دفع جوازات السفر مع تغطية طبية دولية شاملة.",
    features: ["تأمين طبي دولي", "إلغاء الرحلات", "فقدان الأمتعة"],
  },
  {
    icon: Heart,
    title: "التأمين الصحي",
    description: "تغطية صحية شاملة لك ولعائلتك مع شبكة واسعة من المستشفيات والأطباء.",
    features: ["العلاج الطبي", "الأدوية", "الفحوصات الدورية"],
  },
  {
    icon: FileCheck,
    title: "خدمات إدارية",
    description: "مساعدة في إجراءات التأمين والوثائق الإدارية المتعلقة بالسفر والمركبات.",
    features: ["استخراج الوثائق", "تجديد العقود", "متابعة الملفات"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
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
            خدماتنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            حلول تأمينية شاملة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من خدمات التأمين المصممة لحماية ما يهمك أكثر
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className="w-full group/btn" asChild>
                <a href="#contact">
                  <span>اطلب عرض سعر</span>
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
