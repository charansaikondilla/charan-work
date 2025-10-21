import React, { useState, useEffect } from 'react';
import ArrowUpIcon from './icons/ArrowUpIcon.tsx';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 right-8 z-40 h-12 w-12 flex items-center justify-center bg-slate-700/60 text-slate-300 rounded-full shadow-lg backdrop-blur-sm border border-slate-600/80 hover:bg-slate-600/80 hover:text-white hover:border-cyan-500/50 transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400/70 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      aria-label="Go to top"
    >
      <ArrowUpIcon />
    </button>
  );
};

export default BackToTopButton;
