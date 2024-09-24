"use server";
import { Timer } from "@/components/TimerRow";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { revalidatePath } from "next/cache";

async function getDB() {
  return await open({
    driver: sqlite3.Database,
    mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    filename: "./file.sqlite3",
  });
}

export async function getTimers(): Promise<Timer[]> {
  const db = await getDB();
  const res = await db.all<Timer[]>("SELECT * FROM timers;", {});
  return res ?? [];
}

export async function deleteTimer(id: number) {
  const db = await getDB();
  const stmnt = await db.prepare("DELETE FROM timers WHERE id = ?");
  await stmnt.run(id);
  revalidatePath("/");
}

export async function createTimer(data: FormData) {
  const db = await getDB();
  const stmnt = await db.prepare(
    "INSERT INTO timers (title, description, timestamp) VALUES (?, ?, ?)",
  );
  const title = data.get("title");
  const desc = data.get("description");
  const stamp = data.get("timestamp");
  console.debug("Stamp", stamp);

  await stmnt.run(title, desc, stamp);
  revalidatePath("/");
}
