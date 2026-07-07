import { ClientArea } from "@/components/ClientArea";

export const metadata = {
  title: "Área do cliente"
};

export default function ClientPage() {
  return (
    <main className="pt-24">
      <section className="section bg-porcelain">
        <div className="premium-container">
          <ClientArea />
        </div>
      </section>
    </main>
  );
}


