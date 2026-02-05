import { loginStudent, registerStudent as registerStudentService } from "../../services/auth.service.js";

/**
 * Register a new student
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const register = async (req, res) => {
  try {
    const { name, email, password, branch, semester, goal, dailyCapacityHours } = req.body;

    // Validate required fields
    if (!name || !email || !password || !branch) {
      return res.status(400).json({
        success: false,
        message: "Name, email, password, and branch are required"
      });
    }

    const student = await registerStudentService({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
      branch,
      semester,
      goal,
      dailyCapacityHours
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: {
        id: student.id,
        name: student.name,
        email: student.email,
        branch: student.branch,
        semester: student.semester,
        goal: student.goal,
        dailyCapacityHours: student.daily_capacity_hours
      }
    });
  } catch (err) {
    const status = err.status || 400;
    const message = err.message || "Registration failed";
    res.status(status).json({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
};

/**
 * Login a student
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    const result = await loginStudent(email.toLowerCase().trim(), password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: result.id,
        name: result.name,
        email: result.email,
        branch: result.branch,
        semester: result.semester,
        goal: result.goal,
        dailyCapacityHours: result.daily_capacity_hours
      }
    });
  } catch (err) {
    const status = err.status || 401;
    const message = err.message || "Login failed";
    res.status(status).json({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
};

/**
 * Get student profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getProfile = async (req, res) => {
  try {
    const { studentId } = req.params;

    if (!studentId) {
      return res.status(400).json({
        success: false,
        message: "Student ID is required"
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: { studentId }
    });
  } catch (err) {
    const status = err.status || 400;
    const message = err.message || "Failed to fetch profile";
    res.status(status).json({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
  }
};
