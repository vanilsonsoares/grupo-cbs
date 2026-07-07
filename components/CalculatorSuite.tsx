"use client";

import { useMemo, useState } from "react";
import { finishStyles, whatsappUrl } from "@/lib/data";

function numberValue(value: FormDataEntryValue | null, fallback = 0) {
  return Number(value || fallback);
}

export function CalculatorSuite() {
  const [active, setActive] = useState("reforma");
  const [result, setResult] = useState<Record<string, string | number>>({});

  function handleSubmit(formData: FormData) {
    if (active === "reforma") {
      const area = numberValue(formData.get("area"), 50);
      const finish = String(formData.get("finish"));
      const standard = finishStyles.find((item) => item.name === finish) || finishStyles[1];
      const min = area * standard.price * 0.82;
      const max = area * standard.price * 1.18;
      setResult({
        title: "Estimativa de reforma",
        investimento: `R$ ${min.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} a R$ ${max.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}`,
        prazo: `${Math.max(15, Math.round(area / 4))} a ${Math.max(30, Math.round(area / 2.3))} dias`,
        observacao: "Valor indicativo. A proposta final depende de visita técnica, escopo e materiais."
      });
    }
    if (active === "tinta") {
      const width = numberValue(formData.get("width"), 4);
      const height = numberValue(formData.get("height"), 2.8);
      const walls = numberValue(formData.get("walls"), 4);
      const doors = numberValue(formData.get("doors"), 1) * 1.68;
      const windows = numberValue(formData.get("windows"), 2) * 1.2;
      const coats = numberValue(formData.get("coats"), 2);
      const yieldPaint = numberValue(formData.get("yield"), 10);
      const total = width * height * walls;
      const paintArea = Math.max(0, total - doors - windows) * coats;
      const liters = paintArea / yieldPaint;
      setResult({
        title: "Cálculo de tinta",
        area: `${paintArea.toFixed(1)} m² a pintar`,
        litros: `${liters.toFixed(1)} litros`,
        latas: `${Math.ceil(liters / 18)} lata(s) de 18L ou ${Math.ceil(liters / 3.6)} galão(ões) de 3,6L`,
        materiais: "Massa corrida, selador, fita, lixas, rolos, pincéis e bandeja."
      });
    }
    if (active === "pisos") {
      const length = numberValue(formData.get("length"), 5);
      const width = numberValue(formData.get("width"), 4);
      const piece = numberValue(formData.get("piece"), 0.36);
      const loss = numberValue(formData.get("loss"), 12);
      const area = length * width;
      const finalArea = area * (1 + loss / 100);
      setResult({
        title: "Cálculo de pisos e revestimentos",
        area: `${area.toFixed(2)} m²`,
        pecas: `${Math.ceil(finalArea / piece)} peças`,
        rodape: `${Math.ceil((length + width) * 2)} metros lineares`,
        materiais: "Argamassa e rejunte dimensionados conforme peça, base e assentamento."
      });
    }
    if (active === "drywall") {
      const area = numberValue(formData.get("area"), 20);
      setResult({
        title: "Cálculo de drywall",
        placas: `${Math.ceil(area / 2.88)} placas`,
        perfis: `${Math.ceil(area * 0.9)} metros de perfis/guias`,
        insumos: `${Math.ceil(area * 18)} parafusos, fita, massa e tratamento de juntas`,
        extra: formData.get("acoustic") ? "Com isolamento acústico opcional." : "Sem isolamento acústico."
      });
    }
    if (active === "iluminacao") {
      const area = numberValue(formData.get("area"), 18);
      const intensity = numberValue(formData.get("intensity"), 300);
      const lumens = area * intensity;
      setResult({
        title: "Cálculo de iluminação",
        lumens: `${lumens.toLocaleString("pt-BR")} lúmens aproximados`,
        luminarias: `${Math.ceil(lumens / 900)} luminárias de 900 lm`,
        temperatura: "Luz quente para aconchego, neutra para uso geral e fria para tarefas técnicas.",
        sugestao: "Combine iluminação principal, indireta e pontos decorativos."
      });
    }
  }

  const resultText = useMemo(() => Object.entries(result).map(([key, value]) => `${key}: ${value}`).join(" | "), [result]);

  return (
    <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-lg bg-graphite p-4 text-white shadow-premium">
        {[
          ["reforma", "Reforma"],
          ["tinta", "Tinta"],
          ["pisos", "Pisos"],
          ["drywall", "Drywall"],
          ["iluminacao", "Iluminação"]
        ].map(([id, label]) => (
          <button key={id} className={`mb-2 w-full rounded-md px-4 py-3 text-left font-semibold ${active === id ? "bg-gold text-graphite" : "bg-white/10 text-white/100"}`} onClick={() => setActive(id)}>
            {label}
          </button>
        ))}
      </aside>
      <div className="rounded-lg bg-white p-6 shadow-premium">
        <form onSubmit={(event) => { event.preventDefault(); handleSubmit(new FormData(event.currentTarget)); }} className="grid gap-4 md:grid-cols-2">
          {active === "reforma" && (
            <>
              <Field name="property" label="Tipo de imóvel" options={["Apartamento", "Casa", "Escritório", "Clínica", "Loja"]} />
              <Field name="reform" label="Tipo de reforma" options={["Reforma completa", "Reforma parcial", "Cozinha", "Banheiro"]} />
              <Input name="area" label="Área aproximada (m²)" defaultValue="80" />
              <Field name="finish" label="Padrão de acabamento" options={finishStyles.map((item) => item.name)} />
            </>
          )}
          {active === "tinta" && (
            <>
              <Input name="width" label="Largura da parede (m)" defaultValue="4" />
              <Input name="height" label="Altura (m)" defaultValue="2.8" />
              <Input name="walls" label="Quantidade de paredes" defaultValue="4" />
              <Input name="doors" label="Portas" defaultValue="1" />
              <Input name="windows" label="Janelas" defaultValue="2" />
              <Input name="coats" label="Demãos" defaultValue="2" />
              <Input name="yield" label="Rendimento da tinta (m²/L)" defaultValue="10" />
            </>
          )}
          {active === "pisos" && (
            <>
              <Input name="length" label="Comprimento (m)" defaultValue="5" />
              <Input name="width" label="Largura (m)" defaultValue="4" />
              <Input name="piece" label="Área por peça (m²)" defaultValue="0.36" />
              <Input name="loss" label="Perda (%)" defaultValue="12" />
              <Field name="layout" label="Assentamento" options={["Reto", "Diagonal", "Espinha de peixe"]} />
            </>
          )}
          {active === "drywall" && (
            <>
              <Input name="area" label="Área da parede/forro (m²)" defaultValue="20" />
              <Field name="type" label="Tipo" options={["Parede simples", "Parede dupla", "Forro", "Resistente Ã  umidade", "Resistente ao fogo"]} />
              <label className="flex items-center gap-2 rounded-md border p-3 md:col-span-2"><input type="checkbox" name="acoustic" /> Isolamento acústico opcional</label>
            </>
          )}
          {active === "iluminacao" && (
            <>
              <Field name="room" label="Ambiente" options={["Sala", "Quarto", "Cozinha", "Escritório", "Loja"]} />
              <Input name="area" label="Área (m²)" defaultValue="18" />
              <Input name="height" label="Altura do teto (m)" defaultValue="2.7" />
              <Input name="intensity" label="Intensidade desejada (lux)" defaultValue="300" />
            </>
          )}
         <button className="rounded-md bg-gold px-5 py-3 font-bold text-graphite md:col-span-2">Calcular</button>
        </form>
        {Object.keys(result).length ? (
          <div className="mt-6 rounded-lg bg-porcelain p-6">
            <h3 className="text-2xl font-bold text-graphite">{result.title}</h3>
            <div className="mt-3 grid gap-2 text-sm text-black/70">
              {Object.entries(result).filter(([key]) => key !== "title").map(([key, value]) => (
                <p key={key}><strong className="capitalize">{key}:</strong> {value}</p>
              ))}
            </div>
            <a className="mt-5 inline-flex rounded-md bg-graphite px-5 py-3 font-bold text-white" target="_blank" rel="noreferrer" href={whatsappUrl(`Olá! Fiz uma simulação no site do Grupo CBS. ${resultText}`)}>
              Enviar simulação pelo WhatsApp
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Input({ name, label, defaultValue }: { name: string; label: string; defaultValue: string }) {
  return (
    <label className="text-sm font-semibold">
      {label}
      <input className="mt-2 w-full rounded-md border border-black/20 p-3" name={name} type="number" step="0.01" defaultValue={defaultValue} />
    </label>
  );
}

function Field({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="text-sm font-semibold">
      {label}
      <select className="mt-2 w-full rounded-md border border-black/20 p-3" name={name}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}




