import express from "express";
import { body, validationResult } from "express-validator";
import { create, getByStudent, deleteById } from "../controllers/activity.controller.js";
import { validateStudentId } from "../middlewares/authenticate.js";

const router = express.Router();

const validateActivity = [
  body("studentId").notEmpty().withMessage("Student ID is required"),
  body("domain").trim().notEmpty().withMessage("Domain is required"),
  body("action").trim().notEmpty().withMessage("Action is required"),
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

router.post("/", validateActivity, handleValidationErrors, create);
router.get("/:studentId", validateStudentId, getByStudent);
router.delete("/:id", validateStudentId, deleteById);

export default router;
