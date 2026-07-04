"use client";

import Link from "next/link";
import { Menu, Search, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Container } from "./Container";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Tendencias", href: "/tendencias" },
  { label: "Blog", href: "/blog" },
  { label: "Categorias", href: "/categorias" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120f0c]/88 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link aria-label="Zona Viral inicio" className="flex items-center gap-3" href="/">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-red-700 via-orange-500 to-amber-300 font-black text-stone-950 shadow-glow">
            ZV
          </span>
          <span className="font-display text-xl font-black tracking-[-0.03em] text-stone-50">
            Zona Viral
          </span>
        </Link>

        <nav aria-label="Menu principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-300 transition hover:text-orange-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            aria-label="Buscar en el blog"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-stone-100 transition hover:border-orange-300/40 hover:text-orange-300"
            href="/blog"
          >
            <Search aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-700 via-orange-500 to-amber-300 px-5 py-3 text-sm font-extrabold text-stone-950 shadow-glow transition hover:scale-[1.02]"
            href="/tendencias"
          >
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Ver tendencias
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-stone-100 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-[#120f0c]/95 lg:hidden">
          <Container className="grid gap-2 py-4">
            {navigation.map((item) => (
              <Link
                className="rounded-2xl px-4 py-3 text-base font-semibold text-stone-100 transition hover:bg-white/10"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-700 via-orange-500 to-amber-300 px-5 py-3 font-extrabold text-stone-950"
              href="/tendencias"
              onClick={() => setOpen(false)}
            >
              <Sparkles aria-hidden="true" className="h-4 w-4" />
              Ver tendencias
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
