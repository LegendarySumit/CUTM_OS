import { useEffect, useState } from "react";
import { useAuth } from "../../src/context/AuthContext";
import { activityAPI } from "../../src/services";
import AppLayout from "../../layout/AppLayout";
import Card from "../../components/ui/Card";
import { FaPlus, FaBook, FaCode, FaGraduationCap, FaTrash } from "react-icons/fa";

const PrepPage = () => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    domain: "DSA",
    action: "",
  });

  const domains = ["DSA", "Web Dev", "DB", "OOP", "System Design", "Interview Prep"];

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        if (user?.id) {
          const response = await activityAPI.getByStudent(user.id);
          // Handle different response formats
          let activitiesData = [];
          if (Array.isArray(response.data)) {
            activitiesData = response.data;
          } else if (response.data && typeof response.data === 'object') {
            // If it's an object with data array inside
            activitiesData = response.data.data || response.data.activities || [];
          }
          setActivities(activitiesData);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching activities:", err);
        setError("Failed to load activities. Please try again later.");
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchActivities();
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!user?.id) {
      setError("Please log in to log activities");
      return;
    }

    if (!formData.action.trim()) {
      setError("Please enter what you did");
      return;
    }

    if (!formData.domain) {
      setError("Please select a domain");
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const newActivity = {
        studentId: user.id,
        domain: formData.domain,
        action: formData.action.trim(),
        metadata: { timestamp: new Date().toISOString() },
      };

      const response = await activityAPI.create(newActivity);
      
      // Add the new activity to the list
      if (response.data) {
        setActivities((prevActivities) => {
          const currentActivities = Array.isArray(prevActivities) ? prevActivities : [];
          return [response.data, ...currentActivities];
        });
      } else {
        // If response doesn't have data, refetch all activities
        const updatedResponse = await activityAPI.getByStudent(user.id);
        let activitiesData = [];
        if (Array.isArray(updatedResponse.data)) {
          activitiesData = updatedResponse.data;
        } else if (updatedResponse.data && typeof updatedResponse.data === 'object') {
          activitiesData = updatedResponse.data.data || updatedResponse.data.activities || [];
        }
        setActivities(activitiesData);
      }

      // Reset form
      setFormData({ domain: "DSA", action: "" });
      setShowForm(false);
      setSuccess("Activity logged successfully!");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error("Error logging activity:", err);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || err.message || "Failed to log activity. Please try again.";
      setError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteActivity = async (activityId) => {
    if (!window.confirm("Are you sure you want to delete this activity?")) {
      return;
    }

    try {
      await activityAPI.delete(activityId, user.id);
      setActivities((prevActivities) => 
        Array.isArray(prevActivities) ? prevActivities.filter((a) => a.id !== activityId) : []
      );
      setSuccess("Activity deleted successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error("Error deleting activity:", err);
      const errorMessage = err.response?.data?.error || err.message || "Failed to delete activity. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📚 Prep Sessions</h1>
          <p className="text-gray-600">Track your preparation activities</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all"
        >
          <FaPlus /> Log Activity
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Log New Activity</h3>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {domains.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What did you do?</label>
              <input
                type="text"
                placeholder="E.g., Solved 5 array problems, completed binary tree tutorial..."
                value={formData.action}
                onChange={(e) => setFormData({ ...formData, action: e.target.value })}
                disabled={submitting}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
              >
                {submitting ? "Logging..." : "Log Activity"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setError(null);
                  setSuccess(null);
                }}
                disabled={submitting}
                className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg hover:bg-gray-300 transition disabled:bg-gray-100 disabled:cursor-not-allowed font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </Card>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaBook className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Activities</p>
              <p className="text-3xl font-bold text-gray-900">{activities.length}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaCode className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">This Week</p>
              <p className="text-3xl font-bold text-gray-900">
                {Array.isArray(activities) ? activities.filter((a) => {
                  const date = new Date(a.created_at);
                  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                  return date > weekAgo;
                }).length : 0}
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaGraduationCap className="text-purple-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Streak</p>
              <p className="text-3xl font-bold text-gray-900">5 days 🔥</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Activities List */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        {loading ? (
          <div className="text-center py-8">
            <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto"></div>
          </div>
        ) : activities && activities.length > 0 ? (
          <div className="space-y-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                      {activity.domain || "Activity"}
                    </span>
                  </div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <p className="text-xs text-gray-500 whitespace-nowrap">
                    {new Date(activity.created_at).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => handleDeleteActivity(activity.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    title="Delete activity"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No activities logged yet</p>
            <button
              onClick={() => setShowForm(true)}
              className="text-primary-600 hover:underline font-medium"
            >
              Log your first activity
            </button>
          </div>
        )}
      </Card>
    </AppLayout>
  );
};

export default PrepPage;
