import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const file = path.join(process.cwd(), "data", "members.json");

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  const name = String(b.name || "").trim().slice(0, 100);
  const email = String(b.email || "").trim().slice(0, 150);
  const handle = String(b.handle || "").trim().slice(0, 100);
  const hub = String(b.hub || "").trim().slice(0, 100);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid name and email." }, { status: 400 });
  }
  let rows = [];
  try { rows = JSON.parse(await fs.readFile(file, "utf8")); } catch {}
  rows.push({ name, email, handle, hub, at: new Date().toISOString() });
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(rows, null, 2));
  return NextResponse.json({ ok: true });
}
