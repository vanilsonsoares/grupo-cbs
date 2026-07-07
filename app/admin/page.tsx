import { AdminPanel } from "@/components/AdminPanel";

export const metadata = {
  title: "Painel administrativo"
};

export default function AdminPage() {
  return (
    <main className="pt-24">
      <section className="section bg-porcelain">
        <div className="premium-container">
          <AdminPanel />
        </div>
      </section>
    </main>
  );
}


