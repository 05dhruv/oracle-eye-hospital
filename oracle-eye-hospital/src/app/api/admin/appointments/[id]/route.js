import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin, unauthorized } from "@/lib/auth";

const STATUSES = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"];

export async function PATCH(req, { params }) {
  if (!isAdmin()) return unauthorized();
  const { status } = await req.json().catch(() => ({}));
  if (!STATUSES.includes(status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  await prisma.appointment.update({ where: { id: params.id }, data: { status } });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req, { params }) {
  if (!isAdmin()) return unauthorized();
  await prisma.appointment.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
