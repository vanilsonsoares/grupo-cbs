import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Construção e reformas de alto padrão`,
    template: `%s | ${company.name}`
  },
  description:
    "Empresa especializada em construção civil, reformas residenciais e comerciais, arquitetura e gerenciamento de obras.",
  keywords: [
    "empresa de reforma",
    "reforma de apartamento",
    "reforma residencial",
    "reforma comercial",
    "construção e reforma",
    "pintura residencial",
    "drywall",
    "orçamento para reforma"
  ],
  openGraph: {
    title: company.name,
    description: "Projetos completos de construção e reforma, do planejamento Ã  entrega final.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


