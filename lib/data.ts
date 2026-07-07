export const company = {
  name: "Grupo CBS Construção e Reformas",
  tagline: "Construção, reformas, arquitetura e gerenciamento de obras",
  logo: "/brand/logo-cbs.png",
  phone: "(11) 98135-3298",
  whatsapp: "5511981353298",
  email: "contato@grupocbs.com.br",
  address: "Av. Varsóvia, 850",
  hours: "Segunda a sexta, 8h às 18h",
  instagram: "@grupocbs",
  mapsEmbed: "https://www.google.com/maps/embed?pb="
};

export const heroImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85";

export const serviceImages = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
];

export const services = [
  "Reforma de apartamentos",
  "Reforma de casas",
  "Reforma de escritórios",
  "Reforma de clínicas",
  "Reforma de lojas",
  "Construção residencial",
  "Construção comercial",
  "Instalações elétricas",
  "Instalações hidráulicas",
  "Drywall e forros",
  "Pintura residencial e comercial",
  "Pisos e revestimentos",
  "Marcenaria planejada",
  "Iluminação",
  "Gerenciamento de obras"
].map((title, index) => ({
  title,
  slug: title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  image: serviceImages[index % serviceImages.length],
  summary:
    "Solução completa com planejamento técnico, orçamento transparente, execução supervisionada e acabamento de alto padrão.",
  benefits: [
    "Diagnóstico técnico antes da execução",
    "Cronograma com etapas claras",
    "Materiais e fornecedores qualificados",
    "Relatórios de acompanhamento",
    "Garantia e suporte pós-entrega"
  ],
  steps: ["Briefing", "Visita técnica", "Projeto", "Orçamento", "Execução", "Vistoria final"],
  averageDeadline: `${15 + index * 3} a ${35 + index * 4} dias`
}));

export const projects = [
  {
    name: "Apartamento Jardins",
    slug: "apartamento-jardins",
    category: "Apartamentos",
    location: "São Paulo, SP",
    area: "92 m²",
    deadline: "78 dias",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
    services: ["Arquitetura", "Pisos", "Iluminação", "Marcenaria"],
    challenge: "Integrar sala, cozinha e varanda sem perder conforto acústico.",
    solution: "Projeto de layout aberto, iluminação por cenas e marcenaria funcional.",
    testimonial: "A obra foi organizada, limpa e entregue com acabamento impecável."
  },
  {
    name: "Clínica Vila Mariana",
    slug: "clinica-vila-mariana",
    category: "Clínicas",
    location: "São Paulo, SP",
    area: "140 m²",
    deadline: "64 dias",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85",
    services: ["Drywall", "Elétrica", "Pintura"],
    challenge: "Adequar fluxo de atendimento e normas técnicas.",
    solution: "Setorização inteligente, infraestrutura embutida e materiais laváveis.",
    testimonial: "O espaço ficou elegante, funcional e pronto para operação."
  },
  {
    name: "Escritório Pinheiros",
    slug: "escritorio-pinheiros",
    category: "Escritórios",
    location: "São Paulo, SP",
    area: "210 m²",
    deadline: "85 dias",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85",
    services: ["Layout corporativo", "Iluminação", "Piso vinílico", "Acústica"],
    challenge: "Criar áreas colaborativas e salas privativas no mesmo pavimento.",
    solution: "Divisórias técnicas, mobiliário sob medida e iluminação segmentada.",
    testimonial: "A equipe entendeu nossa operação e entregou um ambiente premium."
  },
  {
    name: "Casa Alto da Boa Vista",
    slug: "casa-alto-da-boa-vista",
    category: "Casas",
    location: "São Paulo, SP",
    area: "260 m²",
    deadline: "120 dias",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1100&q=85",
    services: ["Construção", "Revestimentos", "Paisagismo"],
    challenge: "Modernizar fachada e área social preservando estrutura existente.",
    solution: "Reforços localizados, novos revestimentos e integração com jardim.",
    testimonial: "A casa ganhou outra vida, com conforto e muito bom gosto."
  },
  {
    name: "Loja Premium Moema",
    slug: "loja-premium-moema",
    category: "Lojas",
    location: "São Paulo, SP",
    area: "75 m²",
    deadline: "42 dias",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1100&q=85",
    services: ["Fachada", "Iluminação", "Marcenaria", "Pintura"],
    challenge: "Valorizar produtos em área compacta.",
    solution: "Expositores planejados, luz focal e circulação fluida.",
    testimonial: "A reforma elevou o posicionamento da loja."
  },
  {
    name: "Cozinha Higienópolis",
    slug: "cozinha-higienopolis",
    category: "Cozinhas",
    location: "São Paulo, SP",
    area: "28 m²",
    deadline: "36 dias",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1100&q=85",
    services: ["Hidráulica", "Revestimentos", "Bancadas", "Marcenaria"],
    challenge: "Ganhar armazenamento e melhorar iluminação.",
    solution: "Armários até o teto, bancada em pedra e luz técnica.",
    testimonial: "Ficou bonita, prática e muito fácil de manter."
  }
];

export const comparisons = [
  {
    title: "Sala integrada",
    before: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1000&q=80",
    after: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Cozinha planejada",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
    after: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Banheiro premium",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Escritório corporativo",
    before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
  }
];

export const testimonials = [];

