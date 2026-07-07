"use client";

import { useState } from "react";

export function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [value, setValue] = useState(52);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-premium">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={before} alt={`${title} antes da reforma`} className="h-full w-full object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}>
          <img src={after} alt={`${title} depois da reforma`} className="h-full w-[calc(100vw-32px)] max-w-none object-cover md:w-[560px]" />
        </div>
        <div className="absolute inset-y-0 w-1 bg-gold" style={{ left: `${value}%` }} />
        <div className="absolute left-4 top-4 rounded-md bg-graphite/100 px-3 py-1 text-xs font-bold text-white">Depois</div>
        <div className="absolute right-4 top-4 rounded-md bg-white/105 px-3 py-1 text-xs font-bold text-graphite">Antes</div>
        <input
          aria-label={`Comparar antes e depois: ${title}`}
          className="range-thumb absolute inset-x-5 bottom-5 h-2 cursor-ew-resize appearance-none rounded-full bg-white/70"
          type="range"
          min="8"
          max="92"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-graphite">{title}</h3>
        <p className="mt-1 text-sm text-black/60">Arraste a barra para comparar o resultado da reforma.</p>
      </div>
    </div>
  );
}


