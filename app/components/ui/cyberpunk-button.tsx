import React, { forwardRef } from 'react';

interface CyberpunkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'rounded';
  size?: 'default' | 'large' | 'small' | 'extra-small';
  disabled?: boolean;
}

export const CyberpunkButton = forwardRef<HTMLButtonElement, CyberpunkButtonProps>(({ 
  children, 
  className = '', 
  onClick,
  variant = 'default',
  size = 'default',
  disabled = false,
  ...props
}, ref) => {
  const sizeClasses = {
    default: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    small: 'px-3 py-1 text-sm',
    'extra-small': 'px-2 py-0.5 text-xs'
  };

  return (
    <button 
      ref={ref}
      className={`cyberpunk-button ${variant === 'rounded' ? 'cyberpunk-button-rounded' : ''} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="cyberpunk-button-text">{children}</span>
      <span className="cyberpunk-button-glow"></span>
      <span className="cyberpunk-button-light"></span>
    </button>
  );
});

CyberpunkButton.displayName = 'CyberpunkButton'; 