import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary-orange/10 via-transparent to-secondary-orange/10 pointer-events-none"></div>
      
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
          className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-8 shadow-glow-orange/20"
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
            className="text-xl text-gray-200 leading-relaxed font-light"
          >
            I'm a passionate <span className="text-primary-orange font-semibold">developer</span> who thrives on coding, tackling complex problems with <span className="text-secondary-orange font-semibold">DSA</span>, and diving into new technologies. Always learning, always building — now exploring the limitless possibilities of <span className="text-accent-orange font-semibold">AI and machine learning</span>.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
