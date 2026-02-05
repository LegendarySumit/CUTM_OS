import { pool } from "./connection.js";

export const migrateDatabase = async () => {
  try {
    console.log("🔄 Checking and migrating database...");

    // Check if password column exists
    const result = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'students' AND column_name = 'password'
    `);

    if (result.rows.length === 0) {
      console.log("⚠️  Password column not found. Adding it...");
      await pool.query(`
        ALTER TABLE students 
        ADD COLUMN password VARCHAR(255) DEFAULT 'temp123'
      `);
      console.log("✅ Password column added successfully");
    } else {
      console.log("✅ Password column already exists");
    }

    // Check if activities table has correct structure
    const activitiesResult = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'activities' AND column_name = 'student_id'
    `);

    if (activitiesResult.rows.length > 0) {
      console.log("✅ Activities table is correct");
    }

    console.log("✅ Database migration complete!");
    return true;
  } catch (err) {
    console.error("❌ Database migration error:", err.message);
    throw err;
  }
};

// Run migration if called directly
const args = process.argv.slice(2);
if (args.includes('--migrate')) {
  migrateDatabase()
    .then(() => {
      console.log("Migration successful!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Migration failed:", err);
      process.exit(1);
    });
}
