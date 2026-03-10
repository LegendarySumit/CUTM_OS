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
    // If userData is just a string (email), create a mock user object
    const userObj = typeof userData === 'string' 
      ? {
          id: 'temp_user_' + Date.now(),
          email: userData,
          name: userData.split('@')[0],
          role: 'student',
          isTemporary: true
        }
      : userData;
    
    setUser(userObj);
    localStorage.setItem('user', JSON.stringify(userObj));
    localStorage.setItem('studentId', userObj.id);
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
