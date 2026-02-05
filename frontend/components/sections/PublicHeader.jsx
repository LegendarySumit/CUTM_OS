import { useAuth } from '../../src/context/AuthContext';
import { Button } from '../ui/Button';
import { Menu, X, LogOut, User, BookOpen, Users, Zap, FileText, Home, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import CollegeLogo from '../Logo/CollegeLogo';

export default function PublicHeader() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Academics', path: '/academics', icon: BookOpen },
    { label: 'Student Life', path: '/student-life', icon: Users },
    { label: 'Admissions', path: '/admissions', icon: FileText }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-secondary-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14">
              <CollegeLogo size={56} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
                CUTM OS
              </h1>
              <p className="text-xs text-secondary-600 font-semibold">Smart Learning Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 font-medium group ${
                    isActive
                      ? 'text-orange-600'
                      : 'text-slate-700 hover:bg-primary-50 hover:text-primary-900'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-orange-600' : 'group-hover:text-accent-600 transition-colors'} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Section - Auth Buttons & User Menu */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center gap-2 bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-800 hover:to-primary-900 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Zap size={18} />
                  Dashboard
                </Button>

                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold transition-all duration-300 hover:text-primary-900"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => navigate('/login')}
                  className="flex items-center gap-2 px-4 py-2 text-primary-900 font-semibold hover:bg-primary-50 rounded-lg transition-all duration-300"
                >
                  <LogIn size={18} />
                  Login
                </button>
                <Button 
                  onClick={() => navigate('/register')}
                  className="flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <User size={18} />
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-primary-900" />
            ) : (
              <Menu size={24} className="text-primary-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 space-y-2">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                    isActive
                      ? 'text-orange-600'
                      : 'text-slate-700 hover:bg-primary-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={20} className={isActive ? 'text-orange-600' : 'text-accent-600'} />
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              {user ? (
                <>
                  <Button 
                    onClick={() => {
                      navigate('/dashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Zap size={18} />
                    Dashboard
                  </Button>
                  <Button 
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <LogOut size={18} />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <LogIn size={18} />
                    Login
                  </Button>
                  <Button 
                    onClick={() => {
                      navigate('/register');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <User size={18} />
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
