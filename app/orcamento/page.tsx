import { BudgetWizard } from "@/components/BudgetWizard";

export const metadata = {
  title: "Solicitar orçamento"
};

export default function BudgetPage() {
  return (
    <main className="pt-24">
      <section className="section bg-graphite text-white">
        <div className="premium-container">
          <p className="eyebrow text-gold">Montador de orçamento</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-bold">Conte-nos sobre seu imóvel e receba atendimento personalizado</h1>
        </div>
      </section>
      <section className="section bg-porcelain"><div className="premium-container"><BudgetWizard /></div></section>
    </main>
  );
}


