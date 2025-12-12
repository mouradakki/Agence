"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);

      const sections = [
        "services",
        "advantages",
        "testimonials",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      const headerHeight = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementTop - headerHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#advantages", label: t("nav.advantages") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#contact", label: t("nav.contact") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] m-0 p-0 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/40 bg-gradient-to-br from-white/[0.98] to-blue-500/20 backdrop-blur-[20px]"
          : "bg-gradient-to-br from-white/50 to-blue-500/5 backdrop-blur-[8px]"
      }`}
      style={
        isScrolled
          ? {
              boxShadow:
                "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
            }
          : {
              boxShadow:
                "0 4px 20px -5px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }
      }
    >
      <div className="container-custom">
        <div className="flex items-center h-20">
          <motion.a
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-white">
              <Image
                src="/logo-1.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
                loading="eager"
                unoptimized
                style={{ transform: "rotate(0deg)" }}
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg transition-colors duration-200 text-black group-hover:text-primary">
                {t("header.brandName")}
              </p>
              <p className="text-xs transition-colors duration-200 text-gray-700">
                {t("header.approvedAgency")}
              </p>
            </div>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                    isActive ? "text-primary" : "text-black hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                      layoutId="activeSection"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-4">
            <motion.a
              href="tel:0535383218"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-black hover:text-primary hover:bg-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">0535383218</span>
            </motion.a>
            <motion.a
              href="https://wa.me/212535383218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-[#25D366] hover:bg-[#25D366]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden xl:inline">0535383218</span>
            </motion.a>
            <div className="[&_button]:border-gray-300 [&_button]:text-black [&_button]:hover:bg-gray-100">
              <LanguageToggle />
            </div>
          </div>

          <motion.button
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 text-black hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir === "rtl" ? 100 : -100 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={`lg:hidden fixed top-0 w-full max-w-sm z-[60] shadow-xl bg-gradient-to-br from-white/[0.95] to-blue-500/15 backdrop-blur-[20px] border-b border-pink-500/10 ${
                dir === "rtl" ? "right-0" : "left-0"
              }`}
            >
              <nav className="container-custom pt-2 pb-6 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-4 gap-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-black hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <LanguageToggle />
                </div>
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-black hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4 space-y-3"
                >
                  <a
                    href="tel:0535383218"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-primary font-semibold bg-primary/10 hover:bg-primary/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    <span>0535383218</span>
                  </a>
                  <a
                    href="https://wa.me/212535383218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-[#25D366] font-semibold bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>0535383218</span>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
