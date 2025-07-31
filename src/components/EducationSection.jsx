import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaDatabase, FaNetworkWired, FaCogs, FaBrain } from 'react-icons/fa';

function EducationSection() {
  const skills = [
    { name: "Data Structures & Algorithms", icon: <FaLaptopCode />, color: "#FF6B6B" },
    { name: "Object-Oriented Programming", icon: <FaCogs />, color: "#4ECDC4" },
    { name: "Database Management Systems", icon: <FaDatabase />, color: "#45B7D1" },
    { name: "Computer Network", icon: <FaNetworkWired />, color: "#96CEB4" },
    { name: "Operating Systems", icon: <FaCogs />, color: "#D4A5A5" },
    { name: "Machine Learning", icon: <FaBrain />, color: "#9B89B3" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-secondary-orange/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-primary-orange/20 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-16 bg-orange-gradient bg-clip-text text-transparent flex items-center gap-4"
      >
        <motion.div
          animate={{
            rotate: [0, 15, -15, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-secondary-orange"
        >
          <FaGraduationCap />
        </motion.div>
        Education 
      </motion.h2>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-10 shadow-glow-orange/20 hover:shadow-glow-orange-lg/30 transition-all duration-500 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 via-transparent to-secondary-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <motion.div variants={itemVariants} className="relative z-10">
          <h3 className="text-3xl font-bold bg-orange-gradient bg-clip-text text-transparent mb-3 relative group-hover:scale-105 transition-transform duration-300">
            B.Tech CSE (Hons.) - IoT & Intelligent Systems
            <div className="absolute -left-6 top-1/2 w-3 h-12 bg-orange-gradient transform -translate-y-1/2 rounded-full shadow-glow-orange/50"></div>
          </h3>
          <div className="flex items-center gap-4 mb-8 text-lg">
            <span className="text-gray-200 font-medium">Manipal University Jaipur</span>
            <span className="text-gray-500">•</span>
            <motion.span 
              className="text-secondary-orange font-bold"
              whileHover={{ scale: 1.1 }}
            >
              2022 - 2026
            </motion.span>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 relative z-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-4 text-gray-200 bg-gradient-to-r from-glass-white to-transparent p-5 rounded-xl border border-primary-orange/30 hover:border-secondary-orange/60 transition-all duration-300 group/skill relative backdrop-blur-sm"
            >
              <motion.div 
                className="p-3 rounded-lg text-white text-xl shadow-lg"
                style={{ background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)` }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <span className="group-hover/skill:text-white transition-colors font-medium text-lg">
                {skill.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-orange/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-all duration-500 rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-1 bg-orange-gradient opacity-60"></div>
      </motion.div>
    </section>
  );
}

export default EducationSection;