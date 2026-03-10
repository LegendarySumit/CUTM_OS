import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedStudentId = localStorage.getItem('studentId');

    if (storedUser && storedStudentId) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse stored user:', err);
        localStorage.removeItem('user');
        localStorage.removeItem('studentId');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // Only accept authenticated user objects from backend
    if (!userData || typeof userData !== 'object' || !userData.id) {
      throw new Error('Invalid user data. User must be authenticated first.');
    }

    // Don't allow temporary/fake users
    if (userData.isTemporary) {
      throw new Error('Temporary sessions not allowed. Please register first.');
    }
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('studentId', userData.id);
    setError(null);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('studentId');
    setError(null);
  };

  const setAuthError = (err) => {
    setError(err);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, setAuthError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
