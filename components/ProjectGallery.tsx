"use client";

import { useMemo, useState } from "react";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

type ProjectGalleryProps = {
  items: GalleryItem[];
  filters: string[];
};

export function ProjectGallery({ items, filters }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "Todos");

  const visibleItems = useMemo(() => {
    if (activeFilter === "Todos") return items;
    return items.filter((item) => item.category.toLowerCase().includes(activeFilter.toLowerCase()));
  }, [activeFilter, items]);

  return (
    <>
      <div className="mt-9">
        <p className="text-sm font-bold uppercase tracking-[.16em] text-white/45">Filtrar por serviço</p>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-md border px-4 py-2 text-sm font-semibold transition ${isActive ? "border-gold bg-gold text-graphite" : "border-white/15 bg-white/5 text-white/75 hover:border-gold/60 hover:text-white"}`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.image} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[.08] shadow-premium transition hover:-translate-y-1 hover:bg-white/[.12]">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-md bg-graphite/85 px-3 py-2 text-xs font-bold uppercase tracking-[.12em] text-gold backdrop-blur">{item.category}</span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
