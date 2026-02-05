import { useMemo } from 'react';

/**
 * ContributionGraph Component
 * Displays a GitHub-style contribution heatmap showing daily activities
 * Color intensity indicates contribution level
 */
const ContributionGraph = ({ activities = [] }) => {
  // Generate contribution data for the past year
  const getContributionData = () => {
    const today = new Date();
    const oneYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
    
    // Create a map of dates to activity counts
    const activityMap = {};
    activities.forEach((activity) => {
      const date = new Date(activity.created_at);
      const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD format
      activityMap[dateKey] = (activityMap[dateKey] || 0) + 1;
    });

    // Generate all dates for the past year
    const dates = [];
    const currentDate = new Date(oneYearAgo);
    while (currentDate <= today) {
      const dateKey = currentDate.toISOString().split('T')[0];
      dates.push({
        date: new Date(currentDate),
        dateKey,
        count: activityMap[dateKey] || 0,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  // Get color based on contribution count
  const getColor = (count) => {
    if (count === 0) return 'bg-slate-100';
    if (count === 1) return 'bg-green-200';
    if (count === 2) return 'bg-green-400';
    if (count === 3) return 'bg-green-600';
    return 'bg-green-800';
  };

  const contributionData = useMemo(() => getContributionData(), [activities]);

  // Group dates by week (starting Monday)
  const weeks = [];
  let currentWeek = [];

  contributionData.forEach((day) => {
    const dayOfWeek = day.date.getDay();
    // Adjust so that Monday is 0
    const adjustedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    
    currentWeek[adjustedDay] = day;

    if (adjustedDay === 6 || day.date === contributionData[contributionData.length - 1].date) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // Get month labels for the x-axis
  const getMonthLabels = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const labels = [];
    let lastMonth = null;

    contributionData.forEach((day, idx) => {
      const month = day.date.getMonth();
      if (month !== lastMonth && idx % 7 === 0) {
        labels.push({
          month: months[month],
          position: Math.floor(idx / 7),
        });
        lastMonth = month;
      }
    });

    return labels;
  };

  const monthLabels = useMemo(() => getMonthLabels(), [contributionData]);

  // Get day labels (Mon, Tue, etc.)
  const dayLabels = ['Mon', 'Wed', 'Fri', 'Sun'];

  // Calculate total contributions
  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);
  const currentStreak = calculateStreak(contributionData);
  const maxContributions = Math.max(...contributionData.map((d) => d.count), 0);

  return (
    <div className="w-full">
      {/* Stats Row */}
      <div className="flex flex-wrap gap-6 mb-6 text-sm">
        <div>
          <span className="font-semibold text-slate-900">{totalContributions}</span>
          <span className="text-slate-600 ml-1">total contributions</span>
        </div>
        <div>
          <span className="font-semibold text-slate-900">{currentStreak}</span>
          <span className="text-slate-600 ml-1">day streak 🔥</span>
        </div>
        <div>
          <span className="font-semibold text-slate-900">
            {maxContributions}
          </span>
          <span className="text-slate-600 ml-1">peak activity</span>
        </div>
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto">
        <div className="flex gap-1 pb-4">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between text-xs text-slate-600 pr-2 pt-6">
            {dayLabels.map((day) => (
              <div key={day} className="h-3">{day}</div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div className="flex gap-1">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1">
                {/* Month label */}
                {weekIdx === 0 && (
                  <div className="h-5 flex items-center text-xs text-slate-600 font-semibold px-1">
                    {monthLabels.length > 0 && monthLabels[0]?.month}
                  </div>
                )}
                {monthLabels.some((label) => label.position === weekIdx) && weekIdx !== 0 && (
                  <div className="h-5 flex items-center text-xs text-slate-600 font-semibold px-1">
                    {monthLabels.find((label) => label.position === weekIdx)?.month}
                  </div>
                )}
                {!monthLabels.some((label) => label.position === weekIdx) && weekIdx !== 0 && (
                  <div className="h-5"></div>
                )}

                {/* Days in week */}
                {week.map((day, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`w-3 h-3 rounded-sm ${
                      day ? getColor(day.count) : 'bg-slate-50'
                    } hover:ring-1 hover:ring-offset-1 hover:ring-slate-400 cursor-pointer transition-all group relative`}
                    title={day ? `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.dateKey}` : 'No data'}
                  >
                    {/* Tooltip */}
                    {day && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {day.count} contribution{day.count !== 1 ? 's' : ''} on {day.dateKey}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-200">
        <span className="text-xs text-slate-600 font-medium">Less</span>
        <div className="flex gap-1">
          {['bg-slate-100', 'bg-green-200', 'bg-green-400', 'bg-green-600', 'bg-green-800'].map(
            (color, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-sm ${color} border border-slate-300`}
              ></div>
            )
          )}
        </div>
        <span className="text-xs text-slate-600 font-medium">More</span>
      </div>
    </div>
  );
};

/**
 * Calculate the current contribution streak
 */
function calculateStreak(dates) {
  if (dates.length === 0) return 0;

  let streak = 0;
  // Start from the most recent date and work backwards
  for (let i = dates.length - 1; i >= 0; i--) {
    if (dates[i].count > 0) {
      streak++;
    } else {
      // If we've built a streak, stop at the first gap
      if (streak > 0) break;
    }
  }

  return streak;
}

export default ContributionGraph;
