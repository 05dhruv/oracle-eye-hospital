import { NextResponse } from "next/server";
import { checkPassword, createToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(req) {
  const { password } = await req.json().catch(() => ({}));
  if (!checkPassword(password)) return NextResponse.json({ error: "Wrong password." }, { status: 401 });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, createToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  return res;
}
