import React, { useState, useEffect, useRef } from 'react';

const VinylRecord = ({ isPlaying = false, rpm = 33.33, size = 200 }) => {
  const [rotation, setRotation] = useState(0);
  const [groovePosition, setGroovePosition] = useState(0);
  const animationRef = useRef();
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 20;

  useEffect(() => {
    const animate = () => {
      if (isPlaying) {
        // Rotate the record
        setRotation(prev => (prev + (rpm / 60) * 6) % 360);
        
        // Animate groove position
        setGroovePosition(prev => (prev + 0.5) % 360);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, rpm]);

  const drawGrooves = (ctx) => {
    if (!isPlaying) return;
    
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    
    // Draw spiral grooves
    for (let i = 0; i < 20; i++) {
      const angle = (groovePosition + i * 18) * (Math.PI / 180);
      const r = radius - (i * 3);
      
      if (r > 20) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, angle, angle + Math.PI / 6);
        ctx.stroke();
      }
    }
  };

  useEffect(() => {
    const canvas = document.getElementById('vinyl-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = size;
    const height = size;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw record base
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#1f2937';
    ctx.fill();
    
    // Draw grooves
    drawGrooves(ctx);
    
    // Draw center label
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#111827';
    ctx.fill();
    
    // Draw center hole
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#000000';
    ctx.fill();
    
    // Draw record texture lines
    for (let i = 0; i < 8; i++) {
      const angle = (i * 45 + rotation) * (Math.PI / 180);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      );
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
  }, [rotation, groovePosition, isPlaying, size]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        {/* Vinyl Record */}
        <div 
          className="relative rounded-full shadow-2xl"
          style={{
            width: size,
            height: size,
            transform: `rotate(${rotation}deg)`,
            transition: isPlaying ? 'none' : 'transform 0.5s ease-out'
          }}
        >
          <canvas
            id="vinyl-canvas"
            width={size}
            height={size}
            className="rounded-full"
          />
          
          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          )}
        </div>
        
        {/* Vinyl Shadow */}
        <div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-4 rounded-full bg-black/30 blur-sm"
          style={{
            transform: `translateX(-50%) scaleX(${isPlaying ? 1.1 : 1})`,
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
      
      {/* Record Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-2">Vinyl Record</h3>
        <div className="text-sm text-gray-300 space-y-1">
          <div>RPM: {rpm}</div>
          <div>Status: {isPlaying ? 'Playing' : 'Stopped'}</div>
          {isPlaying && (
            <div className="text-blue-400 animate-pulse">
              ● Spinning
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VinylRecord;
