import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Monitor, 
  Server, 
  Settings, 
  Code2,
  Palette,
  Globe,
  Database,
  GitBranch,
  Smartphone,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React', icon: <Layers className="w-5 h-5" /> },
        { name: 'HTML5', icon: <Globe className="w-5 h-5" /> },
        { name: 'CSS3', icon: <Palette className="w-5 h-5" /> },
        { name: 'Bootstrap', icon: <Smartphone className="w-5 h-5" /> }
      ], 
      color: 'blue',
      mainIcon: <Monitor className="w-8 h-8" />
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
        { name: 'Express.js', icon: <Terminal className="w-5 h-5" /> },
        { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
        { name: 'MySQL', icon: <Database className="w-5 h-5" /> }
      ], 
      color: 'green',
      mainIcon: <Server className="w-8 h-8" />
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'GitHub', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'REST APIs', icon: <Globe className="w-5 h-5" /> }
      ], 
      color: 'purple',
      mainIcon: <Settings className="w-8 h-8" />
    },
    { 
      category: 'Languages', 
      items: [
        { name: 'JavaScript', icon: <Code2 className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <Code2 className="w-5 h-5" /> },
        { name: 'C++', icon: <Cpu className="w-5 h-5" /> },
        { name: 'Java', icon: <Code2 className="w-5 h-5" /> }
      ], 
      color: 'orange',
      mainIcon: <Code2 className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
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

      gsap.fromTo('.skill-card',
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating animation for skill cards
      gsap.to('.skill-card', {
        y: -5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: darkMode ? 'from-blue-600 to-blue-800' : 'from-blue-400 to-blue-600',
      green: darkMode ? 'from-green-600 to-green-800' : 'from-green-400 to-green-600',
      purple: darkMode ? 'from-purple-600 to-purple-800' : 'from-purple-400 to-purple-600',
      orange: darkMode ? 'from-orange-600 to-orange-800' : 'from-orange-400 to-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: 'border-blue-500/20',
      green: 'border-green-500/20',
      purple: 'border-purple-500/20',
      orange: 'border-orange-500/20'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full opacity-5 ${
          darkMode ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600' : 'bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300'
        }`}></div>
        
        {/* Animated background shapes */}
        <div className={`absolute top-20 right-20 w-32 h-32 rounded-full opacity-10 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        } animate-pulse`}></div>
        <div className={`absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-10 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 right-1/4 w-16 h-16 transform rotate-45 opacity-10 ${
          darkMode ? 'bg-green-500' : 'bg-green-300'
        } animate-spin`} style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="about-content max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${
            darkMode 
              ? 'from-white via-blue-200 to-purple-200' 
              : 'from-gray-900 via-blue-800 to-purple-800'
          } bg-clip-text text-transparent`}>
            About Me
          </h2>
          
          <div className={`text-lg leading-relaxed mb-16 text-center backdrop-blur-sm rounded-2xl p-8 border ${
            darkMode 
              ? 'text-gray-300 bg-white/5 border-white/10' 
              : 'text-gray-600 bg-white/50 border-gray-200/50'
          }`}>
            <p className="mb-6">
              To obtain a challenging position as a Software Developer where I can utilize my skills in React, Node.js, TypeScript, and modern web technologies to contribute to innovative projects.
            </p>
            <p>
              I'm passionate about creating efficient, scalable solutions and staying up-to-date with the latest technologies in web development.
            </p>
          </div>

          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`skill-card group relative p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 backdrop-blur-sm border ${
                  darkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/70 border-gray-200/50'
                } ${getBorderColor(skillGroup.color)}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${getColorClasses(skillGroup.color)}`}></div>
                
                <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-r ${getColorClasses(skillGroup.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skillGroup.mainIcon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        darkMode ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50'
                      }`}
                    >
                      <div className={`text-${skillGroup.color}-500`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${getColorClasses(skillGroup.color)} opacity-20 rounded-bl-2xl rounded-tr-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;