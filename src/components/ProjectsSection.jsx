import React from 'react';

    function ProjectsSection() {
      const projects = [
        { title: 'Online Conference System', description: 'An Online Conference System enables virtual meetings and events.', link: 'https://github.com/RahulMishra09/Online_Conference_System' },
        { title: 'Zerodha Clone', description: 'A Zerodha Clone is a stock trading platform with Zerodha-like features', link: 'https://github.com/RahulMishra09/Zerodha_clone' },
        { title: 'Fire Detection', description: 'Fire Detection identifies fire or smoke for early warning and safety.', link: 'https://github.com/RahulMishra09/Fire_Detection_System?tab=readme-ov-file' },
        { title: 'Student Management System', description: 'A Student Management System manages student data and administration.', link: 'https://github.com/RahulMishra09/Student_Management_System' },
      ];

      return (
        <section className="py-8 section-glow-on-hover">
           <h2 className="text-3xl font-bold mb-4 text-primary-orange">Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <a href={project.link} className="text-batman-yellow hover:text-primary-orange hover-underline">View Project</a>
              </div>
            ))}
          </div>
        </section>
      );
    }

    export default ProjectsSection;
