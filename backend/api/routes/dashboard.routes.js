import express from "express";
import { getDashboard } from "../controllers/dashboard.controller.js";
import { validateStudentId } from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/:studentId", validateStudentId, getDashboard);

export default router;