export const blogPosts = [
  "Como planejar uma reforma sem estourar o orçamento",
  "Tendências de cores sofisticadas para salas",
  "Reforma de apartamento: etapas e cuidados",
  "Como escolher pisos e revestimentos",
  "Iluminação residencial: quente, neutra ou fria?",
  "Drywall em reformas: quando vale a pena",
  "Checklist para contratar uma empresa de reforma"
].map((title, index) => ({
  title,
  slug: title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  category: ["Reforma", "Cores", "Construção", "Pisos", "Iluminação", "Planejamento", "Economia na obra"][index],
  author: "Equipe Grupo CBS",
  date: `2026-0${(index % 6) + 1}-12`,
  readTime: `${4 + index} min`,
  image: serviceImages[index % serviceImages.length],
  excerpt:
    "Orientações práticas para tomar decisões mais seguras antes, durante e depois da obra."
}));

export const faqs = [
  "Como funciona o orçamento?",
  "A visita técnica é cobrada?",
  "Quais formas de pagamento são aceitas?",
  "Vocês compram os materiais?",
  "A obra possui garantia?",
  "Como acompanho o cronograma?",
  "Vocês atendem condomínios?",
  "É possível alterar o projeto durante a obra?",
  "Como funciona a limpeza final?",
  "Vocês emitem contrato?",
  "A empresa possui responsabilidade técnica?",
  "Quais regiões são atendidas?",
  "Fazem reforma comercial?",
  "Fazem apenas pintura?",
  "Como são enviados os relatórios?",
  "Posso enviar fotos para orçamento inicial?",
  "Qual o prazo médio de uma reforma?",
  "O orçamento é detalhado por etapas?",
  "Como solicito exclusão dos meus dados?"
].map((question, index) => ({
  question,
  answer:
    "Nossa equipe avalia o escopo, metragem, padrão de acabamento e condições do imóvel para apresentar uma proposta clara, com etapas, prazos e orientações técnicas.",
  category: index < 6 ? "Orçamento" : index < 12 ? "Obra" : "Atendimento"
}));

export const colors = [
  ["Neve Arquitetônica", "#f4f1ea", "Neutras", "Amplitude, leveza e sofisticação"],
  ["Grafite Urbano", "#2c3036", "Escuras", "Força, contraste e modernidade"],
  ["Azul Profundo", "#17324d", "Frias", "Confiança e elegância"],
  ["Cobre Suave", "#b7784b", "Terrosos", "Acolhimento e personalidade"],
  ["Areia Fina", "#d9c8ad", "Claras", "Conforto natural"],
  ["Verde Oliva", "#69735f", "Sofisticadas", "Equilíbrio e conexão natural"],
  ["Cinza Atelier", "#b8bcc0", "Neutras", "Versatilidade e discrição"],
  ["Terracota", "#a85f45", "Quentes", "Energia e aconchego"],
  ["Marfim", "#eee4d2", "Claras", "Luminosidade delicada"],
  ["Noite", "#111827", "Escuras", "Impacto visual premium"]
];

export const colorCatalog = Array.from({ length: 30 }, (_, index) => {
  const base = colors[index % colors.length];
  return {
    name: `${base[0]} ${index + 1}`,
    hex: base[1],
    rgb: base[1]
      .replace("#", "")
      .match(/.{2}/g)!
      .map((v) => parseInt(v, 16))
      .join(", "),
    family: base[2],
    feeling: base[3],
    combinations: ["Neve Arquitetônica", "Grafite Urbano", "Cobre Suave"],
    recommended: ["Salas", "Quartos", "Escritórios", "Fachadas"][index % 4]
  };
});

export const palettes = [
  ["Premium Urbano", "#f4f1ea", "#2c3036", "#c8a45d", "#17324d"],
  ["Natural Sofisticado", "#eee4d2", "#69735f", "#d9c8ad", "#2f3b32"],
  ["Clássico Claro", "#ffffff", "#b8bcc0", "#c8a45d", "#17324d"],
  ["Industrial", "#111827", "#6b7280", "#b7784b", "#f7f5f1"],
  ["Casa Aconchego", "#d9c8ad", "#a85f45", "#f4f1ea", "#69735f"],
  ["Consultório Clean", "#ffffff", "#eef1f3", "#7aa7c7", "#17324d"]
];

export const finishStyles = [
  { name: "Econômico", price: 950, multiplier: 1, description: "Materiais funcionais e boa durabilidade." },
  { name: "Intermediário", price: 1450, multiplier: 1.35, description: "Equilíbrio entre custo, estética e qualidade." },
  { name: "Alto padrão", price: 2300, multiplier: 1.9, description: "Acabamentos superiores e execução detalhada." },
  { name: "Luxo", price: 3400, multiplier: 2.6, description: "Materiais nobres, automação e soluções sob medida." }
];

export const stages = [
  "Primeiro contato",
  "Visita técnica",
  "Levantamento das necessidades",
  "Desenvolvimento do projeto",
  "Orçamento detalhado",
  "Aprovação do cliente",
  "Planejamento da obra",
  "Execução",
  "Acompanhamento",
  "Entrega final"
];

export const clientTimeline = [
  "Planejamento",
  "Projeto",
  "Aprovação",
  "Compra de materiais",
  "Demolição",
  "Infraestrutura",
  "Instalações",
  "Acabamentos",
  "Limpeza",
  "Vistoria",
  "Entrega"
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}






