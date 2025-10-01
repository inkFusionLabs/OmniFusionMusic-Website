import React from 'react';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Request a Song App",
      description: "Submit song requests instantly and track their status in real-time",
      features: [
        "Instant song requests with artist name and title",
        "Real-time status tracking (pending, approved, playing, completed)",
        "Push notifications for request updates",
        "Special notes and dedications",
        "Request history and favorites"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      status: "Coming Soon",
      statusColor: "bg-purple-500/30 text-purple-200"
    },
    {
      id: 2,
      name: "DJ Dashboard App",
      description: "Manage all song requests, queue, and playlists from one powerful dashboard",
      features: [
        "View and manage all incoming song requests",
        "Approve or decline requests with one click",
        "Drag-and-drop queue management",
        "Auto-play and playlist integration",
        "Analytics and audience insights",
        "Real-time collaboration features"
      ],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      status: "Coming Soon",
      statusColor: "bg-cyan-500/30 text-cyan-200"
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
              Our Products
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our revolutionary music apps designed to transform your music experience. 
            From requesting songs to managing DJ sets, we've got you covered.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Product Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center`}>
                    {product.icon}
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>

                {/* Product Info */}
                <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <h3 className="text-white font-semibold text-lg mb-4">Key Features:</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105">
                    Join Waitlist
                  </button>
                  <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Seamless Integration
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-3xl mx-auto">
              Both apps work together perfectly to create a complete music ecosystem. 
              Request songs from the mobile app and manage them through the DJ dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <span className="text-white font-semibold">Request App</span>
              </div>
              
              <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <span className="text-white font-semibold">DJ Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Music?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Join our waitlist to be the first to know when these revolutionary apps launch in Q2 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              Back to Home
            </a>
            <a 
              href="/#newsletter" 
              className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-base border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
