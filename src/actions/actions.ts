"use server";
import { Timer } from "@/components/TimerRow";
import pool from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getTimers(): Promise<Timer[]> {
  const res = await pool.query<Timer>(`SELECT * FROM quitit`);
  console.debug("got rows", res.rows);
  return res?.rows ?? [];
}

export async function deleteTimer(id: number) {
  await pool.query("DELETE FROM quitit WHERE id = $1", [id]);
  revalidatePath("/");
}

export async function createTimer(data: FormData) {
  const title = data.get("title")?.toString();
  const desc = data.get("description")?.toString();
  const rawStamp = data.get("timestamp") as string;

  await pool.query(
    `INSERT INTO quitit (title, description, timestamp) VALUES ($1, $2, $3)`,
    [title, desc, rawStamp],
  );
  revalidatePath("/");
}
