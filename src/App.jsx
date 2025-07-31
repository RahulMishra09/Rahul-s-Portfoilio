import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds for loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="font-sans bg-hero-gradient min-h-screen">
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
    </div>
  );
}

export default App;
