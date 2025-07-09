import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Shield,
  Trophy,
  Medal,
  BookOpen,
  Code,
  Database,
  Globe
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CertificatesProps {
  darkMode: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'December 2024',
      description: 'Advanced React concepts including hooks, context, performance optimization, and modern development patterns.',
      icon: <Code className="w-8 h-8" />,
      color: 'blue',
      credentialId: 'META-REACT-2024-001',
      skills: ['React', 'JavaScript', 'JSX', 'Hooks'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Node.js Backend Development',
      issuer: 'MongoDB University',
      date: 'November 2024',
      description: 'Comprehensive backend development with Node.js, Express.js, and MongoDB database integration.',
      icon: <Database className="w-8 h-8" />,
      color: 'green',
      credentialId: 'MONGO-NODE-2024-002',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: 'October 2024',
      description: 'Complete full-stack development certification covering frontend, backend, and database technologies.',
      icon: <Globe className="w-8 h-8" />,
      color: 'purple',
      credentialId: 'FCC-FULLSTACK-2024-003',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'TypeScript Advanced Concepts',
      issuer: 'Microsoft Learn',
      date: 'September 2024',
      description: 'Advanced TypeScript programming including generics, decorators, and enterprise-level application development.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'orange',
      credentialId: 'MS-TS-2024-004',
      skills: ['TypeScript', 'Generics', 'Decorators', 'OOP'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'August 2024',
      description: 'Foundational understanding of AWS cloud services, architecture, and best practices for cloud deployment.',
      icon: <Shield className="w-8 h-8" />,
      color: 'indigo',
      credentialId: 'AWS-CP-2024-005',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Git & GitHub Mastery',
      issuer: 'GitHub Education',
      date: 'July 2024',
      description: 'Advanced version control, collaboration workflows, and DevOps practices using Git and GitHub.',
      icon: <Trophy className="w-8 h-8" />,
      color: 'pink',
      credentialId: 'GH-MASTER-2024-006',
      skills: ['Git', 'GitHub', 'DevOps', 'CI/CD'],
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Animation on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.certificates-title',
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

      gsap.fromTo('.carousel-container',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play functionality (always enabled, 5 seconds delay)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [certificates.length]);

  // Smooth slide transition
  useEffect(() => {
  if (carouselRef.current) {
    gsap.to(carouselRef.current, {
      x: `-${currentSlide * (carouselRef.current.offsetWidth / certificates.length)}px`,
      duration: 0.8,
      ease: 'power2.out'
    });
  }
}, [currentSlide, certificates.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: darkMode ? 'from-blue-600 to-blue-800' : 'from-blue-400 to-blue-600',
      green: darkMode ? 'from-green-600 to-green-800' : 'from-green-400 to-green-600',
      purple: darkMode ? 'from-purple-600 to-purple-800' : 'from-purple-400 to-purple-600',
      orange: darkMode ? 'from-orange-600 to-orange-800' : 'from-orange-400 to-orange-600',
      indigo: darkMode ? 'from-indigo-600 to-indigo-800' : 'from-indigo-400 to-indigo-600',
      pink: darkMode ? 'from-pink-600 to-pink-800' : 'from-pink-400 to-pink-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      id="certificates" 
      ref={sectionRef}
      className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-5 ${
          darkMode ? 'bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600' : 'bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300'
        }`}></div>
        
        {/* Floating achievement icons */}
        <div className={`absolute top-20 left-20 opacity-10 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} animate-pulse`}>
          <Award className="w-16 h-16" />
        </div>
        <div className={`absolute bottom-20 right-20 opacity-10 ${darkMode ? 'text-orange-400' : 'text-orange-500'} animate-pulse`} style={{ animationDelay: '1s' }}>
          <Trophy className="w-12 h-12" />
        </div>
        <div className={`absolute top-1/2 right-1/4 opacity-10 ${darkMode ? 'text-purple-400' : 'text-purple-500'} animate-pulse`} style={{ animationDelay: '2s' }}>
          <Medal className="w-10 h-10" />
        </div>
        <div className={`absolute bottom-1/3 left-1/4 opacity-10 ${darkMode ? 'text-blue-400' : 'text-blue-500'} animate-pulse`} style={{ animationDelay: '3s' }}>
          <Star className="w-14 h-14" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`certificates-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
          darkMode 
            ? 'from-yellow-400 via-orange-400 to-red-400' 
            : 'from-yellow-600 via-orange-600 to-red-600'
        } bg-clip-text text-transparent`}>
          Certificates & Achievements
        </h2>

        <div className="carousel-container max-w-6xl mx-auto">
          {/* Carousel Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {currentSlide + 1} of {certificates.length}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-800 ease-out"
              style={{ width: `${certificates.length * 100}%` }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className=" flex-shrink-0 px-4"
                  // style={{ width: '100%' }}
                  style={{ width: `${100 / certificates.length}%` }}
                >
                  <div className={`relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm border ${
                    darkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/70 border-gray-200/50'
                  }`}>
                    {/* Certificate Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Certificate Icon */}
                      <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${getColorClasses(cert.color)} shadow-lg`}>
                        <div className="text-white">
                          {cert.icon}
                        </div>
                      </div>

                      {/* Credential Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(cert.color)}`}>
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                          Verified
                        </span>
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold mb-2 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {cert.title}
                          </h3>
                          <p className={`text-lg font-semibold ${
                            darkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {cert.issuer}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                            {cert.date}
                          </span>
                        </div>
                      </div>

                      <p className={`text-base mb-6 leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className={`text-sm font-semibold mb-3 ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          Skills Covered:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className={`px-3 py-1 text-xs rounded-full ${
                                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Credential ID */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                            Credential ID:
                          </span>
                          <p className={`text-sm font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {cert.credentialId}
                          </p>
                        </div>
                        <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                          darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}>
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Verify</span>
                        </button>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${getColorClasses(cert.color)} opacity-20 rounded-br-2xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 scale-125'
                    : darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className={`mt-6 h-1 rounded-full overflow-hidden ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300 ease-out"
              style={{ width: `${((currentSlide + 1) / certificates.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;