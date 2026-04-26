"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md shadow-brand-900/20 transition-transform group-hover:scale-105">
            <Icon name="academic" size={20} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold-400 ring-2 ring-bg" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-tight">
              {site.fullName}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-muted">
              Akreditasi A · NPSN {site.npsn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "text-brand-700 dark:text-gold-400"
                    : "text-fg/80 hover:text-brand-700 dark:hover:text-gold-400"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-600 to-gold-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="/pendaftaran"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-700 to-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-900/30"
          >
            Daftar Sekarang
            <Icon name="arrow-right" size={16} />
          </Link>
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-fg lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-brand-50 text-brand-800 dark:bg-brand-900/40 dark:text-gold-400"
                    : "text-fg/80 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-900/30"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="mt-2 flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/pendaftaran"
              onClick={closeMenu}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-700 to-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-md"
            >
              Daftar Sekarang
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
