import { getDashboardData } from "../../services/dashboard.service.js";

/**
 * Get dashboard data for a student
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getDashboard = async (req, res) => {
  try {
    const { studentId } = req.params;

    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: "Student ID is required"
      });
    }

    const data = await getDashboardData(studentId);
    res.json({
      success: true,
      message: "Dashboard data retrieved successfully",
      data
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Failed to retrieve dashboard data";
    res.status(status).json({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
};
