import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../src/context/AuthContext";
import { dashboardAPI } from "../../src/services";
import AppLayout from "../../layout/AppLayout";
import { Card, CardBody, CardHeader, CardTitle } from "../../components/ui/Card";
import { Target, Flame, BookOpen, Calendar, CheckCircle2, TrendingUp, Clock, Award, Zap, ArrowRight } from "lucide-react";
import AlertsCard from "../../components/ui/AlertsCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    branch: user?.branch || '',
    semester: user?.semester || '',
    goal: user?.goal || '',
    dailyCapacityHours: user?.dailyCapacityHours || ''
  });
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: true,
    privateProfile: false,
    darkMode: false
  });

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
        setError(err.message);
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
            <p className="text-slate-500">Loading your dashboard...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  const readiness = dashboardData?.stats?.readiness || 0;
  const consistency = dashboardData?.stats?.consistency || 0;

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSave = () => {
    // Handle save logic here
    setEditProfileOpen(false);
  };

  const handleSettingChange = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <AppLayout>
      {/* Welcome Header */}
      <div className="mb-10 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl border-2 border-primary-200 p-6 sm:p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">{user?.name?.split(' ')[0]}</span>! 👋
            </h1>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              ✨ Your learning dashboard at a glance
            </p>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-1 w-10 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
              <p className="text-xs sm:text-sm text-slate-600">Semester {user?.semester} • {user?.branch}</p>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-8 flex items-start gap-3">
          <span className="text-xl">⚠️</span>
          <div>
            <p className="font-semibold">Alert</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Key Metrics - Enhanced Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Readiness Card */}
        <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-blue-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-slate-700 text-sm font-semibold mb-2">Readiness</p>
          <div className="text-4xl font-bold text-primary-900 mb-2">{readiness}%</div>
          <p className="text-sm text-slate-600 mb-4">Prep & revision score</p>
          <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: `${readiness}%` }}></div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-100">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${readiness >= 70 ? 'bg-green-100 text-green-700' : readiness >= 40 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
              {readiness >= 70 ? '✓ On Track' : readiness >= 40 ? '⚠ Keep Going' : '📊 Need Focus'}
            </span>
          </div>
        </div>

        {/* Consistency Card */}
        <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Flame className="w-7 h-7 text-orange-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-slate-700 text-sm font-semibold mb-2">Consistency</p>
          <div className="text-4xl font-bold text-primary-900 mb-2">{consistency}%</div>
          <p className="text-sm text-slate-600 mb-4">Weekly consistency</p>
          <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: `${consistency}%` }}></div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-100">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${consistency >= 80 ? 'bg-orange-100 text-orange-700' : consistency >= 50 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
              {consistency >= 80 ? '🔥 Amazing Streak' : consistency >= 50 ? '📈 Building Momentum' : '🚀 Start Streak'}
            </span>
          </div>
        </div>

        {/* Activities Card */}
        <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-2xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <Award className="w-5 h-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-slate-700 text-sm font-semibold mb-2">Activities</p>
          <div className="text-4xl font-bold text-primary-900 mb-2">{dashboardData?.stats?.totalActivities || 0}</div>
          <p className="text-sm text-slate-600 mb-4">Total sessions logged</p>
          <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" style={{ width: `${Math.min((dashboardData?.stats?.totalActivities || 0) * 10, 100)}%` }}></div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-100 text-xs text-slate-600">
            <p>📅 This week: <span className="font-semibold text-slate-900">{Math.floor(Math.random() * 5) + 2} sessions</span></p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7 text-purple-600" />
            </div>
            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{user?.branch}</span>
          </div>
          <p className="text-slate-700 text-sm font-semibold mb-2">Semester</p>
          <div className="text-4xl font-bold text-primary-900 mb-2">S{user?.semester}</div>
          <p className="text-sm text-slate-600 mb-4">{user?.branch} Program</p>
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
            <span className="text-sm text-slate-600 block">Last updated today</span>
            <button
              onClick={() => navigate('/profile?scroll=edit')}
              className="w-full px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>👤</span>
              Edit Profile
            </button>
          </div>
        </div>
      </div>


      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Readiness Progress - Enhanced */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary-900 flex items-center gap-2">
                <Target className="text-blue-600 w-6 h-6" />
                Readiness Progress
              </h3>
              <p className="text-sm text-slate-600 mt-1">Track your preparation level</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{readiness}%</div>
              <div className="text-sm text-slate-600">On track</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-semibold text-sm">Overall Score</span>
                <span className="text-slate-700 text-sm font-medium">{readiness} / 100</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${readiness}%` }}
                ></div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 leading-relaxed">
                💡 Keep working on your prep to improve this score! Focus on weak areas and practice consistently.
              </p>
            </div>
          </div>
        </div>

        {/* Consistency Progress - Enhanced */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary-900 flex items-center gap-2">
                <Flame className="text-orange-600 w-6 h-6" />
                Weekly Consistency
              </h3>
              <p className="text-sm text-slate-600 mt-1">Your daily engagement streak</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-600">{consistency}%</div>
              <div className="text-sm text-slate-600">This week</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-semibold text-sm">Weekly Score</span>
                <span className="text-slate-700 text-sm font-medium">{consistency} / 100</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500"
                  style={{ width: `${consistency}%` }}
                ></div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 leading-relaxed">
                🔥 Stay consistent with daily study sessions! A steady routine builds strong foundations.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* System Feedback Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary-900 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            System Insights
          </h2>
          <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Real-time</span>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
          <AlertsCard studentId={user?.id} />
        </div>
      </div>

      {/* Bottom Section - Tips & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        {/* Study Tips Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Study Tips
          </h3>
          <div className="space-y-3">
            {[
              { icon: "✓", tip: "Solve problems daily for consistency", color: "green" },
              { icon: "✓", tip: "Review mistakes after each session", color: "green" },
              { icon: "✓", tip: "Track your progress weekly", color: "green" },
              { icon: "✓", tip: "Focus on weak areas first", color: "green" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 hover:border-green-300 hover:shadow-md transition-all duration-300 group">
                <span className="text-2xl flex-shrink-0 text-green-600 group-hover:scale-125 transition-transform">{item.icon}</span>
                <span className="text-slate-700 font-medium text-base group-hover:text-slate-900">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Goals Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            Weekly Goals
          </h3>
          <div className="space-y-5">
            {/* Problems Solved Goal */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50 hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-slate-700 font-bold text-lg">Problems Solved</p>
                  <p className="text-sm text-slate-600 mt-1">Target: 25 problems</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-blue-600">15/25</span>
                  <p className="text-xs text-slate-600 mt-1">60% complete</p>
                </div>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm text-blue-700 font-medium mt-3 flex items-center gap-2">💪 Keep going! Solve 10 more to reach your goal</p>
            </div>

            {/* Study Hours Goal */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200/50 hover:border-orange-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-slate-700 font-bold text-lg">Study Hours</p>
                  <p className="text-sm text-slate-600 mt-1">Target: 14 hours</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-orange-600">10/14</span>
                  <p className="text-xs text-slate-600 mt-1">71% complete</p>
                </div>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500" style={{ width: '71%' }}></div>
              </div>
              <p className="text-sm text-orange-700 font-medium mt-3 flex items-center gap-2">🔥 Almost there! Just 4 more hours to complete</p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;