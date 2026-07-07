# Grupo CBS Construção e Reformas

Plataforma Next.js demonstrativa para captação de clientes, apresentação de serviços, simuladores, calculadoras, orçamento em etapas, área do cliente e painel administrativo.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Estrutura preparada para PostgreSQL/Supabase
- API route para leads em `app/api/lead/route.ts`
- Sitemap e robots automáticos

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Configuração

Copie `.env.example` para `.env.local` e ajuste:

- `NEXT_PUBLIC_COMPANY_NAME`
- `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_SITE_URL`
- `DATABASE_URL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SMTP_*`

## Banco de dados

O arquivo `supabase/schema.sql` contém uma base inicial para:

- perfis e permissões
- leads e CRM
- serviços
- projetos
- diário de obra
- configurações das calculadoras

Em produção, aplique o SQL no Supabase, configure autenticação, policies por perfil e storage buckets para imagens/documentos.

## Principais páginas

- `/` página inicial premium
- `/sobre` apresentação institucional
- `/servicos/[slug]` páginas de serviços
- `/projetos/[slug]` projetos detalhados
- `/simule-sua-reforma` simulador de cores, quiz e planejador
- `/calculadoras` reforma, tinta, pisos, drywall, iluminação e ar-condicionado
- `/orcamento` montador de orçamento em etapas
- `/contato` formulário e agendamento inicial
- `/area-cliente` acompanhamento de obra demonstrativo
- `/admin` painel administrativo/CRM demonstrativo
- `/privacidade` e `/termos`

## Personalização

Os dados demonstrativos ficam em `lib/data.ts`. Ali você altera:

- nome da empresa
- telefone e WhatsApp
- endereço
- serviços
- projetos
- depoimentos
- blog
- FAQs
- cores e paletas
- valores das calculadoras

O painel `/admin` demonstra edição local via navegador. Para produção, conecte esses formulários ao Supabase usando as tabelas do schema.

## Publicação

1. Crie projeto no Supabase e rode `supabase/schema.sql`.
2. Configure variáveis de ambiente na Vercel ou servidor escolhido.
3. Suba imagens para Supabase Storage ou CDN.
4. Execute `npm run build`.
5. Publique com HTTPS ativo.
6. Configure domínio, Google Analytics, Search Console e SEO local.

## Segurança recomendada para produção

- autenticação Supabase Auth ou NextAuth
- RLS ativa por perfil
- validação server-side dos formulários
- rate limit e captcha em endpoints públicos
- senhas criptografadas pelo provedor de auth
- consentimento LGPD em formulários
- política para exclusão de dados
- buckets privados para contratos/documentos

## Observação

As calculadoras oferecem estimativas indicativas. O orçamento final deve depender de visita técnica, escopo completo, memorial de acabamentos e condições reais do imóvel.
