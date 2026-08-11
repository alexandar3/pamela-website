"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Language, type Translation } from "./translations";

const STORAGE_KEY = "pamela-lang";

// Countries where Serbian is the natural default for a first-time visitor.
const SR_DEFAULT_COUNTRIES = new Set(["RS", "ME", "HR", "BA"]);

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "sr";
}

// GitHub Pages serves this site as static files with no server/edge runtime,
// so there's no request-time geo-IP available. This does a best-effort,
// client-side country lookup instead — silently gives up on any failure,
// and never overrides a language the visitor already picked.
async function detectCountryDefaultLang(): Promise<Language | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch("https://get.geojs.io/v1/ip/country.json", {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data: unknown = await res.json();
    const code =
      typeof data === "object" && data !== null && "country_code" in data
        ? String((data as { country_code: unknown }).country_code).toUpperCase()
        : "";
    return SR_DEFAULT_COUNTRIES.has(code) ? "sr" : null;
  } catch {
    return null;
  }
}

function readStoredLang(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLanguage(stored) ? stored : "en";
}

let currentLang: Language = readStoredLang();
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Language {
  return currentLang;
}

function getServerSnapshot(): Language {
  return "en";
}

function setStoredLang(next: Language) {
  currentLang = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) !== null) return;

    let cancelled = false;
    detectCountryDefaultLang().then((detected) => {
      if (
        !cancelled &&
        detected &&
        window.localStorage.getItem(STORAGE_KEY) === null
      ) {
        setStoredLang(detected);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang: setStoredLang, t: translations[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
