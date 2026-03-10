import PublicLayout from '../../components/layout/PublicLayout';
import { MessageCircle, Mail, Phone, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleStartChat = () => {
    alert('Live chat feature coming soon! In the meantime, please email support@cutmos.edu or call +91 (555) 123-4567');
  };

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Click the "Forgot Password" link on the login page and follow the instructions sent to your email.'
    },
    {
      question: 'How can I track my academic progress?',
      answer: 'After logging in, navigate to your Dashboard to view your progress, grades, and academic insights.'
    },
    {
      question: 'Can I withdraw from a course?',
      answer: 'Course withdrawal options depend on the academic calendar. Contact your advisor for guidance.'
    },
    {
      question: 'How do I access course materials?',
      answer: 'Course materials are available in the Courses section. You must be enrolled to access them.'
    },
    {
      question: 'What should I do if I encounter a technical issue?',
      answer: 'Please report technical issues using our support form, and our team will assist you within 24 hours.'
    }
  ];

  return (
    <PublicLayout>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Support Center</h1>
          <p className="text-xl text-slate-600">We're here to help. Find answers and get support.</p>
        </div>

        {/* Contact Options */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary-50 p-8 rounded-lg text-center">
            <Mail className="text-primary-600 mx-auto mb-3" size={40} />
            <h3 className="font-semibold text-primary-900 mb-2">Email Support</h3>
            <p className="text-slate-700 mb-4 text-sm">
              Send us your questions or issues
            </p>
            <a href="mailto:support@cutmos.edu" className="text-primary-600 hover:text-primary-700 font-semibold">
              support@cutmos.edu
            </a>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg text-center">
            <Phone className="text-primary-600 mx-auto mb-3" size={40} />
            <h3 className="font-semibold text-primary-900 mb-2">Phone Support</h3>
            <p className="text-slate-700 mb-4 text-sm">
              Call us during business hours (9am-5pm IST)
            </p>
            <a href="tel:+91-555-123-4567" className="text-primary-600 hover:text-primary-700 font-semibold">
              +91 (555) 123-4567
            </a>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg text-center">
            <MessageCircle className="text-primary-600 mx-auto mb-3" size={40} />
            <h3 className="font-semibold text-primary-900 mb-2">Live Chat</h3>
            <p className="text-slate-700 mb-4 text-sm">
              Chat with our support team in real-time
            </p>
            <button onClick={handleStartChat} className="text-primary-600 hover:text-primary-700 font-semibold cursor-pointer transition-colors">
              Start Chat
            </button>
          </div>
        </section>

        {/* Response Time */}
        <section className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-16">
          <div className="flex items-start gap-4">
            <Clock className="text-blue-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Support Hours & Response Times</h3>
              <p className="text-blue-800 text-sm">
                Monday - Friday: 9:00 AM - 5:00 PM IST<br />
                Average response time: 2-4 hours<br />
                Emergency support available for critical issues
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-primary-900 text-left">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary-600 transition ${openFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 py-3 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Submit Support Request */}
        <section className="mt-12 bg-primary-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
          <p className="mb-6">Submit a support ticket and our team will get back to you as soon as possible.</p>
          <a 
            href="mailto:support@cutmos.edu?subject=Support%20Request" 
            className="inline-block bg-white text-primary-900 px-6 py-2 rounded-lg hover:bg-slate-100 transition font-semibold"
          >
            Submit Ticket
          </a>
        </section>
      </div>
    </PublicLayout>
  );
}
