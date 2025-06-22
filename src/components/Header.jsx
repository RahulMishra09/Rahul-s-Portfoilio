import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHackerrank, FaFilePdf } from "react-icons/fa";
import { SiKaggle, SiLeetcode } from "react-icons/si";

function Header() {
  const name = "RAHUL MISHRA".split(""); // Split name into individual letters

  return (
    <header className="bg-dark-background py-6 shadow-lg backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Left Section - Name and Role */}
          <div className="flex flex-col">
            {/* Letter-by-letter Reveal Animation */}
            <motion.h1 
              className="text-4xl font-extrabold text-white relative"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } } 
              }}
            >
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-orange-400"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            
          
          </div>

    

          {/* Right Section - Social Links and Resume */}
          <div className="flex items-center space-x-4">
            {/* Social Links Group */}
            <div className="flex space-x-4 items-center">
              {[
                { href: "https://www.linkedin.com/in/rahul-mishra-a2a5ba253/", icon: <FaLinkedin size={22} />, title: "LinkedIn" },
                { href: "https://github.com/RahulMishra09", icon: <FaGithub size={22} />, title: "GitHub" },
                { href: "https://www.hackerrank.com/profile/rahulchh07", icon: <FaHackerrank size={22} />, title: "HackerRank" },
                { href: "https://www.kaggle.com/rahulmishra09", icon: <SiKaggle size={22} />, title: "Kaggle" },
                { href: "https://leetcode.com/u/RahulMishra0008/", icon: <SiLeetcode size={22} />, title: "LeetCode" },
              ].map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800"
                  title={link.title}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-gray-600"></div>

            {/* Resume Button */}
            <motion.a 
              href="https://drive.google.com/file/d/1DsQh2ydYCT0IbSiv6GmABLlTS5MDq1ST/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium"
              title="Download Resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilePdf size={18} />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
