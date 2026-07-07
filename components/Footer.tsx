import Link from "next/link";
import { company, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div className="premium-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-16 w-36 items-center justify-center rounded-md bg-white px-3 shadow-sm">
              <img src={company.logo} alt={company.name} className="max-h-14 w-full object-contain" />
            </span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/70">
            Construção, reformas, arquitetura e gerenciamento de obras com padrão premium, transparência e acompanhamento técnico.
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-gold">Serviços</h2>
          <div className="grid gap-2 text-sm text-white/70">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`} className="hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-gold">Plataforma</h2>
          <div className="grid gap-2 text-sm text-white/70">
            <Link href="/simule-sua-reforma">Simuladores</Link>
            <Link href="/calculadoras">Calculadoras</Link>
            <Link href="/area-cliente">Área do cliente</Link>
            <Link href="/admin">Painel administrativo</Link>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos de uso</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-semibold text-gold">Contato</h2>
          <p className="text-sm text-white/70">{company.phone}</p>
          <p className="text-sm text-white/70">{company.email}</p>
          <p className="mt-2 text-sm text-white/70">{company.address}</p>
          <p className="mt-2 text-sm text-white/70">{company.hours}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 {company.name}. Conteúdo demonstrativo editável pelo painel administrativo.
      </div>
    </footer>
  );
}

