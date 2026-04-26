export const site = {
  name: "PKBM Mugi Sae",
  shortName: "Mugi Sae",
  fullName: "PKBM MUGI SAE",
  tagline: "Belajar Tanpa Batas, Raih Masa Depan Cerah",
  description:
    "PKBM Mugi Sae adalah lembaga pendidikan kesetaraan terakreditasi A yang menyelenggarakan Paket A, B, dan C dengan jadwal fleksibel, biaya terjangkau, dan pengajar berpengalaman.",
  type: "Pusat Kegiatan Belajar Masyarakat (PKBM)",
  status: "Swasta",
  accreditation: "A",
  npsn: "P2964100",
  headmaster: "Munandar",
  address:
    "Jl. KH. Syahroni No.51, RT.003/RW.001, Jatibarang Lor, Kec. Jatibarang, Kabupaten Brebes, Jawa Tengah 52261",
  email: "pkbm.mugisae@gmail.com",
  phoneDisplay: "+62 831-1344-7280",
  phoneRaw: "6283113447280",
  whatsappMessage:
    "Halo Admin PKBM Mugi Sae, saya tertarik untuk mendaftar program kesetaraan. Mohon informasinya.",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506863.17863212095!2d110.4170652!3d-7.0247298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbddf51a99503%3A0x783416ce8be2c361!2sPKBM%20MUGI%20SAE%20JATIBARANG!5e0!3m2!1sid!2sid!4v1776175478307!5m2!1sid!2sid",
  social: {
    instagram: "https://instagram.com/pkbmmugisae",
    facebook: "https://facebook.com/pkbmmugisae",
    youtube: "https://youtube.com/@pkbmmugisae",
  },
  url: "https://mugisae.vercel.app",
};

