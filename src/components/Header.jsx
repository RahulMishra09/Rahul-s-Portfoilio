import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank, FaFilePdf } from "react-icons/fa";
import { SiKaggle, SiLeetcode } from "react-icons/si";

function Header() {

  return (
    <header className="bg-card-gradient backdrop-blur-xl py-6 shadow-glow-orange border-b border-glass-white/30 sticky top-0 z-50 relative overflow-hidden">
      {/* Enhanced background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/6 via-secondary-orange/3 to-accent-orange/6"></div>
      
      {/* Floating orbs for visual depth */}
      <div className="absolute top-2 left-8 w-12 h-12 bg-gradient-radial from-primary-orange/15 to-transparent rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-2 right-8 w-10 h-10 bg-gradient-radial from-secondary-orange/10 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          
          {/* Simple Left Section - Name only */}
          <div className="flex flex-col relative">
            <h1 className="text-4xl font-black bg-orange-gradient bg-clip-text text-transparent">
              RAHUL MISHRA
            </h1>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-gradient rounded-full"></div>
          </div>

          {/* Simple Right Section */}
          <div className="flex items-center space-x-4">
            {/* Simple Social Links */}
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
                  className="text-gray-400 hover:text-primary-orange p-2 rounded-lg hover:bg-glass-white"
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Simple Resume Button */}
            <a 
              href="https://drive.google.com/file/d/1DsQh2ydYCT0IbSiv6GmABLlTS5MDq1ST/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 bg-orange-gradient text-white px-4 py-3 rounded-xl font-semibold hover:opacity-90"
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
