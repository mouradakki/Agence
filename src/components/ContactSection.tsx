"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const insuranceTypes = [
    { value: "car", label: t("contact.carInsurance") },
    { value: "truck", label: t("contact.truckInsurance") },
    { value: "company", label: t("contact.companyInsurance") },
    { value: "travel", label: t("contact.travelInsurance") },
    { value: "health", label: t("contact.healthInsurance") },
    { value: "other", label: t("contact.other") },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    insuranceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    // In production, replace this with actual API integration:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("contact.success"),
      description: t("contact.successDesc"),
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      insuranceType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("contact.mainTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t("contact.mainSubtitle")}
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              <a
                href="tel:0535383218"
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{t("contact.phoneLabel")}</p>
                  <p
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                    dir="ltr"
                  >
                    0535383218
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/0535383218"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{t("contact.whatsapp")}</p>
                  <p
                    className="text-muted-foreground group-hover:text-green-600 transition-colors"
                    dir="ltr"
                  >
                    0535383218
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{t("contact.emailLabel")}</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    contact@example.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{t("contact.workingHours")}</p>
                  <p className="text-muted-foreground">
                    {t("contact.workingHoursValue")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 card-shadow border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t("contact.formTitle")}
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")}
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.phonePlaceholder")}
                    className="h-12"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.emailPlaceholder")}
                    className="h-12"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="insuranceType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.insuranceType")}
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    required
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">{t("contact.selectType")}</option>
                    {insuranceTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.messagePlaceholder")}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t("contact.sending")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {t("contact.send")}
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
