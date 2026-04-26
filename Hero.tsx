import Link from "next/link";
import { buildWaLink, site, stats } from "@/lib/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-brand-300/40 to-teal-450/40 blur-3xl dark:from-brand-700/40 dark:to-teal-450/30"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-gold-300/30 blur-3xl dark:bg-gold-500/15"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-28 lg:pb-24">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 backdrop-blur dark:border-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              Pendaftaran Tahun Ajaran Baru Dibuka
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {site.tagline.split(",")[0]},{" "}
              <span className="bg-gradient-to-r from-brand-700 via-brand-500 to-gold-500 bg-clip-text text-transparent">
                {site.tagline.split(",")[1]?.trim()}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              {site.fullName} menghadirkan pendidikan kesetaraan{" "}
              <strong className="text-fg">Paket A, B, dan C</strong> dengan
              jadwal fleksibel, kurikulum berkualitas, dan biaya terjangkau.
              Belajar di mana saja, kapan saja — sambil tetap berkarier &
              berkarya.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/pendaftaran"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-700 to-brand-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/25 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-900/40"
              >
                Daftar Sekarang
                <Icon
                  name="arrow-right"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur transition hover:border-emerald-400 hover:text-emerald-600"
              >
                <Icon name="whatsapp" size={16} />
                Tanya via WhatsApp
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card/60 px-4 py-4 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                >
                  <dt className="font-display text-2xl font-bold text-brand-800 dark:text-gold-400 sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand-500/30 via-teal-450/20 to-gold-300/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-2xl shadow-brand-900/15">
                <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-brand-900 to-brand-800 px-5 py-3 text-white">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-brand-200">
                    pkbmmugisae.sch.id
                  </span>
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md">
                      <Icon name="academic" size={22} />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold">
                        {site.fullName}
                      </p>
                      <p className="text-xs text-muted">
                        Akreditasi {site.accreditation} · NPSN {site.npsn}
                      </p>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Aktif
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { code: "Paket A", label: "Setara SD", icon: "compass" as const },
                      { code: "Paket B", label: "Setara SMP", icon: "target" as const },
                      { code: "Paket C", label: "Setara SMA", icon: "spark" as const },
                    ].map((p) => (
                      <div
                        key={p.code}
                        className="rounded-2xl border border-border bg-bg/60 p-4 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/50 dark:text-gold-400">
                          <Icon name={p.icon} size={18} />
                        </div>
                        <p className="mt-2 text-sm font-semibold">{p.code}</p>
                        <p className="text-[11px] text-muted">{p.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-dashed border-brand-300 bg-brand-50/60 p-4 dark:border-brand-700 dark:bg-brand-900/30">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/20 text-gold-500">
                        <Icon name="spark" size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-fg">
                          Beasiswa & Cicilan Tersedia
                        </p>
                        <p className="text-xs text-muted">
                          Untuk warga belajar berprestasi & kurang mampu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-3 animate-float-slow">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <Icon name="check" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Tingkat Kelulusan</p>
                  <p className="font-display text-lg font-bold">98%</p>
                </div>
              </div>

              <div className="absolute -top-5 -right-3 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-3 animate-float-slow [animation-delay:1.5s]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/20 text-gold-500">
                  <Icon name="star" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted">Akreditasi</p>
                  <p className="font-display text-lg font-bold">A</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
