import { Users, Music, Trophy, Heart, BookOpen, Zap, ChevronLeft, ChevronRight, MapPin, Clock, Sparkles, Award } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicLayout from '../../components/layout/PublicLayout';
import HeroSection from '../../components/sections/HeroSection';
import { Button } from '../../components/ui/Button';

export default function StudentLifePage() {
  const navigate = useNavigate();
  const [hoveredAlumni, setHoveredAlumni] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const clubs = [
    {
      icon: Music,
      title: "Arts & Culture",
      description: "Join our music, theater, and visual arts clubs to express your creativity.",
      color: "from-purple-500 to-pink-500",
      lightColor: "bg-purple-50"
    },
    {
      icon: Trophy,
      title: "Sports & Recreation",
      description: "Stay active with varsity sports, club teams, and fitness programs.",
      color: "from-orange-500 to-red-500",
      lightColor: "bg-orange-50"
    },
    {
      icon: Users,
      title: "Leadership & Service",
      description: "Develop leadership skills through community service and volunteer opportunities.",
      color: "from-green-500 to-emerald-500",
      lightColor: "bg-green-50"
    },
    {
      icon: Heart,
      title: "Wellness & Health",
      description: "Prioritize your mental and physical health with our wellness programs.",
      color: "from-pink-500 to-rose-500",
      lightColor: "bg-pink-50"
    },
    {
      icon: BookOpen,
      title: "Academic Societies",
      description: "Engage with peers in your major through specialized academic clubs.",
      color: "from-blue-500 to-cyan-500",
      lightColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Innovation Hub",
      description: "Collaborate on startup ideas and entrepreneurship projects.",
      color: "from-yellow-500 to-amber-500",
      lightColor: "bg-yellow-50"
    }
  ];

  const activities = [
    { title: "Orientation Week", date: "August 15-22", description: "Your gateway to campus life! Meet hundreds of fellow students, explore world-class facilities, attend welcome sessions, and prepare for an amazing semester ahead.", icon: Sparkles },
    { title: "Fall Fest", date: "September 10", description: "The biggest celebration of the year! Enjoy live music, delicious food, carnival games, and connect with 150+ student organizations.", icon: Music },
    { title: "Homecoming", date: "October 5-12", description: "A week-long celebration bringing together students and alumni! Experience thrilling games, festive parades, and exclusive networking with CUTM OS graduates.", icon: Award },
    { title: "Career Fair", date: "November 3", description: "Connect directly with leading companies and industry professionals! Explore internship opportunities and discover career paths aligned with your goals.", icon: Users },
    { title: "Winter Gala", date: "December 1", description: "A sophisticated evening celebrating student achievements! Join us for an elegant formal dinner, live performances, and awards ceremony.", icon: Trophy },
    { title: "Spring Fling", date: "April 10-15", description: "Experience the joy of spring with outdoor festivities! Enjoy food trucks, live performances, sports tournaments, and art exhibitions on campus.", icon: Heart }
  ];

  const housing = [
    { name: "Freshman Residential Halls", capacity: "1,200", description: "Modern dorms with community spaces and RA support" },
    { name: "Themed Living Communities", capacity: "300", description: "Interest-based housing for specific academic programs" },
    { name: "Upper-Class Apartments", capacity: "800", description: "Independent living with kitchens and study areas" },
    { name: "Graduate Housing", capacity: "400", description: "Quiet, professional communities for graduate students" }
  ];

  const alumni = [
    {
      name: "Leonardo DiCaprio",
      class: "BA Class of 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Environmental activist and climate change advocate",
        "Founded Leonardo DiCaprio Foundation for environmental causes",
        "Academy Award winning actor and producer"
      ],
      cta: "Watch the Video",
      ctaHref: "#"
    },
    {
      name: "Scarlett Johansson",
      class: "BA Class of 2018, MA Class of 2020",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Award-winning actress and film producer",
        "Founded production company These Pictures",
        "Global advocate for women in entertainment"
      ],
      cta: "Learn About the MA Program",
      ctaHref: "#"
    },
    {
      name: "Johnny Depp",
      class: "BA Class of 2019",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Versatile actor and musician",
        "Founded production company for independent films",
        "Known for innovative character transformations"
      ],
      cta: "Watch the Video",
      ctaHref: "#"
    },
    {
      name: "Angelina Jolie",
      class: "BA Class of 2021",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Oscar-winning actress and humanitarian",
        "UN Special Envoy for refugee crisis",
        "Founder of Jolie-Pitt Foundation for global causes"
      ],
      cta: "Watch the Video",
      ctaHref: "#"
    },
    {
      name: "Chris Hemsworth",
      class: "BA Class of 2020",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Hollywood A-list actor and fitness enthusiast",
        "Producer of health and wellness platforms",
        "Global ambassador for multiple charitable organizations"
      ],
      cta: "Watch the Video",
      ctaHref: "#"
    },
    {
      name: "Emma Watson",
      class: "BA Class of 2017, MBA Class of 2022",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Actress and UN Goodwill Ambassador for gender equality",
        "Founder of the HeForShe campaign",
        "Producer and environmental sustainability advocate"
      ],
      cta: "Learn About the MBA Program",
      ctaHref: "#"
    },
    {
      name: "Zendaya",
      class: "BA Class of 2019",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Rising superstar actress and style icon",
        "Producer of groundbreaking television content",
        "Advocate for young people and mental health awareness"
      ],
      cta: "Watch the Video",
      ctaHref: "#"
    },
    {
      name: "Chris Evans",
      class: "BA Class of 2022",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Award-winning actor and political activist",
        "Founded production company A Starting Point",
        "Advocate for education and social justice"
      ],
      cta: "Watch the Video",
      ctaHref: "#"
    },
    {
      name: "Jennifer Lawrence",
      class: "BA Class of 2018",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&q=80",
      achievements: [
        "Academy Award-winning actress",
        "Producer of female-led films and stories",
        "Philanthropist supporting education and environmental causes"
      ],
      cta: "Watch the Video",
      ctaHref: "#"
    }
  ];

  const totalSlides = Math.ceil(alumni.length / 3);
  const currentAlumni = alumni.slice(currentSlide * 3, (currentSlide + 1) * 3);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
    setHoveredAlumni(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setHoveredAlumni(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setHoveredAlumni(null);
  };

  return (
    <PublicLayout>
      {/* Hero Section */}
      <HeroSection
        title="Campus Life at CUTM OS"
        subtitle="Experience a vibrant community where learning extends beyond the classroom."
        isDark={true}
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop&q=80"
      />

      {/* Clubs & Organizations - Enhanced */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-secondary-50 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl -mr-48"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -ml-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-4">Clubs & Organizations</h2>
            <p className="text-lg text-slate-600 font-medium">150+ student-led groups to join and lead</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, idx) => {
              const IconComponent = club.icon;
              return (
                <div
                  key={idx}
                  onClick={() => navigate('/clubs')}
                  className={`${club.lightColor} p-8 rounded-2xl border border-white/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:border-white/60`}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${club.color} p-3.5 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">{club.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">{club.description}</p>
                  <button onClick={(e) => { e.stopPropagation(); navigate('/clubs'); }} className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2 group/link">
                    Explore <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6 text-lg">Want to start your own club?</p>
            <button onClick={() => navigate('/clubs', { state: { openProposalForm: true } })} className="px-8 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Submit Club Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Campus Events - Minimalist Design */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-blue-200/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-slate-200/10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/40 border border-blue-300/30">
              <Sparkles size={18} className="text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">Campus Activities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Campus Events</h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto leading-relaxed">
              Calendar of exciting activities & experiences throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity, idx) => {
              const EventIcon = activity.icon;
              const softGrads = [
                'from-blue-400 to-blue-500',
                'from-amber-400 to-amber-500',
                'from-emerald-400 to-emerald-500',
                'from-cyan-400 to-cyan-500',
                'from-slate-400 to-slate-500',
                'from-pink-400 to-pink-500'
              ];
              const softBgs = [
                'bg-blue-50',
                'bg-amber-50',
                'bg-emerald-50',
                'bg-cyan-50',
                'bg-slate-50',
                'bg-pink-50'
              ];
              const buttonColors = [
                'bg-blue-100 text-blue-700 hover:bg-blue-200',
                'bg-amber-100 text-amber-700 hover:bg-amber-200',
                'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
                'bg-cyan-100 text-cyan-700 hover:bg-cyan-200',
                'bg-slate-200 text-slate-700 hover:bg-slate-300',
                'bg-pink-100 text-pink-700 hover:bg-pink-200'
              ];

              return (
                <div
                  key={idx}
                  className={`${softBgs[idx]} border border-slate-200/80 rounded-xl hover:shadow-md transition-all duration-300 group overflow-hidden`}
                >
                  {/* Header with subtle gradient */}
                  <div className={`bg-gradient-to-r ${softGrads[idx]} p-5 flex items-start gap-4`}>
                    <div className="bg-white rounded-lg p-2.5 shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      <EventIcon size={24} className="text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                      <div className="flex items-center gap-2 mt-1.5 text-white/90">
                        <Clock size={14} />
                        <span className="text-sm font-medium">{activity.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-700 leading-relaxed mb-6 text-sm font-medium">
                      {activity.description}
                    </p>

                    <button className={`w-full px-4 py-2.5 font-semibold rounded-lg transition-all duration-300 ${buttonColors[idx]}`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Calling Section - Enhanced */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-700/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <div className="mb-6 pb-4 border-b-2 border-accent-400 inline-block">
                <p className="text-accent-300 font-bold text-sm uppercase tracking-wider">Our Promise</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                Find Your Path Forward
              </h2>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                At CUTM OS, we believe in empowering students to achieve their full potential. We create an inclusive, supportive community where every voice matters and every student is equipped to succeed.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Start Your Journey
              </button>
            </div>

            {/* Right Side - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=300&fit=crop"
                  alt="Students collaborating"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=250&fit=crop"
                  alt="Student portrait"
                  className="w-full h-40 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=250&fit=crop"
                  alt="Campus life"
                  className="w-full h-40 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing & Residential Life - Minimalist Redesign */}
      <section className="bg-gradient-to-b from-slate-50 via-cyan-50/30 to-white py-20 relative overflow-hidden">
        <div className="absolute top-32 -right-40 w-80 h-80 bg-cyan-200/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-4">Housing & Residential Life</h2>
            <p className="text-lg text-slate-600 font-medium">Comfortable living spaces designed for community and personal growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {housing.map((dorm, idx) => {
              const colors = [
                { bg: "from-blue-500 to-cyan-500", light: "from-blue-50 to-cyan-50/30", text: "text-blue-600", btn: "hover:bg-blue-50 text-blue-700" },
                { bg: "from-emerald-500 to-teal-500", light: "from-emerald-50 to-teal-50/30", text: "text-emerald-600", btn: "hover:bg-emerald-50 text-emerald-700" },
                { bg: "from-amber-500 to-orange-500", light: "from-amber-50 to-orange-50/30", text: "text-amber-600", btn: "hover:bg-amber-50 text-amber-700" },
                { bg: "from-slate-500 to-cyan-500", light: "from-slate-50 to-cyan-50/30", text: "text-slate-600", btn: "hover:bg-slate-50 text-slate-700" }
              ];
              const color = colors[idx];
              
              return (
                <div key={idx} className="group relative rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.light} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${color.bg}`}></div>
                  
                  <div className="relative p-8 border border-white/40">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-white/60 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin size={24} className={color.text} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-900">{dorm.name}</h3>
                        <p className={`text-sm font-medium ${color.text}`}>{dorm.capacity} Residents</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-6 font-medium leading-relaxed">{dorm.description}</p>
                    <button className={`px-6 py-2 bg-white/50 ${color.btn} font-semibold rounded-lg transition-all duration-300 border border-white/60`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Housing Selection Process */}
          <div className="p-10 bg-gradient-to-r from-slate-50/60 via-white to-cyan-50/40 rounded-xl border border-white/40 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-primary-900 mb-8">Housing Selection Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Complete Application", desc: "Submit housing form by March deadline", color: "from-blue-500 to-cyan-500" },
                { step: 2, title: "Information Session", desc: "Attend virtual or in-person sessions", color: "from-emerald-500 to-teal-500" },
                { step: 3, title: "Selection Period", desc: "Choose your residence in priority order", color: "from-amber-500 to-orange-500" },
                { step: 4, title: "Move In Day", desc: "Welcome to your new home in August", color: "from-slate-500 to-cyan-500" }
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {item.step}
                  </div>
                  <h4 className="font-bold text-primary-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Excellence - Enhanced */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -ml-48 -mt-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-4">Alumni Excellence</h2>
            <p className="text-lg text-slate-600 font-medium">Meet our remarkable graduates making a global impact</p>
          </div>

          <style>{`
            @keyframes slideInFromRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes slideInFromLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .alumni-card {
              animation: slideInFromRight 0.5s ease-out forwards;
            }
            .carousel-prev .alumni-card {
              animation: slideInFromLeft 0.5s ease-out forwards;
            }
          `}</style>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {currentAlumni.map((person, idx) => (
                <div
                  key={`${currentSlide}-${idx}`}
                  className="alumni-card h-96 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                  onMouseEnter={() => setHoveredAlumni(idx)}
                  onMouseLeave={() => setHoveredAlumni(null)}
                  style={{
                    animationDelay: `${idx * 0.1}s`
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className={`absolute inset-0 transition-all duration-300 flex flex-col justify-between p-6 ${
                    hoveredAlumni === idx 
                      ? 'bg-gradient-to-t from-slate-950/95 via-slate-900/50 to-transparent' 
                      : 'bg-gradient-to-t from-slate-950/70 to-transparent'
                  }`}>
                    
                    <div className="opacity-100">
                      <p className="text-slate-200 text-sm font-semibold">{person.class}</p>
                    </div>

                    <div className="space-y-4">
                      <div className={`transition-all duration-300 space-y-2 min-h-20 ${
                        hoveredAlumni === idx 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4 pointer-events-none'
                      }`}>
                        {person.achievements.map((achievement, aidx) => (
                          <div key={aidx} className="flex items-start gap-2">
                            <span className="text-accent-400 mt-1 flex-shrink-0">✓</span>
                            <p className="text-slate-100 text-sm leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{person.name}</h3>
                      </div>

                      <a 
                        href={person.ctaHref}
                        className={`inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-bold text-xs uppercase tracking-wide transition-all duration-300 ${
                          hoveredAlumni === idx 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}
                      >
                        {person.cta}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-primary-100 hover:bg-primary-200 text-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-3">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === idx
                        ? 'w-8 h-3 bg-gradient-to-r from-primary-600 to-primary-700'
                        : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-primary-100 hover:bg-primary-200 text-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="text-center mt-8 text-slate-600 font-semibold">
              Slide {currentSlide + 1} of {totalSlides}
            </div>
          </div>
        </div>
      </section>

      {/* Wellness & Support - Enhanced */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-4 inline-block pb-3 border-b-2 border-accent-400">
              <p className="text-accent-300 font-bold text-sm uppercase tracking-wider">Support Services</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Student Support & Wellness</h2>
            <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">Comprehensive resources designed to support your academic journey, mental health, and personal growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                icon: "🏥", 
                title: "Health Center", 
                desc: "Comprehensive medical care, preventive health screenings, and wellness programs to keep you healthy and thriving",
                services: ["On-campus clinic", "Health screenings", "Wellness programs"]
              },
              { 
                icon: "🧠", 
                title: "Counseling Services", 
                desc: "Professional mental health support including individual therapy, group sessions, and 24/7 crisis support",
                services: ["Individual therapy", "Group sessions", "Crisis support"]
              },
              { 
                icon: "📚", 
                title: "Academic Success", 
                desc: "Personalized tutoring, collaborative study groups, and academic coaching to help you excel",
                services: ["Peer tutoring", "Study groups", "Academic coaching"]
              },
              { 
                icon: "🎯", 
                title: "Career Services", 
                desc: "Expert guidance on resume building, interview preparation, and connecting with job opportunities",
                services: ["Resume building", "Interview prep", "Job listings"]
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-secondary-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-7 rounded-xl border border-white/20 group-hover:border-accent-400/50 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                  
                  {/* Title & Description */}
                  <h3 className="font-bold text-white text-lg mb-2.5">{item.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed mb-5 flex-grow font-medium">{item.desc}</p>
                  
                  {/* Services List */}
                  <ul className="space-y-1.5 mb-5 pb-5 border-b border-white/10">
                    {item.services.map((service, sidx) => (
                      <li key={sidx} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent-400"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className="w-full px-4 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold text-xs rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/50">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/25 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Take the Next Step</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Ready to Join Our Community?</h2>
          </div>
          
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            Join thousands of students experiencing an incredible college life filled with learning, growth, and unforgettable memories.
          </p>
          
          <p className="text-base text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're looking for academic excellence, vibrant campus life, or professional development, CUTM OS is your gateway to success.
          </p>
          
          <button className="px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
            Apply for Admission
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>
    </PublicLayout>
  );
}
