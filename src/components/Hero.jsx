import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [showOwnerButton, setShowOwnerButton] = useState(false);

  useEffect(() => {
    setShowOwnerButton(localStorage.getItem('omnifusion_is_owner') === 'true');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Owner-only Open App button */}
        {showOwnerButton && (
          <div className="mb-8 flex flex-col items-center justify-center">
            <a
              href="omnifusionmusic://"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow hover:scale-105 transition-all duration-300"
              style={{ textDecoration: 'none' }}
              title="Open OmniFusion Music App"
            >
              🚀 Open App
            </a>
          </div>
        )}
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Omni Fusion Music
          </span>
        </h1>
        
        {/* Call to Action Button */}
        <div className="flex justify-center items-center mb-12">
          <a href="/eventflow" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-lg shadow-purple-500/50">
            Our Products
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 