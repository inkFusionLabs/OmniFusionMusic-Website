import React, { useState, useEffect } from 'react';
import BackgroundMusicAnimations from './BackgroundMusicAnimations';
import BackgroundEqualizer from './BackgroundEqualizer';
import BackgroundVinylRecords from './BackgroundVinylRecords';

const BackgroundAnimationsController = ({ 
  isPlaying = false, 
  intensity = 0.3,
  enableParticles = true,
  enableWaves = true,
  enableEqualizer = true,
  enableVinylRecords = true
}) => {
  const [showControls, setShowControls] = useState(false);
  const [localIntensity, setLocalIntensity] = useState(intensity);

  // Update local intensity when prop changes
  useEffect(() => {
    setLocalIntensity(intensity);
  }, [intensity]);

  return (
    <>
      {/* Background Animation Layers */}
      {enableParticles && enableWaves && (
        <BackgroundMusicAnimations 
          isPlaying={isPlaying} 
          intensity={localIntensity} 
        />
      )}
      
      {enableEqualizer && (
        <BackgroundEqualizer 
          isPlaying={isPlaying} 
          intensity={localIntensity} 
        />
      )}
      
      {enableVinylRecords && (
        <BackgroundVinylRecords 
          isPlaying={isPlaying} 
          intensity={localIntensity} 
        />
      )}

      {/* Floating Control Panel */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowControls(!showControls)}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          title="Background Animation Controls"
        >
          <span className="text-2xl">🎨</span>
        </button>
        
        {showControls && (
          <div className="absolute top-16 right-0 glass p-4 rounded-2xl border border-white/20 min-w-64">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <span className="mr-2">🎭</span>
              Background Animations
            </h3>
            
            <div className="space-y-3">
              {/* Intensity Control */}
              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Intensity: {Math.round(localIntensity * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={localIntensity}
                  onChange={(e) => setLocalIntensity(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              
              {/* Animation Toggles */}
              <div className="space-y-2">
                <label className="block text-white/70 text-sm">Enable Animations:</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2 text-white/80 text-sm">
                    <input
                      type="checkbox"
                      checked={enableParticles && enableWaves}
                      onChange={() => {/* Toggle particles and waves */}}
                      className="rounded border-white/30"
                    />
                    <span>Particles & Waves</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 text-white/80 text-sm">
                    <input
                      type="checkbox"
                      checked={enableEqualizer}
                      onChange={() => {/* Toggle equalizer */}}
                      className="rounded border-white/30"
                    />
                    <span>Equalizer</span>
                  </label>
                  
                  <label className="flex items-center space-x-2 text-white/80 text-sm">
                    <input
                      type="checkbox"
                      checked={enableVinylRecords}
                      onChange={() => {/* Toggle vinyl records */}}
                      className="rounded border-white/30"
                    />
                    <span>Vinyl Records</span>
                  </label>
                </div>
              </div>
              
              {/* Status */}
              <div className="flex items-center space-x-2 text-sm">
                <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-white/60">
                  {isPlaying ? 'Animations Active' : 'Animations Paused'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};

export default BackgroundAnimationsController;
