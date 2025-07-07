import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Code, Database, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.experience-title',
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

      gsap.fromTo('.timeline-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Responsive UI Development',
      description: 'Built responsive user interfaces using HTML, CSS, and React'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Dynamic Form System',
      description: 'Created dynamic form system from JSON configurations'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'E-commerce Backend',
      description: 'Developed backend for e-commerce platform using Node.js and MongoDB'
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className={`experience-title text-4xl md:text-5xl font-bold text-center mb-16 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Experience
        </h2>

        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className={`timeline-line absolute left-8 top-0 bottom-0 w-0.5 origin-top ${
            darkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>

          <div className="timeline-item relative pl-20 pb-12">
            <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
              darkMode ? 'bg-blue-500 border-gray-900' : 'bg-blue-600 border-gray-50'
            }`}></div>

            <div className={`p-6 rounded-xl shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Software Engineer Intern
                </h3>
                <div className={`flex items-center gap-4 text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Nov 2024 – May 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>SKATTECH IT SERVICES</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-2 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {achievement.icon}
                      <h4 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                      </h4>
                    </div>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;