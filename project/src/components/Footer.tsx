import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Sakthivel R. All rights reserved.
          </div>
          
          <div className={`flex items-center gap-2 text-sm mt-4 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;