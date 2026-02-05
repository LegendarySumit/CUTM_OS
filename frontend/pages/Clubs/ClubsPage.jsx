import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, Search, Filter, Book, Code, Music, Users, Zap, Globe, Heart, Lightbulb, Award, X, Clock } from 'lucide-react';
import PublicLayout from '../../components/layout/PublicLayout';

export default function ClubsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showProposalForm, setShowProposalForm] = useState(location.state?.openProposalForm || false);
  const [formData, setFormData] = useState({
    clubName: '',
    category: 'Academic',
    description: '',
    mission: '',
    expectedMembers: '',
    founderName: '',
    email: '',
    phone: ''
  });

  // Clear the location state after reading it
  useEffect(() => {
    if (location.state?.openProposalForm) {
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const clubs = [
    {
      id: 1,
      title: "Coding Club",
      category: "Academic",
      icon: Code,
      description: "Master programming and build amazing projects together",
      members: 342,
      color: "from-purple-400 to-purple-600",
      lightColor: "bg-purple-50",
      established: "2020",
      meetingDays: "Wed & Fri",
      status: "Active",
      president: "Arjun Kumar",
      focusAreas: ["Web Development", "AI/ML", "Competitive Programming"],
      activities: "Weekly coding sessions, hackathons, project showcases"
    },
    {
      id: 2,
      title: "Data Science Society",
      category: "Academic",
      icon: Zap,
      description: "Explore data analytics and machine learning applications",
      members: 287,
      color: "from-blue-400 to-blue-600",
      lightColor: "bg-blue-50",
      established: "2021",
      meetingDays: "Tuesday & Thursday",
      status: "Active",
      president: "Priya Sharma",
      focusAreas: ["Data Analytics", "Python", "Machine Learning"],
      activities: "Data challenges, guest lectures from industry experts, case studies"
    },
    {
      id: 3,
      title: "Music Ensemble",
      category: "Arts",
      icon: Music,
      description: "Perform and explore various musical genres and styles",
      members: 156,
      color: "from-pink-400 to-pink-600",
      lightColor: "bg-pink-50",
      established: "2019",
      meetingDays: "Monday & Wednesday",
      status: "Active",
      president: "Aisha Khan",
      focusAreas: ["Classical", "Contemporary", "Jazz"],
      activities: "Monthly concerts, jam sessions, inter-college performances"
    },
    {
      id: 4,
      title: "Debate Club",
      category: "Social",
      icon: Users,
      description: "Develop public speaking and argumentation skills",
      members: 198,
      color: "from-orange-400 to-orange-600",
      lightColor: "bg-orange-50",
      established: "2018",
      meetingDays: "Friday Evening",
      status: "Active",
      president: "Rohan Patel",
      focusAreas: ["Parliamentary Debate", "Public Speaking", "Research"],
      activities: "Inter-college tournaments, weekly debates, workshops"
    },
    {
      id: 5,
      title: "Entrepreneurship Club",
      category: "Business",
      icon: Lightbulb,
      description: "Launch startups and learn business fundamentals",
      members: 267,
      color: "from-yellow-400 to-yellow-600",
      lightColor: "bg-yellow-50",
      established: "2020",
      meetingDays: "Thursday & Saturday",
      status: "Active",
      president: "Vikram Singh",
      focusAreas: ["Startups", "Business Plan", "Funding"],
      activities: "Pitch competitions, mentorship sessions, networking events"
    },
    {
      id: 6,
      title: "Global Connections",
      category: "Social",
      icon: Globe,
      description: "Connect with students worldwide and explore cultures",
      members: 421,
      color: "from-green-400 to-green-600",
      lightColor: "bg-green-50",
      established: "2017",
      meetingDays: "Tuesday Evening",
      status: "Active",
      president: "Neha Gupta",
      focusAreas: ["Cultural Exchange", "Languages", "Travel"],
      activities: "International food festivals, language workshops, pen pal programs"
    },
    {
      id: 7,
      title: "Volunteer Corps",
      category: "Service",
      icon: Heart,
      description: "Make a difference through community service projects",
      members: 198,
      color: "from-rose-400 to-rose-600",
      lightColor: "bg-rose-50",
      established: "2019",
      meetingDays: "Saturday Morning",
      status: "Active",
      president: "Aditi Verma",
      focusAreas: ["Community Service", "Environmental", "Education"],
      activities: "Beach cleanups, school mentoring, charity drives"
    },
    {
      id: 8,
      title: "Innovation Lab",
      category: "Academic",
      icon: Award,
      description: "Design and prototype innovative solutions to real problems",
      members: 234,
      color: "from-cyan-400 to-cyan-600",
      lightColor: "bg-cyan-50",
      established: "2022",
      meetingDays: "Wednesday & Friday",
      status: "Active",
      president: "Sanjay Das",
      focusAreas: ["Robotics", "IoT", "Sustainability"],
      activities: "Design workshops, innovation competitions, patent guidance"
    },
    {
      id: 9,
      title: "Book Club",
      category: "Arts",
      icon: Book,
      description: "Discuss literature and expand your reading horizons",
      members: 145,
      color: "from-indigo-400 to-indigo-600",
      lightColor: "bg-indigo-50",
      established: "2018",
      meetingDays: "Sunday Afternoon",
      status: "Active",
      president: "Meera Iyer",
      focusAreas: ["Fiction", "Non-fiction", "Poetry"],
      activities: "Monthly book discussions, author talks, reading challenges"
    },
    {
      id: 10,
      title: "Environmental Sustainability Club",
      category: "Service",
      icon: Globe,
      description: "Build a sustainable future through environmental initiatives",
      members: 287,
      color: "from-teal-400 to-teal-600",
      lightColor: "bg-teal-50",
      established: "2021",
      meetingDays: "Monday & Thursday",
      status: "Active",
      president: "Ravi Malhotra",
      focusAreas: ["Green Campus", "Climate Action", "Recycling Programs"],
      activities: "Tree planting drives, sustainability workshops, carbon footprint audits"
    }
  ];

  const categories = ['All', 'Academic', 'Arts', 'Social', 'Business', 'Service'];

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    alert('Thank you! Your club proposal has been submitted. Our team will review it and contact you soon.');
    setShowProposalForm(false);
    setFormData({
      clubName: '',
      category: 'Academic',
      description: '',
      mission: '',
      expectedMembers: '',
      founderName: '',
      email: '',
      phone: ''
    });
  };

  return (
    <PublicLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-3">Student Clubs & Organizations</h1>
            <p className="text-lg text-primary-700 max-w-3xl leading-relaxed">
              Join 150+ student-led groups or start your own club and make your mark on campus. Explore diverse communities, develop leadership skills, and connect with like-minded students.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-cyan-50 via-blue-50 to-white py-8 border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">150+</p>
              <p className="text-sm text-primary-700 font-semibold mt-2">Active Clubs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-cyan-600">5K+</p>
              <p className="text-sm text-primary-700 font-semibold mt-2">Total Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">6</p>
              <p className="text-sm text-primary-700 font-semibold mt-2">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-cyan-600">12+</p>
              <p className="text-sm text-primary-700 font-semibold mt-2">Events/Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-gradient-to-r from-cyan-50 via-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
              />
            </div>

            {/* Submit Proposal Button */}
            <button
              onClick={() => setShowProposalForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Plus size={20} />
              Start a Club
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white border-2 border-blue-300 text-primary-900 hover:border-blue-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredClubs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredClubs.map((club) => {
              const IconComponent = club.icon;
              return (
                <div
                  key={club.id}
                  className={`${club.lightColor} border-2 border-blue-200/60 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group`}
                >
                  {/* Header with Icon and Title */}
                  <div className={`bg-gradient-to-r ${club.color} p-6 flex items-start justify-between`}>
                    <div className="flex items-start gap-4">
                      <div className="bg-white rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={32} className="text-primary-900" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{club.title}</h3>
                        <p className="text-white/90 text-sm mt-1">Est. {club.established}</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-white/25 backdrop-blur-sm border border-white/50 rounded-full text-white text-xs font-bold">
                      {club.status}
                    </span>
                  </div>

                  {/* Club Info */}
                  <div className="p-6 space-y-5">
                    {/* Description */}
                    <div>
                      <p className="text-slate-700 leading-relaxed font-medium">{club.description}</p>
                    </div>

                    {/* President and Details */}
                    <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-primary-600 font-semibold uppercase">President</p>
                          <p className="text-primary-900 font-bold">{club.president}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-primary-600 font-semibold uppercase">Members</p>
                          <p className="text-2xl font-bold text-blue-600">{club.members}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meeting Schedule */}
                    <div className="flex items-center gap-3 bg-blue-100/50 p-3 rounded-lg">
                      <Clock size={18} className="text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-blue-700 font-semibold">Meets</p>
                        <p className="text-sm text-primary-900 font-medium">{club.meetingDays}</p>
                      </div>
                    </div>

                    {/* Focus Areas */}
                    <div>
                      <p className="text-xs text-primary-600 font-semibold uppercase mb-2">Focus Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {club.focusAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 bg-gradient-to-r ${club.color} text-white text-xs font-semibold rounded-full`}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Activities */}
                    <div>
                      <p className="text-xs text-primary-600 font-semibold uppercase mb-2">Activities</p>
                      <p className="text-sm text-slate-700 leading-relaxed bg-white/50 p-3 rounded-lg">
                        {club.activities}
                      </p>
                    </div>

                    {/* Category Badge and Join Button */}
                    <div className="flex gap-3 pt-2 items-center">
                      <span className="px-4 py-2 bg-blue-200 text-blue-800 text-xs font-bold rounded-full whitespace-nowrap">
                        {club.category}
                      </span>
                      <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 group-hover:shadow-xl">
                        Join Club
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-600 font-semibold mb-4">No clubs found matching your search</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Club Proposal Form Modal */}
      {showProposalForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 flex justify-between items-center flex-shrink-0">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Submit Club Proposal</h2>
                <p className="text-blue-100">Create a new student club at CUTM OS</p>
              </div>
              <button
                onClick={() => setShowProposalForm(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-all flex-shrink-0"
              >
                <X size={28} />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmitProposal} className="flex-1 overflow-y-auto p-8 space-y-6">
              {/* Club Name */}
              <div>
                <label className="block text-sm font-bold text-primary-900 mb-2">Club Name *</label>
                <input
                  type="text"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleFormChange}
                  required
                  placeholder="e.g., Tech Innovators Club"
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-bold text-primary-900 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Academic</option>
                  <option>Arts</option>
                  <option>Social</option>
                  <option>Business</option>
                  <option>Service</option>
                  <option>Sports</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-primary-900 mb-2">Club Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  placeholder="What does your club do? What activities will members participate in?"
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Mission */}
              <div>
                <label className="block text-sm font-bold text-primary-900 mb-2">Club Mission *</label>
                <textarea
                  name="mission"
                  value={formData.mission}
                  onChange={handleFormChange}
                  required
                  rows={3}
                  placeholder="What is the primary goal and purpose of your club?"
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Expected Members */}
              <div>
                <label className="block text-sm font-bold text-primary-900 mb-2">Expected Members *</label>
                <input
                  type="number"
                  name="expectedMembers"
                  value={formData.expectedMembers}
                  onChange={handleFormChange}
                  required
                  min="5"
                  placeholder="How many members do you expect?"
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Founder Details */}
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="font-bold text-primary-900 mb-4">Founder Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="founderName"
                      value={formData.founderName}
                      onChange={handleFormChange}
                      required
                      placeholder="Full name"
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="your.email@cutmos.edu"
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowProposalForm(false)}
                  className="flex-1 px-6 py-3 border-2 border-slate-300 text-primary-900 font-bold rounded-lg hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Premium CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-cyan-300/20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-blue-300/20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl bg-cyan-200/10 transform -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-200/40 border border-cyan-400/50 backdrop-blur-sm">
              <Lightbulb size={18} className="text-cyan-600" />
              <span className="text-cyan-700 font-semibold text-sm">Start Something Amazing</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              Can't Find Your Club?
            </h2>
            <p className="text-lg sm:text-xl text-primary-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Start your own student organization and build a community around your passion. We support new clubs with resources, space, and guidance to help you succeed.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cyan-300/60 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Full Support</h3>
              </div>
              <p className="text-primary-700 text-sm">Get resources, mentorship, and administrative support from our team</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-300/60 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Build Community</h3>
              </div>
              <p className="text-primary-700 text-sm">Connect with like-minded students and create lasting friendships</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cyan-300/60 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Make Impact</h3>
              </div>
              <p className="text-primary-700 text-sm">Organize events, workshops, and initiatives that matter to your community</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowProposalForm(true)}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Plus size={24} />
                Start a Club Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-4 border-2 border-cyan-400 hover:border-cyan-600 text-primary-900 font-bold text-lg rounded-xl transition-all duration-300 hover:bg-cyan-100/50 backdrop-blur-sm"
            >
              Explore Clubs
            </button>
          </div>

          {/* Info Section */}
          <div className="mt-12 pt-8 border-t border-cyan-300/40">
            <p className="text-primary-700 text-center text-sm mb-6 font-semibold">
              Our team reviews and approves new clubs within 2-3 business days
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-600">500+</p>
                <p className="text-xs text-primary-700 font-semibold mt-1">Clubs Created</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">95%</p>
                <p className="text-xs text-primary-700 font-semibold mt-1">Approval Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-600">48hrs</p>
                <p className="text-xs text-primary-700 font-semibold mt-1">Avg Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
