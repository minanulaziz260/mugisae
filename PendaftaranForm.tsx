"use client";

import { useState } from "react";
import { buildWaLink } from "@/lib/site";
import Icon from "./Icon";

const jenjangOptions = [
  { value: "Paket A", label: "Paket A — Setara SD" },
  { value: "Paket B", label: "Paket B — Setara SMP" },
  { value: "Paket C", label: "Paket C — Setara SMA" },
];

export default function PendaftaranForm() {
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    nomor: "",
    jenjang: "Paket C",
    catatan: "",
  });
  const [touched, setTouched] = useState(false);

  const valid =
    form.nama.trim().length >= 3 &&
    form.umur.trim().length >= 1 &&
    form.nomor.trim().length >= 8;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const lines = [
      `Halo Admin PKBM Mugi Sae, saya ingin mendaftar program kesetaraan.`,
      ``,
      `Nama Lengkap: ${form.nama}`,
      `Umur: ${form.umur}`,
      `Nomor HP: ${form.nomor}`,
      `Jenjang: ${form.jenjang}`,
      ...(form.catatan ? [`Catatan: ${form.catatan}`] : []),
      ``,
      `Mohon informasi lebih lanjut. Terima kasih.`,
    ];
    const message = lines.join("\n");
    const url = buildWaLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nama Lengkap" required>
          <input
            type="text"
            name="nama"
            placeholder="Nama lengkap sesuai KTP/KK"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800"
            required
            minLength={3}
          />
          {touched && form.nama.trim().length < 3 && (
            <p className="mt-1 text-xs text-red-500">Nama minimal 3 karakter.</p>
          )}
        </Field>

        <Field label="Umur" required>
          <input
            type="number"
            inputMode="numeric"
            min={6}
            max={99}
            name="umur"
            placeholder="contoh: 22"
            value={form.umur}
            onChange={(e) => setForm({ ...form, umur: e.target.value })}
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800"
            required
          />
          {touched && form.umur.trim().length < 1 && (
            <p className="mt-1 text-xs text-red-500">Mohon isi umur Anda.</p>
          )}
        </Field>

        <Field label="Nomor HP / WhatsApp" required>
          <input
            type="tel"
            inputMode="numeric"
            name="nomor"
            placeholder="contoh: 0812xxxxxxxx"
            value={form.nomor}
            onChange={(e) =>
              setForm({ ...form, nomor: e.target.value.replace(/[^0-9+\s-]/g, "") })
            }
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800"
            required
            minLength={8}
          />
          {touched && form.nomor.trim().length < 8 && (
            <p className="mt-1 text-xs text-red-500">
              Nomor HP minimal 8 digit.
            </p>
          )}
        </Field>

        <Field label="Pilih Jenjang" required>
          <div className="relative">
            <select
              name="jenjang"
              value={form.jenjang}
              onChange={(e) => setForm({ ...form, jenjang: e.target.value })}
              className="w-full appearance-none rounded-xl border border-border bg-bg px-4 py-3 pr-10 text-sm text-fg outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800"
            >
              {jenjangOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
              <Icon name="chevron-down" size={16} />
            </span>
          </div>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Catatan / Pertanyaan (opsional)">
            <textarea
              name="catatan"
              rows={3}
              placeholder="Contoh: Saya ingin tahu jadwal kelas online untuk Paket C."
              value={form.catatan}
              onChange={(e) => setForm({ ...form, catatan: e.target.value })}
              className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800"
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-stretch justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
        <p className="text-xs text-muted">
          Dengan mengirim, Anda akan diarahkan ke WhatsApp admin kami untuk
          menyelesaikan proses pendaftaran.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02] hover:shadow-xl disabled:opacity-60"
        >
          <Icon name="whatsapp" size={16} />
          Kirim Pendaftaran via WhatsApp
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}
