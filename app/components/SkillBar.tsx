'use client';

import { useEffect, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  // Animation du niveau de compétence
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

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-500 font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden relative">
        {/* Fond avec stries animées */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 2px, transparent 4px)',
            backgroundSize: '200% 100%',
            animation: 'loading 60s linear infinite',
          }}
        />
        {/* Barre de progression principale */}
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out absolute"
          style={{ width: `${progress}%` }}
        />
      </div>
      <style jsx global>{`
        @keyframes loading {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
} 