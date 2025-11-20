"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "auto";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("auto");
    }

    // Detect system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const effectiveTheme = theme === "auto" ? systemTheme : theme;

    root.classList.remove("light", "dark");
    root.classList.add(effectiveTheme);

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, systemTheme]);

  const activeTheme = theme === "auto" ? systemTheme : theme;

  return {
    theme,
    setTheme,
    activeTheme,
  };
};
