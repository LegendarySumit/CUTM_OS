/**
 * Feedback Engine
 * Converts behavioral data into actionable insights and alerts
 * This is the SOUL of CollegeOS - it tells students what to do
 */

export class FeedbackEngine {
  /**
   * Generate comprehensive feedback for a student
   * Based on: activities, consistency, readiness, time patterns
   */
  static generateFeedback(student, activities, stats) {
    if (!activities || activities.length === 0) {
      return {
        alerts: [this.getStarterAlert(student)],
        suggestions: this.getStarterSuggestions(student),
        streak: 0,
        trend: 'new',
      };
    }

    const feedback = {
      alerts: [],
      suggestions: [],
      streak: this.calculateStreak(activities),
      trend: this.calculateTrend(activities, stats),
      lastActivity: activities[0],
      insights: [],
    };

    // Generate alerts based on behavior patterns
    feedback.alerts.push(...this.generateAlerts(student, activities, stats));

    // Generate personalized suggestions
    feedback.suggestions.push(...this.generateSuggestions(student, activities, stats));

    // Generate insights
    feedback.insights.push(...this.generateInsights(student, activities, stats));

    return feedback;
  }

  /**
   * ALERTS - Critical feedback (urgent actions needed)
   */
  static generateAlerts(student, activities, stats) {
    const alerts = [];
    const now = new Date();
    const lastActivity = new Date(activities[0].created_at);
    const daysSinceActivity = Math.floor((now - lastActivity) / (1000 * 60 * 60 * 24));

    // Alert 1: No activity
    if (daysSinceActivity > 3) {
      alerts.push({
        id: 'inactivity',
        type: 'warning',
        severity: 'high',
        title: '⚠️ You\'re falling behind',
        message: `No activity for ${daysSinceActivity} days. Get back on track!`,
        action: 'Log an activity',
        actionUrl: '/prep',
      });
    }

    // Alert 2: Consistency dropped
    if (stats.consistency < 40 && activities.length > 10) {
      alerts.push({
        id: 'consistency-drop',
        type: 'warning',
        severity: 'high',
        title: '📉 Consistency dropped significantly',
        message: `Your consistency is ${stats.consistency}%. You need to be more regular.`,
        action: 'Build daily habits',
        actionUrl: '/dashboard',
      });
    }

    // Alert 3: Not revising
    const revisionCount = activities.filter(a => a.action.toLowerCase().includes('revise')).length;
    const totalActivities = activities.length;
    const revisionRatio = revisionCount / totalActivities;

    if (revisionRatio < 0.2 && totalActivities > 5) {
      alerts.push({
        id: 'no-revision',
        type: 'info',
        severity: 'medium',
        title: '🔄 You\'re not revising enough',
        message: 'Only solving problems? You need to revise concepts regularly.',
        action: 'Log a revision session',
        actionUrl: '/prep',
      });
    }

    // Alert 4: Readiness stagnant
    if (stats.readiness < 30 && activities.length > 15) {
      alerts.push({
        id: 'low-readiness',
        type: 'warning',
        severity: 'high',
        title: '⚡ Low readiness score',
        message: `Your readiness is only ${stats.readiness}%. Focus on preparation.`,
        action: 'Check prep guide',
        actionUrl: '/resources',
      });
    }

    return alerts;
  }

  /**
   * SUGGESTIONS - Actionable recommendations
   */
  static generateSuggestions(student, activities, stats) {
    const suggestions = [];

    // Suggestion 1: Domain focus
    const domainCounts = this.getDomainBreakdown(activities);
    const neglectedDomains = this.findNeglectedDomains(domainCounts, student.goal);

    if (neglectedDomains.length > 0) {
      suggestions.push({
        id: 'domain-focus',
        type: 'suggestion',
        title: `💡 Focus on ${neglectedDomains[0]}`,
        message: `You haven't worked on ${neglectedDomains[0]} recently. It's crucial for your goal.`,
        action: 'Start a session',
        actionUrl: '/prep',
        data: { domain: neglectedDomains[0] },
      });
    }

    // Suggestion 2: Increase pace
    const weeklyAverage = this.getWeeklyActivityCount(activities);
    if (weeklyAverage < 3 && activities.length > 0) {
      suggestions.push({
        id: 'increase-pace',
        type: 'suggestion',
        title: '⚡ You can do better',
        message: `Your goal needs ${student.dailyCapacityHours * 5} hours/week. You're at ${weeklyAverage} sessions/week.`,
        action: 'Plan your week',
        actionUrl: '/utilities',
      });
    }

    // Suggestion 3: System Design (if goal matches)
    if (student.goal === 'Competitive Programming' || student.goal === 'Placement') {
      const hasSystemDesign = activities.some(a => 
        a.domain.toLowerCase().includes('system') || 
        a.action.toLowerCase().includes('system')
      );
      
      if (!hasSystemDesign && activities.length > 10) {
        suggestions.push({
          id: 'system-design',
          type: 'suggestion',
          title: '🏗️ System Design matters',
          message: 'Placements require System Design. Start learning it now.',
          action: 'Learn system design',
          actionUrl: '/resources',
        });
      }
    }

    // Suggestion 4: Interview prep
    if (student.goal === 'Placement' && activities.length > 20) {
      const interviewSessions = activities.filter(a => 
        a.action.toLowerCase().includes('interview')
      ).length;

      if (interviewSessions === 0) {
        suggestions.push({
          id: 'interview-prep',
          type: 'suggestion',
          title: '🎤 Time for mock interviews',
          message: 'You\'ve done enough prep. Now practice interviews.',
          action: 'Schedule mock interview',
          actionUrl: '/utilities',
        });
      }
    }

    return suggestions;
  }

