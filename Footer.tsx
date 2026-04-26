import Link from "next/link";
import Icon from "./Icon";
import { buildWaLink, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-950 text-brand-100">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-700/30 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-brand-950 shadow-lg">
                <Icon name="academic" size={22} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-white">
                  {site.fullName}
                </span>
                <span className="text-xs uppercase tracking-widest text-brand-300">
                  Belajar untuk semua
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-200">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={site.social.instagram}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-700 text-brand-200 transition hover:border-gold-400 hover:text-gold-400"
              >
                <Icon name="instagram" size={18} />
              </Link>
              <Link
                href={site.social.facebook}
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-700 text-brand-200 transition hover:border-gold-400 hover:text-gold-400"
              >
                <Icon name="facebook" size={18} />
              </Link>
              <Link
                href={site.social.youtube}
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-700 text-brand-200 transition hover:border-gold-400 hover:text-gold-400"
              >
                <Icon name="youtube" size={18} />
              </Link>
              <Link
                href={buildWaLink()}
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-700 text-brand-200 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <Icon name="whatsapp" size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">
              Tautan Cepat
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-200 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold-400">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-200">
              <li className="flex gap-3">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-gold-400" />
                <Link
                  href={buildWaLink()}
                  className="transition hover:text-white"
                >
                  {site.phoneDisplay}
                </Link>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-gold-400" />
                <span>NPSN {site.npsn} · Akreditasi {site.accreditation}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-800 pt-6 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. Seluruh hak cipta dilindungi.</p>
          <p className="text-brand-400">
            Dirancang untuk masa depan pendidikan yang inklusif.
          </p>
        </div>
      </div>
    </footer>
  );
}
