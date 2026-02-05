import bcrypt from "bcryptjs";
import { createStudent, getStudentByEmail, updateStudent } from "../repositories/student.repository.js";

export const registerStudent = async (data) => {
  const existing = await getStudentByEmail(data.email);

  if (existing) {
    throw new Error("Student already exists with this email");
  }

  if (!data.name || !data.email || !data.password) {
    throw new Error("Name, email, and password are required");
  }

  if (data.password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  // Hash password before storing
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const studentData = { ...data, password: hashedPassword };

  return await createStudent(studentData);
};

export const loginStudent = async (email, password) => {
  const student = await getStudentByEmail(email);

  if (!student) {
    throw new Error("Invalid email or password");
  }

  // Compare password with hashed password
  const isPasswordValid = await bcrypt.compare(password, student.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  return student;
};

export const updateStudentProfile = async (studentId, data) => {
  const student = await updateStudent(studentId, data);

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
};
