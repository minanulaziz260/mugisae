import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { buildWaLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi PKBM Mugi Sae melalui WhatsApp, email, atau kunjungi langsung kantor kami di Garut, Jawa Barat.",
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Mari berbincang — kami siap membantu."
        description="Punya pertanyaan tentang program, pendaftaran, atau kerjasama? Tim PKBM Mugi Sae siap melayani Anda di jam kerja."
        breadcrumbs={[
          { href: "/", label: "Beranda" },
          { href: "/kontak", label: "Kontak" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Informasi Kontak
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Kami terbuka untuk konsultasi pendidikan kesetaraan, kerjasama
                kelembagaan, maupun kunjungan studi banding.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: "pin" as const,
                  title: "Alamat Kantor",
                  value: site.address,
                },
                {
                  icon: "whatsapp" as const,
                  title: "WhatsApp",
                  value: site.phoneDisplay,
                  link: buildWaLink(),
                },
                {
                  icon: "mail" as const,
                  title: "Email",
                  value: site.email,
                  link: `mailto:${site.email}`,
                },
                {
                  icon: "clock" as const,
                  title: "Jam Operasional",
                  value: "Senin - Sabtu · 08.00 - 17.00 WIB",
                },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md">
                      <Icon name={c.icon} size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {c.title}
                      </p>
                      {c.link ? (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 inline-block break-words text-sm font-semibold text-fg transition group-hover:text-brand-700 dark:group-hover:text-gold-400"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-semibold text-fg">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={320}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]"
                >
                  <Icon name="whatsapp" size={16} />
                  Chat WhatsApp
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-fg transition hover:border-brand-300 hover:text-brand-700 dark:hover:text-gold-400"
                >
                  <Icon name="mail" size={16} />
                  Kirim Email
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-md">
                <div className="aspect-[4/3] w-full sm:aspect-[16/11]">
                  <iframe
                    title="Lokasi PKBM Mugi Sae"
                    src={site.mapsEmbed}
                    className="h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-border bg-bg/50 px-5 py-4 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <Icon name="pin" size={16} className="text-brand-700 dark:text-gold-400" />
                    <span>Garut, Jawa Barat</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=PKBM+Mugi+Sae+Cikajang+Garut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
                  >
                    Buka di Google Maps
                    <Icon name="arrow-right" size={12} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
