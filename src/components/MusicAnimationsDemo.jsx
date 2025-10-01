import React, { useState } from 'react';
import MusicVisualizer from './MusicVisualizer';
import WaveformAnimation from './WaveformAnimation';
import MusicParticles from './MusicParticles';
import Equalizer from './Equalizer';
import VinylRecord from './VinylRecord';

const MusicAnimationsDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [intensity, setIntensity] = useState(0.5);
  const [bass, setBass] = useState(0.7);
  const [mid, setMid] = useState(0.6);
  const [treble, setTreble] = useState(0.8);
  const [rpm, setRpm] = useState(33.33);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
            <span className="text-sm font-medium text-blue-400">🎵</span>
            <span className="text-sm font-medium text-white ml-2">Music Animations</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
            Interactive
            <span className="gradient-text"> Music Visualizations</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the power of music through beautiful, reactive animations
          </p>
        </div>

        {/* Controls */}
        <div className="glass p-6 rounded-2xl max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={togglePlay}
              className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                isPlaying
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Intensity: {Math.round(intensity * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={intensity}
                onChange={(e) => setIntensity(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                RPM: {rpm}
              </label>
              <input
                type="range"
                min="16.67"
                max="78"
                step="0.33"
                value={rpm}
                onChange={(e) => setRpm(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>

        {/* Animations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Music Visualizer */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Audio Visualizer</h3>
            <MusicVisualizer isPlaying={isPlaying} intensity={intensity} />
          </div>

          {/* Waveform Animation */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Waveform</h3>
            <WaveformAnimation isPlaying={isPlaying} frequency={intensity} amplitude={50} />
          </div>

          {/* Music Particles */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Music Particles</h3>
            <MusicParticles isPlaying={isPlaying} intensity={intensity} />
          </div>

          {/* Vinyl Record */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Vinyl Record</h3>
            <VinylRecord isPlaying={isPlaying} rpm={rpm} />
          </div>
        </div>

        {/* Equalizer - Full Width */}
        <div className="glass p-6 rounded-2xl">
          <Equalizer 
            isPlaying={isPlaying} 
            bass={bass} 
            mid={mid} 
            treble={treble} 
          />
          
          {/* Equalizer Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bass: {Math.round(bass * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={bass}
                onChange={(e) => setBass(parseFloat(e.target.value))}
                className="w-full h-2 bg-red-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mid: {Math.round(mid * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={mid}
                onChange={(e) => setMid(parseFloat(e.target.value))}
                className="w-full h-2 bg-yellow-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Treble: {Math.round(treble * 100)}%
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={treble}
                onChange={(e) => setTreble(parseFloat(e.target.value))}
                className="w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-12">
          <div className="glass p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">How to Use</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>🎵 Click the Play button to start all animations</p>
              <p>🎛️ Adjust the intensity slider to control animation sensitivity</p>
              <p>💿 Change the RPM to control vinyl record speed</p>
              <p>🎚️ Fine-tune bass, mid, and treble for the equalizer</p>
              <p>✨ Watch as particles, waves, and bars respond to your settings</p>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default MusicAnimationsDemo;
