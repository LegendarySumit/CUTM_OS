import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  // Firestore configuration
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    serviceAccountPath: process.env.FIREBASE_SERVICE_ACCOUNT_PATH || "./firebase-service-account.json"
  },
  // Legacy PostgreSQL config (commented out - using Firestore instead)
  // db: {
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   port: process.env.DB_PORT
  // }
};
