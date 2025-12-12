"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t, dir } = useLanguage();

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-muted"
      dir={dir}
    >
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {t("notFound.message") || "الصفحة غير موجودة | Page not found"}
        </p>
        <Link href="/" className="text-primary underline hover:text-primary/90">
          {t("notFound.returnHome") ||
            "العودة للصفحة الرئيسية | Return to Home"}
        </Link>
      </div>
    </div>
  );
}
