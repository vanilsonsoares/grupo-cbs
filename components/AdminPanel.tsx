"use client";

import { useEffect, useState } from "react";
import { company, services, projects, blogPosts } from "@/lib/data";

const crm = ["Novo contato", "Aguardando atendimento", "Visita agendada", "Orçamento em elaboração", "Orçamento enviado", "Em negociação", "Aprovado", "Obra em andamento", "Obra concluída", "Pós-venda"];

export function AdminPanel() {
  const [siteName, setSiteName] = useState(company.name);
  const [leadStatus, setLeadStatus] = useState("Novo contato");

  useEffect(() => {
    const saved = localStorage.getItem("cbs-site-name");
    if (saved) setSiteName(saved);
  }, []);

  return (
    <section className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-lg bg-graphite p-4 text-white shadow-premium">
        {["Conteúdo", "Serviços", "Projetos", "Blog", "Cores", "Calculadoras", "CRM", "Clientes", "Obras", "Relatórios", "Permissões"].map((item) => (
          <button key={item} className="mb-2 w-full rounded-md bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white/100">{item}</button>
        ))}
      </aside>
      <div className="grid gap-8">
        <div className="rounded-lg bg-white p-6 shadow-premium">
          <p className="eyebrow">Painel administrativo</p>
          <h1 className="mt-2 text-4xl font-bold text-graphite">Gestão do site e captação</h1>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold">Nome da empresa<input className="mt-2 w-full rounded-md border p-3" value={siteName} onChange={(e) => setSiteName(e.target.value)} /></label>
            <label className="text-sm font-semibold">Telefone<input className="mt-2 w-full rounded-md border p-3" defaultValue={company.phone} /></label>
            <label className="text-sm font-semibold md:col-span-2">Endereço<input className="mt-2 w-full rounded-md border p-3" defaultValue={company.address} /></label>
          </div>
          <button className="mt-5 rounded-md bg-gold px-5 py-3 font-bold text-graphite" onClick={() => localStorage.setItem("cbs-site-name", siteName)}>Salvar alterações locais</button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Metric label="Pedidos de orçamento" value="38" />
          <Metric label="Visitas agendadas" value="12" />
          <Metric label="Taxa de aprovação" value="41%" />
        </div>
        <div className="rounded-lg bg-white p-6 shadow-premium">
          <h2 className="text-2xl font-bold text-graphite">CRM de atendimento</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_260px]">
            <div className="overflow-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead className="bg-graphite text-white"><tr><th className="p-3 text-left">Cliente</th><th>Status</th><th>Origem</th><th>Retorno</th><th>Observações</th></tr></thead>
                <tbody>
                  {["Marina Lopes", "Rafael Nunes", "Clínica Vitta", "Loja Moema"].map((name, index) => (
                    <tr key={name} className="border-b"><td className="p-3 font-semibold">{name}</td><td>{crm[(index + 1) % crm.length]}</td><td>Site</td><td>Esta semana</td><td>Solicitou orçamento detalhado</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <label className="text-sm font-semibold">Filtrar status<select className="mt-2 w-full rounded-md border p-3" value={leadStatus} onChange={(e) => setLeadStatus(e.target.value)}>{crm.map((item) => <option key={item}>{item}</option>)}</select></label>
              <button className="mt-4 w-full rounded-md border px-4 py-3 font-bold">Exportar CSV</button>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <List title="Serviços cadastrados" items={services.slice(0, 8).map((item) => item.title)} />
          <List title="Projetos cadastrados" items={projects.map((item) => item.name)} />
          <List title="Artigos publicados" items={blogPosts.slice(0, 6).map((item) => item.title)} />
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg bg-white p-6 shadow-premium"><p className="text-sm text-black/50">{label}</p><strong className="text-3xl text-graphite">{value}</strong></div>;
}

function List({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-lg bg-white p-5 shadow-premium"><h2 className="mb-3 font-bold text-graphite">{title}</h2>{items.map((item) => <p key={item} className="border-t py-2 text-sm">{item}</p>)}</div>;
}


