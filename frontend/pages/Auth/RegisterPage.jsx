import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../src/context/AuthContext';
import { authAPI } from '../../src/services';
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, FormGroup, Select } from '../../components/ui/Input';
import { User, Mail, Lock, BookOpen, Target, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import CollegeLogo from '../../components/Logo/CollegeLogo';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    branch: 'CSE',
    semester: '1',
    goal: 'General Development',
    dailyCapacityHours: '2',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const branches = [
    { value: 'CSE', label: 'Computer Science & Engineering' },
    { value: 'ECE', label: 'Electronics & Communication' },
    { value: 'Mechanical', label: 'Mechanical Engineering' },
    { value: 'Civil', label: 'Civil Engineering' },
    { value: 'IT', label: 'Information Technology' },
    { value: 'Other', label: 'Other' },
  ];

  const semesters = Array.from({ length: 8 }, (_, i) => ({
    value: String(i + 1),
    label: `Semester ${i + 1}`
  }));

  const goals = [
    { value: 'General Development', label: 'General Development' },
    { value: 'Competitive Programming', label: 'Competitive Programming' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Mobile Development', label: 'Mobile Development' },
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Cloud Computing', label: 'Cloud Computing' },
  ];

  const hours = Array.from({ length: 8 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} hours`
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error('Please fill in all required fields');
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const response = await authAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        branch: formData.branch,
        semester: parseInt(formData.semester),
        goal: formData.goal,
        dailyCapacityHours: parseInt(formData.dailyCapacityHours),
      });

      const userData = response.data.data;
      login(userData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4 relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <CollegeLogo size={120} />
          </div>
          <h1 className="text-4xl font-bold text-primary-900 mb-2">Join CUTM OS</h1>
          <p className="text-slate-600 text-lg">Start your journey to academic excellence</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8 px-4">
          <div className="flex justify-between items-center gap-4">
            {/* Step 1 */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                step >= 1 
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg' 
                  : 'bg-slate-200 text-slate-500'
              }`}>
                {step > 1 ? <CheckCircle size={24} /> : 1}
              </div>
            </div>

            {/* Progress Bar */}
            <div className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
              step > 1 ? 'bg-gradient-to-r from-primary-600 to-primary-700' : 'bg-slate-200'
            }`}></div>

            {/* Step 2 */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                step >= 2 
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg' 
                  : 'bg-slate-200 text-slate-500'
              }`}>
                {step > 2 ? <CheckCircle size={24} /> : 2}
              </div>
            </div>
          </div>
        </div>

        {/* Registration Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-primary-200/50 shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-900">
                {step === 1 ? '📝 Account Details' : '🎓 Academic Profile'}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {step === 1 
                  ? 'Set up your login credentials to get started' 
                  : 'Tell us about your academic journey'}
              </p>
            </div>
            {/* Error Message */}
            {error && (
              <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse mb-6">
                <p className="font-semibold">⚠️ Registration Error</p>
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Account Details */}
              {step === 1 && (
                <>
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-900 mb-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-3 top-3 text-primary-400 group-focus-within:text-primary-600 transition-colors" size={18} />
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        disabled={loading}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none ${
                          focusedField === 'name'
                            ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                            : 'border-primary-200 hover:border-primary-300'
                        } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-900 mb-2">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-3 text-primary-400 group-focus-within:text-primary-600 transition-colors" size={18} />
                      <input
                        type="email"
                        name="email"
                        placeholder="you@university.edu"
                        value={formData.email}
                        onChange={handleChange}
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

                  {/* Password Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary-900 mb-2">Password</label>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-3 text-primary-400 group-focus-within:text-primary-600 transition-colors" size={18} />
                        <input
                          type="password"
                          name="password"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleChange}
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

                    <div>
                      <label className="block text-sm font-semibold text-primary-900 mb-2">Confirm Password</label>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-3 text-primary-400 group-focus-within:text-primary-600 transition-colors" size={18} />
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('confirmPassword')}
                          onBlur={() => setFocusedField(null)}
                          disabled={loading}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none ${
                            focusedField === 'confirmPassword'
                              ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                              : 'border-primary-200 hover:border-primary-300'
                          } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mt-6 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                </>
              )}

              {/* Step 2: Academic Profile */}
              {step === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Branch */}
                    <div>
                      <label className="text-sm font-semibold text-primary-900 mb-2 flex items-center gap-2">
                        <BookOpen size={16} />
                        Branch
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('branch')}
                        onBlur={() => setFocusedField(null)}
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none cursor-pointer ${
                          focusedField === 'branch'
                            ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                            : 'border-primary-200 hover:border-primary-300'
                        } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      >
                        {branches.map((b) => (
                          <option key={b.value} value={b.value}>{b.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Semester */}
                    <div>
                      <label className="text-sm font-semibold text-primary-900 mb-2 flex items-center gap-2">
                        <Clock size={16} />
                        Semester
                      </label>
                      <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('semester')}
                        onBlur={() => setFocusedField(null)}
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none cursor-pointer ${
                          focusedField === 'semester'
                            ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                            : 'border-primary-200 hover:border-primary-300'
                        } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                      >
                        {semesters.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Learning Goal */}
                  <div>
                    <label className="text-sm font-semibold text-primary-900 mb-2 flex items-center gap-2">
                      <Target size={16} />
                      Learning Goal
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('goal')}
                      onBlur={() => setFocusedField(null)}
                      disabled={loading}
                      className={`w-full px-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none cursor-pointer ${
                        focusedField === 'goal'
                          ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                          : 'border-primary-200 hover:border-primary-300'
                      } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                    >
                      {goals.map((g) => (
                        <option key={g.value} value={g.value}>{g.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Daily Study Hours */}
                  <div>
                    <label className="text-sm font-semibold text-primary-900 mb-2 flex items-center gap-2">
                      <Clock size={16} />
                      Daily Study Hours
                    </label>
                    <select
                      name="dailyCapacityHours"
                      value={formData.dailyCapacityHours}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('hours')}
                      onBlur={() => setFocusedField(null)}
                      disabled={loading}
                      className={`w-full px-4 py-3 rounded-lg bg-white border-2 transition-all duration-300 focus:outline-none cursor-pointer ${
                        focusedField === 'hours'
                          ? 'border-primary-500 shadow-lg shadow-primary-500/20 bg-primary-50'
                          : 'border-primary-200 hover:border-primary-300'
                      } disabled:bg-slate-100 disabled:cursor-not-allowed`}
                    >
                      {hours.map((h) => (
                        <option key={h.value} value={h.value}>{h.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 mt-8 pt-4 border-t border-primary-100">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 disabled:from-slate-300 disabled:to-slate-300 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin">⏳</div>
                          Creating...
                        </>
                      ) : (
                        <>
                          Create Account
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>

            {/* Sign In Link */}
            <div className="text-center pt-4 border-t border-primary-100">
              <p className="text-slate-600 text-sm">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
