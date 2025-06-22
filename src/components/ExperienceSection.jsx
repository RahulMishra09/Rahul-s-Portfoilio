import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaFlask, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function ExperienceSection() {
  const experiences = [
    {
      title: "Research Intern",
      company: "IIIT Allahabad",
      location: "Prayagraj, Uttar Pradesh",
      duration: "May 2025 - Present",
      description: "Working on deep learning in computer vision. Contributing to innovative solutions and gaining hands-on experience in research methodologies.",
      icon: <FaFlask />,
      color: "#FF6B6B"
    }
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
    <section className="py-16 bg-dark-background section-glow-on-hover relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-batman-yellow/5 rounded-full blur-3xl"></div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-primary-orange text-left"
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
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-xl shadow-lg bg-black border border-primary-orange/30 hover:shadow-batman-yellow/20 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-batman-yellow/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-3 rounded-lg text-white text-xl"
                    style={{ backgroundColor: experience.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {experience.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-orange mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaUniversity className="text-batman-yellow" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="text-right"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 text-batman-yellow font-semibold mb-1">
                    <FaCalendarAlt />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaMapMarkerAlt />
                    <span>{experience.location}</span>
                  </div>
                </motion.div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {experience.description}
              </p>
              
              {/* Current status badge */}
              <motion.div 
                className="inline-block mt-4 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30"
                whileHover={{ scale: 1.05 }}
              >
                Currently Active
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ExperienceSection;
