"use client";

import { useMemo, useState } from "react";
import { services, whatsappUrl } from "@/lib/data";

const steps = ["Imóvel", "Ambiente", "Serviços", "Acabamento", "Medidas", "Imagens", "Contato", "Resumo"];

export function BudgetWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string>>({
    property: "Apartamento",
    room: "Imóvel completo",
    finish: "Alto padrão",
    area: "80"
  });
  const protocol = useMemo(() => `CBS-${Date.now().toString().slice(-6)}`, [step === 7]);

  function update(key: string, value: string) {
    setData((current) => ({ ...current, [key]: value }));
  }

  const summary = `Protocolo ${protocol}. Imóvel: ${data.property}. Ambiente: ${data.room}. Serviços: ${data.services || "a definir"}. Acabamento: ${data.finish}. Área: ${data.area} m². Cliente: ${data.name || ""}. Cidade: ${data.city || ""}.`;

  return (
    <div className="rounded-lg bg-white p-6 shadow-premium">
      <div className="mb-6 flex flex-wrap gap-2">
        {steps.map((item, index) => (
          <span key={item} className={`rounded-full px-3 py-1 text-xs font-bold ${index <= step ? "bg-gold text-graphite" : "bg-mist text-black/50"}`}>
            {index + 1}. {item}
          </span>
        ))}
      </div>
      {step === 0 && <Choice title="Tipo de imóvel" value={data.property} options={["Apartamento", "Casa", "Escritório", "Clínica", "Loja", "Galpão", "Outro"]} onChange={(v) => update("property", v)} />}
      {step === 1 && <Choice title="Ambiente" value={data.room} options={["Sala", "Cozinha", "Banheiro", "Quarto", "Lavanderia", "Varanda", "Escritório", "Imóvel completo"]} onChange={(v) => update("room", v)} />}
      {step === 2 && (
        <label className="block text-sm font-semibold">
          Serviços desejados
          <textarea className="mt-2 min-h-32 w-full rounded-md border p-3" value={data.services || services.slice(0, 4).map((s) => s.title).join(", ")} onChange={(e) => update("services", e.target.value)} />
        </label>
      )}
      {step === 3 && <Choice title="Padrão de acabamento" value={data.finish} options={["Econômico", "Intermediário", "Alto padrão", "Luxo"]} onChange={(v) => update("finish", v)} />}
      {step === 4 && <TextInput label="Área aproximada (m²)" value={data.area} onChange={(v) => update("area", v)} />}
      {step === 5 && (
        <div className="rounded-md border border-dashed p-8 text-center">
          <p className="font-semibold">Anexe fotos, vídeos curtos, plantas e documentos</p>
          <input className="mt-4" type="file" multiple onChange={(e) => update("files", `${e.target.files?.length || 0} arquivo(s) selecionado(s)`)} />
          <p className="mt-2 text-sm text-black/50">{data.files || "Nenhum arquivo selecionado."}</p>
        </div>
      )}
      {step === 6 && (
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["name", "Nome"],
            ["phone", "Telefone"],
            ["whatsapp", "WhatsApp"],
            ["email", "E-mail"],
            ["city", "Cidade"],
            ["district", "Bairro"],
            ["bestTime", "Melhor horário"],
            ["deadline", "Prazo desejado"]
          ].map(([key, label]) => <TextInput key={key} label={label} value={data[key] || ""} onChange={(v) => update(key, v)} />)}
          <label className="text-sm font-semibold md:col-span-2">Mensagem adicional<textarea className="mt-2 min-h-24 w-full rounded-md border p-3" value={data.message || ""} onChange={(e) => update("message", e.target.value)} /></label>
        </div>
      )}
      {step === 7 && (
        <div className="rounded-lg bg-porcelain p-6">
          <p className="eyebrow">Resumo do pedido</p>
          <h3 className="mt-2 text-2xl font-bold text-graphite">{protocol}</h3>
          <p className="mt-3 text-black/70">{summary}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={whatsappUrl(`Olá! Enviei um pedido de orçamento pelo site. ${summary}`)} target="_blank" rel="noreferrer" className="rounded-md bg-graphite px-5 py-3 font-bold text-white">Atendimento pelo WhatsApp</a>
            <a href="/contato" className="rounded-md bg-gold px-5 py-3 font-bold text-graphite">Agendar visita técnica</a>
          </div>
        </div>
      )}
      <div className="mt-8 flex justify-between">
        <button className="rounded-md border px-5 py-3 font-bold disabled:opacity-40" disabled={step === 0} onClick={() => setStep(step - 1)}>Voltar</button>
        <button className="rounded-md bg-gold px-5 py-3 font-bold text-graphite disabled:opacity-40" disabled={step === 7} onClick={() => setStep(step + 1)}>Continuar</button>
      </div>
    </div>
  );
}

function Choice({ title, options, value, onChange }: { title: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-4 text-xl font-bold text-graphite">{title}</legend>
      <div className="grid gap-3 sm:grid-cols-3">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-md border p-4 font-semibold ${value === option ? "border-gold bg-porcelain" : "border-black/10"}`}>
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function TextInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-sm font-semibold">
      {label}
      <input className="mt-2 w-full rounded-md border p-3" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}


