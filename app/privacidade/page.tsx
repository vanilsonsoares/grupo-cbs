export default function PrivacyPage() {
  return <Legal title="Política de privacidade" text="Coletamos apenas dados necessários para atendimento, orçamento, agendamento e acompanhamento de projetos. O titular pode solicitar acesso, correção ou exclusão dos dados conforme a LGPD." />;
}

function Legal({ title, text }: { title: string; text: string }) {
  return <main className="pt-24"><section className="section bg-white"><div className="premium-container max-w-3xl"><h1 className="text-5xl font-bold text-graphite">{title}</h1><p className="mt-6 leading-8 text-black/70">{text}</p></div></section></main>;
}


