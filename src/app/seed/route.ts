import pool from "@/lib/db";

async function seed() {
  return await pool.query(`
CREATE TABLE quitit (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    timestamp TEXT NOT NULL
);
  `);
}

export async function GET() {
  try {
    await pool.query(`BEGIN`);
    await seed();
    await pool.query(`COMMIT`);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await pool.query(`ROLLBACK`);
    return Response.json({ error }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