export function buildWaLink(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.phoneRaw}?text=${text}`;
}

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/keunggulan", label: "Keunggulan" },
  { href: "/galeri", label: "Galeri" },
  { href: "/pendaftaran", label: "Pendaftaran" },
  { href: "/kontak", label: "Kontak" },
];

export type Program = {
  slug: string;
  code: string;
  title: string;
  equivalent: string;
  duration: string;
  description: string;
  highlights: string[];
  color: string;
};

export const programs: Program[] = [
  {
    slug: "paket-a",
    code: "Paket A",
    title: "Paket A",
    equivalent: "Setara SD/MI",
    duration: "3 - 6 tahun",
    description:
      "Program kesetaraan jenjang dasar untuk warga belajar yang belum atau tidak menyelesaikan pendidikan SD. Lulusan memperoleh ijazah setara SD/MI yang diakui resmi.",
    highlights: [
      "Kurikulum dasar Bahasa, Matematika, IPA, IPS",
      "Pembelajaran modular & ramah pemula",
      "Ijazah resmi setara SD/MI",
      "Bimbingan pengembangan karakter",
    ],
    color: "from-sky-500 to-blue-600",
  },
  {
    slug: "paket-b",
    code: "Paket B",
    title: "Paket B",
    equivalent: "Setara SMP/MTs",
    duration: "3 tahun",
    description:
      "Program kesetaraan jenjang menengah pertama untuk warga belajar lulusan SD/Paket A. Cocok bagi siswa putus sekolah maupun yang ingin melanjutkan pendidikan dengan jadwal fleksibel.",
    highlights: [
      "Mata pelajaran lengkap setara SMP",
      "Kelas tatap muka & online",
      "Ijazah resmi setara SMP/MTs",
      "Persiapan lanjut ke SMA/Paket C",
    ],
    color: "from-teal-500 to-emerald-600",
  },
  {
    slug: "paket-c",
    code: "Paket C",
    title: "Paket C",
    equivalent: "Setara SMA/MA",
    duration: "3 tahun",
    description:
      "Program kesetaraan jenjang menengah atas dengan pilihan peminatan. Solusi tepat untuk yang ingin melanjutkan kuliah, melamar kerja, atau berkarier sambil belajar.",
    highlights: [
      "Peminatan IPA & IPS",
      "Pendampingan UTBK & masuk PTN",
      "Ijazah resmi setara SMA/MA",
      "Bisa lanjut kuliah & melamar kerja",
    ],
    color: "from-amber-500 to-yellow-600",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  initial: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rina Maulida",
    role: "Lulusan Paket C, kini Karyawan Pabrik",
    initial: "RM",
    message:
      "Saya sempat berhenti sekolah karena harus membantu orang tua. Di PKBM Mugi Sae saya bisa belajar di sela pekerjaan, dan sekarang saya bekerja sebagai karyawan pabrik dengan ijazah Paket C yang diakui.",
  },
  {
    name: "Iqbal Pratama",
    role: "Karyawan, Lulusan Paket C",
    initial: "IP",
    message:
      "Belajar sambil kerja itu mungkin. Jadwal fleksibel dan guru-guru di PKBM Mugi Sae sangat sabar membimbing. Karier saya naik setelah punya ijazah SMA.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Wali Murid Paket B",
    initial: "SN",
    message:
      "Anak saya jadi lebih percaya diri sejak belajar di PKBM Mugi Sae. Lingkungannya hangat, biayanya terjangkau, dan kualitas pengajarannya tidak kalah dengan sekolah formal.",
  },
  {
    name: "Asep Hidayat",
    role: "Lulusan Paket B, kini Wirausaha",
    initial: "AH",
    message:
      "Akreditasi A bukan sekadar label. Pelajaran kewirausahaan di sini benar-benar membantu saya membuka usaha sendiri di Brebes.",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: "clock" | "wallet" | "users" | "briefcase" | "academic" | "shield" | "globe" | "spark";
};

export const features: Feature[] = [
  {
    title: "Jadwal Fleksibel",
    description:
      "Kelas pagi, siang, sore, hingga online. Cocok untuk pelajar, pekerja, maupun ibu rumah tangga.",
    icon: "clock",
  },
  {
    title: "Biaya Terjangkau",
    description:
      "Pendaftaran ringan dengan skema cicilan. Beasiswa tersedia untuk warga belajar berprestasi & kurang mampu.",
    icon: "wallet",
  },
  {
    title: "Guru Berpengalaman",
    description:
      "Tenaga pengajar bersertifikat dengan pengalaman puluhan tahun di pendidikan formal & nonformal.",
    icon: "users",
  },
  {
    title: "Bisa Sambil Kerja",
    description:
      "Pola pembelajaran modular & blended membuat Anda tetap produktif tanpa mengorbankan pendidikan.",
    icon: "briefcase",
  },
  {
    title: "Akreditasi A",
    description:
      "Ijazah resmi setara SD/SMP/SMA, diakui oleh Kemendikbudristek dan dapat digunakan untuk lanjut studi maupun melamar kerja.",
    icon: "academic",
  },
  {
    title: "Lingkungan Hangat",
    description:
      "Komunitas belajar yang inklusif, mentor yang suportif, dan fasilitas yang nyaman untuk berkembang.",
    icon: "shield",
  },
];

export type Comparison = {
  aspect: string;
  pkbm: string;
  formal: string;
};

export const comparisons: Comparison[] = [
  {
    aspect: "Jadwal Belajar",
    pkbm: "Fleksibel — pagi, siang, sore, atau online",
    formal: "Tetap pagi hari setiap hari kerja",
  },
  {
    aspect: "Biaya Pendidikan",
    pkbm: "Terjangkau, banyak skema beasiswa",
    formal: "Relatif tinggi, terutama swasta",
  },
  {
    aspect: "Usia Peserta",
    pkbm: "Tidak dibatasi usia, terbuka untuk siapa saja",
    formal: "Dibatasi usia per jenjang",
  },
  {
    aspect: "Cocok untuk Pekerja",
    pkbm: "Sangat cocok, bisa belajar sambil bekerja",
    formal: "Sulit dijalani sambil bekerja",
  },
  {
    aspect: "Kurikulum",
    pkbm: "Kurikulum nasional + life skill & kewirausahaan",
    formal: "Kurikulum nasional standar",
  },
  {
    aspect: "Status Ijazah",
    pkbm: "Setara dan diakui resmi negara",
    formal: "Setara dan diakui resmi negara",
  },
];

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "Apakah ijazah PKBM diakui untuk kuliah dan kerja?",
    a: "Ya. Ijazah Paket A, B, dan C dari PKBM Mugi Sae setara dengan ijazah SD, SMP, dan SMA, serta diakui resmi oleh Kementerian Pendidikan untuk melanjutkan kuliah, melamar kerja, hingga mendaftar CPNS.",
  },
  {
    q: "Berapa biaya pendaftaran dan SPP-nya?",
    a: "Biaya kami sangat terjangkau dengan skema cicilan. Tersedia juga beasiswa bagi warga belajar berprestasi & kurang mampu. Hubungi admin via WhatsApp untuk informasi terbaru.",
  },
  {
    q: "Apakah ada batasan usia untuk mendaftar?",
    a: "Tidak ada. Pendidikan kesetaraan terbuka untuk semua usia — mulai dari remaja yang putus sekolah hingga orang dewasa yang ingin menuntaskan pendidikan formalnya.",
  },
  {
    q: "Bagaimana sistem pembelajarannya?",
    a: "Kami menggunakan pendekatan blended learning: tatap muka di kelas, mandiri dengan modul, dan online via platform belajar kami. Anda bisa memilih jadwal yang paling sesuai.",
  },
  {
    q: "Apakah PKBM Mugi Sae sudah terakreditasi?",
    a: "Ya. PKBM Mugi Sae terakreditasi A dengan NPSN P2964100, menjamin kualitas penyelenggaraan pendidikan kesetaraan kami.",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "A", label: "Akreditasi BAN PAUD-PNF" },
  { value: "1.200+", label: "Warga Belajar Aktif" },
  { value: "12+", label: "Tahun Pengalaman" },
  { value: "98%", label: "Tingkat Kelulusan" },
];

export type Value = { title: string; description: string };

export const values: Value[] = [
  {
    title: "Inklusif",
    description:
      "Pendidikan adalah hak semua orang. Kami terbuka untuk siapa saja, tanpa memandang usia, latar belakang, atau pekerjaan.",
  },
  {
    title: "Berkualitas",
    description:
      "Kami menjaga mutu pembelajaran setara sekolah formal melalui kurikulum, asesmen, dan akreditasi A.",
  },
  {
    title: "Adaptif",
    description:
      "Pola belajar fleksibel dan modular memudahkan setiap warga belajar tetap produktif sambil melanjutkan pendidikan.",
  },
  {
    title: "Berkarakter",
    description:
      "Membentuk pribadi yang jujur, mandiri, peduli, dan siap menghadapi tantangan dunia nyata.",
  },
];
