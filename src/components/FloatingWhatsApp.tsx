"use client";

import { useEffect, useState } from "react";
import { buildWaLink } from "@/lib/site";
import Icon from "./Icon";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={buildWaLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Admin PKBM Mugi Sae"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-emerald-500 pl-4 pr-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all duration-500 hover:bg-emerald-600 hover:shadow-2xl ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20 animate-pulse-ring">
        <Icon name="whatsapp" size={18} />
      </span>
      <span className="hidden sm:inline">Chat Admin</span>
    </a>
  );
}
