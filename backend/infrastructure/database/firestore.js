import admin from "firebase-admin";
import { config } from "../config/env.js";
import { readFileSync } from "fs";
import { resolve } from "path";

// Initialize Firebase Admin SDK
let db;

export const initializeFirestore = async () => {
  try {
    if (!db) {
      // Check if service account JSON path is provided
      if (config.firebase.serviceAccountPath) {
        // Resolve path relative to current working directory
        const serviceAccountPath = resolve(process.cwd(), config.firebase.serviceAccountPath);
        const serviceAccountJson = readFileSync(serviceAccountPath, 'utf8');
        const serviceAccount = JSON.parse(serviceAccountJson);

        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          projectId: config.firebase.projectId
        });
      } else {
        // Use default credentials (for deployment environments)
        admin.initializeApp({
          projectId: config.firebase.projectId
        });
      }

      db = admin.firestore();
    }

    console.log("✅ Firestore initialized successfully");
    return db;
  } catch (err) {
    console.error("❌ Firestore initialization error:", err.message);
    throw err;
  }
};

export const getFirestore = () => {
  if (!db) {
    throw new Error("Firestore not initialized. Call initializeFirestore first.");
  }
  return db;
};

export default db;
