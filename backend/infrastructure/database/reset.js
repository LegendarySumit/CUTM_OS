import { getFirestore, initializeFirestore } from "./firestore.js";

export const resetDatabase = async () => {
  try {
    console.log("🔄 Resetting database...");

    // Initialize Firestore
    await initializeFirestore();
    const db = getFirestore();

    // Delete all documents from students collection
    const studentsSnapshot = await db.collection("students").get();
    for (const doc of studentsSnapshot.docs) {
      await doc.ref.delete();
    }
    console.log(`✅ Deleted ${studentsSnapshot.docs.length} student documents`);

    // Delete all documents from activities collection
    const activitiesSnapshot = await db.collection("activities").get();
    for (const doc of activitiesSnapshot.docs) {
      await doc.ref.delete();
    }
    console.log(`✅ Deleted ${activitiesSnapshot.docs.length} activity documents`);

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
