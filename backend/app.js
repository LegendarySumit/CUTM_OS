import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { config } from "./infrastructure/config/env.js";
import { pool } from "./infrastructure/database/connection.js";
import authRoutes from "./api/routes/auth.routes.js";
import studentRoutes from "./api/routes/student.routes.js";
import activityRoutes from "./api/routes/activity.routes.js";
import dashboardRoutes from "./api/routes/dashboard.routes.js";
import feedbackRoutes from "./api/routes/feedback.routes.js";

const app = express();

// Rate limiting - Strict for auth endpoints, moderate for others
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message: "Too many login attempts, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per windowMs
  message: "Too many requests, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:5173",
  "https://cutm-os.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));
app.use(express.json({ limit: "10kb" })); // Limit request size
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(apiLimiter); // Apply general rate limit to all routes

// Routes
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/feedback", feedbackRoutes);

// Health check
app.get("/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ 
      status: "ok", 
      time: result.rows[0],
      message: "Backend is running"
    });
  } catch (err) {
    res.status(500).json({ 
      status: "error", 
      message: err.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  // Don't expose error details in production
  const isDevelopment = process.env.NODE_ENV === "development";
  const errorMessage = isDevelopment ? err.message : "Internal server error";
  
  res.status(500).json({
    success: false,
    message: errorMessage,
    error: isDevelopment ? err.stack : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

const PORT = config.port || 5000;
app.listen(PORT, () => {
  // Production-ready: minimal logging
  if (process.env.NODE_ENV !== "production") {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📡 Health check: http://localhost:${PORT}/health`);
  }
});
