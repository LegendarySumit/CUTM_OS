import { pool } from "../infrastructure/database/connection.js";
import { v4 as uuid } from "uuid";

export const createStudent = async (student) => {
  const id = uuid();

  const query = `
    INSERT INTO students
    (id, name, email, password, branch, semester, goal, daily_capacity_hours, created_at)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8, NOW())
    RETURNING *;
  `;

  const values = [
    id,
    student.name,
    student.email,
    student.password,
    student.branch || "Not Specified",
    student.semester || 1,
    student.goal || "General Development",
    student.dailyCapacityHours || 2
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};


export const getStudentByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM students WHERE email = $1",
    [email]
  );
  return result.rows[0];
};

export const getStudentById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM students WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

export const updateStudent = async (id, data) => {
  const fields = [];
  const values = [];
  let paramCount = 1;

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && key !== 'id' && key !== 'password') {
      const dbKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      fields.push(`${dbKey} = $${paramCount}`);
      values.push(value);
      paramCount++;
    }
  }

  if (fields.length === 0) {
    return getStudentById(id);
  }

  values.push(id);
  const query = `UPDATE students SET ${fields.join(', ')} WHERE id = $${paramCount} RETURNING *`;

  const result = await pool.query(query, values);
  return result.rows[0];
};

export const studentRepository = {
  createStudent,
  getStudentByEmail,
  getStudentById,
  updateStudent,
};
