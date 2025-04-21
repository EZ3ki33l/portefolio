'use client';

import { useEffect, useState } from 'react';

interface CyberpunkClockProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export function CyberpunkClock({ position = 'bottom-right', className = '' }: CyberpunkClockProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`cyberpunk-clock ${position} ${className}`} style={{ transition: 'all 0.3s ease' }}>
      {time}
    </div>
  );
} 