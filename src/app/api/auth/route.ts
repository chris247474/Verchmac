import { NextResponse } from "next/server";

const SITE_PASSWORD = "verchmac782";
const VALID_TOKEN = Buffer.from("verchmac782").toString("base64");

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== SITE_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("pmc_auth", VALID_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}
