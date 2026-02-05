import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CollegeLogo from '../Logo/CollegeLogo';

export default function PublicFooter() {
  return (
    <footer className="bg-white">
      {/* Main Footer */}
      <div className="bg-primary-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tagline and Mission */}
          <div className="text-center mb-12 pb-8 border-b border-slate-700">
            <div className="mb-4 flex justify-center">
              <CollegeLogo size={80} />
            </div>
            <h2 className="text-4xl font-light mb-2">CUTM OS</h2>
            <p className="text-xl font-italic text-slate-300 mb-6">Empowering Academic Excellence</p>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              A comprehensive platform designed to help students succeed through intelligent learning tools, 
              real-time feedback, and personalized academic support.
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="font-semibold mb-4 text-accent-400">About CUTM OS</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Revolutionizing how students manage their academic journey with intelligent tracking, 
                real-time feedback, and comprehensive learning tools.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-accent-400">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-slate-300 hover:text-white transition">Home</a></li>
                <li><a href="/academics" className="text-slate-300 hover:text-white transition">Academics</a></li>
                <li><a href="/student-life" className="text-slate-300 hover:text-white transition">Student Life</a></li>
                <li><a href="/admissions" className="text-slate-300 hover:text-white transition">Admissions</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-accent-400">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent-400 flex-shrink-0" />
                  <span className="text-slate-300">123 Campus Avenue, University City</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-accent-400 flex-shrink-0" />
                  <span className="text-slate-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-accent-400 flex-shrink-0" />
                  <span className="text-slate-300">support@cutmos.edu</span>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4 text-accent-400">Connect With Us</h3>
              <div className="flex gap-4 flex-wrap">
                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Visit our Facebook"
                >
                  <FaFacebook size={24} className="text-white" />
                </a>
                {/* Twitter */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-sky-400 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Visit our Twitter"
                >
                  <FaTwitter size={24} className="text-white" />
                </a>
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 via-pink-500 to-red-500 hover:from-yellow-400 hover:via-pink-600 hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Visit our Instagram"
                >
                  <FaInstagram size={24} className="text-white" />
                </a>
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Visit our LinkedIn"
                >
                  <FaLinkedin size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <a href="#" className="hover:text-white transition">Accessibility</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Contact Us</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Careers</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Support</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Student Resources</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Newsletter</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; 2026 CUTM OS. All rights reserved. | Empowering Students, Enabling Success</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
