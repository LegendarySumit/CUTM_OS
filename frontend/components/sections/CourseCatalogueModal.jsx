import { X } from 'lucide-react';

export default function CourseCatalogueModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const allCourses = [
    {
      code: "CS101",
      name: "Introduction to Programming",
      instructor: "Prof. David Miller",
      students: "342 enrolled",
      level: "Beginner",
      icon: "💻",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXtThLVank8O2yW1qvB"
    },
    {
      code: "BUS201",
      name: "Business Strategy & Innovation",
      instructor: "Prof. Sarah Lee",
      students: "287 enrolled",
      level: "Intermediate",
      icon: "📈",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTqt8pLdLc1msmM1D8bMJKPa"
    },
    {
      code: "ENG102",
      name: "Advanced English Composition",
      instructor: "Prof. James Wilson",
      students: "156 enrolled",
      level: "Intermediate",
      icon: "✍️",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTopLDi5E37z8GrGdCQzJQ5l"
    },
    {
      code: "SCI301",
      name: "Quantum Physics & Mechanics",
      instructor: "Prof. Emily Chen",
      students: "198 enrolled",
      level: "Advanced",
      icon: "⚛️",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsThfO7gX-8j1wSTTbf3V3M8u"
    },
    {
      code: "ECON101",
      name: "Principles of Economics",
      instructor: "Prof. Michael Torres",
      students: "412 enrolled",
      level: "Beginner",
      icon: "💰",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTo7p8PdxqZrMfjUiYRqw_FU"
    },
    {
      code: "PSY201",
      name: "Cognitive Psychology & Behavior",
      instructor: "Prof. Rachel Johnson",
      students: "267 enrolled",
      level: "Intermediate",
      icon: "🧠",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsT7aMmK7k9rLqVVJDfMUJSrT"
    },
    {
      code: "MATH301",
      name: "Advanced Calculus & Analysis",
      instructor: "Prof. Robert Smith",
      students: "203 enrolled",
      level: "Advanced",
      icon: "📐",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsT5GYvyNuXPjV8OXpU8zFaKO"
    },
    {
      code: "BIO201",
      name: "Molecular & Cell Biology",
      instructor: "Prof. Lisa Anderson",
      students: "289 enrolled",
      level: "Intermediate",
      icon: "🧬",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsT_hqpXvCqAK-lj_5qh2F3Ou"
    },
    {
      code: "ART101",
      name: "Art History & Modern Design",
      instructor: "Prof. Maria Garcia",
      students: "176 enrolled",
      level: "Beginner",
      icon: "🎨",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsT4bUvXe_EZVjyB_4U5qR7Pl"
    },
    {
      code: "HIS202",
      name: "World History: Modern Era",
      instructor: "Prof. Thomas Brown",
      students: "234 enrolled",
      level: "Intermediate",
      icon: "📖",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsT6_6qJzK1_fXjZM2_2YhKKm"
    },
    {
      code: "MUS101",
      name: "Music Theory Fundamentals",
      instructor: "Prof. Angela White",
      students: "145 enrolled",
      level: "Beginner",
      icon: "🎵",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsT2m3XqF8k5_9VnZZQjH_3Zr"
    },
    {
      code: "PHY301",
      name: "Advanced Physics Concepts",
      instructor: "Prof. Richard Davis",
      students: "167 enrolled",
      level: "Advanced",
      icon: "⚡",
      youtubeLink: "https://www.youtube.com/playlist?list=PLDzeHZWIZsT_2vB6JZ4KzM7_f3Vs8Qu4p"
    }
  ];

  return (
    <>
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 z-50 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Course Catalogue</h2>
            <p className="text-slate-200 mt-2">{allCourses.length} courses available</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content - Scrollable Grid */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses.map((course, idx) => (
              <a
                key={idx}
                href={course.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 hover:border-accent-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                {/* Top section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-125 transition-transform duration-300">{course.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                  {course.name}
                </h3>

                {/* Course Code */}
                <p className="text-xs text-slate-500 mb-3 font-semibold">
                  {course.code}
                </p>
                
                {/* Instructor */}
                <p className="text-sm text-slate-600 mb-3 line-clamp-1">
                  {course.instructor}
                </p>
                
                {/* Bottom section */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500">{course.students}</p>
                  <span className="text-accent-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Watch <span>→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
