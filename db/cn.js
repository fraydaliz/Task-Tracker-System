import { Pool } from "pg";

import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});
