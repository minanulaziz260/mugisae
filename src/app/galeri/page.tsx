import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi kegiatan belajar, ekstrakurikuler, dan momen wisuda warga belajar PKBM Mugi Sae.",
};

type GalleryItem = {
  title: string;
  category: string;
  gradient: string;
  icon: IconName;
};

const items: GalleryItem[] = [
  { title: "Kelas Tatap Muka Paket C", category: "Belajar Mengajar", gradient: "from-brand-700 to-brand-900", icon: "users" },
  { title: "Pelatihan Kewirausahaan", category: "Life Skill", gradient: "from-amber-500 to-yellow-600", icon: "briefcase" },
  { title: "Wisuda Angkatan 2024", category: "Wisuda", gradient: "from-teal-500 to-emerald-600", icon: "academic" },
  { title: "Kelas Online Blended", category: "E-Learning", gradient: "from-sky-500 to-blue-600", icon: "globe" },
  { title: "Kunjungan Industri", category: "Eksternal", gradient: "from-purple-600 to-fuchsia-600", icon: "compass" },
  { title: "Diskusi Kelompok", category: "Belajar Mengajar", gradient: "from-rose-500 to-pink-600", icon: "users" },
  { title: "Pelatihan Komputer", category: "Life Skill", gradient: "from-indigo-600 to-violet-700", icon: "spark" },
  { title: "Bakti Sosial Ramadhan", category: "Sosial", gradient: "from-emerald-500 to-teal-600", icon: "heart" },
  { title: "Lomba Kreativitas Siswa", category: "Ekstrakurikuler", gradient: "from-orange-500 to-red-600", icon: "star" },
];

const categories = ["Semua", "Belajar Mengajar", "Wisuda", "Life Skill", "Sosial"];

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title="Setiap momen, setiap kemajuan."
        description="Foto-foto kegiatan, kelas, ekstrakurikuler, dan dokumentasi wisuda dari warga belajar PKBM Mugi Sae."
        breadcrumbs={[
          { href: "/", label: "Beranda" },
          { href: "/galeri", label: "Galeri" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  i === 0
                    ? "border-brand-700 bg-brand-700 text-white shadow-md"
                    : "border-border bg-card text-fg/80 hover:border-brand-300"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-110`}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center text-white/90">
                  <Icon name={item.icon} size={56} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-5 bottom-5 text-white">
                  <span className="inline-flex rounded-full bg-white/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                    {item.category}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
