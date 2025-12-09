import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
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
          backgroundSize: '50px 50px'
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
              <span className="text-sm font-medium">وكالة محلية معتمدة من Atlanta Sanad</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              حماية ما يهمّك
              <span className="block mt-2 text-accent">— وكالة تأمين معتمدة</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
              تأمين السيارات، الشاحنات، الشركات، وخدمات السفر — حلول موثوقة وسريعة في مدينتكم.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  احصل على عرض سعر
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#services">تعرّف على خدماتنا</a>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6">
              {[
                "إجراءات سريعة",
                "دعم محلي متميز",
                "أسعار تنافسية",
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

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-accent-foreground" />
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl">🚗</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">تأمين السيارات</p>
                    <p className="text-sm text-primary-foreground/60">تغطية شاملة</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl">🚛</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">تأمين الشاحنات</p>
                    <p className="text-sm text-primary-foreground/60">حماية أسطولك</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl">✈️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">خدمات السفر</p>
                    <p className="text-sm text-primary-foreground/60">سفر آمن</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-primary-foreground/20 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-accent">+5000</p>
                  <p className="text-xs text-primary-foreground/60">عميل سعيد</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">15+</p>
                  <p className="text-xs text-primary-foreground/60">سنة خبرة</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">98%</p>
                  <p className="text-xs text-primary-foreground/60">رضا العملاء</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-primary-foreground rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">معتمدون رسمياً</p>
                  <p className="text-xs text-muted-foreground">Atlanta Sanad</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