  /**
   * INSIGHTS - Educational feedback (no action needed, just awareness)
   */
  static generateInsights(student, activities, stats) {
    const insights = [];

    // Insight 1: Best time
    const bestTime = this.findBestTimeToStudy(activities);
    if (bestTime) {
      insights.push({
        id: 'best-time',
        type: 'insight',
        icon: '⏰',
        title: 'Your peak time',
        message: `You're most active around ${bestTime}. Schedule important tasks then.`,
      });
    }

    // Insight 2: Productivity pattern
    const pattern = this.identifyProductivityPattern(activities);
    if (pattern) {
      insights.push({
        id: 'pattern',
        type: 'insight',
        icon: '📊',
        title: 'Your pattern',
        message: pattern,
      });
    }

    // Insight 3: Progress
    if (stats.readiness > 70) {
      insights.push({
        id: 'great-progress',
        type: 'insight',
        icon: '🚀',
        title: 'You\'re crushing it!',
        message: `${stats.readiness}% readiness. You're well-prepared. Keep the momentum!`,
      });
    }

    return insights;
  }

  /**
   * Helper: Calculate activity streak
   */
  static calculateStreak(activities) {
    if (!activities.length) return 0;

    let streak = 1;
    const sortedActivities = [...activities].sort((a, b) => 
      new Date(b.created_at) - new Date(a.created_at)
    );

    for (let i = 1; i < sortedActivities.length; i++) {
      const curr = new Date(sortedActivities[i].created_at);
      const prev = new Date(sortedActivities[i - 1].created_at);
      const diffDays = (prev - curr) / (1000 * 60 * 60 * 24);

      if (diffDays <= 2) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }

  /**
   * Helper: Determine trend (improving, stable, declining)
   */
  static calculateTrend(activities, stats) {
    if (activities.length < 3) return 'new';

    const recent = activities.slice(0, Math.ceil(activities.length / 2));
    const older = activities.slice(Math.ceil(activities.length / 2));

    const recentCount = recent.length;
    const olderCount = older.length;
    const ratio = recentCount / (olderCount || 1);

    if (ratio > 1.5) return 'improving';
    if (ratio < 0.7) return 'declining';
    return 'stable';
  }

  /**
   * Helper: Get domain breakdown
   */
  static getDomainBreakdown(activities) {
    const breakdown = {};
    activities.forEach(a => {
      breakdown[a.domain] = (breakdown[a.domain] || 0) + 1;
    });
    return breakdown;
  }

  /**
   * Helper: Find neglected domains
   */
  static findNeglectedDomains(domainCounts, goal) {
    const requiredDomains = {
      'General Development': ['DSA', 'Web Dev', 'DB'],
      'Competitive Programming': ['DSA', 'OOP', 'System Design'],
      'Web Development': ['Web Dev', 'DB', 'System Design'],
      'Mobile Development': ['OOP', 'Database', 'API Design'],
      'Data Science': ['DSA', 'System Design', 'Database'],
      'Machine Learning': ['Python', 'DSA', 'Statistics'],
      'Cloud Computing': ['System Design', 'DevOps', 'Database'],
    };

    const needed = requiredDomains[goal] || requiredDomains['General Development'];
    return needed.filter(domain => !domainCounts[domain] || domainCounts[domain] < 2);
  }

  /**
   * Helper: Weekly activity count
   */
  static getWeeklyActivityCount(activities) {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return activities.filter(a => new Date(a.created_at) > oneWeekAgo).length;
  }

  /**
   * Helper: Find best time to study
   */
  static findBestTimeToStudy(activities) {
    const times = {};
    activities.forEach(a => {
      const hour = new Date(a.created_at).getHours();
      const period = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
      times[period] = (times[period] || 0) + 1;
    });

    const maxPeriod = Object.keys(times).reduce((a, b) => 
      times[a] > times[b] ? a : b
    );

    return maxPeriod;
  }

  /**
   * Helper: Identify productivity pattern
   */
  static identifyProductivityPattern(activities) {
    const weeklyCount = this.getWeeklyActivityCount(activities);
    
    if (weeklyCount >= 5) return 'You\'re very consistent. Excellent!';
    if (weeklyCount >= 3) return 'You\'re maintaining a good pace.';
    if (weeklyCount >= 1) return 'You\'re active but could be more consistent.';
    return null;
  }

  /**
   * Starter alerts for new users
   */
  static getStarterAlert(student) {
    return {
      id: 'welcome',
      type: 'info',
      severity: 'low',
      title: '👋 Welcome to CollegeOS!',
      message: `Hi ${student.name}! Log your first activity to get started.`,
      action: 'Log Activity',
      actionUrl: '/prep',
    };
  }

  /**
   * Starter suggestions for new users
   */
  static getStarterSuggestions(student) {
    return [
      {
        id: 'first-activity',
        type: 'suggestion',
        title: '🎯 Start your journey',
        message: 'Log what you studied today to build your activity memory.',
        action: 'Log first activity',
        actionUrl: '/prep',
      },
      {
        id: 'set-goal',
        type: 'suggestion',
        title: '🎓 You chose ' + student.goal,
        message: 'We\'ll track your progress toward this goal. Make every activity count!',
        action: 'View resources',
        actionUrl: '/resources',
      },
    ];
  }
}

export default FeedbackEngine;
