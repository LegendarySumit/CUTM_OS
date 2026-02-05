import { createStudent, getStudentByEmail } from "../repositories/student.repository.js";

export const registerStudent = async (data) => {
  const existing = await getStudentByEmail(data.email);

  if (existing) {
    throw new Error("Student already exists");
  }

  if (!data.name || !data.email) {
    throw new Error("Missing required fields");
  }

  return await createStudent(data);
};
