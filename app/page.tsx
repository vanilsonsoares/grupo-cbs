import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";
import { company, heroImage, realWorkMedia, services, stages, whatsappUrl } from "@/lib/data";

const projectFilters = ["Todos", "Revestimentos", "Iluminação", "Elétrica", "Drywall", "Hidráulica", "Construção civil", "Pintura"];
const mainServices = [
  "Instalações elétricas",
  "Automação residencial e comercial",
  "Pintura residencial e comercial",
  "Pisos e revestimentos",
  "Drywall e forros",
  "Instalações hidráulicas",
  "Iluminação",
  "Gerenciamento de obras"
];

const practicalPoints = [
  "Visita técnica para entender o imóvel e o escopo",
  "Orçamento separado por etapas e serviços",
  "Execução com acompanhamento e comunicação direta",
  "Registro fotográfico do andamento quando necessário"
];

const selectedServices = services.filter((service) => mainServices.includes(service.title));

export default function HomePage() {
  return (
    <main>
      <section id="inicio" className="relative min-h-[88vh] overflow-hidden pt-28 text-white">
        <img src={heroImage} alt="Obra residencial executada pelo Grupo CBS" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/78 to-graphite/20" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-graphite/70 to-transparent" />
        <div className="premium-container relative flex min-h-[calc(88vh-7rem)] items-center">
          <div className="max-w-3xl py-20">
            <p className="eyebrow text-gold">Grupo CBS Construção e Reformas</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Reformas, elétrica, pintura, revestimentos, drywall e gerenciamento de obra</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Atendemos obras residenciais e comerciais com orçamento claro, visita técnica e execução organizada. O foco é resolver o serviço com seriedade, acabamento correto e comunicação direta com o cliente.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/orcamento" className="rounded-md bg-gold px-6 py-4 font-bold text-graphite shadow-premium">Solicitar orçamento</Link>
              <a href={whatsappUrl("Olá! Acessei o site do Grupo CBS e gostaria de falar sobre uma obra ou reforma.")} target="_blank" rel="noreferrer" className="rounded-md border border-white/35 px-6 py-4 font-bold text-white">Falar pelo WhatsApp</a>
              <Link href="#projetos" className="rounded-md bg-white/12 px-6 py-4 font-bold text-white">Ver fotos reais</Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {practicalPoints.map((item) => (
                <span key={item} className="rounded-md border border-white/12 bg-white/10 px-4 py-3 text-sm text-white/82 backdrop-blur">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section bg-white">
        <div className="premium-container">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow">Serviços</p>
              <h2 className="mt-3 text-4xl font-bold text-graphite">O que a CBS executa</h2>
              <p className="mt-4 leading-7 text-black/65">
                A página agora prioriza os serviços reais da empresa. Sem números inventados, sem endereço de obra fictício e sem descrição genérica de portfólio.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {mainServices.map((item) => (
                <div key={item} className="rounded-md border border-black/10 bg-porcelain px-4 py-3 font-semibold text-graphite">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {selectedServices.map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`} className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <img src={service.image} alt={service.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="font-bold text-graphite">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">Avaliação do local, definição do escopo e execução conforme a necessidade da obra.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="section bg-graphite text-white">
        <div className="premium-container">
          <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow text-gold">Fotos reais</p>
              <h2 className="mt-3 text-4xl font-bold">Registros de serviços executados</h2>
            </div>
            <p className="leading-7 text-white/65">
              Esta galeria apresenta registros reais de serviços executados, com identificação objetiva do tipo de trabalho mostrado nas imagens.
            </p>
          </div>
          <ProjectGallery items={realWorkMedia} filters={projectFilters} />
        </div>
      </section>

      <section className="section bg-porcelain">
        <div className="premium-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h2 className="mt-3 text-4xl font-bold text-graphite">Processo simples para pedir orçamento</h2>
            <p className="mt-4 leading-7 text-black/65">
              O objetivo do site é gerar contato qualificado. O cliente informa o tipo de serviço, envia fotos se tiver e a equipe retorna com orientação para visita ou orçamento inicial.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/orcamento" className="rounded-md bg-graphite px-5 py-3 font-bold text-white">Preencher orçamento</Link>
              <a href={whatsappUrl("Olá! Quero enviar fotos e informações para orçamento.")} target="_blank" rel="noreferrer" className="rounded-md border border-black/15 px-5 py-3 font-bold text-graphite">Enviar pelo WhatsApp</a>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {stages.slice(0, 8).map((stage, index) => (
              <div key={stage} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                <span className="text-sm font-bold text-copper">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-bold text-graphite">{stage}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="premium-container grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Contato</p>
            <h2 className="mt-3 text-4xl font-bold text-graphite">Fale com a CBS sobre sua obra</h2>
            <p className="mt-4 max-w-2xl leading-7 text-black/65">
              Informe o serviço desejado, bairro, fotos do local e melhor horário para contato. Com essas informações já é possível orientar o próximo passo.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 bg-porcelain p-6 shadow-premium">
            <p className="text-sm font-semibold text-black/60">Telefone e WhatsApp</p>
            <p className="mt-1 text-2xl font-bold text-graphite">{company.phone}</p>
            <p className="mt-4 text-sm font-semibold text-black/60">Endereço</p>
            <p className="mt-1 font-bold text-graphite">{company.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappUrl("Olá! Vim pelo site e gostaria de solicitar um orçamento.")} target="_blank" rel="noreferrer" className="rounded-md bg-gold px-5 py-3 font-bold text-graphite">Chamar no WhatsApp</a>
              <Link href="/contato" className="rounded-md bg-graphite px-5 py-3 font-bold text-white">Página de contato</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
