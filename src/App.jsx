import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Callback from './pages/Callback';
import ErrorBoundary from './components/ErrorBoundary';
// import PerformanceMonitor from './components/PerformanceMonitor';
import './index.css';

function App() {
  return (
    <ErrorBoundary>
      {/* <PerformanceMonitor /> */}
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
