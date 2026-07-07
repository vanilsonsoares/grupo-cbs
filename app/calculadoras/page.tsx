import { CalculatorSuite } from "@/components/CalculatorSuite";

export const metadata = {
  title: "Calculadoras de reforma"
};

export default function CalculatorsPage() {
  return (
    <main className="pt-24">
      <section className="section bg-graphite text-white">
        <div className="premium-container">
          <p className="eyebrow text-gold">Calculadoras</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-bold">Estime custos, materiais e iluminação</h1>
          <p className="mt-4 max-w-2xl text-white/70">Resultados indicativos para orientar a conversa inicial. A proposta final depende de avaliação técnica.</p>
        </div>
      </section>
      <section className="section bg-porcelain"><div className="premium-container"><CalculatorSuite /></div></section>
    </main>
  );
}


