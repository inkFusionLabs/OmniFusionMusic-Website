import React from 'react'
import { Search, Play, List, Share2, Zap, Shield, Smartphone, Music, Sparkles } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Universal Search",
      description: "Search across all your connected music services simultaneously. Find any track, album, or artist instantly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Unified Playback",
      description: "Control music from all services in one interface. Seamlessly switch between platforms without interruption.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <List className="w-8 h-8" />,
      title: "Playlist Management",
      description: "View and manage playlists from all connected services. Create cross-platform playlists effortlessly.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Cross-Service Sharing",
      description: "Share music across different platforms. Send tracks between Spotify, Apple Music, and more.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Built with Tauri for native performance. Instant startup and smooth playback across all platforms.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your music data stays on your device. No cloud storage, no tracking, just pure music enjoyment.",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const services = [
    { name: "Spotify", color: "#1DB954", icon: "🎵" },
    { name: "Apple Music", color: "#FA243C", icon: "🍎" },
    { name: "YouTube Music", color: "#FF0000", icon: "▶️" },
    { name: "Tidal", color: "#000000", icon: "🌊" },
    { name: "Deezer", color: "#00C7F2", icon: "🎧" },
    { name: "Amazon Music", color: "#FF9900", icon: "📦" }
  ]

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Everything You Need in
            <span className="gradient-text"> One Place</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            OmniFusion Music brings together all your favorite streaming services 
            with powerful features designed for music lovers.
          </p>
        </div>

        {/* Supported Services */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Supported Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div key={index} className="feature-card text-center group hover:scale-110 transition-all duration-500">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h4 className="font-bold text-white group-hover:gradient-text transition-all duration-300">
                  {service.name}
                </h4>
                <div 
                  className="w-8 h-1.5 mx-auto mt-3 rounded-full transition-all duration-500 group-hover:w-16 group-hover:h-2"
                  style={{ backgroundColor: service.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group hover:scale-105 transition-all duration-500 fade-in">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:gradient-text transition-all duration-300">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Platform Support */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Available on All Major Platforms</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="feature-card px-8 py-6">
              <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white">Windows</h4>
              <p className="text-gray-300 text-sm">Windows 10 & 11</p>
            </div>
            <div className="feature-card px-8 py-6">
              <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white">macOS</h4>
              <p className="text-gray-300 text-sm">macOS 10.15+</p>
            </div>
            <div className="feature-card px-8 py-6">
              <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white">Linux</h4>
              <p className="text-gray-300 text-sm">Ubuntu, Fedora, Arch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 