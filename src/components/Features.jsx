import React from 'react';
import ComingSoon from './ComingSoon';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Smart Music Transfer',
      description: 'Transfer your entire music library between Spotify, Apple Music, YouTube Music, Tidal, and more with intelligent song matching.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Playlist Cleanup',
      description: 'Remove duplicate songs, dead links, and organize your playlists automatically with AI-powered detection algorithms.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/>
        </svg>
      ),
      title: 'Batch Operations',
      description: 'Clean up multiple playlists at once with powerful batch processing tools. Save hours of manual work.',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms that intelligently match songs across different streaming services for accurate transfers.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Transfer Scheduling',
      description: 'Schedule large transfers for off-peak hours to avoid service limits and ensure reliable completion.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Progress Tracking',
      description: 'Real-time progress indicators and detailed transfer history to monitor your music migration process.',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              OmniFusion Music?
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the future of music transfer and playlist management with features designed to make your music library 
            more organized, accessible, and transferable than ever before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-white font-bold text-xl mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Ready to Transfer and Clean Up Your Music Library?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Join thousands of users who have already discovered the perfect way to transfer and organize their music across streaming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <ComingSoon platform="all" showProgress={false} />
              <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-base border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 