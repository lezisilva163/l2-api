import pkg from "pg";
import { env } from "./index";

const { Pool } = pkg;

export const pool = new Pool({
  user: env.PGUSER,
  host: env.PGHOST,
  database: env.PGDATABASE,
  password: env.PGPASSWORD,
  port: env.PGPORT,
});
