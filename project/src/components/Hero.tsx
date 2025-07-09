import React, { useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(socialsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
      '-=0.2'
    );

    // Floating animation for the hero section
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    // Animate background particles
    gsap.to('.particle', {
      y: -20,
      duration: 4,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    gsap.to('.particle', {
      x: 10,
      duration: 6,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sakthivel_R_resume.pdf';
    link.download = 'Sakthivel_R_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className={`particle absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        } animate-pulse`}></div>
        <div className={`particle absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-20 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`particle absolute top-1/2 left-1/6 w-32 h-32 rounded-full opacity-15 ${
          darkMode ? 'bg-indigo-500' : 'bg-indigo-300'
        } animate-pulse`} style={{ animationDelay: '2s' }}></div>
        <div className={`particle absolute bottom-1/3 left-3/4 w-40 h-40 rounded-full opacity-15 ${
          darkMode ? 'bg-pink-500' : 'bg-pink-300'
        } animate-pulse`} style={{ animationDelay: '3s' }}></div>
        
        {/* Geometric shapes */}
        <div className={`absolute top-20 right-20 w-20 h-20 transform rotate-45 opacity-10 ${
          darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
        } animate-spin`} style={{ animationDuration: '20s' }}></div>
        <div className={`absolute bottom-20 left-20 w-16 h-16 rounded-full opacity-10 ${
          darkMode ? 'bg-green-400' : 'bg-green-500'
        } animate-bounce`} style={{ animationDuration: '3s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div ref={heroRef} className="container mx-auto px-6 text-center relative z-10 ">
        <h1 
          ref={titleRef}
          className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
            darkMode 
              ? 'from-white via-blue-200 to-purple-200' 
              : 'from-gray-900 via-blue-800 to-purple-800'
          } bg-clip-text text-transparent`}
        >
          Sakthivel R
        </h1>
        
        <p 
          ref={subtitleRef}
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Full Stack Developer | React & Node.js Enthusiast
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleDownloadResume}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
          </button>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border-2 backdrop-blur-sm ${
              darkMode 
                ? 'border-white/30 text-white hover:bg-white/10 hover:border-white/50' 
                : 'border-gray-900/30 text-gray-900 hover:bg-gray-900/10 hover:border-gray-900/50'
            }`}
          >
            Get In Touch
          </button>
        </div>

        <div ref={socialsRef} className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/sakthivel-ramesh-a03b2229b/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm ${
              darkMode ? 'bg-white/10 text-white hover:bg-blue-600' : 'bg-black/10 text-gray-700 hover:bg-blue-600 hover:text-white'
            }`}
          >
            <Linkedin size={24} />
          </a>
          
          <a
            href="https://github.com/Sakthivel2611"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm ${
              darkMode ? 'bg-white/10 text-white hover:bg-gray-600' : 'bg-black/10 text-gray-700 hover:bg-gray-900 hover:text-white'
            }`}
          >
            <Github size={24} />
          </a>
          
          <a
            href="mailto:sakthivelramesh65@gmail.com"
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm ${
              darkMode ? 'bg-white/10 text-white hover:bg-red-600' : 'bg-black/10 text-gray-700 hover:bg-red-600 hover:text-white'
            }`}
          >
            <Mail size={24} />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;