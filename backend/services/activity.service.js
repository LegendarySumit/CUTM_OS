import { createActivity, getActivitiesByStudent, deleteActivity } from "../repositories/activity.repository.js";

/**
 * Log a new activity for a student
 * @param {Object} data - Activity data containing studentId, domain, and action
 * @returns {Promise} Created activity object
 */
export const logActivity = async (data) => {
  // Validate all required fields
  if (!data.studentId || typeof data.studentId !== 'string') {
    const err = new Error("Student ID is required and must be a valid string");
    err.status = 400;
    throw err;
  }
  if (!data.domain || typeof data.domain !== 'string') {
    const err = new Error("Domain is required and must be a valid string");
    err.status = 400;
    throw err;
  }
  if (!data.action || typeof data.action !== 'string') {
    const err = new Error("Action is required and must be a valid string");
    err.status = 400;
    throw err;
  }

  // Validate field lengths to prevent database issues
  if (data.studentId.trim().length === 0 || data.domain.trim().length === 0 || data.action.trim().length === 0) {
    const err = new Error("Required fields cannot be empty");
    err.status = 400;
    throw err;
  }

  try {
    return await createActivity(data);
  } catch (error) {
    error.status = error.status || 500;
    throw error;
  }
};

/**
 * Fetch all activities for a student
 * @param {string} studentId - Student ID
 * @returns {Promise} Array of activity objects
 */
export const fetchStudentActivities = async (studentId) => {
  if (!studentId || typeof studentId !== 'string') {
    const err = new Error("Student ID is required and must be a valid string");
    err.status = 400;
    throw err;
  }

  try {
    const activities = await getActivitiesByStudent(studentId);
    return activities || [];
  } catch (error) {
    error.status = error.status || 500;
    throw error;
  }
};

/**
 * Remove an activity
 * @param {string} activityId - Activity ID to delete
 * @param {string} studentId - Student ID for verification
 * @returns {Promise} Deleted activity object
 */
export const removeActivity = async (activityId, studentId) => {
  if (!activityId || typeof activityId !== 'string') {
    const err = new Error("Activity ID is required and must be a valid string");
    err.status = 400;
    throw err;
  }
  if (!studentId || typeof studentId !== 'string') {
    const err = new Error("Student ID is required and must be a valid string");
    err.status = 400;
    throw err;
  }

  try {
    return await deleteActivity(activityId, studentId);
  } catch (error) {
    error.status = error.status || 500;
    throw error;
  }
};
