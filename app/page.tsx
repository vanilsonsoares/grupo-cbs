const whatsapp =
  "https://wa.me/5511981353298?text=Olá!%20Vim%20pelo%20site%20da%20CBS%20e%20gostaria%20de%20conversar%20sobre%20uma%20obra.";

const services = [
  {
    number: "01",
    title: "Reformas completas",
    text: "Planejamento e execução de apartamentos, casas e espaços comerciais, do início à entrega.",
  },
  {
    number: "02",
    title: "Elétrica e iluminação",
    text: "Instalações, adequações, quadros, automação e projetos de iluminação para cada ambiente.",
  },
  {
    number: "03",
    title: "Acabamentos",
    text: "Pintura, porcelanato, revestimentos, drywall, forros e detalhes que definem o resultado.",
  },
  {
    number: "04",
    title: "Gestão de obra",
    text: "Cronograma, equipes, materiais e acompanhamento para manter as etapas sob controle.",
  },
];

const projects = [
  {
    image: "/obras/apartamento-integrado-01.jpeg",
    title: "Apartamento integrado",
    scope: "Reforma completa · Iluminação · Acabamentos",
    className: "project project--large",
  },
  {
    image: "/obras/clinica-revestimento-madeira-01.jpeg",
    title: "Clínica",
    scope: "Revestimentos · Pintura · Marcenaria",
    className: "project",
  },
  {
    image: "/obras/sala-led-acabamento-01.jpeg",
    title: "Sala residencial",
    scope: "Forro · LED · Pintura",
    className: "project",
  },
  {
    image: "/obras/banheiro-revestimento-led-01.jpeg",
    title: "Banheiro",
    scope: "Porcelanato · Hidráulica · Iluminação",
    className: "project project--wide",
  },
];

const steps = [
  ["01", "Conversa inicial", "Você conta o que precisa e envia as informações básicas do imóvel."],
  ["02", "Visita técnica", "A equipe avalia o local, medidas, condições e detalhes do serviço."],
  ["03", "Proposta", "Você recebe o escopo organizado por etapas, com valores e prazos."],
  ["04", "Execução", "A obra começa com acompanhamento, comunicação e registro do andamento."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="CBS Construção e Reformas — início">
          <img src="/brand/logo-cbs.png" alt="" />
          <span>
            <b>CBS</b>
            <small>Construção e Reformas</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#obras">Obras</a>
          <a href="#processo">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Pedir orçamento <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img
            className="hero__image"
            src="/obras/apartamento-integrado-01.jpeg"
            alt="Apartamento integrado reformado pela CBS, com cozinha, sala e iluminação planejada"
          />
          <div className="hero__shade" />
          <div className="hero__content">
            <p className="eyebrow">Construção e reformas em São Paulo</p>
            <h1>
              Obra bem planejada.
              <br />
              <em>Acabamento bem executado.</em>
            </h1>
            <p className="hero__lead">
              Reformas residenciais e comerciais com escopo claro, acompanhamento próximo e uma equipe que cuida dos detalhes.
            </p>
            <div className="hero__actions">
              <a className="button button--gold" href={whatsapp} target="_blank" rel="noreferrer">
                Falar sobre minha obra <Arrow />
              </a>
              <a className="text-link" href="#obras">
                Conhecer trabalhos realizados
              </a>
            </div>
          </div>
          <div className="hero__facts">
            <span><b>01</b> Visita técnica</span>
            <span><b>02</b> Proposta por etapas</span>
            <span><b>03</b> Acompanhamento da obra</span>
          </div>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow eyebrow--dark">Do projeto à entrega</p>
            <h2>Uma equipe para coordenar cada parte da sua reforma.</h2>
          </div>
          <div className="intro__copy">
            <p>
              A CBS reúne execução e gerenciamento para que você não precise lidar com vários fornecedores sem coordenação.
              Antes de começar, avaliamos o imóvel, alinhamos prioridades e organizamos o serviço.
            </p>
            <a className="line-link" href="#servicos">Veja o que executamos <Arrow /></a>
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">Nossos serviços</p>
            <h2>Execução completa, sem soluções genéricas.</h2>
          </div>
          <div className="services__grid">
            {services.map((service) => (
              <article className="service" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <div className="services__note">
            <span>Também executamos</span>
            <p>Hidráulica · Automação · Drywall e forros · Pintura · Pisos e revestimentos</p>
          </div>
        </section>

        <section className="projects section" id="obras">
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow eyebrow--dark">Obras realizadas</p>
              <h2>O resultado fala pelo trabalho.</h2>
            </div>
            <p>Registros reais de serviços executados pela CBS.</p>
          </div>
          <div className="projects__grid">
            {projects.map((project) => (
              <article className={project.className} key={project.title}>
                <img src={project.image} alt={`${project.title} — obra realizada pela CBS`} />
                <div className="project__caption">
                  <h3>{project.title}</h3>
                  <p>{project.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process section" id="processo">
          <div className="process__intro">
            <p className="eyebrow">Como funciona</p>
            <h2>Clareza antes, durante e depois da obra.</h2>
            <p>
              Nada começa no improviso. O serviço é definido com base no local, nas necessidades do cliente e no padrão de acabamento esperado.
            </p>
          </div>
          <div className="process__steps">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact__visual">
            <img src="/obras/cozinha-planejada-obra-01.jpeg" alt="Execução de cozinha em andamento pela equipe CBS" />
            <span>Execução em andamento</span>
          </div>
          <div className="contact__content">
            <p className="eyebrow eyebrow--dark">Vamos conversar</p>
            <h2>Conte o que você pretende fazer no seu imóvel.</h2>
            <p>
              Envie o tipo de serviço, o bairro e, se possível, fotos do local. A equipe responde com a orientação para o próximo passo.
            </p>
            <a className="button button--navy" href={whatsapp} target="_blank" rel="noreferrer">
              Chamar a CBS no WhatsApp <Arrow />
            </a>
            <dl>
              <div>
                <dt>Telefone e WhatsApp</dt>
                <dd>(11) 98135-3298</dd>
              </div>
              <div>
                <dt>Atendimento</dt>
                <dd>Segunda a sexta, 8h às 18h</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer__brand">
          <img src="/brand/logo-cbs.png" alt="Grupo CBS" />
          <p>Construção e reformas residenciais e comerciais em São Paulo.</p>
        </div>
        <div>
          <span>Contato</span>
          <a href="tel:+5511981353298">(11) 98135-3298</a>
          <a href="mailto:contato@grupocbs.com.br">contato@grupocbs.com.br</a>
        </div>
        <div>
          <span>Endereço</span>
          <p>Av. Varsóvia, 850<br />São Paulo — SP</p>
        </div>
        <p className="footer__copy">© 2026 Grupo CBS Construção e Reformas.</p>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a CBS pelo WhatsApp">
        <span>WhatsApp</span>
        <b>↗</b>
      </a>
    </>
  );
}
