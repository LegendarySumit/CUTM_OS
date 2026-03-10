import { getFirestore, initializeFirestore } from "./firestore.js";

export const migrateDatabase = async () => {
  try {
    console.log("🔄 Checking Firestore database...");

    // Initialize Firestore if not already initialized
    await initializeFirestore();
    
    // Firestore is schemaless, so no migration is needed
    // Collections and fields are created automatically when documents are written
    
    console.log("✅ Firestore database check complete");
    console.log("📝 Note: Firestore collections are created automatically when documents are added");
    
    return true;
  } catch (err) {
    console.error("❌ Database check error:", err.message);
    throw err;
  }
};

// Run migration if called directly
const args = process.argv.slice(2);
if (args.includes('--migrate')) {
  migrateDatabase()
    .then(() => {
      console.log("Database check successful!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Migration failed:", err);
      process.exit(1);
    });
}
