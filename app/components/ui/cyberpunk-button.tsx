import React from 'react';

interface CyberpunkButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'rounded';
  size?: 'default' | 'large' | 'small' | 'extra-small';
}

export function CyberpunkButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'default',
  size = 'default'
}: CyberpunkButtonProps) {
  const sizeClasses = {
    default: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    small: 'px-3 py-1 text-sm',
    'extra-small': 'px-2 py-0.5 text-xs'
  };

  return (
    <button 
      className={`cyberpunk-button ${variant === 'rounded' ? 'cyberpunk-button-rounded' : ''} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      <span className="cyberpunk-button-text">{children}</span>
      <span className="cyberpunk-button-glow"></span>
      <span className="cyberpunk-button-light"></span>
    </button>
  );
} 