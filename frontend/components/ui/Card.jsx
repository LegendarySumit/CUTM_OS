import React from 'react';

export const Card = ({ 
  children, 
  className = '',
  gradient = false,
  bordered = false,
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300';
  
  const styleClasses = gradient
    ? 'bg-gradient-to-br from-white to-secondary-50 backdrop-blur-xl border border-white/20'
    : 'bg-white';

  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105' : 'shadow-soft';
  const borderClasses = bordered ? 'border-2 border-primary-200' : '';

  return (
    <div
      className={`${baseClasses} ${styleClasses} ${hoverClasses} ${borderClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 pb-4 border-b border-secondary-100 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h2 className={`text-2xl font-bold text-secondary-900 ${className}`}>
    {children}
  </h2>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-secondary-600 text-sm ${className}`}>
    {children}
  </p>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 pt-4 border-t border-secondary-100 flex gap-3 ${className}`}>
    {children}
  </div>
);

export default Card;
