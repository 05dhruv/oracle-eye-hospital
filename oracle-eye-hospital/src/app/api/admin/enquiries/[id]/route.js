import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin, unauthorized } from "@/lib/auth";

export async function PATCH(req, { params }) {
  if (!isAdmin()) return unauthorized();
  const { isRead } = await req.json().catch(() => ({}));
  await prisma.enquiry.update({ where: { id: params.id }, data: { isRead: Boolean(isRead) } });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req, { params }) {
  if (!isAdmin()) return unauthorized();
  await prisma.enquiry.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
