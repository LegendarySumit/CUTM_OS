import React from 'react';

export const Input = React.forwardRef(({ 
  type = 'text',
  placeholder = '',
  error = false,
  icon: Icon = null,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400">
          <Icon size={20} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={`
          w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200
          ${Icon ? 'pl-10' : ''}
          ${error 
            ? 'border-danger-500 focus:border-danger-500 focus:ring-2 focus:ring-danger-200' 
            : 'border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
          }
          bg-white text-secondary-900 placeholder-secondary-400
          focus:outline-none ${className}
        `}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export const TextArea = React.forwardRef(({ 
  placeholder = '',
  error = false,
  rows = 4,
  className = '',
  ...props 
}, ref) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      ref={ref}
      className={`
        w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200
        ${error 
          ? 'border-danger-500 focus:border-danger-500 focus:ring-2 focus:ring-danger-200' 
          : 'border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
        }
        bg-white text-secondary-900 placeholder-secondary-400
        focus:outline-none resize-none ${className}
      `}
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';

export const Select = React.forwardRef(({ 
  options = [],
  placeholder = 'Select an option',
  error = false,
  className = '',
  ...props 
}, ref) => {
  return (
    <select
      ref={ref}
      className={`
        w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200
        ${error 
          ? 'border-danger-500 focus:border-danger-500 focus:ring-2 focus:ring-danger-200' 
          : 'border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
        }
        bg-white text-secondary-900 placeholder-secondary-400
        focus:outline-none cursor-pointer ${className}
      `}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';

export const FormGroup = ({ label, error, required = false, children, className = '' }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    {label && (
      <label className="text-sm font-semibold text-secondary-700">
        {label}
        {required && <span className="text-danger-500 ml-1">*</span>}
      </label>
    )}
    {children}
    {error && (
      <span className="text-xs text-danger-500 font-medium">{error}</span>
    )}
  </div>
);

export default Input;
