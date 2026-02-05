import AppLayout from "../../layout/AppLayout";
import Card from "../../components/ui/Card";
import { FaCalculator, FaChartBar, FaClock, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const UtilitiesPage = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [studyHours, setStudyHours] = useState("");
  const [problemsSolved, setProblems] = useState("");
  const [score, setScore] = useState(null);
  const [timeStarted, setTimeStarted] = useState(null);
  const [isTracking, setIsTracking] = useState(false);

  const tools = [
    {
      id: 1,
      name: "Time Tracker",
      description: "Track your study sessions and optimize learning time",
      icon: <FaClock />,
      color: "bg-blue-100 text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      name: "Progress Analytics",
      description: "Visualize your learning journey with detailed statistics",
      icon: <FaChartBar />,
      color: "bg-green-100 text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      name: "Concept Calculator",
      description: "Practice problem-solving and calculation skills",
      icon: <FaCalculator />,
      color: "bg-orange-100 text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 4,
      name: "Progress Tracker",
      description: "Monitor your growth and celebrate milestones",
      icon: <FaCheckCircle />,
      color: "bg-purple-100 text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const handleToolOpen = (toolId) => {
    setActiveTab(activeTab === toolId ? null : toolId);
  };

  const handleCalculateScore = () => {
    if (studyHours && problemsSolved) {
      const hours = parseFloat(studyHours);
      const problems = parseFloat(problemsSolved);
      const calculatedScore = Math.round((hours * 10) + (problems * 5));
      setScore(calculatedScore);
    }
  };

  const handleStartTracking = () => {
    if (!isTracking) {
      setTimeStarted(new Date());
      setIsTracking(true);
    }
  };

  const handleStopTracking = () => {
    if (isTracking && timeStarted) {
      const endTime = new Date();
      const hours = ((endTime - timeStarted) / (1000 * 60 * 60)).toFixed(2);
      setStudyHours(hours);
      setIsTracking(false);
    }
  };

  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">🔧 Utilities & Tools</h1>
        <p className="text-gray-600">Powerful tools to boost your learning experience</p>
      </div>

      {/* Tools Grid with Expandable Sections */}
      <div className="space-y-4 mb-8">
        {tools.map((tool) => (
          <div key={tool.id}>
            <Card 
              className={`cursor-pointer hover:shadow-lg transition-all ${activeTab === tool.id ? tool.bgColor : ""}`}
            >
              {/* Tool Header */}
              <div 
                onClick={() => handleToolOpen(tool.id)}
                className="flex items-start gap-4 select-none"
              >
                <div className={`p-4 rounded-lg ${tool.color} text-2xl flex-shrink-0`}>
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
                <div className="text-primary-600 flex-shrink-0 flex items-center justify-center">
                  {activeTab === tool.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {/* Tool Content - Expandable */}
              {activeTab === tool.id && (
                <div className={`mt-6 pt-6 border-t-2 border-gray-200`}>
                  {/* Time Tracker Tool */}
                  {tool.id === 1 && (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">Start tracking your study session</p>
                        <div className="flex gap-3">
                          <button 
                            onClick={handleStartTracking}
                            disabled={isTracking}
                            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isTracking ? "⏱️ Tracking..." : "▶️ Start"}
                          </button>
                          <button 
                            onClick={handleStopTracking}
                            disabled={!isTracking}
                            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            ⏹️ Stop
                          </button>
                        </div>
                        {timeStarted && isTracking && (
                          <div className="mt-3 p-3 bg-blue-100 rounded-lg border border-blue-300">
                            <p className="text-xs text-blue-700">
                              <span className="font-semibold">Started:</span> {timeStarted.toLocaleTimeString()}
                            </p>
                          </div>
                        )}
                        {studyHours && !isTracking && (
                          <div className="mt-3 p-3 bg-green-100 rounded-lg border border-green-300">
                            <p className="text-xs text-green-700">
                              <span className="font-semibold">Session Duration:</span> {studyHours} hours
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Progress Analytics Tool */}
                  {tool.id === 2 && (
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm font-medium text-gray-700">Study Progress</p>
                          <span className="text-xs font-semibold text-green-600">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: "65%"}}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Modules completed this week</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm font-medium text-gray-700">Weekly Performance</p>
                          <span className="text-xs font-semibold text-green-600">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: "78%"}}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Overall performance average</p>
                      </div>
                    </div>
                  )}

                  {/* Concept Calculator Tool */}
                  {tool.id === 3 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-600 mb-1">Addition</p>
                          <p className="text-lg font-semibold text-gray-900">5 + 3 = <span className="text-orange-600">8</span></p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-600 mb-1">Multiplication</p>
                          <p className="text-lg font-semibold text-gray-900">12 × 4 = <span className="text-orange-600">48</span></p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-600 mb-1">Square Root</p>
                          <p className="text-lg font-semibold text-gray-900">√144 = <span className="text-orange-600">12</span></p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-600 mb-1">Division</p>
                          <p className="text-lg font-semibold text-gray-900">100 ÷ 5 = <span className="text-orange-600">20</span></p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Progress Tracker Tool */}
                  {tool.id === 4 && (
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
                        <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Completed Module 1</p>
                          <p className="text-xs text-gray-500 mt-0.5">Finished 2 days ago</p>
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
                        <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Attended 5 Classes</p>
                          <p className="text-xs text-gray-500 mt-0.5">100% attendance this week</p>
                        </div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 flex items-start gap-3">
                        <span className="text-yellow-600 font-bold text-lg flex-shrink-0">◐</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Module 2 in Progress</p>
                          <p className="text-xs text-gray-500 mt-0.5">50% complete - 3 chapters remaining</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>

      {/* Quick Calculator */}
      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">⚡ Quick Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Study Duration (hours)</label>
            <input
              type="number"
              value={studyHours}
              onChange={(e) => setStudyHours(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Problems Solved</label>
            <input
              type="number"
              value={problemsSolved}
              onChange={(e) => setProblems(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        <button 
          onClick={handleCalculateScore}
          className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition font-medium"
        >
          Calculate Score
        </button>
        {score !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-300">
            <p className="text-sm text-gray-600 mb-2">Your Score</p>
            <p className="text-4xl font-bold text-primary-600">{score}</p>
            <p className="text-xs text-gray-500 mt-2">Based on study hours and problems solved</p>
          </div>
        )}
      </Card>

      {/* Upcoming Features */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">🚀 Coming Soon</h3>
            <p className="text-sm text-gray-500 mt-1">Exciting features launching soon</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              icon: "📝", 
              name: "Mock Tests", 
              desc: "Practice with realistic tests", 
              date: "March 2026",
              color: "bg-blue-50 border-blue-200 hover:shadow-blue-200",
              textColor: "text-blue-700"
            },
            { 
              icon: "🏆", 
              name: "Leaderboard", 
              desc: "Compete with classmates", 
              date: "March 2026",
              color: "bg-purple-50 border-purple-200 hover:shadow-purple-200",
              textColor: "text-purple-700"
            },
            { 
              icon: "📊", 
              name: "Performance Reports", 
              desc: "Detailed analytics & insights", 
              date: "April 2026",
              color: "bg-green-50 border-green-200 hover:shadow-green-200",
              textColor: "text-green-700"
            },
            { 
              icon: "💬", 
              name: "Study Groups", 
              desc: "Collaborate with peers", 
              date: "April 2026",
              color: "bg-orange-50 border-orange-200 hover:shadow-orange-200",
              textColor: "text-orange-700"
            },
            { 
              icon: "🎯", 
              name: "Smart Goals", 
              desc: "AI-powered goal setting", 
              date: "May 2026",
              color: "bg-pink-50 border-pink-200 hover:shadow-pink-200",
              textColor: "text-pink-700"
            },
            { 
              icon: "🤖", 
              name: "AI Tutor", 
              desc: "Personalized learning assistant", 
              date: "May 2026",
              color: "bg-indigo-50 border-indigo-200 hover:shadow-indigo-200",
              textColor: "text-indigo-700"
            },
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-4 rounded-lg border-2 ${feature.color} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{feature.icon}</div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${feature.textColor} ${feature.color} border border-current border-opacity-20`}>
                  {feature.date}
                </span>
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition">{feature.name}</p>
              <p className="text-xs text-gray-600 mb-3">{feature.desc}</p>
              <button className={`text-xs font-medium ${feature.textColor} hover:underline transition flex items-center gap-1`}>
                Notify Me ⏰
              </button>
            </div>
          ))}
        </div>

        {/* Timeline Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs font-medium text-gray-600 mb-3">📅 Release Timeline</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-700">📅 March 2026</span>
              <span className="text-gray-500">2 Features</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-700">📅 April 2026</span>
              <span className="text-gray-500">2 Features</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-700">📅 May 2026</span>
              <span className="text-gray-500">2 Features</span>
            </div>
          </div>
        </div>
      </Card>
    </AppLayout>
  );
};

export default UtilitiesPage;
