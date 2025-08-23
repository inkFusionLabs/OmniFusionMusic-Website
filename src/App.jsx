import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Callback from './pages/Callback';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import './index.css';

function App() {
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
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/callback/:type" element={<Callback />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
