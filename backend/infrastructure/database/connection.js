import pkg from "pg";
const { Pool } = pkg;

import { config } from "../config/env.js";

export const pool = new Pool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port
});
