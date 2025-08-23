import React, { useState, useEffect, useRef } from 'react';

const MusicVisualizer = ({ isPlaying = false, intensity = 0.5 }) => {
  const [bars, setBars] = useState([]);
  const animationRef = useRef();
  const barCount = 32;

  useEffect(() => {
    // Initialize bars
    setBars(Array.from({ length: barCount }, (_, i) => ({
      id: i,
      height: Math.random() * 100,
      color: `hsl(${200 + i * 5}, 70%, 60%)`
    }));

    const animate = () => {
      setBars(prevBars => 
        prevBars.map(bar => ({
          ...bar,
          height: isPlaying 
            ? Math.max(10, Math.random() * 100 * intensity + Math.random() * 50)
            : Math.max(5, bar.height * 0.8)
        }))
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animate();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, intensity]);

  return (
    <div className="flex items-end justify-center space-x-1 h-32 p-4">
      {bars.map((bar) => (
        <div
          key={bar.id}
          className="w-2 rounded-t-sm transition-all duration-75 ease-out"
          style={{
            height: `${bar.height}%`,
            backgroundColor: bar.color,
            boxShadow: `0 0 10px ${bar.color}40`
          }}
        />
      ))}
    </div>
  );
};

export default MusicVisualizer;
