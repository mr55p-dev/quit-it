import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function main() {
    const conn = await open({
        filename: "./file.sqlite3",
        driver: sqlite3.Database,
    });

    await conn.run(`
CREATE TABLE IF NOT EXISTS "timers" (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
	timestamp INTEGER NOT NULL
);
`);
}

main();
