import pg from "pg"
import env from "dotenv"

env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
db.connect();

db.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });

export const query = (text, params) => db.query(text, params);


/*import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL, // Use the complete Neon connection URL
  ssl: {
    rejectUnauthorized: false // Necessary for cloud-hosted databases like Neon
  }
});

db.connect();

db.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = (text, params) => db.query(text, params);
*/
