import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CyberpunkNotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export const CyberpunkNotification: React.FC<CyberpunkNotificationProps> = ({
  message,
  type,
  onClose,
  duration = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    // Glitch initial (légèrement retardé)
    const initialGlitch = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 200);

    // Glitch aléatoire au milieu
    const middleGlitchTime = Math.random() * (duration - 2000) + 1000;
    const middleGlitch = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, middleGlitchTime);

    // Timer de fermeture avec glitch final
    const timer = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => {
        setGlitch(false);
        setIsVisible(false);
        onClose();
      }, 100);
    }, duration - 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(middleGlitch);
      clearTimeout(initialGlitch);
    };
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`relative mt-4 p-4 rounded-lg shadow-lg border-2 ${
            type === 'success' ? 'border-[#038C8C]' : 'border-red-500'
          } bg-white/90 backdrop-blur-sm ${glitch ? 'cyberpunk-notification-glitch' : ''}`}
        >
          <div className="flex items-center justify-center gap-3">
            <p className={`text-gray-800 font-mono text-center ${glitch ? 'cyberpunk-notification-text-glitch' : ''}`}>{message}</p>
            <button
              onClick={() => {
                setIsVisible(false);
                onClose();
              }}
              className="ml-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 