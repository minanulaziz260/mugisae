import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PendaftaranForm from "@/components/PendaftaranForm";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { buildWaLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pendaftaran Siswa Baru",
  description:
    "Daftar program kesetaraan Paket A, B, dan C di PKBM Mugi Sae. Konsultasi gratis via WhatsApp, syarat mudah, & biaya terjangkau.",
};

const syarat = [
  "Fotokopi Kartu Keluarga (KK)",
  "Fotokopi KTP/Akta Kelahiran",
  "Pas foto berwarna 3x4 (2 lembar)",
  "Ijazah/raport terakhir (jika ada)",
  "Mengisi formulir pendaftaran",
];

const langkah = [
  {
    no: 1,
    title: "Isi Formulir Online",
    description:
      "Lengkapi data diri pada formulir di samping. Hanya butuh waktu kurang dari 2 menit.",
  },
  {
    no: 2,
    title: "Konfirmasi via WhatsApp",
    description:
      "Anda akan diarahkan ke chat admin kami untuk verifikasi data & informasi gelombang pendaftaran.",
  },
  {
    no: 3,
    title: "Lengkapi Dokumen",
    description:
      "Kirim dokumen persyaratan secara digital atau langsung ke kantor PKBM Mugi Sae.",
  },
  {
    no: 4,
    title: "Selamat Bergabung!",
    description:
      "Setelah verifikasi, Anda resmi terdaftar dan siap memulai pembelajaran sesuai jadwal yang dipilih.",
  },
];

export default function PendaftaranPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pendaftaran"
        title="Mulai perjalanan pendidikan Anda hari ini."
        description="Pendaftaran dibuka sepanjang tahun. Isi formulir berikut dan tim kami akan mendampingi setiap langkah Anda."
        breadcrumbs={[
          { href: "/", label: "Beranda" },
          { href: "/pendaftaran", label: "Pendaftaran" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Formulir Pendaftaran Siswa Baru
              </h2>
              <p className="mt-2 text-sm text-muted">
                Isi data berikut dan kami akan menghubungi Anda via WhatsApp
                untuk proses selanjutnya.
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={80}>
                <PendaftaranForm />
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-700/50 dark:bg-emerald-900/20 dark:text-emerald-200">
                <Icon name="whatsapp" size={20} className="shrink-0" />
                <div>
                  <p className="font-semibold">Lebih nyaman langsung chat?</p>
                  <p className="text-xs leading-relaxed text-emerald-900/80 dark:text-emerald-200/80">
                    Hubungi admin kami via WhatsApp di {site.phoneDisplay}.{" "}
                    <Link
                      href={buildWaLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      Klik di sini untuk memulai chat.
                    </Link>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Syarat & Langkah */}
          <aside className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-500">
                    <Icon name="check" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      Syarat Pendaftaran
                    </h3>
                    <p className="text-xs text-muted">Mudah & sederhana</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {syarat.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
                        <Icon name="check" size={12} />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-gold-400">
                    <Icon name="compass" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      Alur Pendaftaran
                    </h3>
                    <p className="text-xs text-muted">4 langkah simpel</p>
                  </div>
                </div>
                <ol className="mt-5 space-y-4">
                  {langkah.map((l) => (
                    <li key={l.no} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-900 font-display text-xs font-bold text-white shadow-md">
                        {l.no}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{l.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {l.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
