import { pool } from "./connection.js";

export const resetDatabase = async () => {
  try {
    console.log("🔄 Resetting database...");

    // Drop tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS activities CASCADE;
      DROP TABLE IF EXISTS students CASCADE;
    `);
    console.log("✅ Old tables dropped");

    // Create students table fresh
    await pool.query(`
      CREATE TABLE students (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        branch VARCHAR(100),
        semester INTEGER DEFAULT 1,
        goal TEXT,
        daily_capacity_hours INTEGER DEFAULT 2,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Students table created");

    // Create activities table
    await pool.query(`
      CREATE TABLE activities (
        id UUID PRIMARY KEY,
        student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
        domain VARCHAR(50) NOT NULL,
        action VARCHAR(255) NOT NULL,
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log("✅ Activities table created");

    // Create indexes
    await pool.query(`
      CREATE INDEX idx_students_email ON students(email);
      CREATE INDEX idx_activities_student_id ON activities(student_id);
      CREATE INDEX idx_activities_created_at ON activities(created_at);
    `);
    console.log("✅ Indexes created");

    console.log("✅ Database reset successfully!");
    return true;
  } catch (err) {
    console.error("❌ Database reset error:", err.message);
    throw err;
  }
};

// Run if called directly
const args = process.argv.slice(2);
if (args.includes('--reset')) {
  resetDatabase()
    .then(() => {
      console.log("Database reset complete!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Failed to reset database:", err);
      process.exit(1);
    });
}
