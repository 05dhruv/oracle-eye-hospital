import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin, unauthorized } from "@/lib/auth";

export async function PUT(req, { params }) {
  if (!isAdmin()) return unauthorized();
  const id = params.id;
  const body = await req.json();
  const video = await prisma.video.update({
    where: { id },
    data: {
      title: body.title,
      url: body.url,
      active: body.active,
      sortOrder: body.sortOrder,
    }
  });
  return NextResponse.json(video);
}

export async function DELETE(req, { params }) {
  if (!isAdmin()) return unauthorized();
  const id = params.id;
  await prisma.video.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
