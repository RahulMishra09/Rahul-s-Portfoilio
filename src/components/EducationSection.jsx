import React from 'react';

function EducationSection() {
  return (
    <section className="py-8 bg-dark-background section-glow-on-hover">
      <h2 className="text-3xl font-bold mb-6 text-primary-orange">Education</h2>
      <div className="p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white">
          B.Tech CSE (Hons.) - IoT & Intelligent Systems
        </h3>
        <p className="text-gray-300">Manipal University Jaipur | <span className="text-primary-orange">2022 - 2026</span></p>
        <ul className="mt-3 text-gray-300 list-disc pl-6">
          <li>Data Structures & Algorithms</li>
          <li>Object-Oriented Programming</li>
          <li>Database Management Systems</li>
          <li>Computer Network</li>
          <li>Operating Systems</li>
          <li>Machine Learning</li>
        </ul>
      </div>
    </section>
  );
}

export default EducationSection;
