import { render, screen, act } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "../LanguageContext";
import { useState } from "react";

// Test component that uses the hook
const TestComponent = () => {
  const { language, setLanguage, t, dir } = useLanguage();

  return (
    <div>
      <div data-testid="language">{language}</div>
      <div data-testid="dir">{dir}</div>
      <div data-testid="translation">{t("nav.services")}</div>
      <button onClick={() => setLanguage(language === "ar" ? "fr" : "ar")}>
        Toggle Language
      </button>
    </div>
  );
};

describe("LanguageContext", () => {
  it("provides default Arabic language", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("ar");
    expect(screen.getByTestId("dir")).toHaveTextContent("rtl");
  });

  it("translates text correctly", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    expect(screen.getByTestId("translation")).toHaveTextContent("خدماتنا");
  });

  it("allows language switching", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );

    const toggleButton = screen.getByText("Toggle Language");

    // Switch to French
    act(() => {
      toggleButton.click();
    });

    expect(screen.getByTestId("language")).toHaveTextContent("fr");
    expect(screen.getByTestId("dir")).toHaveTextContent("ltr");
    expect(screen.getByTestId("translation")).toHaveTextContent("Nos Services");
  });
});
