import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil resmi PKBM Mugi Sae — sejarah, visi & misi, sambutan kepala sekolah, dan nilai-nilai pendidikan yang kami junjung tinggi.",
};

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Membangun pendidikan kesetaraan yang berdaya & bermartabat"
        description="PKBM Mugi Sae hadir sebagai rumah belajar yang inklusif — tempat di mana setiap orang berhak mendapatkan kesempatan kedua untuk menggapai cita-citanya."
        breadcrumbs={[
          { href: "/", label: "Beranda" },
          { href: "/tentang", label: "Tentang Kami" },
        ]}
      />

      {/* Sejarah */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-gold-400">
                Sejarah Singkat
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Berawal dari kepedulian, tumbuh menjadi gerakan pendidikan.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  PKBM Mugi Sae didirikan oleh sekelompok pendidik yang prihatin
                  melihat banyaknya warga di lingkungan sekitar yang putus
                  sekolah karena keterbatasan ekonomi, jarak, maupun
                  tanggung jawab keluarga. &ldquo;Mugi Sae&rdquo; — yang dalam
                  bahasa Sunda berarti &ldquo;semoga baik&rdquo; — menjadi doa
                  sekaligus komitmen kami: setiap orang berhak mendapatkan
                  pendidikan yang layak.
                </p>
                <p>
                  Bermula dari satu kelas kecil di balai warga, PKBM Mugi Sae
                  kini telah mendampingi ribuan warga belajar dari beragam
                  latar belakang melalui program <strong className="text-fg">Paket A</strong>,
                  <strong className="text-fg"> Paket B</strong>, dan
                  <strong className="text-fg"> Paket C</strong>.
                </p>
                <p>
                  Dengan akreditasi <strong className="text-fg">{site.accreditation}</strong>{" "}
                  dan NPSN {site.npsn}, kami terus berbenah menjadi lembaga
                  pendidikan kesetaraan modern — yang memadukan kurikulum
                  nasional, life skill, dan teknologi pembelajaran digital.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "12+", label: "Tahun Pengabdian", icon: "academic" as const },
                  { value: "1.200+", label: "Warga Belajar", icon: "users" as const },
                  { value: "98%", label: "Tingkat Kelulusan", icon: "spark" as const },
                  { value: "A", label: "Akreditasi BAN", icon: "shield" as const },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md">
                      <Icon name={s.icon} size={20} />
                    </div>
                    <p className="mt-4 font-display text-3xl font-bold">{s.value}</p>
                    <p className="mt-1 text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="bg-gradient-to-b from-bg via-brand-50/40 to-bg py-20 dark:via-brand-900/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
              <Icon name="compass" size={12} />
              Visi & Misi
            </span>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-300/20 blur-2xl" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-500">
                  <Icon name="target" size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Visi</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Menjadi pusat kegiatan belajar masyarakat terdepan yang
                  melahirkan pribadi cerdas, berkarakter, dan berdaya saing
                  global — tanpa memandang usia, status, ataupun latar
                  belakang.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-300/20 blur-2xl" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-900/50 dark:text-gold-400">
                  <Icon name="compass" size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Misi</h3>
                <ul className="mt-3 space-y-3 text-base leading-relaxed text-muted">
                  {[
                    "Menyelenggarakan pendidikan kesetaraan Paket A, B, dan C yang berkualitas dan terakreditasi.",
                    "Membangun pola belajar fleksibel yang relevan dengan kebutuhan pekerja, pelajar, dan masyarakat luas.",
                    "Memadukan kurikulum nasional dengan life skill & kewirausahaan agar lulusan siap menghadapi dunia nyata.",
                    "Membentuk pribadi berkarakter — jujur, mandiri, dan peduli kepada sesama.",
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
                        <Icon name="check" size={12} />
                      </span>
                      <span className="text-fg/90">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 rounded-[32px] border border-border bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 p-8 text-white shadow-2xl shadow-brand-900/30 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-4">
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-gold-400/40 bg-gradient-to-br from-brand-700 to-brand-950 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-gold-300">
                  M
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-xl font-bold">{site.headmaster}</p>
                <p className="text-sm text-brand-200">Kepala PKBM Mugi Sae</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Icon
                name="quote"
                size={42}
                className="text-gold-400/60"
              />
              <p className="mt-4 text-lg leading-relaxed text-brand-100 sm:text-xl">
                &ldquo;Pendidikan tidak berhenti di pintu sekolah formal.
                Setiap orang berhak mendapatkan kesempatan untuk belajar,
                bertumbuh, dan menjadi versi terbaik dari dirinya. Di PKBM
                Mugi Sae, kami percaya bahwa ijazah hanyalah pintu — yang
                lebih penting adalah karakter, keterampilan, dan keyakinan
                untuk melangkah lebih jauh. Selamat datang, dan mari bersama
                kita raih masa depan cerah.&rdquo;
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                Sambutan Kepala Sekolah
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Nilai-nilai */}
      <section className="bg-gradient-to-b from-bg via-brand-50/40 to-bg py-20 dark:via-brand-900/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
              <Icon name="heart" size={12} />
              Nilai Pendidikan
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Empat nilai inti yang menjiwai setiap proses belajar.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 font-display text-base font-bold text-white shadow-md">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.description}
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
