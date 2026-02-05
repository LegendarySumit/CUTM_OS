import { logActivity, fetchStudentActivities, removeActivity } from "../../services/activity.service.js";

/**
 * Create a new activity log
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const create = async (req, res) => {
  try {
    const activity = await logActivity(req.body);
    res.status(201).json({
      success: true,
      message: "Activity logged successfully",
      data: activity
    });
  } catch (err) {
    const status = err.status || 400;
    const message = err.message || "Failed to log activity";
    res.status(status).json({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
};

/**
 * Get all activities for a student
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    
    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: "Student ID is required"
      });
    }

    const activities = await fetchStudentActivities(studentId);
    res.json({
      success: true,
      message: "Activities retrieved successfully",
      data: activities || []
    });
  } catch (err) {
    const status = err.status || 400;
    const message = err.message || "Failed to fetch activities";
    res.status(status).json({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
};

/**
 * Delete an activity by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId } = req.body;

    if (!id || !studentId) {
      return res.status(400).json({
        success: false,
        message: "Activity ID and Student ID are required"
      });
    }

    const activity = await removeActivity(id, studentId);
    
    if (!activity) {
      return res.status(404).json({
        success: false,
        message: "Activity not found or unauthorized"
      });
    }

    res.json({
      success: true,
      message: "Activity deleted successfully",
      data: activity
    });
  } catch (err) {
    const status = err.status || 400;
    const message = err.message || "Failed to delete activity";
    res.status(status).json({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
};
