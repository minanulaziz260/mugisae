import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { href: string; label: string }[];
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand-50/60 via-bg to-bg dark:from-brand-900/30">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="absolute -top-24 right-0 h-[320px] w-[320px] rounded-full bg-gold-300/30 blur-3xl dark:bg-gold-500/15"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        {breadcrumbs && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-1 text-xs text-muted"
            >
              {breadcrumbs.map((b, i) => (
                <span key={b.href} className="flex items-center gap-1">
                  {i > 0 && <span className="text-muted/50">/</span>}
                  <Link
                    href={b.href}
                    className="rounded px-1 py-0.5 transition hover:text-brand-700 dark:hover:text-gold-400"
                  >
                    {b.label}
                  </Link>
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 backdrop-blur dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
              <Icon name="spark" size={12} />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
