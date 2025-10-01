import React, { useEffect, useRef } from 'react';

const BackgroundEqualizer = ({ isPlaying = false, intensity = 0.2 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize background equalizer bars
    barsRef.current = Array.from({ length: 15 }, (_, i) => ({
      x: (i / 14) * (canvas.width / window.devicePixelRatio),
      y: canvas.height / window.devicePixelRatio,
      width: 8,
      height: Math.random() * 100 + 20,
      targetHeight: Math.random() * 100 + 20,
      speed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.1 + 0.05,
      color: `hsla(${200 + i * 8}, 70%, 60%, ${Math.random() * 0.1 + 0.05})`
    }));

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width / window.devicePixelRatio;
    const height = canvas.height / window.devicePixelRatio;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw background equalizer bars
      barsRef.current.forEach((bar, index) => {
        // Update bar height with music reactivity
        if (isPlaying) {
          const musicFactor = Math.sin(Date.now() * bar.speed + index * 0.5) * intensity;
          bar.targetHeight = Math.max(20, Math.random() * 120 + 20 + musicFactor * 50);
        }
        
        // Smooth height transition
        bar.height += (bar.targetHeight - bar.height) * 0.1;
        
        // Draw bar
        ctx.globalAlpha = bar.opacity;
        ctx.fillStyle = bar.color;
        
        // Create gradient effect
        const gradient = ctx.createLinearGradient(bar.x, bar.y, bar.x, bar.y - bar.height);
        gradient.addColorStop(0, bar.color);
        gradient.addColorStop(1, `${bar.color}00`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(bar.x, bar.y - bar.height, bar.width, bar.height);
        
        // Add subtle glow
        ctx.shadowColor = bar.color;
        ctx.shadowBlur = 5;
        ctx.fillRect(bar.x, bar.y - bar.height, bar.width, bar.height);
        ctx.shadowBlur = 0;
      });
      
      ctx.globalAlpha = 1;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-20"
        style={{ 
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default BackgroundEqualizer;
