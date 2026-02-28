import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectsSection() {
  const projects = [
    { 
      title: 'Online Conference System', 
      description: 'An Online Conference System enables virtual meetings and events.',
      link: 'https://github.com/RahulMishra09/Online_Conference_System',
      tech: ['React', 'Node.js', 'WebRTC']
    },
    { 
      title: 'Zerodha Clone', 
      description: 'A Zerodha Clone is a stock trading platform with Zerodha-like features',
      link: 'https://github.com/RahulMishra09/Zerodha_clone',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    { 
      title: 'Fire Detection', 
      description: 'Fire Detection identifies fire or smoke for early warning and safety.',
      link: 'https://github.com/RahulMishra09/Fire_Detection_System?tab=readme-ov-file',
      tech: ['Python', 'Yolo V8', 'Pytouch']
    },
    { 
      title: 'Student Management System', 
      description: 'A Student Management System manages student data and administration.',
      link: 'https://github.com/RahulMishra09/Student_Management_System',
      tech: ['Python', 'Tkinter', 'MySQL']
    },
  ];

  return (
    <section className="py-20 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-16 bg-orange-gradient bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateX: 5,
              rotateY: 5
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-8 shadow-glow-orange/20 hover:shadow-glow-orange-xl transition-all duration-500 group"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold bg-orange-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-orange transition-all duration-300 p-2 rounded-lg hover:bg-glass-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={22} />
                </motion.a>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary-orange transition-all duration-300 p-2 rounded-lg hover:bg-glass-white"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt size={20} />
                </motion.a>
              </div>
            </div>
            <p className="text-gray-200 mb-6 text-lg leading-relaxed font-light">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 rounded-full text-sm text-white border border-primary-orange/40 hover:border-secondary-orange/60 transition-all duration-300 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
