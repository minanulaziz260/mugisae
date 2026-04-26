import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
