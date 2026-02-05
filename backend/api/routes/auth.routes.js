import express from "express";
import { body, validationResult } from "express-validator";
import { register, login, getProfile } from "../controllers/auth.controller.js";

const router = express.Router();

// Validation middleware
const validateRegister = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("branch").trim().notEmpty().withMessage("Branch is required"),
  body("semester").isInt().withMessage("Semester must be a number"),
];

const validateLogin = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

router.post("/register", validateRegister, handleValidationErrors, register);
router.post("/login", validateLogin, handleValidationErrors, login);
router.get("/profile/:studentId", getProfile);

export default router;
