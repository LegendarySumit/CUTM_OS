import apiClient from './api.js';

export const feedbackAPI = {
  // Get all feedback
  getFeedback: (studentId) => apiClient.get(`/feedback/${studentId}`),

  // Get alerts only
  getAlerts: (studentId) => apiClient.get(`/feedback/${studentId}/alerts`),

  // Get suggestions only
  getSuggestions: (studentId) => apiClient.get(`/feedback/${studentId}/suggestions`),

  // Get insights only
  getInsights: (studentId) => apiClient.get(`/feedback/${studentId}/insights`),

  // Get streak
  getStreak: (studentId) => apiClient.get(`/feedback/${studentId}/streak`),
};

export default feedbackAPI;
