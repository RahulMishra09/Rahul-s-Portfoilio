import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "🚀 LAUNCHING PORTFOLIO...",
    "💫 LOADING AWESOMENESS...",
    "🔥 PREPARING MAGIC...",
    "⚡ CHARGING CREATIVITY...",
    "🌟 INITIALIZING GENIUS..."
  ];

  useEffect(() => {
    // Simple progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 80);

    // Message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-hero-gradient text-white">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-radial from-primary-orange/20 to-transparent rounded-full blur-2xl"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0.5, 1.5, 0.8]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto mb-8 bg-orange-gradient rounded-full flex items-center justify-center shadow-glow-orange"
        >
          <span className="text-4xl font-black text-white">R</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-black mb-8 bg-orange-gradient bg-clip-text text-transparent"
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              "0 0 20px rgba(255, 128, 0, 0.5)",
              "0 0 40px rgba(255, 128, 0, 0.8)",
              "0 0 20px rgba(255, 128, 0, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          RAHUL MISHRA
        </motion.h1>

        {/* Loading Message */}
        <motion.p
          key={currentMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-primary-orange mb-8"
        >
          {messages[currentMessage]}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-96 mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-primary-orange">LOADING</span>
            <span className="text-xl font-black text-white">{progress}%</span>
          </div>
          
          <div className="h-4 bg-glass-white/20 rounded-full overflow-hidden border border-primary-orange/30">
            <motion.div
              className="h-full bg-orange-gradient rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={{ width: "100px" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary-orange rounded-full"
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loader;