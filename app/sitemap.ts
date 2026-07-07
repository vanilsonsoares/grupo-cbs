import { MetadataRoute } from "next";
import { blogPosts, projects, services } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "sobre", "simule-sua-reforma", "calculadoras", "orcamento", "contato", "area-cliente", "admin", "privacidade", "termos"];
  return [
    ...staticPages.map((page) => ({ url: `${base}/${page}`, lastModified: new Date() })),
    ...services.map((item) => ({ url: `${base}/servicos/${item.slug}`, lastModified: new Date() })),
    ...projects.map((item) => ({ url: `${base}/projetos/${item.slug}`, lastModified: new Date() })),
    ...blogPosts.map((item) => ({ url: `${base}/blog/${item.slug}`, lastModified: new Date() }))
  ];
}


