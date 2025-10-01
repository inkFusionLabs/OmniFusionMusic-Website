import React from 'react';
import ComingSoon from './ComingSoon';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      title: 'Instant Song Requests',
      description: 'Users can request songs instantly through the app with artist name, song title, and special notes.',
      gradient: 'from-purple-500 to-pink-500',
      app: 'Request App'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      title: 'DJ Dashboard Control',
      description: 'DJs get a powerful dashboard to view, manage, approve, or decline all incoming song requests.',
      gradient: 'from-blue-500 to-cyan-500',
      app: 'DJ Dashboard'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Real-Time Status',
      description: 'Track your song request status in real-time - pending, approved, playing, or completed.',
      gradient: 'from-green-500 to-emerald-500',
      app: 'Request App'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
        </svg>
      ),
      title: 'Queue Management',
      description: 'Organize and prioritize song requests with drag-and-drop queue management and auto-play features.',
      gradient: 'from-orange-500 to-amber-500',
      app: 'DJ Dashboard'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Push Notifications',
      description: 'Get instant notifications when your request is approved, when it\'s up next, or when it starts playing.',
      gradient: 'from-pink-500 to-rose-500',
      app: 'Request App'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Analytics & Insights',
      description: 'View detailed analytics on popular requests, peak times, and audience engagement metrics.',
      gradient: 'from-cyan-500 to-blue-500',
      app: 'DJ Dashboard'
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
        <div className="text-center mb-16" id="apps">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Introducing Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Two Powerful Apps
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A complete ecosystem for music requests - one app for requesting songs, one dashboard for managing them. 
            Perfect for music lovers and DJs alike.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  feature.app === 'Request App' 
                    ? 'bg-purple-500/20 text-purple-300' 
                    : 'bg-cyan-500/20 text-cyan-300'
                }`}>
                  {feature.app}
                </span>
              </div>
              
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
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Be the First to Experience It
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto text-lg">
              Join our waitlist to get early access to both apps when they launch. Plus, receive exclusive updates and special launch offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#newsletter" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-lg shadow-purple-500/50">
                Join the Waitlist
              </a>
              <a href="#faq" className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-base border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 