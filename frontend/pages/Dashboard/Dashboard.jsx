import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../src/context/AuthContext";
import { dashboardAPI } from "../../src/services";
import AppLayout from "../../layout/AppLayout";
import { Target, Flame, CheckCircle, Clock, BookOpen, BarChart3, Settings, AlertCircle, ArrowRight, Zap, TrendingUp } from "lucide-react";
import AlertsCard from "../../components/ui/AlertsCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        if (user?.id) {
          const response = await dashboardAPI.getDashboard(user.id);
          setDashboardData(response.data);
        }
      } catch (err) {
        setError("Unable to load dashboard data. Please refresh the page.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600">Loading your dashboard...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  const readiness = dashboardData?.stats?.readiness || 0;
  const consistency = dashboardData?.stats?.consistency || 0;
  const totalSessions = dashboardData?.stats?.totalActivities || 0;

  return (
    <AppLayout>
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 border border-primary-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 opacity-10 rounded-full -mr-48 -mt-48"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-200 text-sm font-semibold mb-2">Welcome back</p>
                <h1 className="text-4xl font-bold text-white mb-3">{user?.name?.split(' ')[0] || 'Student'}</h1>
                <div className="flex items-center gap-4 text-sm text-primary-100">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    {user?.branch} • Semester {user?.semester}
                  </span>
                </div>
              </div>
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 px-4 py-3 bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
              >
                <Settings size={18} />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <p className="font-semibold text-red-900">Error</p>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Key Metrics Grid - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Readiness Score */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary-100 rounded-lg">
              <Target className="text-primary-600" size={24} />
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              readiness >= 70 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
            }`}>
              {readiness >= 70 ? 'Excellent' : 'Good'}
            </span>
          </div>
          <h3 className="text-slate-600 text-xs font-semibold mb-3">READINESS SCORE</h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-bold text-primary-600">{readiness}</span>
            <span className="text-slate-500 text-sm">/100</span>
          </div>
          <div className="w-full bg-primary-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full transition-all"
              style={{ width: `${readiness}%` }}
            ></div>
          </div>
          <p className="text-slate-500 text-xs mt-3">Prep & revision progress</p>
        </div>

        {/* Consistency */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-secondary-100 rounded-lg">
              <Flame className="text-secondary-600" size={24} />
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              consistency >= 80 ? 'bg-secondary-100 text-secondary-700' : 'bg-slate-100 text-slate-700'
            }`}>
              {consistency >= 80 ? 'Hot' : 'Building'}
            </span>
          </div>
          <h3 className="text-slate-600 text-xs font-semibold mb-3">CONSISTENCY</h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-bold text-secondary-600">{consistency}</span>
            <span className="text-slate-500 text-sm">/100</span>
          </div>
          <div className="w-full bg-secondary-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-full rounded-full transition-all"
              style={{ width: `${consistency}%` }}
            ></div>
          </div>
          <p className="text-slate-500 text-xs mt-3">Weekly engagement streak</p>
        </div>

        {/* Sessions Logged */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-accent-100 rounded-lg">
              <CheckCircle className="text-accent-600" size={24} />
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent-100 text-accent-700">Active</span>
          </div>
          <h3 className="text-slate-600 text-xs font-semibold mb-3">SESSIONS LOGGED</h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-bold text-accent-600">{totalSessions}</span>
            <span className="text-slate-500 text-sm">total</span>
          </div>
          <div className="pt-4 border-t border-slate-200">
            <p className="text-slate-600 text-xs font-semibold"><span className="text-accent-600">5 sessions</span> this week</p>
          </div>
        </div>
      </div>

      {/* Today's Target & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Today's Target */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-slate-600 text-xs font-semibold mb-3">TODAY'S TARGET</h3>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold text-primary-700">{user?.dailyCapacityHours || 2}</span>
                <span className="text-slate-700 font-semibold text-sm mb-2">Hours</span>
              </div>
            </div>
            <Clock className="text-primary-600" size={28} />
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-600 font-semibold">Progress</span>
              <span className="text-xs font-bold text-primary-600">25%</span>
            </div>
            <div className="w-full bg-primary-100 rounded-full h-2 overflow-hidden">
              <div className="bg-primary-600 h-full w-1/4 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Quick Actions - Enhanced */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-slate-900 text-sm font-bold mb-6">QUICK ACCESS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tools Button */}
            <button
              onClick={() => navigate('/utilities')}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white border border-accent-200 rounded-lg group-hover:shadow-md transition-shadow">
                    <Zap className="text-accent-600" size={24} />
                  </div>
                  <ArrowRight size={20} className="text-accent-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Tools & Utilities</h4>
                <p className="text-slate-600 text-xs">Time tracking, calculators & more</p>
              </div>
            </button>

            {/* Prep Button */}
            <button
              onClick={() => navigate('/prep')}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white border border-primary-200 rounded-lg group-hover:shadow-md transition-shadow">
                    <BookOpen className="text-primary-600" size={24} />
                  </div>
                  <ArrowRight size={20} className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Prep Activities</h4>
                <p className="text-slate-600 text-xs">Questions, assignments & exercises</p>
              </div>
            </button>

            {/* Resources Button */}
            <button
              onClick={() => navigate('/resources')}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-secondary-100 border border-secondary-200"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-secondary-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white border border-secondary-200 rounded-lg group-hover:shadow-md transition-shadow">
                    <BarChart3 className="text-secondary-600" size={24} />
                  </div>
                  <ArrowRight size={20} className="text-secondary-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Learning Resources</h4>
                <p className="text-slate-600 text-xs">Notes, videos, tutorials & guides</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Learning Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Module */}
          <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Current Module</h4>
            <p className="text-slate-900 font-semibold text-sm mb-3">Data Structures</p>
            <div className="bg-primary-200 rounded-full h-2 mb-2 overflow-hidden">
              <div className="bg-primary-600 h-full w-3/4 rounded-full"></div>
            </div>
            <p className="text-xs text-slate-600">75% Complete</p>
          </div>

          {/* Study Streak */}
          <div className="bg-secondary-50 rounded-lg p-4 border border-secondary-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Study Streak</h4>
            <p className="text-4xl font-bold text-secondary-600 mb-2">12</p>
            <p className="text-xs text-slate-600">Consecutive days</p>
          </div>

          {/* Goal Progress */}
          <div className="bg-accent-50 rounded-lg p-4 border border-accent-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Problems Solved</h4>
            <p className="text-slate-900 font-semibold text-sm mb-3">10 / 50</p>
            <div className="bg-accent-200 rounded-full h-2 overflow-hidden">
              <div className="bg-accent-600 h-full w-1/5 rounded-full"></div>
            </div>
            <p className="text-xs text-slate-600 mt-2">20% progress</p>
          </div>
        </div>
      </div>

      {/* System Insights */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-6">System Insights</h3>
        <AlertsCard studentId={user?.id} />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
