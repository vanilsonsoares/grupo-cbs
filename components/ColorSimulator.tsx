"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { colorCatalog, palettes, whatsappUrl } from "@/lib/data";

const rooms = ["Sala", "Quarto", "Cozinha", "Escritório", "Fachada"];
const finishes = ["Fosco", "Acetinado", "Semibrilho"];
const periods = ["Dia", "Noite"];
const surfaces = ["Parede principal", "Parede lateral"];

function hexToRgba(hex: string, opacity: number) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function ColorSimulator() {
  const [color, setColor] = useState(colorCatalog[0]);
  const [finish, setFinish] = useState(finishes[0]);
  const [light, setLight] = useState(76);
  const [period, setPeriod] = useState(periods[0]);
  const [room, setRoom] = useState(rooms[0]);
  const [surface, setSurface] = useState(surfaces[0]);
  const [category, setCategory] = useState("Todas");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const categories = useMemo(() => ["Todas", ...Array.from(new Set(colorCatalog.map((item) => item.family)))], []);
  const filteredColors = useMemo(() => {
    if (category === "Todas") return colorCatalog;
    return colorCatalog.filter((item) => item.family === category);
  }, [category]);
  const combo = useMemo(() => palettes.find((palette) => palette.includes(color.hex)) || palettes[0], [color.hex]);

  const lightOpacity = light / 100;
  const nightLayer = period === "Noite" ? "rgba(8, 18, 31, .42)" : "rgba(255, 255, 255, .08)";
  const finishClass = finish === "Fosco" ? "opacity-20" : finish === "Acetinado" ? "opacity-35" : "opacity-50";

  function surprise() {
    const random = colorCatalog[Math.floor(Math.random() * colorCatalog.length)];
    setColor(random);
    setFinish(finishes[Math.floor(Math.random() * finishes.length)]);
    setPeriod(periods[Math.floor(Math.random() * periods.length)]);
  }

  function saveFavorite() {
    const label = `${color.name} (${color.hex})`;
    setFavorites((current) => current.includes(label) ? current : [...current, label]);
  }

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setUploadedImage(String(reader.result));
    reader.readAsDataURL(file);
  }

  const whatsMessage = `Olá! Fiz uma simulação de cor no site do Grupo CBS. Ambiente: ${room}. Superfície: ${surface}. Cor escolhida: ${color.name} (${color.hex}), RGB ${color.rgb}, acabamento ${finish}, visualização ${period}.`;

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-premium">
        <div className="relative min-h-[430px] overflow-hidden bg-[#ece8df]">
          {uploadedImage ? (
            <div className="absolute inset-0">
              <img src={uploadedImage} alt="Foto enviada para simulação de cor" className="h-full w-full object-cover" />
              <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: color.hex, opacity: Math.max(.18, lightOpacity * .34) }} />
              <div className="absolute inset-0" style={{ background: nightLayer }} />
            </div>
          ) : (
            <div className="absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-[66%]" style={{ background: surface === "Parede principal" ? color.hex : "#f5f1e8" }} />
              <div
                className="absolute right-0 top-0 h-[66%] w-[34%] origin-right border-l border-black/10"
                style={{ background: surface === "Parede lateral" ? color.hex : "#e9e2d6", clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#c9b79d]" style={{ clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 100%)" }} />
              <div className="absolute left-[9%] top-[18%] h-[34%] w-[23%] rounded-t-full border-[10px] border-white/80 bg-[#d9e6eb] shadow-premium">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/80" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/80" />
              </div>
              <div className="absolute bottom-[20%] left-[14%] h-[13%] w-[40%] rounded-t-[36px] bg-[#f8f5ef] shadow-premium" />
              <div className="absolute bottom-[28%] left-[18%] h-[8%] w-[10%] rounded bg-white shadow" />
              <div className="absolute bottom-[28%] left-[40%] h-[8%] w-[10%] rounded bg-white shadow" />
              <div className="absolute bottom-[21%] right-[16%] h-[20%] w-[18%] rounded-md bg-[#2f3439] shadow-premium" />
              <div className="absolute bottom-[41%] right-[13%] h-[2%] w-[24%] rounded-full bg-gold" />
              <div className="absolute left-0 top-0 h-full w-full" style={{ background: `linear-gradient(115deg, rgba(255,255,255,${lightOpacity * .58}), rgba(255,255,255,0) 48%)` }} />
              <div className="absolute inset-0" style={{ background: nightLayer }} />
              <div className={`absolute inset-x-0 top-0 h-[66%] bg-white mix-blend-overlay ${finishClass}`} />
            </div>
          )}

          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="rounded-md bg-white/92 p-4 shadow-premium backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-copper">{room} · {surface}</p>
              <h3 className="mt-1 text-xl font-bold text-graphite">{color.name}</h3>
              <p className="text-sm text-black/60">{color.hex} · RGB {color.rgb} · {finish}</p>
            </div>
            <label className="cursor-pointer rounded-md bg-graphite px-4 py-3 text-sm font-bold text-white shadow-premium">
              Enviar foto
              <input type="file" accept="image/*" className="sr-only" onChange={handleUpload} />
            </label>
          </div>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-4">
          <label className="text-sm font-semibold text-graphite">
            Ambiente
            <select className="mt-2 w-full rounded-md border border-black/10 bg-white p-3" value={room} onChange={(e) => setRoom(e.target.value)}>
              {rooms.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-graphite">
            Área da cor
            <select className="mt-2 w-full rounded-md border border-black/10 bg-white p-3" value={surface} onChange={(e) => setSurface(e.target.value)}>
              {surfaces.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-graphite">
            Acabamento
            <select className="mt-2 w-full rounded-md border border-black/10 bg-white p-3" value={finish} onChange={(e) => setFinish(e.target.value)}>
              {finishes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-graphite">
            Visualização
            <select className="mt-2 w-full rounded-md border border-black/10 bg-white p-3" value={period} onChange={(e) => setPeriod(e.target.value)}>
              {periods.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
        <div className="px-5 pb-5">
          <label className="text-sm font-semibold text-graphite">Intensidade da iluminação: {light}%</label>
          <input className="mt-2 w-full accent-gold" type="range" min="35" max="100" value={light} onChange={(e) => setLight(Number(e.target.value))} />
        </div>
      </div>

      <div className="rounded-lg border border-black/10 bg-white p-6 shadow-premium">
        <p className="eyebrow">Simulador de cores</p>
        <h2 className="mt-2 text-3xl font-bold text-graphite">Escolha uma cor para visualizar no ambiente</h2>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`shrink-0 rounded-md border px-3 py-2 text-sm font-semibold ${item === category ? "border-gold bg-gold text-graphite" : "border-black/10 text-black/60"}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-5 grid max-h-[315px] gap-3 overflow-auto pr-2 sm:grid-cols-2">
          {filteredColors.map((item) => (
            <button
              key={item.name}
              type="button"
              className={`rounded-md border p-3 text-left transition hover:border-gold ${item.name === color.name ? "border-gold bg-porcelain" : "border-black/10"}`}
              onClick={() => setColor(item)}
            >
              <span className="mb-2 block h-10 rounded" style={{ backgroundColor: item.hex }} />
              <strong className="text-sm text-graphite">{item.name}</strong>
              <span className="block text-xs text-black/50">{item.hex} · {item.family}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-md bg-porcelain p-4 text-sm">
          <div className="flex items-center justify-between gap-3">
            <strong className="text-graphite">{color.family}</strong>
            <span className="rounded bg-white px-2 py-1 text-xs font-bold text-black/55">{color.hex}</span>
          </div>
          <p className="mt-2 leading-6 text-black/70">{color.feeling}. Indicado para {color.recommended}.</p>
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-black/45">Combinação sugerida</p>
            <div className="mt-2 flex gap-2">
              {combo.slice(1).map((hex) => <span key={hex} title={hex} className="h-9 w-9 rounded-full border border-black/10" style={{ backgroundColor: hexToRgba(hex, 1) }} />)}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-md bg-graphite px-4 py-3 font-bold text-white" onClick={surprise}>Surpreenda-me</button>
          <button className="rounded-md border border-gold px-4 py-3 font-bold text-graphite" onClick={saveFavorite}>Salvar cor</button>
          <a className="rounded-md bg-gold px-4 py-3 font-bold text-graphite" target="_blank" rel="noreferrer" href={whatsappUrl(whatsMessage)}>
            Enviar no orçamento
          </a>
        </div>

        {favorites.length ? (
          <div className="mt-5 rounded-md border border-black/10 p-4 text-sm text-black/65">
            <strong className="text-graphite">Cores favoritas</strong>
            <p className="mt-2">{favorites.join(", ")}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
