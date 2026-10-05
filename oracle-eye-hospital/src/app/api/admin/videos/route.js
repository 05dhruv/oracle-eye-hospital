import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin, unauthorized } from "@/lib/auth";

export async function GET() {
  if (!isAdmin()) return unauthorized();
  const videos = await prisma.video.findMany({ orderBy: { sortOrder: 'asc' } });
  return NextResponse.json(videos);
}

export async function POST(req) {
  if (!isAdmin()) return unauthorized();
  const body = await req.json();
  const video = await prisma.video.create({
    data: {
      title: body.title,
      url: body.url,
      active: body.active ?? true,
      sortOrder: body.sortOrder ?? 0,
    }
  });
  return NextResponse.json(video);
}
