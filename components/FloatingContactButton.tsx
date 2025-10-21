import React, { useState, useEffect } from 'react';
import ChatIcon from './icons/ChatIcon';

const FloatingContactButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.getElementById('home');
      const contactSection = document.getElementById('contact');

      if (heroSection && contactSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const contactRect = contactSection.getBoundingClientRect();
        
        const shouldBeVisible = heroRect.bottom < 100 && contactRect.top > 200;
        setIsVisible(shouldBeVisible);
      } else {
         setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <a
          href="#contact"
          onClick={handleContactClick}
          className="group flex items-center justify-center gap-3 h-14 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold rounded-full shadow-2xl shadow-cyan-500/30 hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-300/50 cursor-pointer"
          aria-label="Contact Me"
          style={{
            animation: 'pulse-glow 2s infinite ease-in-out'
          }}
        >
            <div className="pl-4 transition-all duration-300">
              <ChatIcon />
            </div>
            <span className="pr-5 w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:w-28">Contact Me</span>
        </a>
      </div>
    </>
  );
};

export default FloatingContactButton;