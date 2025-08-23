import React, { useState, useEffect, useRef } from 'react';

const Equalizer = ({ isPlaying = false, bass = 0.5, mid = 0.5, treble = 0.5 }) => {
  const [frequencies, setFrequencies] = useState([]);
  const animationRef = useRef();
  const freqCount = 20;

  useEffect(() => {
    // Initialize frequency bars
    setFrequencies(Array.from({ length: freqCount }, (_, i) => ({
      id: i,
      height: Math.random() * 100,
      frequency: i < 7 ? 'bass' : i < 14 ? 'mid' : 'treble'
    })));

    const animate = () => {
      setFrequencies(prevFreqs => 
        prevFreqs.map(freq => {
          let intensity = 0.3;
          
          if (isPlaying) {
            switch (freq.frequency) {
              case 'bass':
                intensity = bass;
                break;
              case 'mid':
                intensity = mid;
                break;
              case 'treble':
                intensity = treble;
                break;
            }
            
            // Add some randomness and music reactivity
            const randomFactor = Math.random() * 0.5 + 0.5;
            const musicFactor = intensity * randomFactor;
            const newHeight = Math.max(5, Math.random() * 100 * musicFactor + Math.random() * 30);
            
            return { ...freq, height: newHeight };
          } else {
            // Gradually reduce height when not playing
            return { ...freq, height: Math.max(5, freq.height * 0.95) };
          }
        })
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
  }, [isPlaying, bass, mid, treble]);

  const getBarColor = (frequency) => {
    switch (frequency) {
      case 'bass':
        return 'from-red-500 to-orange-500';
      case 'mid':
        return 'from-yellow-500 to-green-500';
      case 'treble':
        return 'from-blue-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="p-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-2">Audio Equalizer</h3>
        <div className="flex justify-center space-x-4 text-sm text-gray-300">
          <span>Bass: {Math.round(bass * 100)}%</span>
          <span>Mid: {Math.round(mid * 100)}%</span>
          <span>Treble: {Math.round(treble * 100)}%</span>
        </div>
      </div>
      
      <div className="flex items-end justify-center space-x-1 h-40">
        {frequencies.map((freq) => (
          <div
            key={freq.id}
            className={`w-3 rounded-t-sm transition-all duration-100 ease-out bg-gradient-to-t ${getBarColor(freq.frequency)}`}
            style={{
              height: `${freq.height}%`,
              boxShadow: `0 0 8px ${freq.frequency === 'bass' ? '#ef4444' : freq.frequency === 'mid' ? '#eab308' : '#3b82f6'}40`
            }}
          />
        ))}
      </div>
      
      {!isPlaying && (
        <div className="text-center mt-4">
          <div className="text-gray-400 text-sm">Start playing to see the equalizer in action</div>
        </div>
      )}
    </div>
  );
};

export default Equalizer;
