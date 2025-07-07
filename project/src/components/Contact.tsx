import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title',
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

      gsap.fromTo('.contact-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating label animation
      const inputs = document.querySelectorAll('.floating-input');
      inputs.forEach(input => {
        const label = input.nextElementSibling;
        
        input.addEventListener('focus', () => {
          gsap.to(label, { y: -25, scale: 0.8, duration: 0.3, ease: 'power2.out' });
        });
        
        input.addEventListener('blur', (e: any) => {
          if (!e.target.value) {
            gsap.to(label, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success animation
    gsap.fromTo(formRef.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 }
    );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'sakthivel.r@example.com',
      link: 'mailto:sakthivel.r@example.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 9876543210',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/sakthivel-r'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sakthivel-r'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-5 ${
          darkMode ? 'bg-gradient-to-bl from-blue-600 via-purple-600 to-pink-600' : 'bg-gradient-to-bl from-blue-300 via-purple-300 to-pink-300'
        }`}></div>
        
        {/* Animated background elements */}
        <div className={`absolute top-10 right-10 w-40 h-40 rounded-full opacity-10 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        } animate-pulse`}></div>
        <div className={`absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-10 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-5 ${
          darkMode ? 'bg-pink-500' : 'bg-pink-300'
        } animate-spin`} style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`contact-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
          darkMode 
            ? 'from-white via-blue-200 to-purple-200' 
            : 'from-gray-900 via-blue-800 to-purple-800'
        } bg-clip-text text-transparent`}>
          Get In Touch
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="contact-content">
            <div className={`backdrop-blur-sm rounded-2xl p-8 border ${
              darkMode ? 'bg-gray-900/50 border-gray-700/50' : 'bg-white/70 border-gray-200/50'
            }`}>
              <h3 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
              
              <p className={`text-lg mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 group-hover:scale-110`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`transition-colors duration-300 hover:text-blue-500 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border ${
                      darkMode 
                        ? 'bg-gray-700/50 text-white hover:bg-blue-600 border-gray-600/50' 
                        : 'bg-gray-100/50 text-gray-700 hover:bg-blue-600 hover:text-white border-gray-200/50'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-content">
            <div className={`backdrop-blur-sm rounded-2xl p-8 border ${
              darkMode ? 'bg-gray-900/50 border-gray-700/50' : 'bg-white/70 border-gray-200/50'
            }`}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`floating-input w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 backdrop-blur-sm ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white' 
                        : 'bg-white/50 border-gray-300/50 text-gray-900'
                    }`}
                  />
                  <label className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none ${
                    formData.name ? 'transform -translate-y-6 scale-75' : ''
                  } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`floating-input w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 backdrop-blur-sm ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white' 
                        : 'bg-white/50 border-gray-300/50 text-gray-900'
                    }`}
                  />
                  <label className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none ${
                    formData.email ? 'transform -translate-y-6 scale-75' : ''
                  } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`floating-input w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none backdrop-blur-sm ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-600/50 text-white' 
                        : 'bg-white/50 border-gray-300/50 text-gray-900'
                    }`}
                  />
                  <label className={`absolute left-4 top-3 transition-all duration-300 pointer-events-none ${
                    formData.message ? 'transform -translate-y-6 scale-75' : ''
                  } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;