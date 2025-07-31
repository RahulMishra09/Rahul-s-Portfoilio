import React from 'react';
import { motion } from 'framer-motion';

function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "C", "TypeScript", "JavaScript"],
      color: "from-primary-orange to-red-500"
    },
    {
      title: "Web Development", 
      skills: ["React.js", "Next.js", "Node.js", "Express.js"],
      color: "from-secondary-orange to-primary-orange"
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "Sass", "Tailwind CSS", "Material UI", "Bootstrap"],
      color: "from-accent-orange to-secondary-orange"
    },
    {
      title: "Backend & Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
      color: "from-primary-orange to-accent-orange"
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"],
      color: "from-secondary-orange to-accent-orange"
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-8 shadow-glow-orange/20 hover:shadow-glow-orange-lg/30 transition-all duration-500"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
            >
              {category.title}
            </motion.h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-glass-white to-transparent rounded-full text-white border border-primary-orange/30 hover:border-secondary-orange/60 transition-all duration-300 backdrop-blur-sm text-sm font-medium"
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
