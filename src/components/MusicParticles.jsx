import React, { useEffect, useRef } from 'react';

const MusicParticles = ({ isPlaying = false, intensity = 0.5, particleCount = 50 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Initialize particles
    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
        life: Math.random() * 100
      }));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particlesRef.current.forEach((particle, index) => {
        if (isPlaying) {
          // Add music-reactive movement
          particle.vx += (Math.random() - 0.5) * intensity * 0.5;
          particle.vy += (Math.random() - 0.5) * intensity * 0.5;
          particle.size = Math.max(1, particle.size + (Math.random() - 0.5) * intensity);
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y > height) particle.vy *= -0.8;

        // Reset particle if it goes off screen or life expires
        if (particle.x < -10 || particle.x > width + 10 || 
            particle.y < -10 || particle.y > height + 10 || 
            particle.life <= 0) {
          particle.x = Math.random() * width;
          particle.y = Math.random() * height;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = (Math.random() - 0.5) * 2;
          particle.size = Math.random() * 3 + 1;
          particle.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
          particle.life = Math.random() * 100;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, intensity, particleCount]);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Music particles will appear when playing</div>
        </div>
      )}
    </div>
  );
};

export default MusicParticles;
