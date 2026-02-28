import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaDatabase, FaBrain, FaTools } from 'react-icons/fa';

function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "C"],
      color: "from-primary-orange to-red-500"
    },
    {
      title: "Frontend Development",
      icon: <FaPalette />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Bootstrap"],
      color: "from-secondary-orange to-primary-orange"
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "REST API", "FastAPI"],
      color: "from-accent-orange to-secondary-orange"
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      color: "from-primary-orange to-red-500"
    },
    {
      title: "Machine Learning & AI",
      icon: <FaBrain />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "NumPy", "Pandas", "OpenCV", "YOLO"],
      color: "from-secondary-orange to-primary-orange"
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"],
      color: "from-accent-orange to-secondary-orange"
    }
  ];

  return (
    <section className="py-20 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-16 bg-orange-gradient bg-clip-text text-transparent"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-xl p-6 hover:border-primary-orange/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.icon}
              </div>
              <h3 className={`text-lg font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.03 }}
                  className="px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 text-base hover:border-primary-orange/50 hover:text-white transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
