"use client";

import { useMemo, useState } from "react";

const questions: Array<[string, string[]]> = [
  ["Qual sala você prefere?", ["Moderna", "Clássica", "Natural", "Industrial"]],
  ["Qual combinação de cores combina mais com você?", ["Neutra", "Escura", "Terrosa", "Colorida"]],
  ["Você prefere ambientes claros ou escuros?", ["Claros", "Escuros", "Equilibrados", "Aconchegantes"]],
  ["Gosta mais de qual material?", ["Mármore", "Madeira", "Cimento queimado", "Pedra natural"]],
  ["Qual iluminação agrada mais?", ["Indireta", "Decorativa", "Técnica", "Natural"]]
];

const results = ["Moderno", "Luxuoso", "Natural", "Industrial", "Minimalista", "Contemporâneo"];

export function StyleQuiz() {
  const [answers, setAnswers] = useState<string[]>([]);
  const result = useMemo(() => results[answers.join("").length % results.length], [answers]);
  const done = answers.length === questions.length;

  return (
    <div className="rounded-lg bg-white p-6 shadow-premium">
      <p className="eyebrow">Questionário de estilo</p>
      <h2 className="mt-2 text-3xl font-bold text-graphite">Descubra o estilo ideal para o seu projeto</h2>
      <div className="mt-6 grid gap-5">
        {questions.map(([question, options], index) => (
          <fieldset key={question} className="rounded-md border border-black/10 p-4">
            <legend className="px-2 font-semibold">{index + 1}. {question}</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-4">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`rounded-md border p-4 text-sm font-semibold ${answers[index] === option ? "border-gold bg-porcelain" : "border-black/10 bg-white"}`}
                  onClick={() => {
                    const next = [...answers];
                    next[index] = option;
                    setAnswers(next);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      {done ? (
        <div className="mt-6 rounded-lg bg-graphite p-6 text-white">
          <p className="text-gold">Estilo predominante</p>
          <h3 className="text-3xl font-bold">{result}</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/100 md:grid-cols-3">
            <p>Paleta recomendada: neutros sofisticados, grafite e cobre.</p>
            <p>Materiais: madeira natural, pedra, metais escovados e pintura premium.</p>
            <p>Iluminação: cenas indiretas, pontos focais e temperatura neutra.</p>
          </div>
          <a href={`/orcamento?estilo=${encodeURIComponent(result)}`} className="mt-5 inline-flex rounded-md bg-gold px-5 py-3 font-bold text-graphite">
            Solicitar orçamento com resultado
          </a>
        </div>
      ) : null}
    </div>
  );
}



