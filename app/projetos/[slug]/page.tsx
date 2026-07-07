import { notFound } from "next/navigation";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { comparisons, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  const comparison = comparisons[0];

  return (
    <main className="pt-24">
      <section className="bg-graphite py-16 text-white">
        <div className="premium-container grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">{project.category}</p>
            <h1 className="mt-3 text-5xl font-bold">{project.name}</h1>
            <p className="mt-4 text-white/70">{project.location} · {project.area} · {project.deadline}</p>
          </div>
          <img src={project.image} alt={project.name} className="h-80 w-full rounded-lg object-cover shadow-premium" />
        </div>
      </section>
      <section className="section bg-white">
        <div className="premium-container grid gap-10 lg:grid-cols-[1fr_420px]">
          <article className="grid gap-8">
            <Info title="Serviços realizados" text={project.services.join(", ")} />
            <Info title="Desafio encontrado" text={project.challenge} />
            <Info title="Solução adotada" text={project.solution} />
            <Info title="Depoimento do cliente" text={project.testimonial} />
            <BeforeAfterSlider {...comparison} />
          </article>
          <aside className="rounded-lg bg-porcelain p-6 shadow-premium">
            <h2 className="text-2xl font-bold text-graphite">Ficha do projeto</h2>
            {[
              ["Tipo de imóvel", project.category],
              ["Localização", project.location],
              ["Área", project.area],
              ["Prazo", project.deadline],
              ["Serviços", project.services.join(", ")]
            ].map(([label, value]) => <p key={label} className="border-b py-4"><strong>{label}:</strong> {value}</p>)}
            <a href="/orcamento" className="mt-6 inline-flex w-full justify-center rounded-md bg-gold px-5 py-3 font-bold text-graphite">Quero um projeto assim</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <section><h2 className="text-3xl font-bold text-graphite">{title}</h2><p className="mt-3 leading-8 text-black/70">{text}</p></section>;
}


