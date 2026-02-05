import { FileText, DollarSign, MessageCircle, Calendar, CheckCircle, Mail, Phone, User, ArrowRight, Award, Gift, GraduationCap } from 'lucide-react';
import PublicLayout from '../../components/layout/PublicLayout';
import HeroSection from '../../components/sections/HeroSection';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

export default function AdmissionsPage() {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: 'undergraduate'
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Contact form submitted
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setContactForm({ firstName: '', lastName: '', email: '', phone: '', interestedIn: 'undergraduate' });
        setSubmitted(false);
      }, 2000);
    }, 800);
  };

  return (
    <PublicLayout>
      {/* Hero Section */}
      <HeroSection
        title="Admissions & Financial Aid"
        subtitle="Join a community of learners committed to academic excellence and personal growth."
        isDark={true}
        backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=900&fit=crop&q=80"
      />

      {/* Application Overview - 4 Step Process */}
      <section id="application-process" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-primary-500 opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-secondary-500 opacity-10 pointer-events-none"></div>

        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Application Process</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our straightforward 4-step admissions process is designed to be accessible and transparent, welcoming students from all backgrounds.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { step: 1, title: "Create Account", description: "Start your application on our portal", icon: FileText },
            { step: 2, title: "Submit Documents", description: "Upload transcripts and test scores", icon: CheckCircle },
            { step: 3, title: "Personal Essay", description: "Share your story in 500-750 words", icon: Mail },
            { step: 4, title: "Interview (Optional)", description: "Connect with an admissions counselor", icon: MessageCircle }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="group relative">
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center hover:shadow-2xl hover:border-accent-300 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-primary-900 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <Icon className="w-8 h-8 text-accent-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 flex-grow">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <a href="#connect-admissions">
            <Button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-10 py-3 rounded-lg font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Your Application <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Key Requirements Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-slate-50 py-24 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-primary-500 opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-secondary-500 opacity-5 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Application Requirements</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We've outlined everything you need to know to prepare a strong application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Required Documents */}
            <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-full p-3">
                  <FileText className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900">Required Documents</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "High School Transcripts (or GED)",
                  "Standardized Test Scores (SAT/ACT)",
                  "One Letter of Recommendation",
                  "Personal Statement (250-500 words)",
                  "Birth Certificate Copy",
                  "Proof of Immunizations"
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admission Timeline */}
            <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-full p-3">
                  <Calendar className="w-6 h-6 text-accent-900" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900">Admission Timeline</h3>
              </div>
              <div className="space-y-5">
                {[
                  { title: "Early Decision", deadline: "November 1" },
                  { title: "Fall Semester Application", deadline: "March 15" },
                  { title: "Spring Semester Application", deadline: "September 15" },
                  { title: "Transfer Student Deadline", deadline: "April 1" }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-accent-500 pl-5 pb-4 last:pb-0">
                    <p className="font-semibold text-primary-900">{item.title}</p>
                    <p className="text-sm text-slate-600 mt-1">📅 {item.deadline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Pathways Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-accent-500 opacity-10 pointer-events-none"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="hidden lg:block order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&h=700&fit=crop"
                alt="Students on campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-none">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-600 text-sm font-semibold rounded-full border border-accent-500/30">
                Multiple Pathways
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Your Admissions Journey</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Whether you're a first-time student, transfer student, or returning learner, CUTM OS welcomes qualified applicants from all backgrounds and experiences.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Prospective Students",
                  description: "Discover our programs, scholarships, and financial aid options for first-year students.",
                  icon: GraduationCap
                },
                {
                  title: "Transfer Students",
                  description: "Seamlessly transfer credits and continue your academic progress with flexible pathways.",
                  icon: ArrowRight
                },
                {
                  title: "Graduate Students",
                  description: "Advance your career with specialized graduate programs and professional development.",
                  icon: Award
                },
                {
                  title: "Returning Learners",
                  description: "Flexible academic paths for adult learners seeking to upskill or pursue new interests.",
                  icon: User
                }
              ].map((pathway, idx) => {
                const Icon = pathway.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-lg bg-slate-50 hover:bg-primary-50 transition-colors duration-300 border border-slate-200 hover:border-primary-300">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">{pathway.title}</h3>
                      <p className="text-sm text-slate-600">{pathway.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid & Scholarships - Premium Redesign */}
      <section className="bg-gradient-to-b from-white via-emerald-50/20 to-cyan-50/30 py-24 relative overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-emerald-200/15 rounded-full blur-3xl -mr-40"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-cyan-200/15 rounded-full blur-3xl -ml-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-4">Financial Aid & Scholarships</h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Making education affordable and accessible through grants, scholarships, and comprehensive financial aid programs</p>
          </div>

          {/* Aid Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: DollarSign,
                title: "Need-Based Grants",
                description: "Our grants don't require repayment and are based on financial need.",
                color: "from-emerald-50 to-teal-50/30",
                accent: "text-emerald-600"
              },
              {
                icon: Award,
                title: "Merit Scholarships",
                description: "Earn scholarships based on academic achievement and talents.",
                color: "from-blue-50 to-cyan-50/30",
                accent: "text-blue-600"
              },
              {
                icon: Gift,
                title: "Work-Study Programs",
                description: "Gain work experience while earning money to help pay tuition.",
                color: "from-amber-50 to-orange-50/30",
                accent: "text-amber-600"
              }
            ].map((aid, idx) => {
              const Icon = aid.icon;
              return (
                <div key={idx} className="group relative rounded-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${aid.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300 rounded-xl`}></div>
                  <div className="relative p-8 border-2 border-slate-300 backdrop-blur-sm rounded-xl">
                    <div className={`w-12 h-12 rounded-lg bg-white/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${aid.accent}`} />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{aid.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{aid.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-10 bg-gradient-to-r from-slate-50/60 via-white to-emerald-50/40 rounded-xl border-2 border-slate-300 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">$28,500</div>
              <p className="text-slate-700 font-medium">Average Financial Aid Package</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">85%</div>
              <p className="text-slate-700 font-medium">Students Receive Financial Aid</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-slate-700 font-medium">Meet Demonstrated Need</p>
            </div>
          </div>

          {/* Popular Scholarships */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-primary-900 mb-8">Popular Scholarships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Presidential Scholarship",
                  amount: "$15,000/year",
                  criteria: "Top 5% GPA, 1450+ SAT",
                  color: "from-purple-500 to-pink-500",
                  borderColor: "border-purple-300"
                },
                {
                  name: "Dean's Scholarship",
                  amount: "$12,000/year",
                  criteria: "Top 10% GPA, 1350+ SAT",
                  color: "from-blue-500 to-cyan-500",
                  borderColor: "border-blue-300"
                },
                {
                  name: "First-Generation Grant",
                  amount: "$8,000/year",
                  criteria: "First in family to attend college",
                  color: "from-emerald-500 to-teal-500",
                  borderColor: "border-emerald-300"
                },
                {
                  name: "STEM Excellence Award",
                  amount: "$10,000/year",
                  criteria: "Excellence in STEM subjects",
                  color: "from-amber-500 to-orange-500",
                  borderColor: "border-amber-300"
                },
                {
                  name: "Arts & Culture Scholarship",
                  amount: "$7,500/year",
                  criteria: "Artistic talent and involvement",
                  color: "from-pink-500 to-rose-500",
                  borderColor: "border-pink-300"
                },
                {
                  name: "Community Service Grant",
                  amount: "$6,000/year",
                  criteria: "Demonstrated community service",
                  color: "from-slate-500 to-cyan-500",
                  borderColor: "border-slate-300"
                }
              ].map((scholarship, idx) => (
                <div key={idx} className={`group relative rounded-2xl border-2 ${scholarship.borderColor}`}>
                  <div className="relative p-6 bg-gradient-to-br from-white/90 to-white/70 hover:shadow-lg transition-all duration-300 rounded-xl">
                    {/* Gradient accent line */}
                    <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${scholarship.color} rounded-full`}></div>
                    
                    <div className="pt-4">
                      <h4 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">{scholarship.name}</h4>
                      <p className={`text-2xl font-bold bg-gradient-to-r ${scholarship.color} bg-clip-text text-transparent mb-4`}>
                        {scholarship.amount}
                      </p>
                      <div className="flex items-start gap-2">
                        <span className="text-lg mt-0.5 text-slate-700">✓</span>
                        <p className="text-slate-700 text-sm font-medium">{scholarship.criteria}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8">
            <p className="text-slate-700 text-lg mb-6 font-medium">Ready to explore your financial aid options?</p>
            <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
              Apply for Financial Aid
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="connect-admissions" className="relative bg-primary-900 py-16 sm:py-24 overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-accent-500 opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-secondary-500 opacity-15 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left - Form */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <a href="#application-process">
                  <span className="inline-block px-4 py-1.5 bg-accent-500/30 text-accent-300 text-sm font-semibold rounded-full border border-accent-500/50 hover:bg-accent-500/50 hover:text-accent-200 transition-all duration-300 cursor-pointer">
                    Get in Touch
                  </span>
                </a>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Connect with Admissions</h2>
              <p className="text-base text-slate-300 mb-2">Ready to start your CUTM OS journey?</p>
              <p className="text-slate-400 mb-8 text-sm">
                Our admissions team is here to answer your questions and guide you through the process.
              </p>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-400 rounded-xl p-6 text-center animate-pulse">
                  <CheckCircle size={40} className="mx-auto mb-3 text-green-400" />
                  <h3 className="text-lg font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-sm text-slate-200">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitContact} className="space-y-5">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-white mb-1.5 block">First Name *</label>
                      <input
                        type="text"
                        placeholder="John"
                        value={contactForm.firstName}
                        onChange={(e) => handleContactChange('firstName', e.target.value)}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 placeholder-slate-500 border-2 text-sm transition-all duration-300 focus:outline-none ${
                          focusedField === 'firstName' 
                            ? 'border-accent-400 shadow-lg shadow-accent-400/50' 
                            : 'border-white hover:border-slate-200'
                        }`}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-white mb-1.5 block">Last Name *</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={contactForm.lastName}
                        onChange={(e) => handleContactChange('lastName', e.target.value)}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 placeholder-slate-500 border-2 text-sm transition-all duration-300 focus:outline-none ${
                          focusedField === 'lastName' 
                            ? 'border-accent-400 shadow-lg shadow-accent-400/50' 
                            : 'border-white hover:border-slate-200'
                        }`}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold text-white mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 placeholder-slate-500 border-2 text-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-accent-400 shadow-lg shadow-accent-400/50' 
                          : 'border-white hover:border-slate-200'
                      }`}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-semibold text-white mb-1.5 block">Phone *</label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={contactForm.phone}
                      onChange={(e) => handleContactChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 placeholder-slate-500 border-2 text-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'phone' 
                          ? 'border-accent-400 shadow-lg shadow-accent-400/50' 
                          : 'border-white hover:border-slate-200'
                      }`}
                      required
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="text-xs font-semibold text-white mb-1.5 block">Interested in Studying</label>
                    <select 
                      value={contactForm.interestedIn} 
                      onChange={(e) => handleContactChange('interestedIn', e.target.value)}
                      onFocus={() => setFocusedField('interestedIn')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 py-2.5 rounded-lg bg-white text-slate-900 border-2 text-sm transition-all duration-300 focus:outline-none cursor-pointer ${
                        focusedField === 'interestedIn' 
                          ? 'border-accent-400 shadow-lg shadow-accent-400/50' 
                          : 'border-white hover:border-slate-200'
                      }`}
                    >
                      <option value="undergraduate">Undergraduate Program</option>
                      <option value="graduate">Graduate Program</option>
                      <option value="transfer">Transfer Program</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={submitting}
                    className={`w-full font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                      submitting
                        ? 'bg-slate-400 text-slate-600 cursor-not-allowed'
                        : 'bg-white text-primary-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transform hover:scale-105'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin">⏳</div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <MessageCircle size={16} />
                        Submit
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right - Image */}
            <div className="hidden lg:block order-1 lg:order-2 h-full min-h-full">
              <div className="relative overflow-hidden rounded-xl shadow-2xl group h-full">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=700&fit=crop&q=90"
                  alt="Admissions counselor with student"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-white py-32 sm:py-40 overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-primary-500 opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-accent-500 opacity-10 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-600 text-sm font-semibold rounded-full border border-accent-500/30">
              Ready to Enroll?
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-slate-700 mb-4 max-w-2xl mx-auto">
            Submit your application today and begin your transformative journey with CUTM OS.
          </p>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our admissions team is ready to support you through every step of the process. Get started now!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/register">
              <Button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#connect-admissions">
              <Button className="bg-white hover:bg-slate-100 text-primary-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Admissions
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
