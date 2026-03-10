import { getFirestore } from "../infrastructure/database/firestore.js";
import { v4 as uuid } from "uuid";

const ACTIVITIES_COLLECTION = "activities";

export const createActivity = async (activity) => {
  const db = getFirestore();
  const id = uuid();

  const activityData = {
    id,
    studentId: activity.studentId,
    domain: activity.domain,
    action: activity.action,
    metadata: activity.metadata || {},
    createdAt: new Date(),
    updatedAt: new Date()
  };

  try {
    await db.collection(ACTIVITIES_COLLECTION).doc(id).set(activityData);
    return activityData;
  } catch (err) {
    throw new Error(`Failed to create activity: ${err.message}`);
  }
};

export const getActivitiesByStudent = async (studentId) => {
  const db = getFirestore();
  
  try {
    const snapshot = await db
      .collection(ACTIVITIES_COLLECTION)
      .where("studentId", "==", studentId)
      .get();

    // Sort in memory instead of using Firestore orderBy
    // This avoids requiring a composite index
    const activities = snapshot.docs.map(doc => doc.data());
    return activities.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (err) {
    throw new Error(`Failed to get activities: ${err.message}`);
  }
};

export const deleteActivity = async (activityId, studentId) => {
  const db = getFirestore();
  
  try {
    const doc = await db.collection(ACTIVITIES_COLLECTION).doc(activityId).get();
    
    if (!doc.exists || doc.data().studentId !== studentId) {
      return null;
    }

    const deletedData = doc.data();
    await db.collection(ACTIVITIES_COLLECTION).doc(activityId).delete();
    
    return deletedData;
  } catch (err) {
    throw new Error(`Failed to delete activity: ${err.message}`);
  }
};

export const activityRepository = {
  createActivity,
  getActivitiesByStudent,
  deleteActivity
};
