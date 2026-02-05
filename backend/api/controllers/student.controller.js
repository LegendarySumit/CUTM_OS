import { registerStudent } from "../../services/student.service.js";

export const register = async (req, res) => {
  try {
    const student = await registerStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
