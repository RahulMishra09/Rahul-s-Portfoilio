import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaFlask, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

// ExperienceSection component displays professional experience cards with animation
function ExperienceSection() {
  // Array of experience objects to be displayed
  const experiences = [
    {
      title: "Research Intern",
      company: "IIIT Allahabad",
      location: "Prayagraj, Uttar Pradesh",
      duration: "May 2025 - July 2025",
      description: "Working on deep learning in computer vision. Contributing to innovative solutions and gaining hands-on experience in research methodologies.",
      icon: <FaFlask />,
      color: "#FF6B6B"
    }
  ];

  // Animation variants for the container (staggered children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for each experience card
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

  // Main render
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-orange/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-secondary-orange/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-16 bg-orange-gradient bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-8 shadow-glow-orange/20 hover:shadow-glow-orange-lg/30 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 via-transparent to-secondary-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-6">
                  <motion.div 
                    className="p-4 rounded-xl text-white text-2xl bg-gradient-to-r from-primary-orange to-red-500 shadow-glow-orange/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {experience.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold bg-orange-gradient bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-200">
                      <FaUniversity className="text-secondary-orange text-lg" />
                      <span className="font-semibold text-lg">{experience.company}</span>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="text-right"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 text-secondary-orange font-semibold mb-2 text-lg">
                    <FaCalendarAlt />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaMapMarkerAlt />
                    <span>{experience.location}</span>
                  </div>
                </motion.div>
              </div>
              
              <p className="text-gray-200 leading-relaxed text-lg font-light">
                {experience.description}
              </p>
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-orange-gradient opacity-60"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Export the ExperienceSection component for use in other files
export default ExperienceSection;