/**
 * ⚠️ DEPRECATED - This file is no longer used
 * 
 * PostgreSQL connection file kept for reference only.
 * The application now uses Firestore (Cloud Database).
 * 
 * See: infrastructure/database/firestore.js instead
 */

import pkg from "pg";
const { Pool } = pkg;

import { config } from "../config/env.js";

// This pool is no longer used - kept for backward compatibility only
export const pool = new Pool({
  host: config.db?.host,
  user: config.db?.user,
  password: config.db?.password,
  database: config.db?.database,
  port: config.db?.port
});
