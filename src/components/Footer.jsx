import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaHackerrank, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiKaggle, SiLeetcode } from 'react-icons/si';

function Footer() {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/rahul-mishra-a2a5ba253/", icon: <FaLinkedin size={24} />, title: "LinkedIn", color: "#0077B5" },
    { href: "https://github.com/RahulMishra09", icon: <FaGithub size={24} />, title: "GitHub", color: "#181717" },
    { href: "https://www.hackerrank.com/profile/rahulchh07", icon: <FaHackerrank size={24} />, title: "HackerRank", color: "#2EC866" },
    { href: "https://www.kaggle.com/rahulmishra09", icon: <SiKaggle size={24} />, title: "Kaggle", color: "#20BEFF" },
    { href: "https://leetcode.com/u/RahulMishra0008/", icon: <SiLeetcode size={24} />, title: "LeetCode", color: "#FFA116" },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="bg-card-gradient backdrop-blur-xl border-t border-glass-white/30 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-orange/5 via-transparent to-secondary-orange/5"></div>

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-px bg-orange-gradient"></div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-glass-white border border-primary-orange/30 hover:border-primary-orange text-gray-400 hover:text-white transition-all duration-300 group relative"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={link.title}
              >
                <div className="absolute inset-0 bg-primary-orange opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                <span className="relative z-10">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6"
          >
            <a
              href="mailto:rahulchh07@gmail.com"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-primary-orange transition-colors duration-300 text-lg"
            >
              <FaEnvelope />
              <span>findrahulhere08@gmail.com</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              <span>© {new Date().getFullYear()} Rahul Mishra. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span>
              <span>and React</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
