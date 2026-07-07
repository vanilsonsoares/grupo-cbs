"use client";

import { clientTimeline } from "@/lib/data";

export function ClientArea() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="rounded-lg bg-white p-6 shadow-premium">
        <p className="eyebrow">Área protegida</p>
        <h1 className="mt-2 text-4xl font-bold text-graphite">Projeto Apartamento Jardins</h1>
        <p className="mt-3 text-black/70">Etapa atual: infraestrutura e instalações. Login demonstrativo para cliente acompanhar obra, aprovar documentos e conversar com a equipe.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Orçamento aprovado", "Contrato assinado", "Cronograma em dia"].map((item) => <div key={item} className="rounded-md bg-porcelain p-4 font-semibold">{item}</div>)}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-graphite">Linha do tempo da obra</h2>
          <div className="mt-5 grid gap-3">
            {clientTimeline.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-md border p-4">
                <span className={`grid h-9 w-9 place-items-center rounded-full font-bold ${index < 6 ? "bg-gold text-graphite" : "bg-mist text-black/50"}`}>{index + 1}</span>
                <span className="font-semibold">{item}</span>
                <span className="ml-auto text-sm text-black/50">{index < 6 ? "Concluído" : index === 6 ? "Em andamento" : "Pendente"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <aside className="grid gap-6">
        <Panel title="Documentos" items={["Contrato.pdf", "Planta baixa.pdf", "Memorial de acabamentos.pdf"]} />
        <Panel title="Diário de obra" items={["Infraestrutura elétrica finalizada", "Recebimento de revestimentos", "Próxima atividade: fechamento de drywall"]} />
        <Panel title="Pendências" items={["Aprovar torneira gourmet", "Escolher temperatura da iluminação"]} />
      </aside>
    </section>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-premium">
      <h2 className="mb-3 text-xl font-bold text-graphite">{title}</h2>
      <div className="grid gap-2">
        {items.map((item) => <p key={item} className="rounded-md bg-porcelain p-3 text-sm">{item}</p>)}
      </div>
    </div>
  );
}


