import apiClient from './api';

// Auth APIs
export const authAPI = {
  register: (data) => apiClient.post('/auth/register', data),
  login: (email, password) => apiClient.post('/auth/login', { email, password }),
  getProfile: (studentId) => apiClient.get(`/auth/profile/${studentId}`),
};

// Student APIs
export const studentAPI = {
  register: (data) => apiClient.post('/students/register', data),
  getById: (id) => apiClient.get(`/students/${id}`),
};

// Activity APIs
export const activityAPI = {
  create: (data) => apiClient.post('/activities', data),
  getByStudent: (studentId) => apiClient.get(`/activities/${studentId}`),
  delete: (id, studentId) => apiClient.delete(`/activities/${id}`, { data: { studentId } }),
};

// Dashboard APIs
export const dashboardAPI = {
  getDashboard: (studentId) => apiClient.get(`/dashboard/${studentId}`),
};

// Feedback APIs
export const feedbackAPI = {
  getFeedback: (studentId) => apiClient.get(`/feedback/${studentId}`),
  getAlerts: (studentId) => apiClient.get(`/feedback/${studentId}/alerts`),
  getSuggestions: (studentId) => apiClient.get(`/feedback/${studentId}/suggestions`),
  getInsights: (studentId) => apiClient.get(`/feedback/${studentId}/insights`),
  getStreak: (studentId) => apiClient.get(`/feedback/${studentId}/streak`),
};
