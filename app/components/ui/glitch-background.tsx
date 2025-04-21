'use client';

import { useEffect, useRef } from 'react';

interface GlitchBackgroundProps {
  className?: string;
}

export function GlitchBackground({ className = '' }: GlitchBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const getRandomColor = () => {
      const colors = [
        'rgba(3, 140, 140, ', // Turquoise
        'rgba(255, 0, 128, ', // Rose
        'rgba(0, 255, 255, ', // Cyan
        'rgba(255, 0, 255, '  // Magenta
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const drawGlitch = (timestamp: number) => {
      if (!ctx) return;

      // Limiter la fréquence d'animation à 30 FPS (environ 33ms entre chaque frame)
      if (timestamp - lastFrameTimeRef.current < 100) {
        animationFrameRef.current = requestAnimationFrame(drawGlitch);
        return;
      }
      lastFrameTimeRef.current = timestamp;

      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner quelques petits traits horizontaux avec effet de lueur
      for (let i = 0; i < 4; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 30 + 20;
        const height = Math.random() * 1 + 0.5;
        const opacity = Math.random() * 0.2 + 0.1;

        ctx.shadowBlur = 3;
        ctx.shadowColor = getRandomColor().replace('rgba', 'rgb').replace(', 0.2)', ')');
        ctx.fillStyle = `${getRandomColor()}${opacity})`;
        ctx.fillRect(x, y, width, height);
        ctx.shadowBlur = 0;
      }

      // Dessiner quelques petits traits verticaux avec effet de lueur
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const height = Math.random() * 30 + 20;
        const width = Math.random() * 1 + 0.5;
        const opacity = Math.random() * 0.2 + 0.1;

        ctx.shadowBlur = 3;
        ctx.shadowColor = getRandomColor().replace('rgba', 'rgb').replace(', 0.2)', ')');
        ctx.fillStyle = `${getRandomColor()}${opacity})`;
        ctx.fillRect(x, y, width, height);
        ctx.shadowBlur = 0;
      }

      // Dessiner quelques petits points avec effet de lueur
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.25 + 0.15;

        ctx.shadowBlur = 5;
        ctx.shadowColor = getRandomColor().replace('rgba', 'rgb').replace(', 0.3)', ')');
        ctx.fillStyle = `${getRandomColor()}${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Dessiner quelques petits carrés avec effet de lueur
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.2 + 0.1;

        ctx.shadowBlur = 4;
        ctx.shadowColor = getRandomColor().replace('rgba', 'rgb').replace(', 0.2)', ')');
        ctx.fillStyle = `${getRandomColor()}${opacity})`;
        ctx.fillRect(x, y, size, size);
        ctx.shadowBlur = 0;
      }

      // Dessiner quelques petits triangles avec effet de lueur
      for (let i = 0; i < 2; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 4 + 2;
        const opacity = Math.random() * 0.2 + 0.1;

        ctx.shadowBlur = 4;
        ctx.shadowColor = getRandomColor().replace('rgba', 'rgb').replace(', 0.2)', ')');
        ctx.fillStyle = `${getRandomColor()}${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size/2, y + size);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameRef.current = requestAnimationFrame(drawGlitch);
    };

    drawGlitch(0);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full ${className}`}
        style={{ 
          background: 'transparent',
          mixBlendMode: 'screen',
          opacity: 0.6,
          zIndex: 0
        }}
      />
    </div>
  );
} 