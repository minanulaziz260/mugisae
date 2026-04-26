import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { comparisons, faqs, features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Keunggulan",
  description:
    "Apa yang membuat PKBM Mugi Sae istimewa? Jadwal fleksibel, biaya terjangkau, guru berpengalaman, dan ijazah setara yang diakui resmi negara.",
};

export default function KeunggulanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Keunggulan"
        title="Kenapa ribuan warga belajar mempercayakan pendidikannya kepada kami."
        description="Bukan sekadar mengejar ijazah — kami menawarkan pengalaman belajar yang fleksibel, bermutu, dan memberdayakan."
        breadcrumbs={[
          { href: "/", label: "Beranda" },
          { href: "/keunggulan", label: "Keunggulan" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <FeatureCard
                title={f.title}
                description={f.description}
                icon={f.icon}
                accent={i % 3 === 0 ? "brand" : i % 3 === 1 ? "gold" : "teal"}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gradient-to-b from-bg via-brand-50/40 to-bg py-20 dark:via-brand-900/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
              <Icon name="target" size={12} />
              Perbandingan
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              PKBM vs. Sekolah Formal — apa bedanya?
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="grid grid-cols-3 border-b border-border bg-gradient-to-r from-brand-900 to-brand-800 text-white">
                <div className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">
                  Aspek
                </div>
                <div className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">
                  PKBM Mugi Sae
                </div>
                <div className="px-5 py-4 text-sm font-semibold uppercase tracking-wider">
                  Sekolah Formal
                </div>
              </div>
              {comparisons.map((row, i) => (
                <div
                  key={row.aspect}
                  className={`grid grid-cols-3 text-sm transition hover:bg-brand-50/40 dark:hover:bg-brand-900/20 ${
                    i % 2 === 0 ? "bg-bg" : "bg-card"
                  } ${i !== comparisons.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div className="px-5 py-4 font-semibold">{row.aspect}</div>
                  <div className="px-5 py-4 text-fg/90">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Icon name="check" size={12} />
                      </span>
                      <span>{row.pkbm}</span>
                    </div>
                  </div>
                  <div className="px-5 py-4 text-muted">{row.formal}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
            <Icon name="spark" size={12} />
            Pertanyaan Umum
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Hal-hal yang sering ditanyakan calon siswa.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl border border-border bg-card p-5 transition hover:border-brand-300 open:border-brand-300 open:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-fg list-none">
                  <span>{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-180 dark:bg-brand-900/40 dark:text-gold-400">
                    <Icon name="chevron-down" size={16} />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
