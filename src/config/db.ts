import pkg from "pg";
import { env } from "./index";

const { Pool } = pkg;

export const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
});
