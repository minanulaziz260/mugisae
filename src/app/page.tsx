import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProgramCard from "@/components/ProgramCard";
import FeatureCard from "@/components/FeatureCard";
import TestimoniCard from "@/components/TestimoniCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { features, programs, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Keunggulan / Why us */}
      <section id="keunggulan" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Mengapa PKBM Mugi Sae"
          title="Pendidikan kesetaraan yang fleksibel, terpercaya, & modern"
          description="Lebih dari sekadar ijazah — kami membangun komunitas belajar yang inklusif, bermutu, dan relevan dengan kebutuhan masa depan."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Program preview */}
      <section
        id="program"
        className="relative bg-gradient-to-b from-bg via-brand-50/40 to-bg py-20 dark:via-brand-900/15"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Program Pendidikan"
            title="Tiga jalur kesetaraan, satu masa depan cerah"
            description="Pilih program yang sesuai jenjang pendidikan Anda. Semua kelas tersedia luring, daring, maupun blended learning."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/program"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-fg transition hover:border-brand-300 hover:text-brand-700 dark:hover:text-gold-400"
              >
                Lihat Detail Program
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why PKBM vs formal */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Kenapa Memilih PKBM"
          title="PKBM atau sekolah formal? Ini perbandingannya."
          description="PKBM bukan kelas dua. Ijazah kami setara dan diakui resmi negara, dengan keunggulan fleksibilitas yang sulit didapat di sekolah konvensional."
        />
        <Reveal delay={120}>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7 shadow-sm dark:border-brand-700 dark:from-brand-900/40 dark:to-brand-950/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-md">
                  <Icon name="academic" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">PKBM Mugi Sae</h3>
                  <p className="text-xs text-muted">Pendidikan kesetaraan modern</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Jadwal fleksibel: pagi, siang, sore, atau online",
                  "Biaya terjangkau dengan beasiswa & cicilan",
                  "Tidak ada batasan usia, terbuka untuk siapa saja",
                  "Bisa belajar sambil bekerja atau wirausaha",
                  "Kurikulum + life skill & kewirausahaan",
                  "Akreditasi A — ijazah diakui resmi negara",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Icon name="check" size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fg/10 text-fg/60">
                  <Icon name="briefcase" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Sekolah Formal</h3>
                  <p className="text-xs text-muted">Pendidikan reguler</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {[
                  "Jadwal tetap pagi setiap hari kerja",
                  "Biaya cenderung tinggi, terutama swasta",
                  "Dibatasi rentang usia tiap jenjang",
                  "Sulit dijalani sambil bekerja",
                  "Kurikulum nasional standar",
                  "Akreditasi bervariasi tiap sekolah",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Testimoni */}
      <section className="relative bg-gradient-to-b from-bg via-brand-50/40 to-bg py-20 dark:via-brand-900/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Testimoni"
            title="Cerita nyata dari warga belajar kami"
            description="Setiap ijazah punya kisah di baliknya. Inilah pengalaman mereka yang sudah lebih dahulu meraih masa depan bersama PKBM Mugi Sae."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestimoniCard data={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
