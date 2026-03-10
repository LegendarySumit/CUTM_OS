import { getFirestore } from "../infrastructure/database/firestore.js";
import { v4 as uuid } from "uuid";

const STUDENTS_COLLECTION = "students";

export const createStudent = async (student) => {
  const db = getFirestore();
  const id = uuid();

  const studentData = {
    id,
    name: student.name,
    email: student.email,
    password: student.password,
    branch: student.branch || "Not Specified",
    semester: student.semester || 1,
    goal: student.goal || "General Development",
    dailyCapacityHours: student.dailyCapacityHours || 2,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  try {
    await db.collection(STUDENTS_COLLECTION).doc(id).set(studentData);
    return studentData;
  } catch (err) {
    throw new Error(`Failed to create student: ${err.message}`);
  }
};

export const getStudentByEmail = async (email) => {
  const db = getFirestore();
  try {
    const snapshot = await db
      .collection(STUDENTS_COLLECTION)
      .where("email", "==", email)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    return snapshot.docs[0].data();
  } catch (err) {
    throw new Error(`Failed to get student by email: ${err.message}`);
  }
};

export const getStudentById = async (id) => {
  const db = getFirestore();
  try {
    const doc = await db.collection(STUDENTS_COLLECTION).doc(id).get();

    if (!doc.exists) {
      return null;
    }

    return doc.data();
  } catch (err) {
    throw new Error(`Failed to get student by ID: ${err.message}`);
  }
};

export const updateStudent = async (id, data) => {
  const db = getFirestore();
  
  // Remove fields that shouldn't be updated
  const updateData = { ...data };
  delete updateData.id;
  delete updateData.password;
  
  // Convert camelCase keys to match Firestore structure
  if (updateData.dailyCapacityHours !== undefined) {
    updateData.dailyCapacityHours = updateData.dailyCapacityHours;
  }
  
  updateData.updatedAt = new Date();

  try {
    await db.collection(STUDENTS_COLLECTION).doc(id).update(updateData);
    return getStudentById(id);
  } catch (err) {
    throw new Error(`Failed to update student: ${err.message}`);
  }
};

export const studentRepository = {
  createStudent,
  getStudentByEmail,
  getStudentById,
  updateStudent
};
