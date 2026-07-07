"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Project = {
  name: string;
  slug: string;
  category: string;
  location: string;
  area: string;
  deadline: string;
  image: string;
  services: string[];
};

type ProjectGalleryProps = {
  projects: Project[];
  filters: string[];
};

export function ProjectGallery({ projects, filters }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "Todos");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "Todos") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <>
      <div className="mt-9">
        <p className="text-sm font-bold uppercase tracking-[.16em] text-white/45">Categorias de obra</p>
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
        {visibleProjects.map((project) => (
          <Link key={project.slug} href={`/projetos/${project.slug}`} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[.08] shadow-premium transition hover:-translate-y-1 hover:bg-white/[.12]">
            <div className="relative overflow-hidden">
              <img src={project.image} alt={project.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-md bg-graphite/85 px-3 py-2 text-xs font-bold uppercase tracking-[.12em] text-gold backdrop-blur">{project.category}</span>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                {project.services.slice(0, 3).map((service) => (
                  <span key={service} className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/70">{service}</span>
                ))}
              </div>
              <h3 className="mt-4 text-xl font-bold">{project.name}</h3>
              <p className="mt-2 text-sm text-white/60">{project.location} · {project.area} · {project.deadline}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold">
                <span className="text-white/60">Ver estudo da obra</span>
                <span className="text-gold transition group-hover:translate-x-1">Detalhes</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

