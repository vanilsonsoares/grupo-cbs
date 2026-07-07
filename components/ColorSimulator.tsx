"use client";

import { useMemo, useState } from "react";
import { colorCatalog, palettes, whatsappUrl } from "@/lib/data";

const rooms = [
  "Sala contemporânea",
  "Quarto aconchegante",
  "Cozinha clean",
  "Escritório sofisticado",
  "Fachada moderna"
];

export function ColorSimulator() {
  const [color, setColor] = useState(colorCatalog[0]);
  const [finish, setFinish] = useState("Fosco");
  const [light, setLight] = useState(70);
  const [period, setPeriod] = useState("Dia");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [room, setRoom] = useState(rooms[0]);
  const overlay = period === "Noite" ? "rgba(13,42,69,.45)" : "rgba(255,255,255,.08)";

  const combo = useMemo(() => palettes.find((palette) => palette.includes(color.hex)) || palettes[0], [color.hex]);

  function surprise() {
    const random = colorCatalog[Math.floor(Math.random() * colorCatalog.length)];
    setColor(random);
    setFinish(["Fosco", "Acetinado", "Semibrilho"][Math.floor(Math.random() * 3)]);
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <div className="overflow-hidden rounded-lg bg-white shadow-premium">
        <div className="relative aspect-[16/11] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=85)" }}>
          <div className="absolute inset-y-[14%] left-[6%] right-[46%] rounded-md mix-blend-multiply" style={{ backgroundColor: color.hex, opacity: light / 100 }} />
          <div className="absolute inset-0" style={{ background: overlay }} />
          <div className="absolute bottom-5 left-5 rounded-md bg-white/90 px-4 py-3 shadow">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-copper">{room}</p>
            <p className="font-semibold text-graphite">{color.name} · {finish}</p>
          </div>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-3">
          <label className="text-sm font-semibold">
            Ambiente
            <select className="mt-2 w-full rounded-md border p-3" value={room} onChange={(e) => setRoom(e.target.value)}>
              {rooms.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold">
            Acabamento
            <select className="mt-2 w-full rounded-md border p-3" value={finish} onChange={(e) => setFinish(e.target.value)}>
              <option>Fosco</option>
              <option>Acetinado</option>
              <option>Semibrilho</option>
            </select>
          </label>
          <label className="text-sm font-semibold">
            Visualização
            <select className="mt-2 w-full rounded-md border p-3" value={period} onChange={(e) => setPeriod(e.target.value)}>
              <option>Dia</option>
              <option>Noite</option>
            </select>
          </label>
        </div>
        <div className="px-5 pb-5">
          <label className="text-sm font-semibold">Intensidade da iluminação: {light}%</label>
          <input className="mt-2 w-full accent-gold" type="range" min="35" max="100" value={light} onChange={(e) => setLight(Number(e.target.value))} />
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-premium">
        <p className="eyebrow">Simulador de cores</p>
        <h2 className="mt-2 text-3xl font-bold text-graphite">Escolha cores, acabamentos e combinações</h2>
        <div className="mt-6 grid max-h-[350px] gap-3 overflow-auto pr-2 sm:grid-cols-2">
          {colorCatalog.map((item) => (
            <button
              key={item.name}
              type="button"
              className={`rounded-md border p-3 text-left transition hover:border-gold ${item.name === color.name ? "border-gold bg-porcelain" : "border-black/10"}`}
              onClick={() => setColor(item)}
            >
              <span className="mb-2 block h-9 rounded" style={{ backgroundColor: item.hex }} />
              <strong className="text-sm">{item.name}</strong>
              <span className="block text-xs text-black/50">{item.hex} · RGB {item.rgb}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-md bg-porcelain p-4 text-sm">
          <strong>{color.family}</strong>
          <p className="mt-1 text-black/70">{color.feeling}. Indicado para {color.recommended}.</p>
          <div className="mt-3 flex gap-2">
            {combo.slice(1).map((hex) => <span key={hex} className="h-8 w-8 rounded-full border" style={{ backgroundColor: hex }} />)}
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-md bg-graphite px-4 py-3 font-bold text-white" onClick={surprise}>Surpreenda-me</button>
          <button className="rounded-md border border-gold px-4 py-3 font-bold" onClick={() => setFavorites([...favorites, color.name])}>Salvar cor</button>
          <a className="rounded-md bg-gold px-4 py-3 font-bold text-graphite" target="_blank" rel="noreferrer" href={whatsappUrl(`Olá! Fiz uma simulação de cor no site. Ambiente: ${room}. Cor escolhida: ${color.name} (${color.hex}), acabamento ${finish}.`)}>
            Enviar no orçamento
          </a>
        </div>
        {favorites.length ? <p className="mt-4 text-sm text-black/60">Favoritas: {favorites.join(", ")}</p> : null}
      </div>
    </section>
  );
}



