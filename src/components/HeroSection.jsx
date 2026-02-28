import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a passionate developer who thrives on coding, tackling complex problems with DSA, and diving into new technologies. Always learning, always building — now exploring the limitless possibilities of AI and machine learning.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary-orange/10 via-transparent to-secondary-orange/10 pointer-events-none"></div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-8 shadow-glow-orange/20 hover:shadow-glow-orange-lg/30 transition-all duration-500"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-5xl font-extrabold mb-6 bg-orange-gradient bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xl text-gray-200 leading-relaxed font-light min-h-[120px]"
          >
            {typedText.split(/(\bdeveloper\b|\bDSA\b|\bAI and machine learning\b)/g).map((part, index) => {
              if (part === 'developer') return <span key={index} className="text-primary-orange font-semibold">{part}</span>;
              if (part === 'DSA') return <span key={index} className="text-secondary-orange font-semibold">{part}</span>;
              if (part === 'AI and machine learning') return <span key={index} className="text-accent-orange font-semibold">{part}</span>;
              return <span key={index}>{part}</span>;
            })}
            <span className="inline-block w-0.5 h-6 bg-primary-orange ml-1 animate-pulse"></span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
