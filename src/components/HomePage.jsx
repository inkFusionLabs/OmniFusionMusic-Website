import React from 'react';
import Hero from './Hero';
import Newsletter from './Newsletter';
import AppConnectionStatus from './AppConnectionStatus';
import PressKit from './PressKit';
import ThemeToggle from './ThemeToggle';
import KeyboardShortcuts from './KeyboardShortcuts';
import Navigation from './Navigation';
import MusicAnimationsDemo from './MusicAnimationsDemo';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="newsletter">
        <Newsletter />
      </section>
    </div>
  );
};

export default HomePage; 