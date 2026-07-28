import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CBS Construção e Reformas | São Paulo",
  description:
    "Reformas residenciais e comerciais, elétrica, iluminação, pintura, revestimentos, drywall e gerenciamento de obras em São Paulo.",
  icons: {
    icon: "/brand/logo-cbs.png",
    shortcut: "/brand/logo-cbs.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
