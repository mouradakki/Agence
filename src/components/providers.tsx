"use client";

import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

function DirectionSetter() {
  const { dir } = useLanguage();

  useEffect(() => {
    // Set direction on html and body elements
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", dir === "rtl" ? "ar" : "fr");
    document.body.style.direction = dir;
  }, [dir]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <DirectionSetter />
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </LanguageProvider>
  );
}
