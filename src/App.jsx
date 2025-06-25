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
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      {loading && (
        <div className="fixed inset-0 z-50 bg-dark-background flex items-center justify-center transition-opacity duration-700" style={{ opacity: loading ? 1 : 0 }}>
          <Loader />
        </div>
      )}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.7s' }}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
