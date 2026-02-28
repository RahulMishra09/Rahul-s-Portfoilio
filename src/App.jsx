import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for loading bar to reach 100% (8 seconds) + brief hold (0.5s) = 8.5 seconds total
    const timer = setTimeout(() => setLoading(false), 8500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans min-h-screen relative"
    >
      <AnimatedBackground />
      <ParticleBackground />
      <Header />
      <main className="container mx-auto px-4 py-8 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary-orange/5 via-transparent to-secondary-orange/5 pointer-events-none"></div>
        <div className="relative z-10">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;
