import Link from "next/link";
import type { Program } from "@/lib/site";
import Icon from "./Icon";

export default function ProgramCard({
  program,
  href = "/program",
}: {
  program: Program;
  href?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/10 sm:p-7">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${program.color}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${program.color} opacity-0 blur-2xl transition group-hover:opacity-30`}
        aria-hidden
      />
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${program.color} px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md`}
        >
          {program.code}
        </span>
        <span className="text-xs font-medium text-muted">
          {program.duration}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
        {program.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-700 dark:text-gold-400">
        {program.equivalent}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {program.description}
      </p>
      <ul className="mt-5 space-y-2.5">
        {program.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
              <Icon name="check" size={12} />
            </span>
            <span className="text-fg/90">{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:gap-2.5 dark:text-gold-400"
        >
          Pelajari Detail
          <Icon name="arrow-right" size={14} />
        </Link>
        <Link
          href="/pendaftaran"
          className="inline-flex items-center gap-1.5 rounded-full bg-fg/5 px-4 py-2 text-xs font-semibold text-fg transition hover:bg-brand-700 hover:text-white"
        >
          Daftar
        </Link>
      </div>
    </article>
  );
}
