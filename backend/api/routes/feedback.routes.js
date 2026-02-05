/**
 * Feedback Routes
 * Routes for student feedback, alerts, suggestions, insights
 */

import { Router } from 'express';
import { param } from 'express-validator';
import feedbackController from '../controllers/feedback.controller.js';
import { validateStudentId } from '../middlewares/authenticate.js';

const router = Router();

// Get comprehensive feedback
router.get('/:studentId', validateStudentId, feedbackController.getFeedback);

// Get alerts only
router.get('/:studentId/alerts', validateStudentId, feedbackController.getAlerts);

// Get suggestions only
router.get('/:studentId/suggestions', validateStudentId, feedbackController.getSuggestions);

// Get insights only
router.get('/:studentId/insights', validateStudentId, feedbackController.getInsights);

// Get streak info
router.get('/:studentId/streak', validateStudentId, feedbackController.getStreak);

export default router;
