import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin, unauthorized } from "@/lib/auth";
import { clean, cleanMultiline, slugify } from "@/lib/validate";

export async function POST(req) {
  if (!isAdmin()) return unauthorized();
  const b = await req.json().catch(() => ({}));
  const title = clean(b.title, 150);
  const excerpt = clean(b.excerpt, 300);
  const body = cleanMultiline(b.body, 20000);
  const type = b.type === "NEWS" ? "NEWS" : "BLOG";
  if (!title || !excerpt || !body) return NextResponse.json({ error: "Title, summary and body are required." }, { status: 400 });

  // unique slug: add a short suffix if the title was used before
  let slug = slugify(title) || "post";
  if (await prisma.post.findUnique({ where: { slug } })) slug = `${slug}-${Date.now().toString(36).slice(-4)}`;

  const post = await prisma.post.create({ data: { title, excerpt, body, type, slug } });
  return NextResponse.json({ ok: true, post }, { status: 201 });
}
