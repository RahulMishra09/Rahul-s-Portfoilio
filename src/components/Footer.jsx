import React from 'react';

function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Simplified footer with just color theme */}
      <div className="bg-card-gradient backdrop-blur-xl border-t border-glass-white/30 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-orange/5 via-transparent to-secondary-orange/5"></div>
        
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-px bg-orange-gradient"></div>
        
        {/* Minimal height to maintain color consistency */}
        <div className="h-20"></div>
      </div>
    </footer>
  );
}

export default Footer;
