import { BookOpen, Users, Zap, Award, GraduationCap, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../src/context/AuthContext';
import PublicLayout from '../../components/layout/PublicLayout';
import HeroSection from '../../components/sections/HeroSection';
import { Button } from '../../components/ui/Button';

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Feature cards with background images and glassmorphism
  const features = [
    {
      icon: BookOpen,
      title: "SMART LEARNING",
      description: "Explore comprehensive course materials, assignments, and resources tailored for CUTM students. Access intelligent study tools designed to enhance your academic performance.",
      bgGradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.7) 0%, rgba(30, 64, 175, 0.7) 100%)",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
      link: "/academics",
      action: () => navigate("/academics")
    },
    {
      icon: BarChart3,
      title: "TRACK PROGRESS",
      description: "Monitor your academic performance with real-time analytics. Gain personalized insights into your strengths and areas for improvement with CUTM OS's advanced tracking system.",
      bgGradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.7) 0%, rgba(202, 138, 4, 0.7) 100%)",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
      link: "/dashboard",
      action: () => user ? navigate("/dashboard") : navigate("/login")
    },
    {
      icon: Zap,
      title: "KEY DATES",
      description: "Stay informed about important academic calendars, campus events, and student activities at CUTM. Never miss registration deadlines, exam schedules, or campus celebrations.",
      bgGradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.7) 0%, rgba(13, 148, 136, 0.7) 100%)",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.06) 0%, transparent 50%)",
      link: "/student-life",
      action: () => navigate("/student-life")
    },
    {
      icon: Award,
      title: "VIRTUAL TOURS",
      description: "Discover campus life at CUTM through immersive experiences. Learn about admissions, student facilities, alumni achievements, and connect with our thriving student community.",
      bgGradient: "linear-gradient(135deg, rgba(159, 18, 57, 0.7) 0%, rgba(127, 29, 29, 0.7) 100%)",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
      link: "/student-life",
      action: () => navigate("/student-life")
    }
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <HeroSection
        title="Welcome to CUTM OS"
        subtitle="Your complete academic companion for success. Track progress, manage courses, and achieve your goals."
        ctaText="Start Your Journey"
        ctaLink="/register"
        isDark={true}
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&q=80"
      />

      {/* Feature Cards Section - with Glassmorphism Effect */}
      <section className="w-full py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                onClick={feature.action}
                className="relative text-white p-12 sm:p-16 flex flex-col justify-between min-h-96 group overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl cursor-pointer"
                style={{
                  background: feature.bgGradient
                }}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    feature.action();
                  }
                }}
              >
                {/* Glassmorphism background pattern layer */}
                <div 
                  className="absolute inset-0 backdrop-blur-sm transition-all duration-500"
                  style={{
                    background: feature.bgPattern,
                    opacity: 0.8
                  }}
                ></div>

                {/* Additional glass effect with border */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/10"></div>

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 group-hover:from-black/25 group-hover:via-black/15 group-hover:to-black/35 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with glow effect */}
                  <div className="mb-8 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl">
                    <div className="inline-block p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500">
                      <Icon size={48} className="text-white drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight tracking-wide drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500">
                    {feature.title}
                  </h3>
                  
                  {/* Line separator with glow */}
                  <div className="w-12 h-1 bg-white/70 mb-6 rounded shadow-lg group-hover:w-16 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500"></div>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-auto drop-shadow-md group-hover:text-white group-hover:drop-shadow-lg transition-all duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Learn More Button with glassmorphism */}
                <div className="relative z-10 mt-8 w-full">
                  <div className="w-full bg-white/95 backdrop-blur-md text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-white transition-all duration-500 flex items-center justify-center gap-2 border border-white/40 shadow-lg hover:shadow-2xl transform hover:scale-110 group-hover:translate-y-0 -translate-y-0">
                    Learn More
                    <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 sm:py-28 relative">
        {/* Faded accent line at top - from both sides */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Container */}
          <div className="bg-white rounded-3xl p-12 sm:p-16 lg:p-20 border border-slate-200 shadow-sm">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {/* Stat 1: Active Students */}
              <div className="relative text-center group">
                {/* Elegant left border */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-gradient-to-b from-primary-900 to-primary-700 rounded-full"></div>
                <div className="pl-6 sm:pl-8">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-3">5000<span className="text-2xl sm:text-3xl font-semibold">+</span></p>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-semibold">Active Students</p>
                </div>
              </div>

              {/* Stat 2: Courses */}
              <div className="relative text-center group">
                {/* Elegant left border */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-gradient-to-b from-secondary-700 to-secondary-600 rounded-full"></div>
                <div className="pl-6 sm:pl-8">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-700 mb-3">250<span className="text-2xl sm:text-3xl font-semibold">+</span></p>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-semibold">Courses Available</p>
                </div>
              </div>

              {/* Stat 3: Success Rate */}
              <div className="relative text-center group">
                {/* Elegant left border */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-gradient-to-b from-accent-600 to-accent-500 rounded-full"></div>
                <div className="pl-6 sm:pl-8">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-600 mb-3">95<span className="text-2xl sm:text-3xl font-semibold">%</span></p>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-semibold">Success Rate</p>
                </div>
              </div>

              {/* Stat 4: Support */}
              <div className="relative text-center group">
                {/* Elegant left border */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-gradient-to-b from-primary-600 to-primary-500 rounded-full"></div>
                <div className="pl-6 sm:pl-8">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-600 mb-3">24/7</p>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-semibold">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faded accent line at bottom - from both sides */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-900 to-transparent"></div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-slate-600">Popular courses trending this semester</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                code: "CS101",
                name: "Introduction to Programming",
                instructor: "Prof. David Miller",
                students: "342 enrolled",
                level: "Beginner",
                icon: "💻",
                youtubeLink: "https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"
              },
              {
                code: "BUS201",
                name: "Business Strategy & Innovation",
                instructor: "Prof. Sarah Lee",
                students: "287 enrolled",
                level: "Intermediate",
                icon: "📈",
                youtubeLink: "https://www.youtube.com/playlist?list=PLJ6Y_dmVrKW2v8rLhOe4d9UvJLIYRWdDH"
              },
              {
                code: "ENG102",
                name: "Advanced English Composition",
                instructor: "Prof. James Wilson",
                students: "156 enrolled",
                level: "Intermediate",
                icon: "✍️",
                youtubeLink: "https://www.youtube.com/playlist?list=PL5MfDEYXFOdLXvVnI0L5A8Ck5L7CpuVXh"
              },
              {
                code: "SCI301",
                name: "Quantum Physics & Mechanics",
                instructor: "Prof. Emily Chen",
                students: "198 enrolled",
                level: "Advanced",
                icon: "⚛️",
                youtubeLink: "https://www.youtube.com/playlist?list=PLzJzwyf-7YAEbx2Y2OPRvEJVZvw2hLNV1"
              },
              {
                code: "ECON101",
                name: "Principles of Economics",
                instructor: "Prof. Michael Torres",
                students: "412 enrolled",
                level: "Beginner",
                icon: "💰",
                youtubeLink: "https://www.youtube.com/playlist?list=PLF1Z-APd9zK5PZIPZyqKy1WPWWJrmkC1d"
              },
              {
                code: "PSY201",
                name: "Cognitive Psychology & Behavior",
                instructor: "Prof. Rachel Johnson",
                students: "267 enrolled",
                level: "Intermediate",
                icon: "🧠",
                youtubeLink: "https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8Cc3LCbduPf5k3x5cwY"
              }
            ].map((course, idx) => (
              <a 
                key={idx}
                href={course.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-lg border border-slate-200 hover:border-accent-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-125 transition-transform duration-300">{course.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                  {course.name}
                </h3>
                
                <p className="text-sm text-slate-600 mb-1">
                  <span className="font-semibold">Code:</span> {course.code}
                </p>
                
                <p className="text-sm text-slate-600 mb-4">
                  <span className="font-semibold">Instructor:</span> {course.instructor}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">{course.students}</p>
                  <span className="text-accent-600 hover:text-accent-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Watch <span>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/courses')}
              className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Browse All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Dual Feature Highlight Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Card - Smart Learning */}
            <a href="/academics" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80"
                alt="Smart Learning Experience"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3">Master Your Learning Path</h3>
                <p className="text-slate-200 mb-6 leading-relaxed">
                  Access comprehensive courses, interactive assignments, and personalized feedback designed to help you excel academically.
                </p>
                <div className="flex items-center gap-2 text-accent-400 font-semibold group-hover:gap-3 transition-all">
                  Explore Academics <span>→</span>
                </div>
              </div>
            </a>

            {/* Right Card - Community */}
            <a href="/student-life" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop&q=80"
                alt="Campus Community"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3">Find Your Community</h3>
                <p className="text-slate-200 mb-6 leading-relaxed">
                  Join 150+ clubs and organizations, connect with peers, and discover endless opportunities to grow beyond the classroom.
                </p>
                <div className="flex items-center gap-2 text-accent-400 font-semibold group-hover:gap-3 transition-all">
                  Explore Student Life <span>→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose CUTM OS Section */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 py-20 sm:py-28 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Why Choose CUTM OS?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">Everything you need to excel in your academic journey with cutting-edge features and comprehensive support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature 1: Comprehensive Resources */}
            <div className="group relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/10 rounded-2xl opacity-0 group-hover:opacity-60 blur transition-all duration-300"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-400/10 rounded-full -mr-20 -mt-20 group-hover:bg-primary-400/15 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon with animation */}
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 backdrop-blur-md mb-6 group-hover:from-primary-500/30 group-hover:to-primary-600/15 transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-5xl block">📚</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors">Comprehensive Resources</h3>
                  
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">All your course materials, assignments, lecture notes, and study guides in one centralized platform for seamless learning.</p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                      <span>Organized course library</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                      <span>Downloadable materials</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                      <span>Instant access anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 2: Real-Time Analytics */}
            <div className="group relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/20 to-accent-400/10 rounded-2xl opacity-0 group-hover:opacity-60 blur transition-all duration-300"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-400/10 rounded-full -mr-20 -mt-20 group-hover:bg-secondary-400/15 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon with animation */}
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-secondary-500/20 to-secondary-600/10 backdrop-blur-md mb-6 group-hover:from-secondary-500/30 group-hover:to-secondary-600/15 transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-5xl block">📊</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary-200 transition-colors">Real-Time Analytics</h3>
                  
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">Track your performance with detailed insights, progress analytics, and personalized recommendations for continuous improvement.</p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
                      <span>Performance dashboard</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
                      <span>Detailed insights</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
                      <span>AI recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 3: Goal Tracking */}
            <div className="group relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-primary-400/10 rounded-2xl opacity-0 group-hover:opacity-60 blur transition-all duration-300"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 group-hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent-400/10 rounded-full -mr-20 -mt-20 group-hover:bg-accent-400/15 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon with animation */}
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 backdrop-blur-md mb-6 group-hover:from-accent-500/30 group-hover:to-accent-600/15 transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-5xl block">🎯</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-200 transition-colors">Goal Tracking</h3>
                  
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">Set academic goals, track milestones, celebrate achievements, and celebrate your success with our comprehensive achievement system.</p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                      <span>Goal setting tools</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                      <span>Milestone tracking</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                      <span>Achievement badges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">What Students Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Real success stories from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                program: "Computer Science",
                text: "CUTM OS completely transformed how I manage my courses. My GPA improved by 0.8 points!",
                emoji: "👩‍🎓",
                color: "primary"
              },
              {
                name: "Michael Chen",
                program: "Business Administration",
                text: "The feedback system is incredible. I finally understand where I need to improve.",
                emoji: "👨‍🎓",
                color: "secondary"
              },
              {
                name: "Emma Rodriguez",
                program: "Engineering",
                text: "Best platform for student success. Highly recommend to all students!",
                emoji: "👩‍💼",
                color: "accent"
              }
            ].map((testimonial, idx) => {
              const colorClass = testimonial.color === 'primary' ? 'border-primary-200' : 
                                 testimonial.color === 'secondary' ? 'border-secondary-200' : 'border-accent-200';
              const accentBg = testimonial.color === 'primary' ? 'bg-primary-400' :
                               testimonial.color === 'secondary' ? 'bg-secondary-400' : 'bg-accent-400';
              const accentGrad = testimonial.color === 'primary' ? 'from-primary-400 to-primary-300' :
                                 testimonial.color === 'secondary' ? 'from-secondary-400 to-secondary-300' : 
                                 'from-accent-400 to-accent-300';
              return (
                <div key={idx} className={`group relative bg-white rounded-2xl p-10 border-2 ${colorClass} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  {/* Subtle background accent */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-300 ${accentBg}`}></div>
                  
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">⭐</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-slate-700 leading-relaxed mb-6 font-medium italic">"{testimonial.text}"</p>
                    
                    {/* Divider */}
                    <div className={`h-1 w-12 rounded-full mb-6 bg-gradient-to-r ${accentGrad}`}></div>
                    
                    {/* Student Info */}
                    <div className="flex items-center gap-3">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{testimonial.emoji}</div>
                      <div>
                        <p className="font-bold text-primary-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-500 font-medium">{testimonial.program}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-32 sm:py-40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Start Your Journey</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Ready to Transform Your Academic Life?</h2>
          </div>
          
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">Join thousands of students already using CUTM OS to achieve their goals and excel academically.</p>
          <p className="text-base text-slate-600 mb-14 leading-relaxed max-w-2xl mx-auto">Experience personalized learning, real-time feedback, and comprehensive support designed to help you succeed.</p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border border-primary-200/50 hover:border-primary-300 transition-all hover:bg-white/80 shadow-sm hover:shadow-md">
              <p className="text-3xl font-bold text-accent-500 mb-2">5000+</p>
              <p className="text-sm text-slate-700">Active Users</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border border-secondary-200/50 hover:border-secondary-300 transition-all hover:bg-white/80 shadow-sm hover:shadow-md">
              <p className="text-3xl font-bold text-secondary-600 mb-2">250+</p>
              <p className="text-sm text-slate-700">Courses</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border border-primary-200/50 hover:border-primary-300 transition-all hover:bg-white/80 shadow-sm hover:shadow-md">
              <p className="text-3xl font-bold text-primary-600 mb-2">95%</p>
              <p className="text-sm text-slate-700">Success Rate</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border border-secondary-200/50 hover:border-secondary-300 transition-all hover:bg-white/80 shadow-sm hover:shadow-md">
              <p className="text-3xl font-bold text-secondary-600 mb-2">24/7</p>
              <p className="text-sm text-slate-700">Support</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              onClick={() => {
                if (user) {
                  navigate('/profile');
                } else {
                  navigate('/login');
                }
              }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-2 group"
            >
              {user ? 'Go to Profile' : 'Get Started Today'}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
