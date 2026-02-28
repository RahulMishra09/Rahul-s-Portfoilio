import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaProjectDiagram, FaTrophy } from 'react-icons/fa';

function StatsSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    commits: 0,
    problems: 0,
    achievements: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const finalValues = {
    projects: 15,
    commits: 500,
    problems: 250,
    achievements: 10
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(finalValues.projects * progress),
        commits: Math.floor(finalValues.commits * progress),
        problems: Math.floor(finalValues.problems * progress),
        achievements: Math.floor(finalValues.achievements * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, interval);
  };

  const stats = [
    {
      icon: <FaProjectDiagram size={40} />,
      value: counters.projects,
      label: 'Projects Completed',
      color: 'from-primary-orange to-red-500',
      suffix: '+'
    },
    {
      icon: <FaGithub size={40} />,
      value: counters.commits,
      label: 'GitHub Commits',
      color: 'from-secondary-orange to-primary-orange',
      suffix: '+'
    },
    {
      icon: <FaCode size={40} />,
      value: counters.problems,
      label: 'Problems Solved',
      color: 'from-accent-orange to-secondary-orange',
      suffix: '+'
    },
    {
      icon: <FaTrophy size={40} />,
      value: counters.achievements,
      label: 'Achievements',
      color: 'from-primary-orange to-accent-orange',
      suffix: '+'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold mb-16 bg-orange-gradient bg-clip-text text-transparent text-center"
      >
        Achievements & Stats
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-card-gradient backdrop-blur-sm border border-glass-white rounded-2xl p-8 shadow-glow-orange/20 hover:shadow-glow-orange-lg/30 transition-all duration-500 text-center group"
          >
            <motion.div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-white">
                {stat.icon}
              </div>
            </motion.div>

            <motion.div
              className="text-5xl font-extrabold bg-orange-gradient bg-clip-text text-transparent mb-3"
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {stat.value}{stat.suffix}
            </motion.div>

            <p className="text-gray-300 text-lg font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
