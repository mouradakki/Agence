import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            موقعنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            زورونا في مكتبنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نرحب بكم في مكتبنا للحصول على استشارة مجانية ومباشرة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">العنوان</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    شارع محمد الخامس، رقم 123
                    <br />
                    الحي التجاري، الدار البيضاء
                    <br />
                    المغرب
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">ساعات العمل</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>الإثنين - الجمعة: 9:00 - 18:00</p>
                    <p>السبت: 9:00 - 13:00</p>
                    <p>الأحد: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">للتواصل</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p dir="ltr">+212 600 000 000</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                افتح في خرائط Google
              </a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl overflow-hidden card-shadow border border-border h-full min-h-[400px]">
              {/* 
                Google Maps Embed
                Replace the src with your actual location embed URL.
                To get the embed URL:
                1. Go to Google Maps
                2. Find your location
                3. Click "Share" -> "Embed a map"
                4. Copy the src URL from the iframe code
              */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72691941052!2d-7.669554799999999!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الوكالة"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
