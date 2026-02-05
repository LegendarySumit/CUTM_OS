import { useState, useEffect } from "react";
import { feedbackAPI } from "../../src/services";
import { AlertCircle, Lightbulb, Flame } from "lucide-react";

const AlertsCard = ({ studentId }) => {
  const [alerts, setAlerts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchFeedback = async () => {
      try {
        setLoading(true);
        const [alertsRes, suggestionsRes, streakRes] = await Promise.all([
          feedbackAPI.getAlerts(studentId),
          feedbackAPI.getSuggestions(studentId),
          feedbackAPI.getStreak(studentId),
        ]);

        if (isMounted) {
          setAlerts(alertsRes.data.data || []);
          setSuggestions(suggestionsRes.data.data || []);
          setStreak(streakRes.data.data?.streak || 0);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load system insights.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (studentId) {
      fetchFeedback();
    }

    return () => {
      isMounted = false;
    };
  }, [studentId]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg animate-pulse">
            <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-100 rounded"></div>
              <div className="h-4 bg-slate-100 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="text-red-800 text-base flex items-center gap-2 font-semibold">
          <AlertCircle size={20} />
          Error loading feedback: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Alerts Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <AlertCircle className="text-red-600 w-6 h-6" />
          <h3 className="text-xl font-bold text-primary-900">{alerts.length > 0 ? 'Alerts' : 'No Alerts'}</h3>
        </div>
        {alerts.length > 0 ? (
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <div
                key={alert.id || idx}
                className={`p-4 rounded-xl border-l-4 transition-all ${
                  alert.severity === "high"
                    ? "bg-red-50 border-l-red-600 hover:bg-red-100"
                    : "bg-amber-50 border-l-amber-600 hover:bg-amber-100"
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div className="text-xl flex-shrink-0 mt-0.5">
                    {alert.severity === "high" ? '🔴' : '🟡'}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 text-base">{alert.title}</p>
                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                      {alert.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">✨</div>
            <p className="text-slate-600 text-base font-medium">Great work! No alerts.</p>
          </div>
        )}
      </div>

      {/* Suggestions Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="text-orange-600 w-6 h-6" />
          <h3 className="text-xl font-bold text-primary-900">{suggestions.length > 0 ? 'Suggestions' : 'Tips'}</h3>
        </div>
        {suggestions.length > 0 ? (
          <div className="space-y-3">
            {suggestions.map((suggestion, idx) => (
              <div
                key={suggestion.id || idx}
                className="p-4 rounded-xl bg-orange-50 border-l-4 border-l-orange-600 hover:bg-orange-100 transition-all"
              >
                <div className="flex gap-3 items-start">
                  <div className="text-xl flex-shrink-0 mt-0.5">💡</div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 text-base">{suggestion.title}</p>
                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                      {suggestion.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-slate-600 text-base font-medium">Keep tracking your activities!</p>
          </div>
        )}
      </div>

      {/* Streak Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="text-orange-600 w-6 h-6" />
          <h3 className="text-xl font-bold text-primary-900">Current Streak</h3>
        </div>
        <div className="text-center py-8">
          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-3">
            {streak}
          </div>
          <p className="text-slate-800 font-bold text-lg mb-4">days of consistency</p>
          <div className="mt-6 pt-6 border-t-2 border-orange-200">
            <div className="flex items-center justify-center gap-2 bg-orange-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-orange-700 transition">
              <Flame size={18} />
              Keep it going!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsCard;
