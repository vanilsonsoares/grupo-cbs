"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/data";

const links = [
  ["Início", "/"],
  ["Sobre nós", "/sobre"],
  ["Serviços", "/servicos/reforma-de-apartamentos"],
  ["Fotos reais", "/#projetos"],
  ["Simule sua reforma", "/simule-sua-reforma"],
  ["Calculadoras", "/calculadoras"],
  ["Blog", "/blog/como-planejar-uma-reforma-sem-estourar-o-orcamento"],
  ["FAQ", "/#faq"],
  ["Área do cliente", "/area-cliente"]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-graphite/90 text-white shadow-lg backdrop-blur-xl">
      <nav className="premium-container flex min-h-[82px] items-center justify-between gap-4" aria-label="Menu principal">
        <Link href="/" className="flex items-center gap-3 focus-ring" aria-label="Página inicial">
          <span className="flex h-14 w-24 items-center justify-center rounded-md bg-white px-3 shadow-sm md:w-32">
            <img src={company.logo} alt={company.name} className="max-h-11 w-full object-contain" />
          </span>
          <span className="hidden max-w-[190px] text-sm font-semibold leading-tight xl:block">{company.name}</span>
        </Link>
        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-2 text-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/orcamento"
          className="hidden rounded-md bg-gold px-5 py-3 text-sm font-bold text-graphite shadow-premium transition hover:bg-white lg:inline-flex"
        >
          Solicite seu orçamento
        </Link>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-graphite px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="rounded-md px-3 py-3 text-white/80 hover:bg-white/10" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/orcamento" className="rounded-md bg-gold px-4 py-3 text-center font-bold text-graphite" onClick={() => setOpen(false)}>
              Solicite seu orçamento
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
