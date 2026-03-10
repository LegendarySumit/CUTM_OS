import admin from "firebase-admin";
import { config } from "../config/env.js";
import { readFileSync } from "fs";
import { resolve } from "path";

// Initialize Firebase Admin SDK
let db;

export const initializeFirestore = async () => {
  try {
    if (!db) {
      let serviceAccount = null;

      // Priority 1: Check for base64-encoded service account (for Render deployment)
      if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
        try {
          const decodedJson = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, 'base64').toString('utf-8');
          serviceAccount = JSON.parse(decodedJson);
          
          // Fix: Convert literal \n escape sequences to actual newlines in private_key
          if (serviceAccount.private_key && typeof serviceAccount.private_key === 'string') {
            serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
          }
          
          console.log("✅ Loaded service account from FIREBASE_SERVICE_ACCOUNT_BASE64 env var");
        } catch (err) {
          console.warn("⚠️  Failed to decode FIREBASE_SERVICE_ACCOUNT_BASE64:", err.message);
        }
      }

      // Priority 2: Check if service account JSON path is provided (for local development)
      if (!serviceAccount && config.firebase.serviceAccountPath) {
        try {
          const serviceAccountPath = resolve(process.cwd(), config.firebase.serviceAccountPath);
          const serviceAccountJson = readFileSync(serviceAccountPath, 'utf8');
          serviceAccount = JSON.parse(serviceAccountJson);
          console.log("✅ Loaded service account from file path");
        } catch (err) {
          console.warn("⚠️  Failed to load service account from file:", err.message);
        }
      }

      // Initialize with credentials if available, otherwise use default
      if (serviceAccount) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          projectId: config.firebase.projectId
        });
      } else {
        console.log("ℹ️  Using default credentials");
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
