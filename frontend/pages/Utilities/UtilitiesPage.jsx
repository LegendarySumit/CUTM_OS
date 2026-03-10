import AppLayout from "../../layout/AppLayout";
import Card from "../../components/ui/Card";
import { Clock, BarChart3, CheckCircle, ChevronDown, ChevronUp, FileText, Trophy, MessageCircle, Target, Zap, Rocket } from "lucide-react";
import { useState } from "react";

const UtilitiesPage = () => {
  const [activeTab, setActiveTab] = useState(null);
  // Time Tracker state
  const [timeStarted, setTimeStarted] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [trackedHours, setTrackedHours] = useState(null);
  
  // Quick Score Calculator state
  const [calcStudyHours, setCalcStudyHours] = useState("");
  const [problemsSolved, setProblems] = useState("");
  const [score, setScore] = useState(null);

  const tools = [
    {
      id: 1,
      name: "Time Tracker",
      description: "Track your study sessions and optimize learning time",
      icon: <Clock />,
      color: "bg-blue-100 text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      name: "Progress Analytics",
      description: "Visualize your learning journey with detailed statistics",
      icon: <BarChart3 />,
      color: "bg-green-100 text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      name: "Concept Calculator",
      description: "Practice problem-solving and calculation skills",
      icon: <Zap />,
      color: "bg-orange-100 text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 4,
      name: "Progress Tracker",
      description: "Monitor your growth and celebrate milestones",
      icon: <CheckCircle />,
      color: "bg-purple-100 text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const handleToolOpen = (toolId) => {
    setActiveTab(activeTab === toolId ? null : toolId);
  };

  const handleCalculateScore = () => {
    const hours = parseFloat(calcStudyHours) || 0;
    const problems = parseFloat(problemsSolved) || 0;
    
    if (hours > 0 || problems > 0) {
      const calculatedScore = Math.round((hours * 10) + (problems * 5));
      setScore(calculatedScore);
    } else {
      alert("Please enter at least one value");
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
      setTrackedHours(hours);
      setIsTracking(false);
    }
  };

  return (
    <AppLayout>
      {/* Header with Gradient */}
      <div className="mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 p-8 text-gray-900 border border-primary-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 opacity-5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500 opacity-5 rounded-full -ml-40 -mb-40"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-primary-600 text-white rounded-xl">
                <Zap size={28} />
              </div>
              <h1 className="text-5xl font-bold">Utilities & Tools</h1>
            </div>
            <p className="text-primary-800 text-lg max-w-2xl">Power-packed tools designed to accelerate your learning journey and boost productivity</p>
          </div>
        </div>
      </div>

      {/* Tools Grid with Expandable Sections */}
      <div className="space-y-4 mb-12">
        {tools.map((tool) => {
          const colorSchemes = {
            1: { gradient: "from-primary-500 to-secondary-500", icon: "bg-primary-100 text-primary-600", light: "bg-primary-50" },
            2: { gradient: "from-secondary-500 to-primary-500", icon: "bg-secondary-100 text-secondary-600", light: "bg-secondary-50" },
            3: { gradient: "from-accent-500 to-primary-500", icon: "bg-accent-100 text-accent-600", light: "bg-accent-50" },
            4: { gradient: "from-primary-600 to-accent-500", icon: "bg-primary-100 text-primary-700", light: "bg-primary-50" },
          };
          const colors = colorSchemes[tool.id];

          return (
            <div 
              key={tool.id}
              className="group"
            >
              {/* Header - Only this is clickable */}
              <div
                onClick={() => handleToolOpen(tool.id)}
                className={`relative overflow-hidden rounded-t-xl transition-all duration-300 cursor-pointer ${
                  activeTab === tool.id 
                    ? `ring-2 ring-offset-2 ring-primary-500 shadow-xl ${colors.light}` 
                    : "shadow-lg hover:shadow-2xl"
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative p-6 flex items-center justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg ${colors.icon} flex-shrink-0`}>
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{tool.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${activeTab === tool.id ? "rotate-180" : ""}`}>
                    <ChevronDown size={24} className="text-gray-400 group-hover:text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Expandable Content - Separate, not clickable for toggle */}
              {activeTab === tool.id && (
                <div className={`rounded-b-xl border-t-2 border-primary-200 px-6 py-6 ${
                  tool.id === 1 ? "bg-primary-50" :
                  tool.id === 2 ? "bg-secondary-50" :
                  tool.id === 3 ? "bg-accent-50" :
                  "bg-primary-50"
                }`}>
                    {/* Time Tracker Tool */}
                    {tool.id === 1 && (
                      <div className="space-y-4">
                        <p className="text-sm font-semibold text-gray-700 mb-4">⏱️ Track Your Study Session</p>
                        <div className="flex gap-3">
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStartTracking();
                            }}
                            disabled={isTracking}
                            className="flex-1 py-2.5 px-4 rounded-lg bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-medium shadow-md hover:shadow-lg"
                          >
                            {isTracking ? "⏱️ Tracking..." : "▶ Start"}
                          </button>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStopTracking();
                            }}
                            disabled={!isTracking}
                            className="flex-1 py-2.5 px-4 rounded-lg bg-accent-600 text-white hover:bg-accent-700 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-medium shadow-md hover:shadow-lg"
                          >
                            ⏹ Stop
                          </button>
                        </div>
                        {timeStarted && isTracking && (
                          <div className="mt-4 p-3 bg-primary-200/40 border border-primary-400 rounded-lg">
                            <p className="text-xs text-primary-800"><span className="font-bold">Started:</span> {timeStarted.toLocaleTimeString()}</p>
                          </div>
                        )}
                        {trackedHours && !isTracking && (
                          <div className="mt-4 p-3 bg-secondary-200/40 border border-secondary-400 rounded-lg">
                            <p className="text-xs text-secondary-800"><span className="font-bold">Duration:</span> {trackedHours} hours</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Progress Analytics Tool */}
                    {tool.id === 2 && (
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <p className="text-sm font-semibold text-secondary-900">Study Progress</p>
                            <span className="text-xs font-bold text-secondary-700 bg-secondary-200/50 px-3 py-1 rounded-full">65%</span>
                          </div>
                          <div className="w-full bg-secondary-200/30 rounded-full h-2.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-secondary-500 to-primary-500 h-2.5 rounded-full transition-all" style={{width: "65%"}}></div>
                          </div>
                          <p className="text-xs text-secondary-600 mt-2">Modules completed this week</p>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <p className="text-sm font-semibold text-secondary-900">Weekly Performance</p>
                            <span className="text-xs font-bold text-secondary-700 bg-secondary-200/50 px-3 py-1 rounded-full">78%</span>
                          </div>
                          <div className="w-full bg-secondary-200/30 rounded-full h-2.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-secondary-500 to-primary-500 h-2.5 rounded-full transition-all" style={{width: "78%"}}></div>
                          </div>
                          <p className="text-xs text-secondary-600 mt-2">Overall performance average</p>
                        </div>
                      </div>
                    )}

                    {/* Concept Calculator Tool */}
                    {tool.id === 3 && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-4">📊 Sample Calculations</p>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { op: "5 + 3", result: "8" },
                            { op: "12 × 4", result: "48" },
                            { op: "√144", result: "12" },
                            { op: "100 ÷ 5", result: "20" }
                          ].map((calc, idx) => (
                            <div key={idx} className="p-3 bg-accent-100/50 rounded-lg border border-accent-300 hover:border-accent-500 hover:bg-accent-100 transition">
                              <p className="text-xs text-accent-700 mb-1 font-medium">Calculation</p>
                              <p className="text-sm font-bold text-gray-900">{calc.op} = <span className="text-accent-600">{calc.result}</span></p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Progress Tracker Tool */}
                    {tool.id === 4 && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-4">🏆 Your Achievements</p>
                        <div className="space-y-3">
                          <div className="p-3 bg-primary-200/40 rounded-lg border border-primary-400 flex items-start gap-3">
                            <span className="text-lg flex-shrink-0">✅</span>
                            <div>
                              <p className="text-sm font-bold text-primary-900">Module 1 Completed</p>
                              <p className="text-xs text-primary-700">2 days ago</p>
                            </div>
                          </div>
                          <div className="p-3 bg-primary-200/40 rounded-lg border border-primary-400 flex items-start gap-3">
                            <span className="text-lg flex-shrink-0">✅</span>
                            <div>
                              <p className="text-sm font-bold text-primary-900">100% Attendance</p>
                              <p className="text-xs text-primary-700">5 classes attended</p>
                            </div>
                          </div>
                          <div className="p-3 bg-accent-200/40 rounded-lg border border-accent-400 flex items-start gap-3">
                            <span className="text-lg flex-shrink-0">⏳</span>
                            <div>
                              <p className="text-sm font-bold text-accent-900">Module 2 In Progress</p>
                              <p className="text-xs text-accent-700">50% complete • 3 chapters left</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Score Calculator Section */}
      <div className="mb-12">
        <div className="rounded-xl bg-gradient-to-br from-accent-50 to-accent-100 p-8 border border-accent-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent-600 text-white rounded-lg">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Quick Score Calculator</h3>
              <p className="text-sm text-gray-600">Estimate your performance based on study metrics</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Study Duration (hours)</label>
              <input
                type="number"
                value={calcStudyHours}
                onChange={(e) => setCalcStudyHours(e.target.value)}
                placeholder="Enter hours"
                className="w-full px-4 py-2.5 border border-accent-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Problems Solved</label>
              <input
                type="number"
                value={problemsSolved}
                onChange={(e) => setProblems(e.target.value)}
                placeholder="Enter count"
                className="w-full px-4 py-2.5 border border-accent-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleCalculateScore();
            }}
            className="w-full py-2.5 px-6 rounded-lg bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 transition font-semibold shadow-lg hover:shadow-xl"
          >
            Calculate Score
          </button>
          {score !== null && (
            <div className="mt-5 p-4 bg-white rounded-lg border border-accent-300">
              <p className="text-xs font-semibold text-gray-600 mb-2">Your Score</p>
              <p className="text-5xl font-bold text-accent-600">{score}</p>
              <p className="text-xs text-gray-500 mt-2">Based on your study input</p>
            </div>
          )}
        </div>
      </div>

      {/* Coming Soon Features */}
      <div className="rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 p-8 border border-primary-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary-100 rounded-lg">
            <Rocket size={24} className="text-primary-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Coming Soon</h3>
            <p className="text-primary-700 text-sm">Exciting features launching this quarter</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: FileText, name: "Mock Tests", desc: "Realistic test simulations", date: "March" },
            { icon: Trophy, name: "Leaderboard", desc: "Compete with classmates", date: "March" },
            { icon: BarChart3, name: "Reports", desc: "Detailed performance analytics", date: "April" },
            { icon: MessageCircle, name: "Study Groups", desc: "Collaborate with peers", date: "April" },
            { icon: Target, name: "Smart Goals", desc: "AI-powered goal setting", date: "May" },
            { icon: CheckCircle, name: "AI Tutor", desc: "Personal learning assistant", date: "May" },
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-lg bg-white border border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                {(() => {
                  const IconComponent = feature.icon;
                  return <IconComponent size={28} className="text-primary-600 group-hover:text-secondary-600 transition-colors" />;
                })()}
                <span className="text-xs font-bold px-2 py-1 rounded-md bg-primary-100 text-primary-700">
                  {feature.date}
                </span>
              </div>
              <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-700 transition">{feature.name}</p>
              <p className="text-xs text-gray-600 mb-3">{feature.desc}</p>
              <button 
                onClick={() => alert(`✓ You'll be notified when ${feature.name} launches in ${feature.date}!`)}
                className="text-xs font-semibold text-primary-600 hover:text-secondary-600 transition flex items-center gap-1 cursor-pointer"
              >
                Notify Me → 
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default UtilitiesPage;
