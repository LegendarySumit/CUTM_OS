export default class ProgressEngine {
  calculate(activities) {
    const total = activities.length;

    const prep = activities.filter(a => a.domain === "prep").length;
    const revision = activities.filter(a => a.domain === "revision").length;

    const readiness = Math.min(
      Math.round((prep * 5 + revision * 10)),
      100
    );

    const consistency = Math.min(
      Math.round((total / 7) * 100),
      100
    );

    return {
      totalActivities: total,
      prepCount: prep,
      revisionCount: revision,
      readiness,
      consistency
    };
  }
}

export const progressEngine = new ProgressEngine();
