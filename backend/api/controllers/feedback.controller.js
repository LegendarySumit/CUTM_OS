/**
 * Feedback Controller
 * Endpoints for getting student feedback, alerts, and suggestions
 */

import { studentRepository } from '../../repositories/student.repository.js';
import { activityRepository } from '../../repositories/activity.repository.js';
import { progressEngine } from '../../engines/progress/progress.engine.js';
import { FeedbackEngine } from '../../engines/feedback/feedback.engine.js';

export const feedbackController = {
  /**
   * GET /api/feedback/:studentId
   * Get comprehensive feedback for a student
   */
  getFeedback: async (req, res) => {
    try {
      const { studentId } = req.params;

      if (!studentId) {
        return res.status(400).json({
          success: false,
          message: 'Student ID is required',
        });
      }

      // Get student data
      const student = await studentRepository.getStudentById(studentId);
      if (!student) {
        return res.status(404).json({
          success: false,
          message: 'Student not found',
        });
      }

      // Get activities
      const activities = await activityRepository.getActivitiesByStudent(studentId);

      // Calculate stats
      const stats = progressEngine.calculate(activities);

      // Generate feedback
      const feedback = FeedbackEngine.generateFeedback(student, activities, stats);

      res.json({
        success: true,
        data: feedback,
      });
    } catch (err) {
      console.error('Feedback fetch error:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch feedback',
        error: err.message,
      });
    }
  },

  /**
   * GET /api/feedback/:studentId/alerts
   * Get only alerts (critical feedback)
   */
  getAlerts: async (req, res) => {
    try {
      const { studentId } = req.params;

      if (!studentId) {
        return res.status(400).json({
          success: false,
          message: 'Student ID is required',
        });
      }

      const student = await studentRepository.getStudentById(studentId);
      if (!student) {
        return res.status(404).json({
          success: false,
          message: 'Student not found',
        });
      }

      const activities = await activityRepository.getActivitiesByStudent(studentId);
      const stats = progressEngine.calculate(activities);
      const feedback = FeedbackEngine.generateFeedback(student, activities, stats);

      res.json({
        success: true,
        data: feedback.alerts,
      });
    } catch (err) {
      console.error('Alerts fetch error:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch alerts',
        error: err.message,
      });
    }
  },

  /**
   * GET /api/feedback/:studentId/suggestions
   * Get only suggestions (actionable recommendations)
   */
  getSuggestions: async (req, res) => {
    try {
      const { studentId } = req.params;

      if (!studentId) {
        return res.status(400).json({
          success: false,
          message: 'Student ID is required',
        });
      }

      const student = await studentRepository.getStudentById(studentId);
      if (!student) {
        return res.status(404).json({
          success: false,
          message: 'Student not found',
        });
      }

      const activities = await activityRepository.getActivitiesByStudent(studentId);
      const stats = progressEngine.calculate(activities);
      const feedback = FeedbackEngine.generateFeedback(student, activities, stats);

      res.json({
        success: true,
        data: feedback.suggestions,
      });
    } catch (err) {
      console.error('Suggestions fetch error:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch suggestions',
        error: err.message,
      });
    }
  },

  /**
   * GET /api/feedback/:studentId/insights
   * Get only insights (awareness without action)
   */
  getInsights: async (req, res) => {
    try {
      const { studentId } = req.params;

      if (!studentId) {
        return res.status(400).json({
          success: false,
          message: 'Student ID is required',
        });
      }

      const student = await studentRepository.getStudentById(studentId);
      if (!student) {
        return res.status(404).json({
          success: false,
          message: 'Student not found',
        });
      }

      const activities = await activityRepository.getActivitiesByStudent(studentId);
      const stats = progressEngine.calculate(activities);
      const feedback = FeedbackEngine.generateFeedback(student, activities, stats);

      res.json({
        success: true,
        data: feedback.insights,
      });
    } catch (err) {
      console.error('Insights fetch error:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch insights',
        error: err.message,
      });
    }
  },

  /**
   * GET /api/feedback/:studentId/streak
   * Get current activity streak
   */
  getStreak: async (req, res) => {
    try {
      const { studentId } = req.params;

      if (!studentId) {
        return res.status(400).json({
          success: false,
          message: 'Student ID is required',
        });
      }

      const activities = await activityRepository.getActivitiesByStudent(studentId);
      const streak = FeedbackEngine.calculateStreak(activities);

      res.json({
        success: true,
        data: {
          streak,
          activities: activities.length,
        },
      });
    } catch (err) {
      console.error('Streak fetch error:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch streak',
        error: err.message,
      });
    }
  },
};

export default feedbackController;
