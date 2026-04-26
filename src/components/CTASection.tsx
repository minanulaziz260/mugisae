import Link from "next/link";
import { buildWaLink } from "@/lib/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative mx-auto my-20 max-w-7xl px-4 sm:my-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 px-6 py-14 text-white shadow-2xl shadow-brand-900/30 sm:px-10 sm:py-16">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div
            className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-gold-400/20 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-teal-450/15 blur-3xl"
            aria-hidden
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                Bergabung Sekarang
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
                Saatnya melangkah lebih jauh — apapun titik mulai Anda hari ini.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
                Daftarkan diri Anda dalam program kesetaraan kami. Konsultasi
                gratis, pendampingan penuh, dan ijazah resmi yang diakui negara.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <Link
                href="/pendaftaran"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-7 py-4 text-sm font-bold text-brand-950 shadow-lg shadow-gold-500/30 transition hover:scale-[1.02] hover:shadow-xl"
              >
                Daftar Sekarang
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Icon name="whatsapp" size={16} />
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
