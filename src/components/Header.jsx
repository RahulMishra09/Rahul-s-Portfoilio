import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaHackerrank, FaFilePdf, FaCode, FaBrain, FaRocket, FaLaptopCode } from "react-icons/fa";
import { SiKaggle, SiLeetcode } from "react-icons/si";

function Header() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    { text: "Full Stack Developer", icon: <FaCode /> },
    { text: "Problem Solver", icon: <FaLaptopCode /> },
    { text: "ML Enthusiast", icon: <FaBrain /> },
    { text: "Tech Explorer", icon: <FaRocket /> }
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <header className="bg-card-gradient backdrop-blur-xl py-6 shadow-glow-orange border-b border-glass-white/30 sticky top-0 z-50 relative overflow-hidden">
      {/* Enhanced background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/6 via-secondary-orange/3 to-accent-orange/6"></div>

      {/* Floating orbs for visual depth */}
      <div className="absolute top-2 left-8 w-12 h-12 bg-gradient-radial from-primary-orange/15 to-transparent rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-2 right-8 w-10 h-10 bg-gradient-radial from-secondary-orange/10 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">

          {/* Left Section - Avatar + Name + Role */}
          <div className="flex items-center gap-4">
            {/* Animated Avatar */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange via-secondary-orange to-accent-orange p-0.5 shadow-glow-orange-lg">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-white">
                  RM
                </div>
              </div>
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-primary-orange opacity-20 animate-ping"></div>
            </motion.div>

            {/* Name and Role */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-black bg-orange-gradient bg-clip-text text-transparent">
                Rahul Mishra
              </h1>

              {/* Rotating Roles */}
              <div className="h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-primary-orange"
                    >
                      {roles[currentRole].icon}
                    </motion.span>
                    <span className="font-medium">{roles[currentRole].text}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex space-x-1 bg-glass-white backdrop-blur-sm rounded-2xl p-2 border border-glass-white/30">
              {[
                { href: "https://www.linkedin.com/in/rahul-mishra-a2a5ba253/", icon: <FaLinkedin size={20} />, title: "LinkedIn" },
                { href: "https://github.com/RahulMishra09", icon: <FaGithub size={20} />, title: "GitHub" },
                { href: "https://www.hackerrank.com/profile/rahulchh07", icon: <FaHackerrank size={20} />, title: "HackerRank" },
                { href: "https://www.kaggle.com/rahulmishra09", icon: <SiKaggle size={20} />, title: "Kaggle" },
                { href: "https://leetcode.com/u/RahulMishra0008/", icon: <SiLeetcode size={20} />, title: "LeetCode" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-orange p-2 rounded-lg hover:bg-glass-white transition-colors duration-300"
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1DsQh2ydYCT0IbSiv6GmABLlTS5MDq1ST/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-orange-gradient text-white px-4 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300"
              title="Download Resume"
            >
              <FaFilePdf size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-orange-gradient"></div>
    </header>
  );
}

export default Header;
