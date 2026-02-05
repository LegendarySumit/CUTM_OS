import React from 'react';

export const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon = null,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-full inline-flex items-center gap-1.5 transition-all duration-200';

  const variants = {
    primary: 'bg-primary-100 text-primary-700 border border-primary-300',
    secondary: 'bg-secondary-100 text-secondary-700 border border-secondary-300',
    accent: 'bg-accent-100 text-accent-700 border border-accent-300',
    success: 'bg-success-100 text-success-700 border border-success-300',
    warning: 'bg-warning-100 text-warning-700 border border-warning-300',
    danger: 'bg-danger-100 text-danger-700 border border-danger-300',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      {children}
    </span>
  );
};

export const Status = ({ 
  status = 'idle',
  label = '',
  className = '' 
}) => {
  const statusConfig = {
    idle: { variant: 'secondary', icon: '○', label: 'Idle' },
    active: { variant: 'success', icon: '●', label: 'Active' },
    busy: { variant: 'warning', icon: '●', label: 'Busy' },
    offline: { variant: 'danger', icon: '●', label: 'Offline' },
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} size="sm" className={className}>
      <span className="text-lg">{config.icon}</span>
      {label || config.label}
    </Badge>
  );
};

export default Badge;
