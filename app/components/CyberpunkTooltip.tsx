'use client';

import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { CyberpunkGlitch } from "./ui/cyberpunk-glitch";
import { useCallback } from "react";

interface CyberpunkTooltipProps {
  content: string;
  isVisible: boolean;
  onMouseMove: (event: React.MouseEvent) => void;
}

export default function CyberpunkTooltip({ content, isVisible, onMouseMove }: CyberpunkTooltipProps) {
  const springConfig = { stiffness: 50, damping: 10 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-5, 5]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-30, 30]), springConfig);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = event.clientX;
    const relativeX = mouseX - centerX;
    x.set(relativeX);
    onMouseMove(event);
  }, [x, onMouseMove]);

  return (
    <AnimatePresence mode="popLayout">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 800,
              damping: 30,
              mass: 0.5
            },
          }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            translateX: translateX,
            rotate: rotate,
          }}
          className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl border-2 border-[#038C8C] w-[300px] h-[80px]"
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[#038C8C]/10" />
          </div>
          <CyberpunkGlitch className="absolute inset-0 rounded-full" />
          <div className="relative z-30 text-sm font-medium text-[#038C8C] px-4 text-center">
            {content}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 