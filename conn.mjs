import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function main() {
    const conn = await open({
        filename: "./file.sqlite3",
        driver: sqlite3.Database,
    });
    console.log("Connected succesfully");

    await conn.run(`
CREATE TABLE IF NOT EXISTS "timers" (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
	timestamp INTEGER NOT NULL
);
`);

    await conn.run(`
INSERT OR REPLACE INTO timers 
	(id, title, description, timestamp) 
VALUES 
	(1, 'Stop nicotine','No more nicotine intake for Ellis.', 1726852105000);
`);

    const res = await conn.get("SELECT * FROM timers;");
    console.log("result", res);
}

main();
