"use client";

import { Component, type ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error caught by boundary:", error, errorInfo);
    }
    // In production, you could log to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

function ErrorFallback({ error }: { error: Error | null }) {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">⚠️</h1>
        <h2 className="text-2xl font-bold mb-4">
          {t("error.title") || "حدث خطأ ما | Something went wrong"}
        </h2>
        <p className="text-muted-foreground mb-6">
          {t("error.message") || "نعتذر، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى."}
        </p>
        {process.env.NODE_ENV === "development" && error && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm font-semibold mb-2">
              {t("error.details") || "تفاصيل الخطأ (للإنتاج فقط)"}
            </summary>
            <pre className="text-xs bg-destructive/10 p-4 rounded overflow-auto">
              {error.toString()}
            </pre>
          </details>
        )}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          {t("error.reload") || "إعادة تحميل الصفحة | Reload Page"}
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
