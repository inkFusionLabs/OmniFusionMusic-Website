import React, { useEffect, useRef } from 'react';

const BackgroundVinylRecords = ({ isPlaying = false, intensity = 0.15 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const recordsRef = useRef([]);

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

    // Initialize background vinyl records
    recordsRef.current = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * (canvas.width / window.devicePixelRatio),
      y: Math.random() * (canvas.height / window.devicePixelRatio),
      radius: Math.random() * 20 + 15,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.08 + 0.02,
      color: `hsla(${200 + i * 20}, 70%, 60%, ${Math.random() * 0.08 + 0.02})`,
      grooveOffset: Math.random() * Math.PI * 2
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
      
      // Update and draw background vinyl records
      recordsRef.current.forEach((record, index) => {
        // Update rotation
        record.rotation += record.rotationSpeed * (1 + intensity);
        record.grooveOffset += 0.01 * (1 + intensity);
        
        // Add subtle floating movement
        record.x += Math.sin(Date.now() * 0.001 + index) * 0.2;
        record.y += Math.cos(Date.now() * 0.001 + index) * 0.2;
        
        // Keep records within bounds
        if (record.x < -record.radius) record.x = width + record.radius;
        if (record.x > width + record.radius) record.x = -record.radius;
        if (record.y < -record.radius) record.y = height + record.radius;
        if (record.y > height + record.radius) record.y = -record.radius;
        
        // Draw record
        ctx.save();
        ctx.translate(record.x, record.y);
        ctx.rotate(record.rotation);
        ctx.globalAlpha = record.opacity;
        
        // Draw record base
        ctx.beginPath();
        ctx.arc(0, 0, record.radius, 0, Math.PI * 2);
        ctx.fillStyle = record.color;
        ctx.fill();
        
        // Draw center label
        ctx.beginPath();
        ctx.arc(0, 0, record.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `${record.color}80`;
        ctx.fill();
        
        // Draw center hole
        ctx.beginPath();
        ctx.arc(0, 0, record.radius * 0.1, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        
        // Draw grooves (only when playing)
        if (isPlaying) {
          ctx.strokeStyle = `${record.color}40`;
          ctx.lineWidth = 0.5;
          
          for (let i = 0; i < 5; i++) {
            const grooveRadius = record.radius * (0.4 + i * 0.1);
            ctx.beginPath();
            ctx.arc(0, 0, grooveRadius, record.grooveOffset + i * 0.5, record.grooveOffset + i * 0.5 + Math.PI / 3);
            ctx.stroke();
          }
        }
        
        // Draw record texture lines
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI / 2);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(
            Math.cos(angle) * record.radius,
            Math.sin(angle) * record.radius
          );
          ctx.strokeStyle = `${record.color}60`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        
        ctx.restore();
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
        className="w-full h-full opacity-15"
        style={{ 
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default BackgroundVinylRecords;
