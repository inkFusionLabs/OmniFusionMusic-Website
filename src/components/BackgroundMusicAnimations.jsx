import React, { useEffect, useRef } from 'react';

const BackgroundMusicAnimations = ({ isPlaying = false, intensity = 0.3 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const wavesRef = useRef([]);

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

    // Initialize background particles
    particlesRef.current = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
    }));

    // Initialize background waves
    wavesRef.current = Array.from({ length: 3 }, (_, i) => ({
      y: canvas.height / 2 + (i - 1) * 100,
      amplitude: 20 + i * 10,
      frequency: 0.01 + i * 0.005,
      speed: 0.001 + i * 0.0005,
      opacity: 0.05 - i * 0.01,
      color: `hsla(${200 + i * 30}, 70%, 60%, ${0.05 - i * 0.01})`
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
      
      // Draw background waves
      wavesRef.current.forEach(wave => {
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = wave.opacity;
        ctx.beginPath();
        
        for (let x = 0; x < width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + Date.now() * wave.speed) * wave.amplitude * intensity;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      });
      
      ctx.globalAlpha = 1;

      // Update and draw background particles
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Add music-reactive movement
        if (isPlaying) {
          particle.vx += (Math.random() - 0.5) * intensity * 0.1;
          particle.vy += (Math.random() - 0.5) * intensity * 0.1;
          particle.size = Math.max(1, particle.size + (Math.random() - 0.5) * intensity * 0.5);
        }
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y > height) particle.vy *= -0.8;
        
        // Reset particle if it goes off screen
        if (particle.x < -10 || particle.x > width + 10 || 
            particle.y < -10 || particle.y > height + 10) {
          particle.x = Math.random() * width;
          particle.y = Math.random() * height;
          particle.vx = (Math.random() - 0.5) * 0.5;
          particle.vy = (Math.random() - 0.5) * 0.5;
        }
        
        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
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
        className="w-full h-full opacity-30"
        style={{ 
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.1), rgba(51, 65, 85, 0.1))'
        }}
      />
    </div>
  );
};

export default BackgroundMusicAnimations;
