import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'React Form NPM Package',
      description: 'Dynamic JSON-based form builder with React, TypeScript, Redux, and Styled-components. Enables developers to create complex forms from simple JSON configurations.',
      tech: ['React', 'TypeScript', 'Redux', 'Styled-components'],
      github: 'https://github.com/Sakthivel2611/dynamic-forms-react-npm_package',
      demo: null,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Client-Specific Data Migration System',
      description: 'Robust data migration system built with Node.js and MongoDB. Features parallel processing, REST APIs, and comprehensive error handling for large-scale data transfers.',
      tech: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
      github: 'https://github.com/Sakthivel2611/BACKEND_WORKS',
      demo: null,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Biometric Attendance System (IoT)',
      description: 'Complete IoT solution for attendance tracking using ESP8266, PHP backend, MySQL database, and responsive web dashboard. Real-time data synchronization and reporting.',
      tech: ['ESP8266', 'PHP', 'MySQL', 'Web Dashboard', 'IoT'],
      github: 'https://github.com/Sakthivel2611/Attendance_system_using_IOT_PHP_MySQL',
      demo: null,
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.project-card',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation for project cards
      gsap.to('.project-card', {
        y: -3,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-5 ${
          darkMode ? 'bg-gradient-to-tr from-purple-600 via-blue-600 to-indigo-600' : 'bg-gradient-to-tr from-purple-300 via-blue-300 to-indigo-300'
        }`}></div>
        
        {/* Geometric background patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className={`absolute top-1/4 left-1/6 w-20 h-20 transform rotate-12 opacity-10 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-300'
          } animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/6 w-16 h-16 rounded-full opacity-10 ${
            darkMode ? 'bg-purple-500' : 'bg-purple-300'
          } animate-bounce`} style={{ animationDuration: '4s' }}></div>
          <div className={`absolute top-1/2 left-3/4 w-12 h-12 transform rotate-45 opacity-10 ${
            darkMode ? 'bg-indigo-500' : 'bg-indigo-300'
          } animate-spin`} style={{ animationDuration: '15s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`projects-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
          darkMode 
            ? 'from-white via-blue-200 to-purple-200' 
            : 'from-gray-900 via-blue-800 to-purple-800'
        } bg-clip-text text-transparent`}>
          Featured Projects
        </h2>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 backdrop-blur-sm border ${
                darkMode ? 'bg-gray-900/50 border-gray-700/50' : 'bg-white/70 border-gray-200/50'
              }`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating code icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="relative p-6">
                <h3 className={`text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105 ${
                        darkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50' : 'bg-blue-100/50 text-blue-800 border border-blue-200/50'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                      darkMode 
                        ? 'bg-gray-700/50 text-white hover:bg-gray-600/50 border border-gray-600/50' 
                        : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50 border border-gray-200/50'
                    }`}
                  >
                    <Github size={16} />
                    <span className="text-sm">GitHub</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-bl-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;