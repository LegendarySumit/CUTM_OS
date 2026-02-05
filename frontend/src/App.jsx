import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useEffect } from 'react';

// Public Pages
import HomePage from '../pages/Home/HomePage';
import CoursesPage from '../pages/Courses/CoursesPage';
import AcademicsPage from '../pages/Academics/AcademicsPage';
import StudentLifePage from '../pages/StudentLife/StudentLifePage';
import AdmissionsPage from '../pages/Admissions/AdmissionsPage';
import ClubsPage from '../pages/Clubs/ClubsPage';

// Auth Pages
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';

// Protected Pages
import Dashboard from '../pages/Dashboard/Dashboard';
import PrepPage from '../pages/Prep/PrepPage';
import ResourcesPage from '../pages/Resources/ResourcesPage';
import UtilitiesPage from '../pages/Utilities/UtilitiesPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import NotFound from '../pages/NotFound/NotFound';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/academics" element={<AcademicsPage />} />
      <Route path="/student-life" element={<StudentLifePage />} />
      <Route path="/clubs" element={<ClubsPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/prep"
        element={
          <ProtectedRoute>
            <PrepPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/resources"
        element={
          <ProtectedRoute>
            <ResourcesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/utilities"
        element={
          <ProtectedRoute>
            <UtilitiesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <ScrollToTop />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
