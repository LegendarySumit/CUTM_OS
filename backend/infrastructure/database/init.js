import { pool } from "./connection.js";

export const initializeDatabase = async () => {
  try {
    console.log("🔄 Initializing database...");

    // Create students table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS students (
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

    // Create activities table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS activities (
        id UUID PRIMARY KEY,
        student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
        domain VARCHAR(50) NOT NULL,
        action VARCHAR(255) NOT NULL,
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Create indexes
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
      CREATE INDEX IF NOT EXISTS idx_activities_student_id ON activities(student_id);
      CREATE INDEX IF NOT EXISTS idx_activities_created_at ON activities(created_at);
    `);

    console.log("✅ Database initialized successfully");
    return true;
  } catch (err) {
    console.error("❌ Database initialization error:", err.message);
    throw err;
  }
};

// Run initialization if called directly
const args = process.argv.slice(2);
if (args.includes('--init')) {
  initializeDatabase()
    .then(() => {
      console.log("Database setup complete!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Failed to initialize database:", err);
      process.exit(1);
    });
}
