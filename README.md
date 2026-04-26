# PKBM Mugi Sae — Website Resmi

Website profil & landing page pendaftaran untuk **PKBM MUGI SAE** — Pusat
Kegiatan Belajar Masyarakat penyelenggara pendidikan kesetaraan Paket A, B,
dan C dengan akreditasi A.

> Tagline: **Belajar Tanpa Batas, Raih Masa Depan Cerah**

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Inter** & **Poppins** via `next/font/google`
- ESLint dengan `eslint-config-next`

## Halaman

| Path | Deskripsi |
| --- | --- |
| `/` | Beranda — hero, statistik, keunggulan, preview program, testimoni, CTA |
| `/tentang` | Sejarah, visi & misi, sambutan kepala sekolah, nilai-nilai |
| `/program` | Detail Paket A/B/C dan mode belajar fleksibel |
| `/keunggulan` | Keunggulan, perbandingan PKBM vs sekolah formal, FAQ |
| `/galeri` | Dokumentasi kegiatan & wisuda |
| `/pendaftaran` | Form pendaftaran dengan WhatsApp redirect + syarat & alur |
| `/kontak` | Alamat, kontak, jam operasional, Google Maps embed |

## Struktur Folder

```
src/
├── app/
│   ├── layout.tsx           # Root layout + metadata + theme init
│   ├── page.tsx             # Beranda
│   ├── globals.css          # Tailwind v4 + design tokens + animasi
│   ├── sitemap.ts           # SEO sitemap
│   ├── robots.ts            # SEO robots
│   ├── tentang/page.tsx
│   ├── program/page.tsx
│   ├── keunggulan/page.tsx
│   ├── galeri/page.tsx
│   ├── pendaftaran/page.tsx
│   └── kontak/page.tsx
├── components/
│   ├── Navbar.tsx           # Sticky navbar + mobile menu
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProgramCard.tsx
│   ├── TestimoniCard.tsx
│   ├── FeatureCard.tsx
│   ├── SectionTitle.tsx
│   ├── PageHeader.tsx
│   ├── CTASection.tsx
│   ├── PendaftaranForm.tsx  # Form pendaftaran → WA
│   ├── FloatingWhatsApp.tsx # Tombol WA mengambang
│   ├── ThemeProvider.tsx    # Dark mode context
│   ├── ThemeToggle.tsx
│   ├── Reveal.tsx           # Fade-in saat scroll
│   └── Icon.tsx             # Inline SVG icon set
└── lib/
    └── site.ts              # Konstanta sekolah, program, testimoni, dst.
```

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Deployment

Repository ini siap di-deploy ke [Vercel](https://vercel.com/) dengan
konfigurasi default — cukup hubungkan repo dan pilih root direktori `web/`.

## Konfigurasi Konten

Semua data sekolah, program, testimoni, FAQ, dan kontak terpusat di
[`src/lib/site.ts`](./src/lib/site.ts). Cukup ubah file ini untuk memperbarui
konten website.

Variabel utama:

- `site.fullName`, `site.tagline`, `site.description`
- `site.headmaster`, `site.npsn`, `site.accreditation`
- `site.address`, `site.email`, `site.phoneDisplay`, `site.phoneRaw`
- `site.mapsEmbed` — URL Google Maps embed
- `programs[]`, `testimonials[]`, `features[]`, `faqs[]`, `comparisons[]`

## SEO

- `metadata` lengkap (title template, OG, Twitter card, canonical)
- `sitemap.xml` & `robots.txt` otomatis dari App Router
- `lang="id"`, semantic HTML, lazy-load Google Maps iframe
- `next/font` untuk self-host font (no layout shift)
