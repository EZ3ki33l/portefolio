import React, { useCallback, useEffect, useState } from 'react';

const GLITCH_COLORS = ['#038C8C', '#BF0404'];

interface CyberpunkGlitchProps {
  className?: string;
}

export function CyberpunkGlitch({ className = '' }: CyberpunkGlitchProps) {
  const getRandomColor = useCallback(() => {
    return GLITCH_COLORS[Math.floor(Math.random() * GLITCH_COLORS.length)];
  }, []);

  const generateRandomPositions = useCallback(() => {
    return {
      '--glitch-line-1': `${Math.random() * 100}%`,
      '--glitch-line-2': `${Math.random() * 100}%`,
      '--glitch-color-1': getRandomColor(),
      '--glitch-color-2': getRandomColor(),
      '--glitch-1-top': `${Math.random() * 100}%`,
      '--glitch-1-left': `${Math.random() * 100}%`,
      '--glitch-1-size': `${Math.random() * 2 + 3}px`,
      '--glitch-1-color': getRandomColor(),
      '--glitch-2-top': `${Math.random() * 100}%`,
      '--glitch-2-left': `${Math.random() * 100}%`,
      '--glitch-2-size': `${Math.random() * 2 + 3}px`,
      '--glitch-2-color': getRandomColor(),
      '--glitch-3-top': `${Math.random() * 100}%`,
      '--glitch-3-left': `${Math.random() * 100}%`,
      '--glitch-3-size': `${Math.random() * 2 + 3}px`,
      '--glitch-3-color': getRandomColor(),
      '--glitch-4-top': `${Math.random() * 100}%`,
      '--glitch-4-left': `${Math.random() * 100}%`,
      '--glitch-4-size': `${Math.random() * 2 + 3}px`,
      '--glitch-4-color': getRandomColor(),
      '--glitch-5-top': `${Math.random() * 100}%`,
      '--glitch-5-left': `${Math.random() * 100}%`,
      '--glitch-5-size': `${Math.random() * 2 + 3}px`,
      '--glitch-5-color': getRandomColor(),
      '--glitch-6-top': `${Math.random() * 100}%`,
      '--glitch-6-left': `${Math.random() * 100}%`,
      '--glitch-6-size': `${Math.random() * 2 + 3}px`,
      '--glitch-6-color': getRandomColor(),
    } as React.CSSProperties;
  }, [getRandomColor]);

  const [glitchStyle, setGlitchStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setGlitchStyle(generateRandomPositions());
  }, [generateRandomPositions]);

  return (
    <div className={`cyberpunk-glitch ${className}`} style={glitchStyle}>
      <div className="glitch-spot"></div>
      <div className="glitch-spot"></div>
      <div className="glitch-spot"></div>
      <div className="glitch-spot"></div>
      <div className="glitch-spot"></div>
      <div className="glitch-spot"></div>
    </div>
  );
} 