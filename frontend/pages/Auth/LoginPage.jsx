import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../src/context/AuthContext';
import { authAPI } from '../../src/services';
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, FormGroup } from '../../components/ui/Input';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import CollegeLogo from '../../components/Logo/CollegeLogo';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      const response = await authAPI.login(email, password);
      const userData = response.data.data;

      login(userData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-4 relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl -mr-36 -mt-36"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-200/30 rounded-full blur-3xl -ml-36 -mb-36"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <CollegeLogo size={100} />
          </div>
          <h1 className="text-4xl font-bold text-primary-900 mb-2">CUTM OS</h1>
          <p className="text-slate-600 text-lg">Welcome back to your learning hub</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-primary-200/50 shadow-xl">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-2">Sign In</h2>
            <p className="text-slate-600 text-sm mb-6">Continue your academic journey</p>
            {/* Error Message */}
            {error && (
              <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse">
                <p className="font-semibold">⚠️ Login Error</p>
                <p>{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-2">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 text-primary-400 group-focus-within:text-primary-600 transition-colors" size={18} />
                  <input
                    type="email"
                    placeholder="you@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'email'
                        ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                        : 'border-primary-200 hover:border-primary-300'
                    } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-2">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 text-primary-400 group-focus-within:text-primary-600 transition-colors" size={18} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'password'
                        ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                        : 'border-primary-200 hover:border-primary-300'
                    } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-slate-300 disabled:to-slate-300 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mt-6 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin">⏳</div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center pt-4 border-t border-primary-100">
              <p className="text-slate-600 text-sm">
                Don't have an account?{' '}
                <Link 
                  to="/register" 
                  className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


