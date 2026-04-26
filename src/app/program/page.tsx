import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProgramCard from "@/components/ProgramCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { programs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Program Pendidikan",
  description:
    "Program kesetaraan PKBM Mugi Sae: Paket A (setara SD), Paket B (setara SMP), Paket C (setara SMA). Fleksibel, terakreditasi, dan diakui resmi negara.",
};

const flexibility = [
  {
    title: "Tatap Muka di Kelas",
    description:
      "Kelas pagi, siang, atau sore di lokasi PKBM Mugi Sae. Cocok untuk yang ingin interaksi langsung dengan tutor.",
    icon: "users" as const,
  },
  {
    title: "Belajar Online",
    description:
      "Kelas daring via platform belajar kami. Akses materi, kuis, dan diskusi dari mana saja.",
    icon: "globe" as const,
  },
  {
    title: "Modul Mandiri",
    description:
      "Belajar dengan modul yang sudah dirancang sesuai kurikulum. Cocok untuk Anda yang sangat sibuk.",
    icon: "briefcase" as const,
  },
  {
    title: "Blended Learning",
    description:
      "Gabungan luring & daring. Maksimalkan pembelajaran sesuai gaya belajar masing-masing.",
    icon: "spark" as const,
  },
];

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Program Pendidikan"
        title="Tiga jalur kesetaraan untuk semua jenjang & semua usia."
        description="Pilih program yang paling sesuai dengan kebutuhan Anda. Setiap jalur dirancang dengan kurikulum berkualitas, pengajar berpengalaman, dan ijazah resmi negara."
        breadcrumbs={[
          { href: "/", label: "Beranda" },
          { href: "/program", label: "Program" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Flexibility */}
      <section className="bg-gradient-to-b from-bg via-brand-50/40 to-bg py-20 dark:via-brand-900/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
              <Icon name="spark" size={12} />
              Fleksibilitas Belajar
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Empat cara belajar — pilih yang paling sesuai dengan gaya hidup Anda.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Kami percaya pendidikan harus mengikuti kehidupan, bukan
              sebaliknya. Itu sebabnya kami menyediakan berbagai mode
              pembelajaran yang dapat dikombinasikan sesuai kebutuhan Anda.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {flexibility.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md transition-transform group-hover:scale-110">
                    <Icon name={f.icon} size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
