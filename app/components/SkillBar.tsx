'use client';

import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  const [progress, setProgress] = useState(0);
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);

  useEffect(() => {
    let currentProgress = 0;
    const increment = level / 20;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= level) {
        currentProgress = level;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 50);

    return () => clearInterval(interval);
  }, [level]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: i % 2 === 0 ? '#038C8C' : '#BF0404'
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
    const interval = setInterval(generateBubbles, 500);
    return () => clearInterval(interval);
  }, [level]);

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-[#025959] text-xs font-medium">{skill}</span>
        <span className="text-[#BF0404] text-xs font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-[#025959] rounded-full h-1.5 overflow-hidden relative">
        <div className="absolute inset-0">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                backgroundColor: bubble.color,
                opacity: 1,
                transform: 'translate(-50%, -50%)',
                animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                animationDelay: `${bubble.id * 0.1}s`
              }}
            />
          ))}
        </div>
        <div
          className="bg-[#038C8C] h-1.5 rounded-full transition-all duration-300 ease-out absolute"
          style={{ width: `${progress}%` }}
        />
      </div>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
} 