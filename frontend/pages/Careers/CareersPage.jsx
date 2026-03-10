import PublicLayout from '../../components/layout/PublicLayout';
import { Briefcase, MapPin, Clock, Heart, Users, TrendingUp, ArrowRight, CheckCircle, Search, HelpCircle, Clock as ClockIcon, MapPin as LocationIcon, User, Mail, Phone, FileText, MessageSquare, Upload } from 'lucide-react';
import { useState } from 'react';

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFAQCategory, setActiveFAQCategory] = useState('all');
  const [faqSearch, setFaqSearch] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    jobPosition: ''
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [applicationStatus, setApplicationStatus] = useState('idle'); // idle, loading, success, error
  const [contactStatus, setContactStatus] = useState('idle');

  const departments = [
    { id: 'all', name: 'All Positions', count: 8 },
    { id: 'engineering', name: 'Engineering', count: 3 },
    { id: 'design', name: 'Design', count: 2 },
    { id: 'content', name: 'Content', count: 2 },
    { id: 'data', name: 'Data & Analytics', count: 1 }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'engineering',
      salary: '₹12L - ₹18L',
      description: 'Build and maintain our web platform using React and Node.js. Lead technical decisions and mentor junior developers.',
      requirements: ['5+ years experience', 'React & Node.js expertise', 'PostgreSQL', 'System design knowledge']
    },
    {
      id: 2,
      title: 'Junior Full Stack Developer',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'engineering',
      salary: '₹6L - ₹10L',
      description: 'Develop new features and bug fixes for our learning platform. Work with an experienced team.',
      requirements: ['2+ years experience', 'React fundamentals', 'JavaScript/TypeScript', 'Git proficiency']
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'engineering',
      salary: '₹10L - ₹15L',
      description: 'Manage infrastructure, CI/CD pipelines, and cloud deployments. Ensure system reliability and performance.',
      requirements: ['Docker & Kubernetes', 'AWS/GCP', 'Linux', 'Scripting experience']
    },
    {
      id: 4,
      title: 'Product Designer',
      location: 'On-site',
      type: 'Full-time',
      department: 'design',
      salary: '₹8L - ₹12L',
      description: 'Design intuitive interfaces and user experiences for our learning platform. Create design systems and prototypes.',
      requirements: ['3+ years design experience', 'Figma/Adobe XD', 'UI/UX principles', 'User research']
    },
    {
      id: 5,
      title: 'UX Researcher',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'design',
      salary: '₹7L - ₹11L',
      description: 'Conduct user research and usability testing. Guide product decisions with data-driven insights.',
      requirements: ['2+ years research experience', 'Qualitative research', 'User testing', 'Analytics']
    },
    {
      id: 6,
      title: 'Educational Content Creator',
      location: 'Remote',
      type: 'Contract',
      department: 'content',
      salary: '₹3L - ₹6L',
      description: 'Develop engaging educational content for various academic subjects and create course materials.',
      requirements: ['Subject matter expertise', 'Content writing', 'Video production basics', 'Teaching experience']
    },
    {
      id: 7,
      title: 'Technical Content Writer',
      location: 'Remote',
      type: 'Full-time',
      department: 'content',
      salary: '₹5L - ₹9L',
      description: 'Create technical documentation, tutorials, and API guides. Make complex topics accessible.',
      requirements: ['2+ years writing experience', 'Technical background', 'SEO knowledge', 'Portfolio']
    },
    {
      id: 8,
      title: 'Data Scientist',
      location: 'Hybrid',
      type: 'Full-time',
      department: 'data',
      salary: '₹11L - ₹16L',
      description: 'Analyze student learning patterns and improve recommendation system. Build ML models for feature personalization.',
      requirements: ['Python/R expertise', 'ML experience', 'SQL', 'Statistics knowledge']
    }
  ];

  const benefits = [
    { icon: Heart, title: 'Health Insurance', description: 'Comprehensive health coverage for you and your family' },
    { icon: Users, title: 'Flexible Work', description: 'Remote options, flexible hours, and work-life balance' },
    { icon: TrendingUp, title: 'Growth', description: 'Continuous learning opportunities and career development' },
    { icon: Briefcase, title: 'Competitive Pay', description: 'Market-competitive salaries and performance bonuses' },
    { icon: CheckCircle, title: 'Stock Options', description: 'ESOP program for eligible employees' },
    { icon: Users, title: 'Team Culture', description: 'Collaborative, inclusive, and supportive work environment' }
  ];

  const values = [
    { title: 'Impact Driven', description: 'We measure success by the positive impact on education and students lives' },
    { title: 'Innovation', description: 'We encourage creative thinking and new approaches to solving problems' },
    { title: 'Collaboration', description: 'Teamwork across disciplines to build the best solutions' },
    { title: 'Excellence', description: 'We pursue quality in everything we do, from code to content' }
  ];

  const filteredJobs = activeCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === activeCategory);

  // Handler functions for application modal
  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setApplicationForm({ ...applicationForm, jobPosition: jobTitle });
    setShowApplicationModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm({ ...applicationForm, [name]: value });
  };

  const handleFileChange = (e) => {
    setApplicationForm({ ...applicationForm, resume: e.target.files[0] });
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setApplicationStatus('loading');
    
    try {
      // Simulate form submission - In real app, send to backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setApplicationStatus('success');
      setTimeout(() => {
        setShowApplicationModal(false);
        setApplicationStatus('idle');
        setApplicationForm({
          name: '',
          email: '',
          phone: '',
          resume: null,
          coverLetter: '',
          jobPosition: ''
        });
      }, 2000);
    } catch (error) {
      setApplicationStatus('error');
    }
  };

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    setContactStatus('loading');
    
    try {
      // Simulate form submission - In real app, send to backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setContactStatus('success');
      setTimeout(() => {
        setShowContactModal(false);
        setContactStatus('idle');
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 2000);
    } catch (error) {
      setContactStatus('error');
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Join Our Mission</h1>
            <p className="text-xl text-primary-100 mb-6">
              Help us revolutionize education and empower students worldwide
            </p>
            <p className="text-primary-200 max-w-2xl mx-auto">
              We're building tools that transform how students learn. If you're passionate about education, 
              technology, and making a real difference, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">Why Join CUTM OS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.slice(0, 3).map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                    <Icon className="text-primary-600 mb-4" size={36} />
                    <h3 className="font-semibold text-primary-900 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-slate-700">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {benefits.slice(3, 6).map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index + 3} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                    <Icon className="text-primary-600 mb-4" size={36} />
                    <h3 className="font-semibold text-primary-900 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-slate-700">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">{value.title}</h3>
                  <p className="text-slate-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Open Positions</h2>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setActiveCategory(dept.id)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    activeCategory === dept.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-primary-600 border border-primary-200 hover:border-primary-400'
                  }`}
                >
                  {dept.name} <span className="ml-2 text-sm">({dept.count})</span>
                </button>
              ))}
            </div>

            {/* Jobs Grid */}
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div 
                    key={job.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border border-slate-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900">{job.title}</h3>
                        <p className="text-primary-600 font-semibold text-lg mt-1">{job.salary}</p>
                      </div>
                      <button 
                        onClick={() => handleApplyClick(job.title)}
                        className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition flex items-center gap-2"
                      >
                        Apply <ArrowRight size={18} />
                      </button>
                    </div>

                    <p className="text-slate-700 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin size={16} className="text-primary-600" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock size={16} className="text-primary-600" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Briefcase size={16} className="text-primary-600" />
                        {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <span 
                            key={index}
                            className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-600 text-lg">No positions available in this category at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Submit Your Resume', description: 'Apply directly through our careers portal' },
                { step: 2, title: 'Initial Screening', description: 'We review your application (2-3 days)' },
                { step: 3, title: 'Interviews', description: 'Phone, technical, and team interviews' },
                { step: 4, title: 'Offer & Onboarding', description: 'Join our team and start making impact' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Apply now or reach out to us if you have questions about any position or have a different role in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setApplicationForm({ ...applicationForm, jobPosition: 'General Application' });
                  setShowApplicationModal(true);
                }}
                className="inline-block bg-white text-primary-900 px-8 py-3 rounded-lg hover:bg-slate-100 transition font-semibold"
              >
                Apply Now
              </button>
              <button 
                onClick={() => setShowContactModal(true)}
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-primary-800 transition font-semibold"
              >
                Contact HR
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Can't find what you're looking for? Check our FAQs below</p>
            </div>

            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:border-primary-600 focus:outline-none transition"
                />
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="mb-8 flex flex-wrap gap-3 justify-center">
              {[
                { id: 'all', label: 'All', icon: HelpCircle },
                { id: 'application', label: 'Application', icon: Briefcase },
                { id: 'work', label: 'Work Culture', icon: Users },
                { id: 'benefits', label: 'Benefits', icon: Heart },
                { id: 'other', label: 'Other', icon: CheckCircle }
              ].map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFAQCategory(cat.id === 'all' ? 'all' : cat.id);
                      setFaqSearch('');
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition ${
                      activeFAQCategory === cat.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-white text-primary-600 border border-primary-200 hover:border-primary-400'
                    }`}
                  >
                    <Icon size={18} />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* FAQs Grid */}
            <div className="space-y-4">
              {[
                {
                  q: 'What is the application timeline?',
                  a: 'Application review typically takes 2-3 weeks. We will contact shortlisted candidates for interviews. The entire process from application to offer usually takes 4-6 weeks.',
                  category: 'application',
                  icon: ClockIcon
                },
                {
                  q: 'Do you offer remote work?',
                  a: 'Yes! Many positions are fully remote or hybrid. Check the job listing for location details. We value flexibility and understand different working styles.',
                  category: 'work',
                  icon: LocationIcon
                },
                {
                  q: 'Do you hire interns?',
                  a: 'We hire interns during summer and winter breaks. Check back during recruitment seasons or contact HR at hr@cutmos.edu with your resume and CV.',
                  category: 'application',
                  icon: Users
                },
                {
                  q: 'What is your diversity and inclusion policy?',
                  a: 'We are committed to building a diverse and inclusive team. We welcome applicants from all backgrounds and actively work to create an inclusive workplace culture.',
                  category: 'work',
                  icon: Heart
                },
                {
                  q: 'What benefits do employees receive?',
                  a: 'We offer comprehensive health insurance, flexible work options, stock options (ESOP), professional development allowance, and a supportive team culture.',
                  category: 'benefits',
                  icon: Heart
                },
                {
                  q: 'Can I apply for multiple positions?',
                  a: 'Yes, you can apply for multiple positions. However, we recommend applying for roles that match your skills and experience for the best outcome.',
                  category: 'application',
                  icon: Briefcase
                }
              ]
                .filter(faq => activeFAQCategory === 'all' || faq.category === activeFAQCategory)
                .filter(faq => faq.q.toLowerCase().includes(faqSearch.toLowerCase()) || faq.a.toLowerCase().includes(faqSearch.toLowerCase()))
                .map((faq, index) => {
                  const Icon = faq.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-primary-400 hover:shadow-md transition"
                    >
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                        className="w-full px-6 py-5 flex items-start justify-between hover:bg-slate-50 transition"
                      >
                        <div className="flex items-start gap-4 text-left">
                          <Icon className="text-primary-600 mt-1 flex-shrink-0" size={22} />
                          <span className="font-semibold text-primary-900 text-lg">{faq.q}</span>
                        </div>
                        <ArrowRight
                          size={20}
                          className={`text-primary-600 flex-shrink-0 mt-1 transition ${expandedFAQ === index ? 'rotate-90' : ''}`}
                        />
                      </button>
                      {expandedFAQ === index && (
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                          <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}

              {/* No Results */}
              {[
                {
                  q: 'What is the application timeline?',
                  a: 'Application review typically takes 2-3 weeks.',
                  category: 'application'
                },
                {
                  q: 'Do you offer remote work?',
                  a: 'Yes! Many positions are fully remote or hybrid.',
                  category: 'work'
                },
                {
                  q: 'Do you hire interns?',
                  a: 'We hire interns during summer and winter breaks.',
                  category: 'application'
                },
                {
                  q: 'What is your diversity and inclusion policy?',
                  a: 'We are committed to building a diverse and inclusive team.',
                  category: 'work'
                },
                {
                  q: 'What benefits do employees receive?',
                  a: 'We offer comprehensive health insurance and flexible work options.',
                  category: 'benefits'
                },
                {
                  q: 'Can I apply for multiple positions?',
                  a: 'Yes, you can apply for multiple positions.',
                  category: 'application'
                }
              ]
                .filter(faq => activeFAQCategory === 'all' || faq.category === activeFAQCategory)
                .filter(faq => faq.q.toLowerCase().includes(faqSearch.toLowerCase()) || faq.a.toLowerCase().includes(faqSearch.toLowerCase())).length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="text-slate-400 mx-auto mb-4" size={48} />
                  <p className="text-slate-600 text-lg">No FAQs match your search. Please try different keywords.</p>
                </div>
              )}
            </div>

            {/* Still have questions */}
            <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Still have questions?</h3>
              <p className="text-slate-700 mb-6">
                Our HR team is here to help. Reach out to us directly for any questions not covered in our FAQs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-semibold"
                >
                  Contact HR
                </button>
                <a 
                  href="mailto:careers@cutmos.edu" 
                  className="inline-block border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-lg hover:bg-primary-50 transition font-semibold"
                >
                  General Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Application Modal */}
        {showApplicationModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
              {/* Modal Header - Premium Gradient Design */}
              <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white p-8 sticky top-0 rounded-t-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                
                <div className="relative flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Briefcase size={28} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-1">Apply Now</h2>
                      <p className="text-white/80 text-sm font-medium">Join our amazing team</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowApplicationModal(false)}
                    className="text-white hover:bg-white/20 p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                {applicationStatus === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="text-white" size={56} />
                    </div>
                    <h3 className="text-3xl font-bold text-primary-900 mb-3">Application Submitted!</h3>
                    <p className="text-slate-700 mb-2 text-lg font-medium">Thank you for applying to {applicationForm.jobPosition}</p>
                    <p className="text-slate-600">We'll review your application and get back to you within 2-3 weeks.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication}>
                    {/* Progress Indicator */}
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center font-bold text-base shadow-lg">1</div>
                        <div>
                          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Step 1</p>
                          <span className="text-sm font-bold text-primary-900">Basic Information</span>
                        </div>
                      </div>
                      <div className="flex-1 h-1.5 bg-gradient-to-r from-primary-400 to-primary-300 mx-4 rounded-full"></div>
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 rounded-full bg-slate-300/50 text-slate-600 flex items-center justify-center font-bold text-base border-2 border-slate-300">2</div>
                        <div>
                          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Step 2</p>
                          <span className="text-sm font-bold text-slate-700">Documents</span>
                        </div>
                      </div>
                    </div>

                    {/* Job Position Section */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 via-blue-50 to-primary-50 rounded-2xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Position</p>
                          <p className="text-lg font-bold text-primary-900">{applicationForm.jobPosition}</p>
                        </div>
                      </div>
                    </div>

                    {/* Full Name */}
                    <div className="mb-6 group">
                      <label className="text-sm font-bold text-primary-900 mb-2 flex items-center gap-2">
                        <User size={16} className="text-primary-600" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={applicationForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 placeholder-slate-400"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-6 group">
                      <label className="text-sm font-bold text-primary-900 mb-2 flex items-center gap-2">
                        <Mail size={16} className="text-primary-600" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={applicationForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 placeholder-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-6 group">
                      <label className="text-sm font-bold text-primary-900 mb-2 flex items-center gap-2">
                        <Phone size={16} className="text-primary-600" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={applicationForm.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 placeholder-slate-400"
                        placeholder="+91 (555) 123-4567"
                      />
                    </div>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-primary-300 to-slate-200"></div>
                      <span className="text-sm font-semibold text-slate-600">Documents</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-primary-300 to-slate-200"></div>
                    </div>

                    {/* Resume Upload */}
                    <div className="mb-6">
                      <label className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <Upload size={16} className="text-primary-600" />
                        Upload Resume (PDF) *
                      </label>
                      <div className="relative group">
                        <input
                          type="file"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                          className="w-full opacity-0 absolute inset-0 cursor-pointer"
                        />
                        <div className="w-full px-4 py-4 border-2 border-dashed border-primary-300 rounded-xl text-center cursor-pointer bg-gradient-to-br from-primary-50 to-blue-50 hover:from-primary-100 hover:to-blue-100 transition-all duration-300 group-hover:border-primary-500">
                          <Upload size={24} className="mx-auto mb-2 text-primary-600" />
                          <p className="text-sm font-semibold text-primary-900">Drop your resume here or click</p>
                          <p className="text-xs text-slate-600 mt-1">Accepted: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                      </div>
                      {applicationForm.resume && (
                        <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded-lg flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-600" />
                          <span className="text-sm text-green-700 font-medium">{applicationForm.resume.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Cover Letter */}
                    <div className="mb-6">
                      <label className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <MessageSquare size={16} className="text-primary-600" />
                        Cover Letter
                      </label>
                      <textarea
                        name="coverLetter"
                        value={applicationForm.coverLetter}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 resize-none placeholder-slate-400"
                        placeholder="Tell us why you're interested in this position and what you'd bring to our team..."
                        rows="5"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={applicationStatus === 'loading'}
                      className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-base ${
                        applicationStatus === 'loading'
                          ? 'bg-slate-400 text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 hover:shadow-xl'
                      }`}
                    >
                      {applicationStatus === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contact HR Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
              {/* Modal Header - Gradient Background */}
              <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white p-8 flex justify-between items-center sticky top-0 rounded-t-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Contact HR</h2>
                    <p className="text-sm text-primary-100 mt-1">We're here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                {contactStatus === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="text-white mx-auto" size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-primary-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-slate-700 mb-2 text-lg font-medium">Thank you for contacting our HR team</p>
                    <p className="text-slate-600">We'll review your message and get back to you within 24 hours with a response.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitContact} className="space-y-6">
                    {/* Full Name */}
                    <div className="group">
                      <label className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <User size={16} className="text-primary-600" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-5 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 placeholder-slate-400 font-medium"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <Mail size={16} className="text-primary-600" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-5 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 placeholder-slate-400 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <label className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <Phone size={16} className="text-primary-600" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-5 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 placeholder-slate-400 font-medium"
                        placeholder="+91 (555) 123-4567"
                      />
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-primary-300 to-slate-200"></div>
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Your Message</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-primary-300 to-slate-200"></div>
                    </div>

                    {/* Subject */}
                    <div className="group">
                      <label className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <FileText size={16} className="text-primary-600" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-5 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 placeholder-slate-400 font-medium"
                        placeholder="e.g., Career Inquiry, Benefits Question, Feedback..."
                      />
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label className="text-sm font-bold text-primary-900 mb-3 flex items-center gap-2">
                        <MessageSquare size={16} className="text-primary-600" />
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-5 py-3 border-2 border-slate-300 rounded-xl focus:border-primary-600 focus:outline-none focus:shadow-lg focus:shadow-primary-500/20 transition-all duration-300 bg-white hover:border-slate-400 resize-none placeholder-slate-400 font-medium"
                        placeholder="Please tell us what you'd like to discuss in detail..."
                        rows="6"
                      />
                      <p className="text-xs text-slate-500 mt-2">Character count: {contactForm.message.length}/1000</p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={contactStatus === 'loading'}
                      className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-base ${
                        contactStatus === 'loading'
                          ? 'bg-slate-400 text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 hover:shadow-xl'
                      }`}
                    >
                      {contactStatus === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Your Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    {/* Info Box */}
                    <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
                      <p className="text-xs text-slate-700 text-center font-medium">
                        💡 <span className="text-primary-900 font-bold">Pro tip:</span> Be as detailed as possible - it helps our HR team assist you better!
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </PublicLayout>
  );
}
