"use client";

import { memo, useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, dir } = useLanguage();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // التحقق من أن النقر ليس داخل القائمة الجانبية
      if (mobileMenuRef.current && mobileMenuRef.current.contains(target)) {
        return;
      }

      // التحقق من أن النقر ليس على زر القائمة
      const menuButton = document.querySelector(
        '[aria-controls="mobile-navigation"]'
      );
      if (menuButton && menuButton.contains(target)) {
        return;
      }

      // إغلاق القائمة عند النقر خارجها
      setIsMobileMenuOpen(false);
    };

    // إضافة event listener مع capture phase لضمان العمل قبل أي handlers أخرى
    document.addEventListener("mousedown", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    },
    []
  );

  const navLinks = useMemo(
    () => [
      { href: "#services", label: t("nav.services") },
      { href: "#advantages", label: t("nav.advantages") },
      { href: "#testimonials", label: t("nav.testimonials") },
      { href: "#contact", label: t("nav.contact") },
      { href: "#faq", label: t("nav.faq") },
    ],
    [t]
  );

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
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4 overflow-hidden">
          <motion.a
            href="/"
            className="flex items-center gap-1 sm:gap-2 group flex-shrink-0 relative z-10 min-w-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={t("header.brandName")}
          >
            <div className="w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12 flex-shrink-0 relative bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt={`${t("header.brandName")} - ${t("header.approvedAgency")}`}
                width={64}
                height={64}
                className="object-contain"
                priority
                unoptimized
                style={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block"
                }}
                onError={(e) => {
                  console.error("Failed to load logo image");
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="hidden min-[380px]:block px-2 sm:px-3 py-2 rounded-lg group-hover:bg-primary/10 transition-all duration-200 min-w-0">
              <p className="font-bold text-sm min-[380px]:text-base sm:text-lg transition-colors duration-200 text-black group-hover:text-primary whitespace-nowrap truncate">
                {t("header.brandName")}
              </p>
              <p className="hidden sm:block text-xs transition-colors duration-200 text-gray-700 group-hover:text-primary/80 truncate">
                {t("header.approvedAgency")}
              </p>
            </div>
          </motion.a>

          <nav
            className="hidden md:flex items-center gap-0.5 md:gap-1 lg:gap-2 flex-1 justify-end min-w-0 overflow-hidden"
            role="navigation"
            aria-label={t("nav.mainNavigation") || "Main navigation"}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-2 md:px-3 lg:px-4 py-2 rounded-lg font-medium text-xs md:text-sm lg:text-base transition-all duration-200 group flex-shrink-0 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-black hover:text-primary hover:bg-primary/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
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
                    <span className="absolute bottom-0 left-2 md:left-3 lg:left-4 right-2 md:right-3 lg:right-4 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-1 md:gap-2 lg:gap-3 flex-shrink-0 ml-1 md:ml-2 lg:ml-4">
            <motion.a
              href="tel:0535383218"
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs md:text-sm lg:text-base transition-all duration-200 text-black hover:text-primary hover:bg-primary/15 backdrop-blur-sm flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`${t("contact.phoneLabel") || "Phone"}: 0535383218`}
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="hidden lg:inline whitespace-nowrap">0535383218</span>
            </motion.a>
            <motion.a
              href="https://wa.me/212662640525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-2 rounded-lg font-bold text-xs md:text-sm lg:text-base transition-all duration-200 bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-md hover:shadow-lg backdrop-blur-sm flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`${t("contact.whatsapp") || "WhatsApp"}: 0662640525`}
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="hidden lg:inline whitespace-nowrap">0662640525</span>
            </motion.a>
            <div className="[&_button]:border-gray-300 [&_button]:text-black [&_button]:hover:bg-gray-100 flex-shrink-0">
              <LanguageToggle />
            </div>
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg transition-colors duration-200 text-black hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen
                ? t("nav.closeMenu") || "Close menu"
                : t("nav.openMenu") || "Open menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
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
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[99] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                pointerEvents: "auto",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: dir === "rtl" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir === "rtl" ? 100 : -100 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={`md:hidden fixed top-0 bottom-0 h-screen w-full max-w-sm z-[100] shadow-xl bg-gradient-to-br from-white via-white/95 to-blue-50/90 backdrop-blur-[80px] border-b border-pink-500/10 ${
                dir === "rtl" ? "right-0" : "left-0"
              }`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.97)",
                backdropFilter: "blur(80px) saturate(180%)",
              }}
              id="mobile-navigation"
              role="navigation"
              aria-label={t("nav.mobileNavigation") || "Mobile navigation"}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="container-custom pt-2 pb-6 flex flex-col gap-2 h-full overflow-y-auto">
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
                          : "text-black hover:text-primary hover:bg-primary/15"
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
                    aria-label={`${
                      t("contact.phoneLabel") || "Phone"
                    }: 0535383218`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>0535383218</span>
                  </a>
                  <a
                    href="https://wa.me/212662640525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-[#25D366] font-semibold bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={`${
                      t("contact.whatsapp") || "WhatsApp"
                    }: 0662640525`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>0662640525</span>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
