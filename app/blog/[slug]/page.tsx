import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="pt-24">
      <article className="bg-white">
        <header className="premium-container py-16">
          <p className="eyebrow">{post.category}</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold text-graphite">{post.title}</h1>
          <p className="mt-4 text-black/50">{post.author} · {new Date(post.date).toLocaleDateString("pt-BR")} · {post.readTime}</p>
          <img src={post.image} alt={post.title} className="mt-8 h-[420px] w-full rounded-lg object-cover shadow-premium" />
        </header>
        <div className="premium-container grid gap-10 pb-20 lg:grid-cols-[1fr_320px]">
          <div className="prose max-w-none">
            <p className="text-lg leading-8 text-black/70">{post.excerpt}</p>
            <p className="mt-6 leading-8 text-black/70">Uma reforma bem-sucedida começa com escopo claro, levantamento técnico e decisões compatíveis com orçamento e prazo. Antes de iniciar, organize prioridades, referências visuais, documentos do imóvel e expectativas de acabamento.</p>
            <h2 className="mt-8 text-3xl font-bold text-graphite">Checklist prático</h2>
            <ul className="mt-4 grid gap-3">
              <li>Defina o objetivo da reforma e os ambientes prioritários.</li>
              <li>Reserve margem para imprevistos técnicos.</li>
              <li>Exija orçamento detalhado por etapa.</li>
              <li>Acompanhe cronograma, compras e aprovações.</li>
            </ul>
          </div>
          <aside className="h-fit rounded-lg bg-porcelain p-6">
            <h2 className="font-bold text-graphite">Receba novidades</h2>
            <input className="mt-4 w-full rounded-md border p-3" placeholder="Seu e-mail" aria-label="Seu e-mail" />
            <button className="mt-3 w-full rounded-md bg-graphite px-4 py-3 font-bold text-white">Cadastrar</button>
          </aside>
        </div>
      </article>
    </main>
  );
}


