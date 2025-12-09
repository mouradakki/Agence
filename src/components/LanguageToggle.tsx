import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "fr" : "ar");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-background/10 border-border/30 hover:bg-background/20"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{language === "ar" ? "FR" : "العربية"}</span>
    </Button>
  );
};

export default LanguageToggle;
