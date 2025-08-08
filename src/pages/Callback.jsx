import React from 'react';
import ClientOnly from '../components/ClientOnly';

const Callback = () => {
  return (
    <ClientOnly fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-6"></div>
            <div className="h-8 bg-gray-600 rounded mb-4"></div>
            <div className="h-4 bg-gray-600 rounded mb-6"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    }>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Success!</h2>
          <p className="text-white/70 mb-6">Callback processed successfully.</p>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Callback; 