import React from 'react';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

const EventFlow = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      title: 'Real-Time Event Management',
      description: 'Streamline your events with live updates, instant notifications, and seamless coordination between organizers and attendees.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that optimizes your event timeline, manages conflicts, and suggests the best times for activities.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Attendee Analytics',
      description: 'Track engagement, gather feedback, and analyze attendee behavior to improve future events and maximize participation.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
        </svg>
      ),
      title: 'Interactive Features',
      description: 'Live polls, Q&A sessions, networking tools, and interactive elements that keep your audience engaged throughout the event.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Multi-Platform Support',
      description: 'Works seamlessly across web, mobile, and desktop platforms. Your events are accessible to everyone, everywhere.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Advanced Reporting',
      description: 'Comprehensive reports and insights that help you understand event success, attendee satisfaction, and ROI metrics.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navigation />
      <ThemeToggle />
      
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              EventFlow
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate event management platform that transforms how you plan, execute, and analyze your events. 
            From small gatherings to large conferences, EventFlow streamlines every aspect of your event experience.
          </p>
          
          <div className="flex items-center justify-center mb-8 gap-4">
            <span className="px-6 py-3 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 rounded-full text-lg font-semibold">
              🚀 Coming Soon
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg opacity-75 cursor-not-allowed"
              disabled
            >
              🎵 Request App - Coming Soon
            </button>
            <button 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full text-lg opacity-75 cursor-not-allowed"
              disabled
            >
              🎛️ DJ Dashboard - Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Two Powerful Apps Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
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

          {/* Two Apps Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 opacity-75">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3 text-center">Request a Song App</h3>
              <p className="text-white/80 text-center mb-4">Submit song requests instantly and track their status in real-time</p>
              <div className="flex items-center justify-center gap-2">
                <span className="px-4 py-2 bg-yellow-500/30 text-yellow-200 rounded-full text-sm font-semibold">Coming Soon</span>
                <span className="text-white/60 text-sm">In development</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 opacity-75">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3 text-center">DJ Dashboard App</h3>
              <p className="text-white/80 text-center mb-4">Manage all song requests, queue, and playlists from one powerful dashboard</p>
              <div className="flex items-center justify-center gap-2">
                <span className="px-4 py-2 bg-yellow-500/30 text-yellow-200 rounded-full text-sm font-semibold">Coming Soon</span>
                <span className="text-white/60 text-sm">In development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Modern Events
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              EventFlow combines cutting-edge technology with intuitive design to deliver 
              an event management experience like never before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-white font-bold text-xl mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Perfect For Every Event Type
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Whether you're organizing a corporate conference, music festival, or intimate gathering, 
              EventFlow adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Corporate Conferences',
              'Music Festivals',
              'Wedding Events',
              'Trade Shows',
              'Workshops & Training',
              'Networking Events',
              'Product Launches',
              'Community Gatherings'
            ].map((eventType, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
              >
                <h3 className="text-white font-semibold text-lg">{eventType}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Event Flow?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Event Flow is currently in development. Join our waitlist to be the first to experience 
              our professional-grade music request platform and DJ dashboard. Perfect for events, parties, and professional DJs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg opacity-75 cursor-not-allowed"
                disabled
              >
                🎵 Join Waitlist - Coming Soon
              </button>
              <a 
                href="/" 
                className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-base border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
              >
                Back to Home
              </a>
            </div>
            
            {/* Powered by OmniFusion Music */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm">
                Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">OmniFusion Music</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventFlow;
