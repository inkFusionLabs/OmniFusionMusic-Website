import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('Processing callback...');

  useEffect(() => {
    const type = searchParams.get('type');
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      setError(error);
      setTimeout(() => navigate('/'), 3000);
      return;
    }

    if (type === 'spotify') {
      // Handle Spotify callback
      if (code) {
        setStatus('Spotify authentication successful! Redirecting...');
        // Store the code temporarily for Spotify processing
        localStorage.setItem('spotify_auth_code', code);
        setTimeout(() => navigate('/'), 1500);
      } else {
        setError('No authorization code received from Spotify');
        setTimeout(() => navigate('/'), 3000);
      }
    } else if (type === 'download') {
      // Handle download callback
      if (code === 'download_success') {
        setStatus('Download completed successfully! Redirecting...');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setError('Download failed');
        setTimeout(() => navigate('/'), 3000);
      }
    } else {
      // Generic callback handling
      if (code) {
        setStatus('Callback processed successfully! Redirecting...');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setError('No callback data received');
        setTimeout(() => navigate('/'), 3000);
      }
    }
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center glass p-8 rounded-2xl">
          <div className="text-red-400 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold mb-4 text-white">Callback Error</h1>
          <p className="opacity-80 mb-4 text-gray-300">{error}</p>
          <p className="text-sm opacity-60 text-gray-400">Redirecting back to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center glass p-8 rounded-2xl">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-400 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold mb-4 text-white">Processing Callback...</h1>
        <p className="opacity-80 text-gray-300">{status}</p>
      </div>
    </div>
  );
};

export default Callback;
