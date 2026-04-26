"use client";

import Icon from "./Icon";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-fg transition hover:border-brand-400 hover:text-brand-600 dark:hover:text-gold-400 ${className}`}
    >
      <span className="sr-only">Ubah tema</span>
      <Icon
        name={isDark ? "sun" : "moon"}
        size={18}
        className="transition-transform duration-300"
      />
    </button>
  );
}
