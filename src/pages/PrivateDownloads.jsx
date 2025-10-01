import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivateDownloads = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Your private password - change this to something secure
  const PRIVATE_PASSWORD = 'OmniFusion2025!';

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      if (password === PRIVATE_PASSWORD) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid password. Access denied.');
      }
      setLoading(false);
    }, 1000);
  };

  const downloadFiles = [
    {
      name: 'Event Flow DJ Dashboard - macOS',
      version: 'v1.0.2',
      size: '97 MB',
      url: 'https://github.com/inkFusionLabs/DJ-dashboard-/releases/download/v1.0.2/Event%20Flow%20-%20DJ%20Dashboard-1.0.2-mac.zip',
      platform: 'macOS',
      icon: '🍎',
      description: 'Professional DJ Dashboard for macOS. Extract and drag to Applications folder.'
    },
    {
      name: 'Event Flow DJ Dashboard - Windows',
      version: 'v1.0.2',
      size: '85 MB',
      url: 'https://github.com/inkFusionLabs/DJ-dashboard-/releases/download/v1.0.2/Event%20Flow%20-%20DJ%20Dashboard-1.0.2-windows.zip',
      platform: 'Windows',
      icon: '🪟',
      description: 'Professional DJ Dashboard for Windows. Extract and run the executable.'
    },
    {
      name: 'Event Flow DJ Dashboard - Linux',
      version: 'v1.0.2',
      size: '104 MB',
      url: 'https://github.com/inkFusionLabs/DJ-dashboard-/releases/download/v1.0.2/Event%20Flow%20-%20DJ%20Dashboard-1.0.2.AppImage',
      platform: 'Linux',
      icon: '🐧',
      description: 'Professional DJ Dashboard for Linux. Make executable and run.'
    }
  ];

  const handleDownload = (url, name) => {
    // Open download in new tab
    window.open(url, '_blank');
    
    // Optional: Track download analytics
    console.log(`Download initiated: ${name}`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
        <Helmet>
          <title>Private Downloads - OmniFusion Music</title>
          <meta name="description" content="Private download area for OmniFusion Music applications" />
        </Helmet>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Private Downloads</h1>
            <p className="text-gray-300">Enter password to access download files</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter access password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Authenticating...' : 'Access Downloads'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              This area is restricted to authorized personnel only.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4">
      <Helmet>
        <title>Private Downloads - OmniFusion Music</title>
        <meta name="description" content="Private download area for OmniFusion Music applications" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎛️</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Event Flow DJ Dashboard</h1>
          <p className="text-xl text-gray-300 mb-2">Professional DJ Dashboard Downloads</p>
          <p className="text-gray-400">Version 1.0.2 - Latest Release</p>
        </div>

        {/* Download Files Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {downloadFiles.map((file, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{file.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{file.platform}</h3>
                  <p className="text-sm text-gray-400">{file.version}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{file.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Size: {file.size}</span>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                  Latest
                </span>
              </div>
              
              <button
                onClick={() => handleDownload(file.url, file.name)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Download {file.platform}
              </button>
            </div>
          ))}
        </div>

        {/* Release Notes */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Release Notes - v1.0.2</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✨</span>
              <p className="text-gray-300">Added comprehensive update notification system</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✨</span>
              <p className="text-gray-300">Enhanced service worker for better caching</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✨</span>
              <p className="text-gray-300">Improved user experience with sleek notifications</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✨</span>
              <p className="text-gray-300">Added automatic update checking</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✨</span>
              <p className="text-gray-300">Better error handling and status messages</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✨</span>
              <p className="text-gray-300">Multi-platform support (macOS, Windows, Linux)</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-3 mt-1">✨</span>
              <p className="text-gray-300">Professional GitHub release distribution</p>
            </div>
          </div>
        </div>

        {/* GitHub Release Link */}
        <div className="text-center">
          <a
            href="https://github.com/inkFusionLabs/DJ-dashboard-/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Logout Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateDownloads;
