import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

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
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
