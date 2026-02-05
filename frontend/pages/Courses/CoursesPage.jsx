import { ArrowLeft, Search, CheckCircle, Zap, Users, Award } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicLayout from '../../components/layout/PublicLayout';

export default function CoursesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const allCourses = [
    {
      code: "CS101",
      name: "Introduction to Programming",
      instructor: "Prof. David Miller",
      students: "342 enrolled",
      level: "Beginner",
      icon: "💻",
      youtubeLink: "https://www.youtube.com/watch?v=_uQrJ0TkSuc",
      description: "Learn the fundamentals of programming with Python. This comprehensive course covers variables, functions, loops, and object-oriented programming."
    },
    {
      code: "BUS201",
      name: "Business Strategy & Innovation",
      instructor: "Prof. Sarah Lee",
      students: "287 enrolled",
      level: "Intermediate",
      icon: "📈",
      youtubeLink: "https://www.youtube.com/watch?v=t98fPpkAzEI",
      description: "Master strategic business planning and learn how to implement innovation in organizations. Includes case studies and real-world examples."
    },
    {
      code: "ENG102",
      name: "Advanced English Composition",
      instructor: "Prof. James Wilson",
      students: "156 enrolled",
      level: "Intermediate",
      icon: "✍️",
      youtubeLink: "https://www.youtube.com/watch?v=0q-YCYvfXlo",
      description: "Develop advanced writing skills for academic and professional contexts. Learn argumentation, research methods, and editing techniques."
    },
    {
      code: "SCI301",
      name: "Quantum Physics & Mechanics",
      instructor: "Prof. Emily Chen",
      students: "198 enrolled",
      level: "Advanced",
      icon: "⚛️",
      youtubeLink: "https://www.youtube.com/watch?v=MzRCDLre1b4",
      description: "Explore the quantum world. This advanced course covers wave functions, Schrödinger's equation, and quantum interpretation."
    },
    {
      code: "ECON101",
      name: "Principles of Economics",
      instructor: "Prof. Michael Torres",
      students: "412 enrolled",
      level: "Beginner",
      icon: "💰",
      youtubeLink: "https://www.youtube.com/watch?v=pqMYJJ1HPKE",
      description: "Understand the fundamental principles of microeconomics and macroeconomics. Learn about supply, demand, and market mechanisms."
    },
    {
      code: "PSY201",
      name: "Cognitive Psychology & Behavior",
      instructor: "Prof. Rachel Johnson",
      students: "267 enrolled",
      level: "Intermediate",
      icon: "🧠",
      youtubeLink: "https://www.youtube.com/watch?v=_6uIHUEqndw",
      description: "Study the human mind and behavior. Covers perception, memory, learning, and decision-making processes."
    },
    {
      code: "MATH301",
      name: "Advanced Calculus & Analysis",
      instructor: "Prof. Robert Smith",
      students: "203 enrolled",
      level: "Advanced",
      icon: "📐",
      youtubeLink: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
      description: "Master advanced mathematical concepts including multivariable calculus, vector analysis, and real analysis fundamentals."
    },
    {
      code: "BIO201",
      name: "Molecular & Cell Biology",
      instructor: "Prof. Lisa Anderson",
      students: "289 enrolled",
      level: "Intermediate",
      icon: "🧬",
      youtubeLink: "https://www.youtube.com/watch?v=URUJD5NEXC8",
      description: "Explore the structure and function of cells. Learn about molecular biology, genetics, and cellular processes."
    },
    {
      code: "ART101",
      name: "Art History & Modern Design",
      instructor: "Prof. Maria Garcia",
      students: "176 enrolled",
      level: "Beginner",
      icon: "🎨",
      youtubeLink: "https://www.youtube.com/watch?v=eFQo2hCjDBU",
      description: "Journey through art history from classical to contemporary. Study design principles and modern artistic movements."
    },
    {
      code: "HIS202",
      name: "World History: Modern Era",
      instructor: "Prof. Thomas Brown",
      students: "234 enrolled",
      level: "Intermediate",
      icon: "📖",
      youtubeLink: "https://www.youtube.com/playlist?list=PLhQjrBD2T382p8q1pAErU4-aSIQx4fR6j",
      description: "Explore major events and transformations of the modern world from the 18th century to present day."
    },
    {
      code: "MUS101",
      name: "Music Theory Fundamentals",
      instructor: "Prof. Angela White",
      students: "145 enrolled",
      level: "Beginner",
      icon: "🎵",
      youtubeLink: "https://www.youtube.com/playlist?list=PLw9l2QmMaZXoMdAq2kfEi6V7GZxP8fj-R",
      description: "Learn the basics of music theory. Covers notes, scales, chords, harmony, and composition principles."
    },
    {
      code: "PHY301",
      name: "Advanced Physics Concepts",
      instructor: "Prof. Richard Davis",
      students: "167 enrolled",
      level: "Advanced",
      icon: "⚡",
      youtubeLink: "https://www.youtube.com/playlist?list=PLkyBCj4JhinkQKVsKAHx3261-cwqX6EsM",
      description: "Delve into advanced physics topics including electromagnetism, thermodynamics, and special relativity."
    }
  ];

  const filteredCourses = allCourses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PublicLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-4xl sm:text-5xl font-bold">Course Catalogue</h1>
          </div>
          <p className="text-slate-200 text-lg max-w-2xl">
            Browse our comprehensive collection of {allCourses.length} courses across multiple disciplines
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-slate-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by course name, code, or instructor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg border border-slate-300 focus:border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
            />
          </div>
          <p className="text-slate-600 mt-3 text-sm">
            Showing {filteredCourses.length} of {allCourses.length} courses
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, idx) => (
                <a
                  key={idx}
                  href={course.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border-2 border-slate-200 hover:border-accent-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
                >
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{course.icon}</div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ml-2 ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  {/* Course Code */}
                  <p className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wide">
                    {course.code}
                  </p>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2">
                    {course.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                    {course.description}
                  </p>
                  
                  {/* Instructor */}
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    {course.instructor}
                  </p>
                  
                  {/* Bottom Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-auto">
                    <p className="text-xs text-slate-500 font-medium">{course.students}</p>
                    <span className="text-accent-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Watch on YouTube <span>→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-slate-600 mb-2">No courses found</p>
              <p className="text-slate-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-200/10 rounded-full blur-3xl transform -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-200/40 border border-cyan-400/50 backdrop-blur-sm">
              <Zap size={18} className="text-cyan-600" />
              <span className="text-cyan-700 font-semibold text-sm">Start Your Learning Journey</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              Ready to Unlock Your Potential?
            </h2>
            <p className="text-lg sm:text-xl text-primary-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of ambitious students transforming their careers through CUTM OS. Gain industry-relevant skills from expert instructors.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cyan-300/60 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CheckCircle size={28} className="text-cyan-600 mb-3" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">500+ Courses</h3>
              <p className="text-primary-700 text-sm">Explore diverse subjects from technology to humanities</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-300/60 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Users size={28} className="text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">50K+ Students</h3>
              <p className="text-primary-700 text-sm">Learn alongside motivated peers worldwide</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cyan-300/60 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Award size={28} className="text-cyan-600 mb-3" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">Certified Success</h3>
              <p className="text-primary-700 text-sm">Earn recognized credentials to boost your career</p>
            </div>
          </div>

          {/* CTA Button Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/register')}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                Create Your Account
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-4 border-2 border-cyan-400 hover:border-cyan-600 text-primary-900 font-bold text-lg rounded-xl transition-all duration-300 hover:bg-cyan-100/50 backdrop-blur-sm"
            >
              Browse Courses
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-cyan-300/40">
            <p className="text-primary-700 text-sm text-center mb-6">Trusted by leading institutions and professionals</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-85">
              <span className="text-primary-700 font-semibold text-sm">🌟 98% Student Satisfaction</span>
              <span className="text-primary-700 font-semibold text-sm">⏱️ Lifetime Access</span>
              <span className="text-primary-700 font-semibold text-sm">📱 Learn Anywhere</span>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
