import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <main className="pt-24">
      <section className="relative min-h-[58vh] overflow-hidden text-white">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-mask absolute inset-0" />
        <div className="premium-container relative flex min-h-[58vh] items-end py-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Serviço especializado</p>
            <h1 className="mt-3 text-5xl font-bold">{service.title}</h1>
            <p className="mt-4 text-lg leading-8 text-white/100">{service.summary}</p>
            <Link href="/orcamento" className="mt-6 inline-flex rounded-md bg-gold px-6 py-4 font-bold text-graphite">Solicitar orçamento</Link>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="premium-container grid gap-10 lg:grid-cols-[1fr_360px]">
          <article>
            <h2 className="text-3xl font-bold text-graphite">Descrição completa</h2>
            <p className="mt-4 leading-8 text-black/70">
              Atuamos com diagnóstico técnico, planejamento de escopo, compatibilização de projetos, execução supervisionada e controle de qualidade. O objetivo é entregar uma obra organizada, transparente e com acabamento compatível com o padrão definido pelo cliente.
            </p>
            <h2 className="mt-10 text-3xl font-bold text-graphite">Benefícios</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {service.benefits.map((item) => <p key={item} className="rounded-md bg-porcelain p-4 font-semibold">{item}</p>)}
            </div>
            <h2 className="mt-10 text-3xl font-bold text-graphite">Etapas</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {service.steps.map((step, index) => <p key={step} className="rounded-md border p-4"><strong>{index + 1}.</strong> {step}</p>)}
            </div>
            <h2 className="mt-10 text-3xl font-bold text-graphite">Projetos relacionados</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <Link key={project.slug} href={`/projetos/${project.slug}`} className="overflow-hidden rounded-lg bg-porcelain">
                  <img src={project.image} alt={project.name} className="h-36 w-full object-cover" />
                  <p className="p-4 font-bold">{project.name}</p>
                </Link>
              ))}
            </div>
          </article>
          <aside className="h-fit rounded-lg bg-graphite p-6 text-white shadow-premium">
            <h2 className="text-2xl font-bold">Resumo técnico</h2>
            <p className="mt-4 text-white/70">Prazo médio: {service.averageDeadline}</p>
            <p className="mt-2 text-white/70">Inclui orçamento detalhado, cronograma, acompanhamento e garantia.</p>
            <details className="mt-6 border-t border-white/20 pt-4">
              <summary className="cursor-pointer font-bold text-gold">Perguntas frequentes</summary>
              <p className="mt-3 text-sm leading-6 text-white/70">O prazo e o custo variam conforme metragem, padrão de acabamento, estado atual do imóvel e disponibilidade de materiais.</p>
            </details>
            <Link href="/orcamento" className="mt-6 inline-flex w-full justify-center rounded-md bg-gold px-5 py-3 font-bold text-graphite">Receber proposta</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}


