import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EventFlow from './pages/EventFlow';
import Callback from './pages/Callback';
import PrivateDownloads from './pages/PrivateDownloads';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import BackgroundAnimationsController from './components/BackgroundAnimationsController';
import './index.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationIntensity, setAnimationIntensity] = useState(0.3);

  useEffect(() => {
    // Initialize services on client side only
    const initializeServices = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        // Register service worker for PWA functionality
        if ('serviceWorker' in navigator) {
          try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('Service Worker registered:', registration);
          } catch (error) {
            console.log('Service Worker registration failed:', error);
          }
        }
        
        // Start background animations after a short delay
        setTimeout(() => {
          setIsPlaying(true);
        }, 2000);
        
        console.log('App initialized successfully');
      } catch (error) {
        console.error('Failed to initialize app:', error);
      }
    };

    initializeServices();
  }, []);

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      
      {/* Background Animations - Runs across entire website */}
      <BackgroundAnimationsController 
        isPlaying={isPlaying}
        intensity={animationIntensity}
        enableParticles={true}
        enableWaves={true}
        enableEqualizer={true}
        enableVinylRecords={true}
      />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eventflow" element={<EventFlow />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/callback/:type" element={<Callback />} />
            <Route path="/private-downloads" element={<PrivateDownloads />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
