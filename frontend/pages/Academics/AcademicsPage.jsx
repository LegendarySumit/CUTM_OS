import { Code, Microscope, PenTool, Globe, Brain, Briefcase, ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PublicLayout from '../../components/layout/PublicLayout';
import HeroSection from '../../components/sections/HeroSection';
import { Button } from '../../components/ui/Button';

export default function AcademicsPage() {
  const navigate = useNavigate();
  const departments = [
    {
      icon: Code,
      title: "Computer Science",
      description: "Master programming, AI, and cutting-edge technologies",
      programs: ["Bachelor of Science", "Master of Science", "Professional Certificate"],
      color: "from-purple-400 to-purple-600",
      route: "/courses"
    },
    {
      icon: Microscope,
      title: "Natural Sciences",
      description: "Explore biology, chemistry, physics, and environmental science",
      programs: ["Bachelor of Science", "Master of Science", "Research Opportunities"],
      color: "from-orange-400 to-orange-600",
      route: "/courses"
    },
    {
      icon: PenTool,
      title: "Liberal Arts",
      description: "Develop critical thinking across humanities and social sciences",
      programs: ["Bachelor of Arts", "Minor Programs", "Electives"],
      color: "from-green-400 to-green-600",
      route: "/courses"
    },
    {
      icon: Globe,
      title: "Engineering",
      description: "Design solutions to real-world problems through engineering",
      programs: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering"],
      color: "from-pink-400 to-pink-600",
      route: "/courses"
    },
    {
      icon: Brain,
      title: "Psychology & Social Sciences",
      description: "Understand human behavior and society",
      programs: ["Bachelor of Science", "Master of Science", "Applied Research"],
      color: "from-blue-400 to-blue-600",
      route: "/courses"
    },
    {
      icon: Briefcase,
      title: "Business Administration",
      description: "Learn management, economics, and entrepreneurship",
      programs: ["Bachelor of Business", "MBA", "Executive Programs"],
      color: "from-yellow-400 to-yellow-600",
      route: "/courses"
    }
  ];

  const requirements = [
    {
      title: "Bachelor's Degree",
      items: [
        "120 Total Credit Hours",
        "General Education: 40 Credits",
        "Major Requirements: 40 Credits",
        "Electives: 40 Credits",
        "Minimum 2.0 GPA Required"
      ],
      icon: BookOpen
    },
    {
      title: "Master's Degree",
      items: [
        "30-36 Total Credit Hours",
        "Core Courses: 12 Credits",
        "Specialization: 12-18 Credits",
        "Thesis or Capstone Project",
        "Minimum 3.0 GPA Required"
      ],
      icon: Award
    }
  ];

  const achievements = [
    {
      stat: "#1",
      title: "Educational Platform",
      description: "Among comprehensive academic management systems",
      source: "EdTech Review, 2026"
    },
    {
      stat: "#18",
      title: "Student Success Rate",
      description: "Top platforms for improving academic performance and retention",
      source: "Campus Analytics, 2025"
    },
    {
      stat: "#25",
      title: "Best Value Solution",
      description: "Most cost-effective comprehensive learning platform in the industry",
      source: "FinanceDaily, 2025"
    },
    {
      stat: "95%",
      title: "Student Satisfaction",
      description: "Students report improved grades and academic confidence",
      source: "CUTM OS Survey, 2026"
    }
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <HeroSection
        title="Academic Programs"
        subtitle="Explore our diverse range of programs designed to prepare you for success in any field."
        isDark={true}
        backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&h=900&fit=crop&q=80"
      />

      {/* Departments Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-primary-500 opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-secondary-500 opacity-10 pointer-events-none"></div>

        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Our Academic Departments</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose from over 250 courses across multiple disciplines, each designed to provide comprehensive knowledge and practical skills for your future success.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Gradient header bar */}
                <div className={`h-32 bg-gradient-to-r ${dept.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-5 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-900" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {dept.description}
                  </p>

                  {/* Program list */}
                  <div className="space-y-2 mb-6">
                    {dept.programs.map((program, pidx) => (
                      <div key={pidx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${dept.color}`}></div>
                        <span className="text-sm text-slate-700">{program}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => navigate(dept.route)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900 font-semibold rounded-lg hover:from-primary-100 hover:to-primary-200 transition-all duration-300 group-hover:shadow-md hover:scale-105 transform"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Degree Requirements Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-blue-300/20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-cyan-300/20 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-200/40 border border-blue-400/50 backdrop-blur-sm">
              <Award size={18} className="text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">Academic Excellence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Degree Requirements</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto leading-relaxed">
              Our structured programs are designed with clear pathways and comprehensive requirements to ensure rigorous academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {requirements.map((req, idx) => {
              const Icon = req.icon;
              const isGradient = idx === 0 
                ? 'from-blue-500 to-cyan-500' 
                : 'from-purple-500 to-blue-500';
              
              return (
                <div
                  key={idx}
                  className="group relative bg-white/80 backdrop-blur-md border border-blue-200/60 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${isGradient}`}></div>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`bg-gradient-to-br ${isGradient} rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary-900">{req.title}</h3>
                      <p className="text-sm text-primary-600 mt-1">Comprehensive pathway to success</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {req.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-4 group/item">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${isGradient} group-hover/item:scale-150 transition-transform`}></div>
                        </div>
                        <span className="text-primary-700 leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent line */}
                  <div className="mt-8 pt-8 border-t border-blue-100/50">
                    <p className="text-sm text-primary-600 font-semibold">
                      {idx === 0 ? '🎓 Perfect for career starters' : '🚀 Advance your expertise'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300/60 backdrop-blur-sm">
            <div className="flex gap-4 items-start">
              <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-primary-900 mb-2">Need Help Choosing?</h4>
                <p className="text-primary-700">
                  Our academic advisors are ready to help you select the perfect degree program tailored to your career goals and aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Learning Programs Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-accent-500 opacity-10 pointer-events-none"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-600 text-sm font-semibold rounded-full border border-accent-500/30">
                Advanced Opportunities
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Graduate & Professional Programs</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Advance your career with our specialized graduate and professional development programs designed to prepare you for leadership roles and cutting-edge research opportunities.
            </p>

            <p className="text-slate-600 mb-10 leading-relaxed">
              CUTM OS Advanced Programs offers master's degrees, professional certificates, and specialized coursework in high-demand fields such as data science, artificial intelligence, business leadership, and technology management. Our faculty includes industry experts and leading researchers.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
                <p className="text-4xl font-bold text-primary-900 mb-2">500+</p>
                <p className="text-sm text-slate-700 font-medium">Graduate Students</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 border border-secondary-200">
                <p className="text-4xl font-bold text-primary-900 mb-2">28</p>
                <p className="text-sm text-slate-700 font-medium">Advanced Degree Programs</p>
              </div>
            </div>

            <a href="/admissions" className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Graduate Programs <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=700&fit=crop"
                alt="Graduate students in collaborative learning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-slate-50 py-24 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-primary-500 opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-secondary-500 opacity-5 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Rigorous, Respected & Recognized</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A top-tier academic platform trusted by institutions and students worldwide for excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-slate-200 p-10 text-center hover:shadow-2xl hover:border-accent-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative">
                  <p className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent mb-4">
                    {achievement.stat}
                  </p>
                  <h3 className="text-lg font-bold text-primary-900 mb-3">{achievement.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">{achievement.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-white py-32 sm:py-40 overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-primary-500 opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-secondary-500 opacity-5 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-600 text-sm font-semibold rounded-full border border-accent-500/30">
              Ready to Apply?
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Start Your Academic Journey</h2>
          <p className="text-xl text-slate-700 mb-4 max-w-2xl mx-auto">
            Join thousands of students who are transforming their futures through world-class education and mentorship at CUTM OS.
          </p>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our admissions team is ready to help you find the perfect program and answer any questions you may have about your academic path forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/admissions">
              <Button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Learn About Admissions <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="/register">
              <Button className="bg-white hover:bg-slate-100 text-primary-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
