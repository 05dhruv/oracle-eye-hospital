import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin, unauthorized } from "@/lib/auth";

export async function DELETE(_req, { params }) {
  if (!isAdmin()) return unauthorized();
  await prisma.post.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
