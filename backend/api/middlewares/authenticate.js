// Simple authentication middleware
// In production, use JWT tokens for better security
export const authenticateStudent = (req, res, next) => {
  try {
    const { studentId } = req.params || req.body;
    
    if (!studentId) {
      return res.status(401).json({
        success: false,
        message: "Student ID is required for authentication"
      });
    }

    // Validate studentId is a non-empty string
    if (typeof studentId !== 'string' || studentId.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid Student ID format"
      });
    }

    req.studentId = studentId.trim();
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Authentication failed"
    });
  }
};

// Validate that request contains required fields
export const validateStudentId = (req, res, next) => {
  const studentId = req.params.studentId || req.body.studentId;
  
  if (!studentId) {
    return res.status(400).json({
      success: false,
      message: "Student ID is required"
    });
  }

  // Basic validation - should be a valid UUID
  if (!studentId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Student ID format"
    });
  }

  next();
};
