import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ["services", "how-it-works", "advantages", "testimonials", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#how-it-works", label: t("nav.howItWorks") },
    { href: "#advantages", label: t("nav.advantages") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <div className="hidden sm:block">
              <p className={`font-bold text-lg transition-colors duration-200 ${
                isScrolled 
                  ? "text-foreground group-hover:text-primary" 
                  : "text-primary-foreground group-hover:text-accent"
              }`}>
                {t("header.brandName")}
              </p>
              <p className={`text-xs transition-colors duration-200 ${
                isScrolled 
                  ? "text-muted-foreground" 
                  : "text-primary-foreground/70"
              }`}>
                {t("header.approvedAgency")}
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                      : isActive
                        ? "text-accent"
                        : "text-primary-foreground/90 hover:text-accent"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isScrolled ? "bg-primary" : "bg-accent"
                      }`}
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200 ${
                    isScrolled ? "bg-primary/5" : "bg-primary-foreground/10"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <div className={isScrolled ? "" : "[&_button]:border-primary-foreground/30 [&_button]:text-primary-foreground [&_button]:hover:bg-primary-foreground/10"}>
              <LanguageToggle />
            </div>
            <motion.a
              href="tel:+212600000000"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                isScrolled
                  ? "text-primary hover:bg-primary/10"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">+212 600 000 000</span>
            </motion.a>
            <Button
              size="default"
              asChild
              className={`shadow-md hover:shadow-lg transition-shadow duration-200 ${
                !isScrolled && "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              }`}
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                {t("header.getQuote")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? "text-foreground hover:bg-primary/10"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-background border-t border-border relative z-50 shadow-xl"
            >
              <nav className="container-custom py-6 flex flex-col gap-2">
                <div className="flex justify-center mb-4">
                  <LanguageToggle />
                </div>
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
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
                    href="tel:+212600000000"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-primary font-semibold bg-primary/10 hover:bg-primary/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    <span>+212 600 000 000</span>
                  </a>
                  <Button className="w-full" asChild>
                    <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                      {t("header.getQuote")}
                    </a>
                  </Button>
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
