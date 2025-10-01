import React, { useEffect, useRef } from 'react';

const WaveformAnimation = ({ isPlaying = false, frequency = 1, amplitude = 50 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      if (isPlaying) {
        // Draw multiple wave layers
        for (let layer = 0; layer < 3; layer++) {
          ctx.beginPath();
          ctx.strokeStyle = `hsla(${200 + layer * 30}, 70%, 60%, ${0.3 - layer * 0.1})`;
          ctx.lineWidth = 2 + layer;
          
          for (let x = 0; x < width; x++) {
            const wave1 = Math.sin(x * 0.02 + timeRef.current * frequency) * amplitude * (0.5 + layer * 0.3);
            const wave2 = Math.sin(x * 0.01 + timeRef.current * frequency * 0.7) * amplitude * 0.3;
            const wave3 = Math.sin(x * 0.03 + timeRef.current * frequency * 1.3) * amplitude * 0.2;
            
            const y = height / 2 + wave1 + wave2 + wave3;
            ctx.lineTo(x, y);
          }
          
          ctx.stroke();
        }
        
        timeRef.current += 0.05;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, frequency, amplitude]);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        className="w-full h-full"
        style={{ background: 'linear-gradient(135deg, #1e293b, #334155)' }}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Click play to see the waves</div>
        </div>
      )}
    </div>
  );
};

export default WaveformAnimation;
