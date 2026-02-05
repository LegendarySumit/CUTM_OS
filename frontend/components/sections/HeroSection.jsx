import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../src/context/AuthContext';

export default function HeroSection({ 
  title, 
  subtitle, 
  ctaText = "Get Started", 
  ctaLink = "/register",
  backgroundImage = null,
  isDark = false
}) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCTA = (e) => {
    e.preventDefault();
    if (user) {
      navigate('/courses');
    } else {
      navigate(ctaLink);
    }
  };
  return (
    <div 
      className={`relative py-32 sm:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center`}
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : {
        background: isDark ? 'linear-gradient(to bottom right, #1e3a8a, #001133)' : 'linear-gradient(to bottom right, #f9fafb, #e5e7eb)'
      }}
    >
      {/* Overlay for premium fade effect */}
      {backgroundImage && (
        <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-black/35'}`}></div>
      )}
      {!backgroundImage && isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary-700/80 to-primary-900/90"></div>
      )}

      <div className="relative max-w-5xl mx-auto text-center text-white">
        <h1 className={`text-5xl sm:text-6xl font-bold mb-6 leading-tight text-white`}>
          {title}
        </h1>
        
        {subtitle && (
          <p className={`text-xl sm:text-2xl mb-8 leading-relaxed text-slate-100`}>
            {subtitle}
          </p>
        )}

        {ctaText && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCTA}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 text-lg flex items-center gap-2 w-full sm:w-auto"
            >
              {user ? 'Explore Courses' : ctaText}
              <ChevronRight size={20} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
