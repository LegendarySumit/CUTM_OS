import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  isLoading = false,
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:scale-105 focus:ring-primary-400',
    secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 hover:shadow-md focus:ring-secondary-300',
    accent: 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:shadow-lg hover:scale-105 focus:ring-accent-400',
    success: 'bg-success-500 text-white hover:bg-success-600 hover:shadow-lg focus:ring-success-400',
    warning: 'bg-warning-500 text-white hover:bg-warning-600 hover:shadow-lg focus:ring-warning-400',
    danger: 'bg-danger-500 text-white hover:bg-danger-600 hover:shadow-lg focus:ring-danger-400',
    ghost: 'text-primary-600 hover:bg-primary-50 hover:shadow-sm focus:ring-primary-300',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-400',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
