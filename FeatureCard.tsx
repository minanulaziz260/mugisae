import Icon, { type IconName } from "./Icon";

type Props = {
  title: string;
  description: string;
  icon: IconName;
  accent?: "brand" | "gold" | "teal";
};

const accents = {
  brand:
    "from-brand-50 to-brand-100 text-brand-700 dark:from-brand-900/40 dark:to-brand-800/40 dark:text-gold-400",
  gold: "from-gold-300/30 to-gold-400/20 text-gold-500 dark:from-gold-500/15 dark:to-gold-400/10",
  teal: "from-teal-450/20 to-emerald-300/20 text-teal-450 dark:from-teal-450/15 dark:to-emerald-500/10",
};

export default function FeatureCard({
  title,
  description,
  icon,
  accent = "brand",
}: Props) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/10">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[accent]} transition-transform group-hover:scale-110`}
      >
        <Icon name={icon} size={22} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
