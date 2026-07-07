import { stages } from "@/lib/data";

export const metadata = {
  title: "Sobre nós"
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="section bg-white">
        <div className="premium-container grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Sobre a empresa</p>
            <h1 className="mt-3 text-5xl font-bold text-graphite">Qualidade técnica, transparência e compromisso com alto padrão</h1>
            <p className="mt-5 leading-8 text-black/70">O Grupo CBS Construção e Reformas nasceu para unir engenharia, arquitetura e gestão de obras em uma experiência clara para o cliente. Nossa missão é transformar imóveis com planejamento, segurança, prazos realistas e acabamento cuidadoso.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85" alt="Equipe técnica em obra" className="h-96 w-full rounded-lg object-cover shadow-premium" />
        </div>
      </section>
      <section className="section bg-porcelain">
        <div className="premium-container">
          <div className="grid gap-5 md:grid-cols-4">
            {["Missão: entregar obras confiáveis", "Visão: ser referência em reforma premium", "Valores: transparência e segurança", "Regiões: São Paulo e Grande SP"].map((item) => <div key={item} className="rounded-lg bg-white p-6 font-semibold shadow-sm">{item}</div>)}
          </div>
          <h2 className="mt-12 text-3xl font-bold text-graphite">Linha do tempo</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {stages.slice(0, 5).map((item, index) => <div key={item} className="rounded-md bg-white p-4"><strong className="text-gold">20{18 + index}</strong><p>{item}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}


