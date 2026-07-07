import { whatsappUrl } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Olá! Acessei o site do Grupo CBS e gostaria de receber informações sobre uma reforma.")}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      WhatsApp
    </a>
  );
}


