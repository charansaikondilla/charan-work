import React, { useRef } from 'react';
import AutomationIcon from './icons/AutomationIcon.tsx';
import BotIcon from './icons/BotIcon.tsx';
import MenuIcon from './icons/MenuIcon.tsx';
import SocialIcon from './icons/SocialIcon.tsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.tsx';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y - height / 2) / (height / 2) * -8;
    const rotateY = (x - width / 2) / (width / 2) * 8;
    
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--glare-x', `${glareX}%`);
    card.style.setProperty('--glare-y', `${glareY}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-slate-800/50 p-8 rounded-xl shadow-lg border border-slate-700/80 transition-transform duration-300 [transform-style:preserve-3d]"
      style={{
        transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0)) scale(1)',
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div 
        className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_farthest-corner_at_var(--glare-x)_var(--glare-y),_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transition: 'opacity 0.2s ease-out' }}
      ></div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative [transform:translateZ(20px)]">
        <div className="mb-4 inline-block p-3 rounded-full bg-slate-900/70 border border-slate-700">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: <AutomationIcon />,
      title: 'AI Automation',
      description: 'Streamline your business processes with custom AI-powered automation solutions.',
    },
    {
      icon: <BotIcon />,
      title: 'WhatsApp & Instagram Chatbots',
      description: 'Engage customers 24/7 with intelligent, automated chatbots on popular messaging platforms.',
    },
    {
      icon: <MenuIcon />,
      title: 'Digital Menu Cards',
      description: 'Modernize your restaurant with interactive, easy-to-update digital menus.',
    },
    {
      icon: <SocialIcon />,
      title: 'Social Media Management',
      description: 'Grow your online presence with strategic content and community management.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div
        ref={ref}
        className={`container mx-auto px-6 scroll-animate ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100">My Offerings</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A suite of services designed to leverage technology for business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;