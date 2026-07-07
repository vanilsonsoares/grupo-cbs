import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { blogPosts, comparisons, faqs, heroImage, projects, realWorkMedia, services, stages, whatsappUrl } from "@/lib/data";

const trust = ["Atendimento personalizado", "Orçamento detalhado", "Profissionais especializados", "Acompanhamento de obra", "Garantia dos serviços"];
const differentials = ["Planejamento completo", "Orçamento transparente", "Equipe especializada", "Cumprimento de prazos", "Materiais de qualidade", "Acompanhamento da obra", "Atendimento personalizado", "Garantia dos serviços"];

export default function HomePage() {
  return (
    <main>
      <section id="inicio" className="relative min-h-[92vh] overflow-hidden pt-28 text-white">
        <img src={heroImage} alt="Ambiente moderno reformado com acabamento premium" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-mask absolute inset-0" />
        <div className="premium-container relative flex min-h-[calc(92vh-7rem)] items-center">
          <div className="max-w-3xl py-20">
            <p className="eyebrow text-gold">Construção · reforma · arquitetura</p>
            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">Transformamos espaços em ambientes extraordinários</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/100">
              Projetos completos de construção e reforma, do planejamento à entrega final, com qualidade, transparência e atenção a cada detalhe.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/orcamento" className="rounded-md bg-gold px-6 py-4 font-bold text-graphite shadow-premium">Solicitar orçamento</Link>
              <Link href="/simule-sua-reforma" className="rounded-md border border-white/40 px-6 py-4 font-bold">Simular minha reforma</Link>
              <Link href="/projetos/apartamento-jardins" className="rounded-md bg-white/12 px-6 py-4 font-bold">Conhecer projetos</Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-5">
              {trust.map((item) => <span key={item} className="rounded-md bg-white/12 px-3 py-3 text-center text-xs font-bold backdrop-blur">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="premium-container">
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold text-graphite">Método de obra pensado para reduzir surpresas e elevar o padrão da entrega</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item, index) => (
              <article key={item} className="rounded-lg border border-black/10 bg-porcelain p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-graphite text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-bold text-graphite">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">Processos claros, comunicação objetiva e controle de qualidade em cada etapa.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="section bg-porcelain">
        <div className="premium-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Serviços</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold text-graphite">Soluções completas para imóveis residenciais e comerciais</h2>
            </div>
            <Link href="/orcamento" className="rounded-md bg-graphite px-5 py-3 font-bold text-white">Receba seu orçamento</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`} className="group overflow-hidden rounded-lg bg-white shadow-premium">
                <img src={service.image} alt={service.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="font-bold text-graphite">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">{service.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="premium-container">
          <p className="eyebrow">Antes e depois</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold text-graphite">Compare a transformação com uma galeria interativa</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {comparisons.map((item) => <BeforeAfterSlider key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section id="projetos" className="section bg-graphite text-white">
        <div className="premium-container">
          <p className="eyebrow text-gold">Projetos realizados</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold">Galeria com filtros e páginas detalhadas</h2>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Apartamentos", "Casas", "Clínicas", "Escritórios", "Lojas", "Cozinhas", "Banheiros"].map((filter) => <span key={filter} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/75">{filter}</span>)}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projetos/${project.slug}`} className="group overflow-hidden rounded-lg bg-white/10">
                <img src={project.image} alt={project.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-sm text-gold">{project.category} · {project.area}</p>
                  <h3 className="mt-1 text-xl font-bold">{project.name}</h3>
                  <p className="mt-2 text-sm text-white/60">{project.location} · {project.deadline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      <section className="section bg-white">
        <div className="premium-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Obras reais</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold text-graphite">Fotos reais de serviços executados pela nossa equipe</h2>
              <p className="mt-4 max-w-2xl text-black/60">Registro de etapas e entregas em elétrica, automação, pintura, revestimentos, drywall, iluminação, hidráulica, marcenaria e construção civil.</p>
            </div>
            <Link href="/orcamento" className="rounded-md bg-gold px-5 py-3 font-bold text-graphite">Quero um orçamento</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {realWorkMedia.map((item) => (
              <article key={item.image} className="group overflow-hidden rounded-lg bg-porcelain shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-[.14em] text-copper">{item.category}</p>
                  <h3 className="mt-2 font-bold text-graphite">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-black/10 bg-porcelain p-5 text-sm text-black/65">
            Os vídeos enviados estão em formato MOV e são muito grandes para GitHub/Vercel. Para publicar vídeos no site, envie versões compactadas em MP4 com até 50 MB cada ou hospede no YouTube/Vimeo e eu incorporo aqui.
          </div>
        </div>
      </section>

      <section className="section bg-porcelain">
        <div className="premium-container">
          <p className="eyebrow">Etapas da obra</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold text-graphite">Da primeira conversa à entrega final, tudo com acompanhamento</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, index) => (
              <div key={stage} className="rounded-lg bg-white p-5 shadow-sm">
                <span className="text-3xl font-bold text-gold">{index + 1}</span>
                <h3 className="mt-3 font-bold text-graphite">{stage}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-porcelain">
        <div className="premium-container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Blog e FAQ</p>
            <h2 className="mt-3 text-4xl font-bold text-graphite">Conteúdo para decidir sua obra com mais segurança</h2>
            <div className="mt-6 grid gap-3">
              {blogPosts.slice(0, 4).map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-md bg-white p-4 font-semibold shadow-sm">{post.title}</Link>)}
            </div>
          </div>
          <div id="faq" className="rounded-lg bg-white p-6 shadow-premium">
            {faqs.slice(0, 10).map((faq) => (
              <details key={faq.question} className="border-b py-4">
                <summary className="cursor-pointer font-bold text-graphite">{faq.question}</summary>
                <p className="mt-3 text-sm leading-6 text-black/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-graphite text-white">
        <div className="premium-container rounded-xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="eyebrow text-gold">Comece seu projeto</p>
          <h2 className="mt-3 text-4xl font-bold">Pronto para transformar seu imóvel?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">Conte-nos um pouco sobre seu projeto e receba um atendimento personalizado.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/orcamento" className="rounded-md bg-gold px-6 py-4 font-bold text-graphite">Solicitar orçamento</Link>
            <a href={whatsappUrl("Olá! Quero falar com um especialista sobre uma reforma.")} target="_blank" rel="noreferrer" className="rounded-md border border-white/30 px-6 py-4 font-bold">Falar pelo WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}


