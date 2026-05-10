"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "music-connect:theme";
const COOKIE_KEY = "mc_theme";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "dark";
}

function applyTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

function persistTheme(theme: Theme) {
  window.localStorage.setItem(STORAGE_KEY, theme);
  // Cookie para SSR no proximo carregamento (evita flicker)
  document.cookie = `${COOKIE_KEY}=${theme};path=/;max-age=31536000;samesite=lax`;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  // Hidrata do que o script inline (em <head>) ja aplicou no <html>
  useEffect(() => {
    const stored = readStoredTheme();
    setThemeState(stored);
    const resolved = stored === "system" ? readSystemTheme() : stored;
    setResolvedTheme(resolved);
  }, []);

  // Reage a mudanca de preferencia do sistema quando theme === "system"
  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handler = () => {
      const resolved = readSystemTheme();
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    const resolved = next === "system" ? readSystemTheme() : next;
    setResolvedTheme(resolved);
    applyTheme(resolved);
    persistTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme deve ser usado dentro de <ThemeProvider>");
  }
  return ctx;
}

/**
 * Script inline para aplicar tema antes do React hidratar — evita flash de tema errado.
 * Le do localStorage ou cai no default "dark". Insira via <Script strategy="beforeInteractive">
 * ou diretamente no layout.tsx via dangerouslySetInnerHTML.
 */
export const themeBootScript = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var resolved = 'dark';
    if (stored === 'light') resolved = 'light';
    else if (stored === 'dark') resolved = 'dark';
    else if (stored === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.classList.add(resolved);
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;
