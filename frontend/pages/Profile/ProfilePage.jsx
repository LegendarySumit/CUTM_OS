import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../src/context/AuthContext";
import { activityAPI } from "../../src/services";
import AppLayout from "../../layout/AppLayout";
import Card from "../../components/ui/Card";
import ContributionGraph from "../../components/sections/ContributionGraph";
import { Calendar, Zap, Code, Target, Flame, Trophy, Star, Settings, Bell, Github } from "lucide-react";
import { FaUser, FaEnvelope, FaGraduationCap, FaBook, FaBullseye, FaSave } from "react-icons/fa";

const ProfilePage = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [activitiesLoading, setActivitiesLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    branch: user?.branch || "",
    semester: user?.semester || 1,
    goal: user?.goal || "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    privateProfile: false,
    darkMode: false,
  });

  // Fetch activities on component mount
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        if (user?.id) {
          const response = await activityAPI.getByStudent(user.id);
          let activitiesData = [];
          if (Array.isArray(response.data)) {
            activitiesData = response.data;
          } else if (response.data && typeof response.data === 'object') {
            activitiesData = response.data.data || response.data.activities || [];
          }
          setActivities(activitiesData);
        }
      } catch (err) {
        console.error("Error fetching activities:", err);
      } finally {
        setActivitiesLoading(false);
      }
    };

    fetchActivities();
  }, [user?.id]);

  // Scroll to edit form if coming from dashboard
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scroll') === 'edit') {
      setTimeout(() => {
        const element = document.getElementById('edit-profile-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Update profile through API
      // Note: Implement actual profile update API call when backend endpoint is ready
      setTimeout(() => {
        setSaving(false);
      }, 1000);
    } catch (err) {
      setError("Failed to save profile. Please try again.");
      setSaving(false);
    }
  };

  const handleSettingChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AppLayout>
      {/* Professional Header */}
      <div className="mb-12 bg-gradient-to-r from-primary-900 via-primary-700 to-secondary-600 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
        {/* Stars Background - Consistent Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-300 text-opacity-30"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
                fontSize: `${12 + (i % 3) * 4}px`,
                animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i * 0.1)}s`,
              }}
            >
              ★
            </div>
          ))}
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-primary-100">Manage your account and view your achievements</p>
        </div>
      </div>

      {/* Professional Profile Section - GitHub/LeetCode Style */}
      <div className="mb-12 bg-white rounded-2xl border border-slate-200 p-12 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Profile Header - Left Side */}
          <div className="md:col-span-1 flex flex-col items-center gap-6">
            {/* Avatar */}
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center text-white text-7xl font-bold shadow-lg ring-4 ring-primary-100 hover:scale-105 transition-transform">
              {user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
            
            {/* User Info */}
            <div className="text-center w-full">
              <h2 className="text-2xl font-bold text-primary-900">{user?.name}</h2>
              <p className="text-slate-500 text-sm mt-1">{user?.email}</p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="text-xs font-bold text-white bg-primary-600 px-3 py-1.5 rounded-full">
                  {user?.branch}
                </span>
                <span className="text-xs font-bold text-white bg-secondary-600 px-3 py-1.5 rounded-full">
                  Sem {user?.semester}
                </span>
                <span className="text-xs font-bold text-white bg-accent-600 px-3 py-1.5 rounded-full">
                  {user?.goal}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3 w-full flex-col pt-4 border-t border-slate-200">
              <button 
                onClick={() => document.getElementById('edit-profile-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-50 border border-primary-300 rounded-lg hover:bg-primary-100 transition-all text-primary-600 font-semibold text-sm"
              >
                <FaUser className="w-4 h-4" />
                Edit Profile
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg hover:bg-slate-100 transition-all text-slate-600 font-semibold text-sm"
                onClick={() => document.getElementById('settings-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>

          {/* Stats Grid - Right Side */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-6">
            {/* Current Streak */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6 hover:shadow-lg transition-all group text-center">
              <div className="flex justify-center mb-3">
                <Flame className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-bold text-orange-600 block mb-3">STREAK</span>
              <div className="text-5xl font-bold text-orange-900">7</div>
              <p className="text-sm text-orange-700 mt-2 font-semibold">Days</p>
            </div>

            {/* Month Activity Count */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6 hover:shadow-lg transition-all group text-center">
              <div className="flex justify-center mb-3">
                <Calendar className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-bold text-blue-600 block mb-3">MONTH</span>
              <div className="text-5xl font-bold text-blue-900">24</div>
              <p className="text-sm text-blue-700 mt-2 font-semibold">Activities</p>
            </div>

            {/* Weekly Count */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 p-6 hover:shadow-lg transition-all group text-center">
              <div className="flex justify-center mb-3">
                <Zap className="w-8 h-8 text-yellow-600 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-bold text-yellow-600 block mb-3">WEEKLY</span>
              <div className="text-5xl font-bold text-yellow-900">6</div>
              <p className="text-sm text-yellow-700 mt-2 font-semibold">Sessions</p>
            </div>

            {/* Total Contribution */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-6 hover:shadow-lg transition-all group text-center">
              <div className="flex justify-center mb-3">
                <Code className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-bold text-green-600 block mb-3">TOTAL</span>
              <div className="text-5xl font-bold text-green-900">48h</div>
              <p className="text-sm text-green-700 mt-2 font-semibold">Study Hours</p>
            </div>

            {/* Readiness Score */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 p-6 hover:shadow-lg transition-all group text-center">
              <div className="flex justify-center mb-3">
                <Target className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-bold text-primary-600 block mb-3">READY</span>
              <div className="text-5xl font-bold text-primary-900">72%</div>
              <p className="text-sm text-primary-700 mt-2 font-semibold">Readiness</p>
            </div>

            {/* Consistency Rate */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 p-6 hover:shadow-lg transition-all group text-center">
              <div className="flex justify-center mb-3">
                <Flame className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-bold text-red-600 block mb-3">CONS</span>
              <div className="text-5xl font-bold text-red-900">85%</div>
              <p className="text-sm text-red-700 mt-2 font-semibold">Consistency</p>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub-Style Activity Heatmap Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary-900 flex items-center gap-2 mb-6">
          <Github className="w-7 h-7" />
          Contribution Activity
        </h2>
        
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
          {activitiesLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-slate-600">Loading your contribution graph...</p>
              </div>
            </div>
          ) : (
            <ContributionGraph activities={activities} />
          )}
        </div>
      </div>

      {/* Credentials & Achievements Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary-900 flex items-center gap-2 mb-6">
          <Trophy className="w-7 h-7" />
          Achievements & Badges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Badge 1 - Learning Path */}
          <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl border border-blue-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                📚
              </div>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Learning Pathfinder</h3>
            <p className="text-sm text-slate-600 mb-3">Completed multiple courses</p>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-primary-600" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-slate-600 mt-2">65% progress</p>
          </div>

          {/* Badge 2 - Consistency Master */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                🔥
              </div>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Consistency Master</h3>
            <p className="text-sm text-slate-600 mb-3">Maintained 85% consistency</p>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-400 to-red-600" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-slate-600 mt-2">85% Complete</p>
          </div>

          {/* Badge 3 - Rising Star */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                ⭐
              </div>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Rising Star</h3>
            <p className="text-sm text-slate-600 mb-3">7 day streak going strong</p>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-400 to-pink-600" style={{ width: '70%' }}></div>
            </div>
            <p className="text-xs text-slate-600 mt-2">Keep it up! 🚀</p>
          </div>

          {/* Badge 4 - Problem Solver */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                💡
              </div>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Problem Solver</h3>
            <p className="text-sm text-slate-600 mb-3">Tackled complex challenges</p>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-emerald-600" style={{ width: '72%' }}></div>
            </div>
            <p className="text-xs text-slate-600 mt-2">72% progress</p>
          </div>

          {/* Badge 5 - Semester Star */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                🏆
              </div>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Semester {user?.semester} Star</h3>
            <p className="text-sm text-slate-600 mb-3">Enrolled in {user?.branch} program</p>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-slate-600 mt-2">85% semester progress</p>
          </div>

          {/* Badge 6 - Top Contributor */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                👑
              </div>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Top Contributor</h3>
            <p className="text-sm text-slate-600 mb-3">Daily learning commitment</p>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-400 to-blue-600" style={{ width: '90%' }}></div>
            </div>
            <p className="text-xs text-slate-600 mt-2">90% excellence level</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div id="edit-profile-form" className="mb-12">
        <Card className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Edit Your Information</h3>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaEnvelope className="inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>

            {/* Branch and Semester */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaGraduationCap className="inline mr-2" />
                  Branch
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {["CSE", "ECE", "Mechanical", "Civil", "IT", "Other"].map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaBook className="inline mr-2" />
                  Semester
                </label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                    <option key={s} value={s}>
                      Semester {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBullseye className="inline mr-2" />
                Learning Goal
              </label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {[
                  "General Development",
                  "Competitive Programming",
                  "Web Development",
                  "Mobile Development",
                  "Data Science",
                  "Machine Learning",
                  "Cloud Computing",
                ].map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Save Button */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition font-medium disabled:opacity-50"
              >
                <FaSave /> {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </Card>
      </div>

      {/* Settings Section */}
      <div id="settings-section" className="mb-12">
        <Card className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-8 flex items-center gap-3">
            <Settings className="w-6 h-6 text-primary-600" />
            Settings & Preferences
          </h3>

          <div className="space-y-6">
            {/* Notifications Section */}
            <div className="border-b border-slate-200 pb-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Notifications</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-600 mt-1">Receive email updates about your activities</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={() => handleSettingChange('emailNotifications')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Push Notifications</p>
                    <p className="text-sm text-gray-600 mt-1">Get push notifications on your device</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={() => handleSettingChange('pushNotifications')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Weekly Report</p>
                    <p className="text-sm text-gray-600 mt-1">Receive a weekly summary of your progress</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.weeklyReport}
                      onChange={() => handleSettingChange('weeklyReport')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Privacy Section */}
            <div className="border-b border-slate-200 pb-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Privacy</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Private Profile</p>
                    <p className="text-sm text-gray-600 mt-1">Hide your profile from other students</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.privateProfile}
                      onChange={() => handleSettingChange('privateProfile')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Appearance Section */}
            <div className="pb-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Appearance</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Dark Mode</p>
                    <p className="text-sm text-gray-600 mt-1">Use dark theme across the app</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.darkMode}
                      onChange={() => handleSettingChange('darkMode')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Save Settings Button */}
            <div className="flex gap-3 pt-4 border-t border-slate-200">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition font-medium"
              >
                <FaSave /> Save Settings
              </button>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
