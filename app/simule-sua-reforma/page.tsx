import { ColorSimulator } from "@/components/ColorSimulator";
import { RoomPlanner } from "@/components/RoomPlanner";
import { StyleQuiz } from "@/components/StyleQuiz";

export const metadata = {
  title: "Simule sua reforma"
};

export default function SimulatePage() {
  return (
    <main className="pt-24">
      <section className="section bg-graphite text-white">
        <div className="premium-container">
          <p className="eyebrow text-gold">Ferramentas interativas</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-bold">Simule cores, descubra seu estilo e planeje ambientes</h1>
          <p className="mt-4 max-w-2xl text-white/70">Recursos simples para o cliente visualizar ideias e enviar preferências junto com o pedido de orçamento.</p>
        </div>
      </section>
      <section className="section bg-white"><div className="premium-container"><ColorSimulator /></div></section>
      <section className="section bg-porcelain"><div className="premium-container"><StyleQuiz /></div></section>
      <section className="section bg-white"><div className="premium-container"><RoomPlanner /></div></section>
    </main>
  );
}


