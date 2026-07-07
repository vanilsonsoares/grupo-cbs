"use client";

import { useState } from "react";

const furniture = ["Sofá", "Mesa", "Cama", "Armário", "Bancada", "Tomada", "Luminária"];

export function RoomPlanner() {
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(4);
  const [items, setItems] = useState<string[]>(["Sofá", "Mesa", "Luminária"]);
  const [floor, setFloor] = useState("#d9c8ad");
  const [wall, setWall] = useState("#f4f1ea");

  return (
    <section className="grid gap-8 lg:grid-cols-[360px_1fr]">
      <div className="rounded-lg bg-white p-6 shadow-premium">
        <p className="eyebrow">Planejador de ambientes</p>
        <h2 className="mt-2 text-3xl font-bold text-graphite">Monte uma ideia inicial do cômodo</h2>
        <div className="mt-6 grid gap-4">
          <label className="text-sm font-semibold">Tipo de cômodo<select className="mt-2 w-full rounded-md border p-3"><option>Sala</option><option>Cozinha</option><option>Quarto</option><option>Escritório</option></select></label>
          <label className="text-sm font-semibold">Largura: {width} m<input className="mt-2 w-full accent-gold" type="range" min="2" max="10" value={width} onChange={(e) => setWidth(Number(e.target.value))} /></label>
          <label className="text-sm font-semibold">Comprimento: {length} m<input className="mt-2 w-full accent-gold" type="range" min="2" max="12" value={length} onChange={(e) => setLength(Number(e.target.value))} /></label>
          <label className="text-sm font-semibold">Piso<input className="mt-2 h-12 w-full rounded-md border p-1" type="color" value={floor} onChange={(e) => setFloor(e.target.value)} /></label>
          <label className="text-sm font-semibold">Paredes<input className="mt-2 h-12 w-full rounded-md border p-1" type="color" value={wall} onChange={(e) => setWall(e.target.value)} /></label>
          <div>
            <p className="mb-2 text-sm font-semibold">Adicionar elementos</p>
            <div className="flex flex-wrap gap-2">
              {furniture.map((item) => <button key={item} className="rounded-md border px-3 py-2 text-sm" onClick={() => setItems([...items, item])}>{item}</button>)}
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-premium">
          <h3 className="mb-4 text-xl font-bold text-graphite">Visualização 2D</h3>
          <div className="relative mx-auto border-4 border-graphite/70" style={{ width: "100%", maxWidth: 520, aspectRatio: `${width}/${length}`, background: floor }}>
            <div className="absolute inset-x-[10%] top-0 h-3 rounded-b bg-white" title="Janela" />
            <div className="absolute bottom-0 right-[15%] h-12 w-4 rounded-t bg-graphite" title="Porta" />
            {items.map((item, index) => (
              <span key={`${item}-${index}`} className="absolute grid h-14 w-20 place-items-center rounded-md bg-white/102 text-xs font-bold shadow" style={{ left: `${12 + (index * 17) % 68}%`, top: `${16 + (index * 23) % 62}%` }}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-graphite p-6 text-white shadow-premium">
          <h3 className="mb-4 text-xl font-bold">Prévia 3D simples</h3>
          <div className="relative h-80 overflow-hidden rounded-lg" style={{ background: wall }}>
            <div className="absolute inset-x-0 bottom-0 h-36 origin-bottom skew-x-[-18deg]" style={{ background: floor }} />
            <div className="absolute bottom-16 left-12 h-20 w-36 rounded bg-white/100 shadow-xl" />
            <div className="absolute bottom-20 right-12 h-28 w-20 rounded bg-graphite/70" />
            <div className="absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 rounded-full bg-gold/70 blur-sm" />
          </div>
          <p className="mt-4 text-sm text-white/70">Projeto salvo localmente e pronto para anexar ao pedido de orçamento.</p>
        </div>
      </div>
    </section>
  );
}


