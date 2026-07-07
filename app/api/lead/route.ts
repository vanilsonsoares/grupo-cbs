import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const protocol = `CBS-${Date.now().toString().slice(-8)}`;
  return NextResponse.json({
    ok: true,
    protocol,
    message: "Solicitação recebida. Em produção, salve no PostgreSQL/Supabase, dispare e-mail e registre no CRM.",
    data: body
  });
}


