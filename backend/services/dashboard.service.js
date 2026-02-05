import { getStudentById } from "../repositories/student.repository.js";
import { getActivitiesByStudent } from "../repositories/activity.repository.js";
import ProgressEngine from "../engines/progress/progress.engine.js";

const progressEngine = new ProgressEngine();

export const getDashboardData = async (studentId) => {
  const student = await getStudentById(studentId);

  if (!student) {
    throw new Error("Student not found");
  }

  const activities = await getActivitiesByStudent(studentId);

  const progress = progressEngine.calculate(activities);

  return {
    student: {
      id: student.id,
      name: student.name,
      goal: student.goal,
      semester: student.semester
    },
    stats: progress,
    recentActivities: activities.slice(0, 5)
  };
};
