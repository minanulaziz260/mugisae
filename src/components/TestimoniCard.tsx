import type { Testimonial } from "@/lib/site";
import Icon from "./Icon";

export default function TestimoniCard({ data }: { data: Testimonial }) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
      <div className="absolute right-5 top-5 text-brand-100 transition group-hover:text-brand-200 dark:text-brand-800/50">
        <Icon name="quote" size={36} />
      </div>
      <div className="flex items-center gap-1 text-gold-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={16} className="fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-fg/90">
        &ldquo;{data.message}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 font-display text-sm font-bold text-white">
          {data.initial}
        </div>
        <div>
          <p className="text-sm font-semibold">{data.name}</p>
          <p className="text-xs text-muted">{data.role}</p>
        </div>
      </div>
    </article>
  );
}
