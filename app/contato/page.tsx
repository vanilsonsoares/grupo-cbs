import { company, whatsappUrl } from "@/lib/data";

export const metadata = {
  title: "Contato"
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="section bg-white">
        <div className="premium-container grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="eyebrow">Contato</p>
            <h1 className="mt-3 text-5xl font-bold text-graphite">Agende uma visita técnica ou fale com um especialista</h1>
            <form className="mt-8 grid gap-4 md:grid-cols-2">
              {["Nome", "Telefone", "E-mail", "Cidade"].map((label) => <label key={label} className="text-sm font-semibold">{label}<input className="mt-2 w-full rounded-md border p-3" /></label>)}
              <label className="text-sm font-semibold md:col-span-2">Mensagem<textarea className="mt-2 min-h-32 w-full rounded-md border p-3" /></label>
              <label className="flex gap-2 text-sm md:col-span-2"><input type="checkbox" required /> Autorizo o contato e aceito a política de privacidade.</label>
              <button className="rounded-md bg-gold px-5 py-3 font-bold text-graphite md:col-span-2">Enviar solicitação</button>
            </form>
          </div>
          <aside className="rounded-lg bg-graphite p-6 text-white shadow-premium">
            <h2 className="text-2xl font-bold">Informações</h2>
            <p className="mt-4 text-white/70">{company.phone}</p>
            <p className="text-white/70">{company.email}</p>
            <p className="mt-3 text-white/70">{company.address}</p>
            <p className="mt-3 text-white/70">{company.hours}</p>
            <a className="mt-6 inline-flex rounded-md bg-gold px-5 py-3 font-bold text-graphite" href={whatsappUrl("Olá! Quero agendar uma visita técnica.")} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
            <div className="mt-8 aspect-video rounded-lg bg-white/10 p-4 text-sm text-white/60">Mapa Google Maps configurável pelo painel administrativo.</div>
          </aside>
        </div>
      </section>
    </main>
  );
}


