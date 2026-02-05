import { pool } from "../infrastructure/database/connection.js";
import { v4 as uuid } from "uuid";

export const createActivity = async (activity) => {
  const id = uuid();

  const query = `
    INSERT INTO activities
    (id, student_id, domain, action, metadata)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    id,
    activity.studentId,
    activity.domain,
    activity.action,
    activity.metadata || {}
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

export const getActivitiesByStudent = async (studentId) => {
  const result = await pool.query(
    "SELECT * FROM activities WHERE student_id = $1 ORDER BY created_at DESC",
    [studentId]
  );

  return result.rows;
};

export const deleteActivity = async (activityId, studentId) => {
  const query = `
    DELETE FROM activities
    WHERE id = $1 AND student_id = $2
    RETURNING *;
  `;

  const result = await pool.query(query, [activityId, studentId]);
  return result.rows[0];
};

export const activityRepository = {
  createActivity,
  getActivitiesByStudent,
  deleteActivity,
};
