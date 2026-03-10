import { initializeFirestore } from "./firestore.js";

export const initializeDatabase = async () => {
  try {
    console.log("🔄 Initializing Firestore database...");
    
    // Initialize Firestore
    await initializeFirestore();
    
    // Firestore doesn't require table creation or indexes setup
    // Collections are created automatically when documents are added
    
    console.log("✅ Firestore initialized successfully");
    return true;
  } catch (err) {
    console.error("❌ Firestore initialization error:", err.message);
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
