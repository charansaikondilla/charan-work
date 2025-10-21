import React, { useState } from 'react';
import ProjectCard from './ProjectCard.tsx';
import ProjectFilters from './ProjectFilters.tsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.tsx';

const projectsData = [
    {
        id: 1,
        title: 'Modern AI Community',
        longDescription: 'A full-stack MERN application designed to foster collaboration and knowledge sharing within the AI community. Features include user authentication, profile management, discussion forums, and resource sharing capabilities.',
        category: 'Full Web App',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TailwindCSS'],
        coreFeatures: ['Secure User Authentication', 'Community Forums', 'Resource Upload & Sharing', 'Responsive Design'],
        liveUrl: 'https://modern-ai-community.onrender.com/',
        githubUrl: 'https://github.com/charansaikondilla/Modern-Ai-Community'
    },
    {
        id: 2,
        title: 'Adaptiq Smart Learn Flow',
        longDescription: 'An interactive online learning platform featuring distinct, role-based dashboards for students and teachers. The system facilitates course management, assignment tracking, and real-time progress monitoring.',
        category: 'Full Web App',
        techStack: ['React', 'Firebase', 'Redux', 'Material-UI', 'Node.js'],
        coreFeatures: ['Role-based Dashboards', 'Course & Content Management', 'Student Progress Tracking', 'Interactive Quizzes'],
        liveUrl: null,
        githubUrl: 'https://github.com/charansaikondilla/adaptiq-smart-learn-flow-25'
    },
    {
        id: 3,
        title: 'Children\'s Alphabet Game',
        longDescription: 'An engaging and auditory learning game developed with vanilla JavaScript to help young children master spelling. The application uses text-to-speech synthesis to provide audio feedback, making learning fun and interactive.',
        category: 'AI Game',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API'],
        coreFeatures: ['Interactive Gameplay', 'Text-to-Speech Audio', 'Visual Learning Aids', 'Progressive Difficulty'],
        liveUrl: 'https://charansaikondilla.github.io/ChildrenGame2/',
        githubUrl: 'https://github.com/charansaikondilla/ChildrenGame2'
    },
    {
        id: 4,
        title: 'Sure Attendance App',
        longDescription: 'An AI-powered attendance tracking tool developed for an NGO. It simplifies record-keeping by using fuzzy search algorithms for name matching and integrates directly with Google Sheets for seamless data management.',
        category: 'AI Automation',
        techStack: ['React', 'Python', 'Flask', 'Google Sheets API', 'FuzzyWuzzy'],
        coreFeatures: ['AI-Powered Fuzzy Search', 'Google Sheets Integration', 'Real-time Data Sync', 'User-friendly Interface'],
        liveUrl: 'https://sure-attendance-app.vercel.app',
        githubUrl: 'https://github.com/charansaikondilla/Sure-Attendance-app'
    },
    {
        id: 5,
        title: 'Xoxo Hostel WhatsApp Chatbot',
        longDescription: 'An intelligent AI chatbot designed for a restaurant business, operating on WhatsApp. It automates table bookings, answers frequently asked questions, and streamlines overall customer interaction to enhance service efficiency.',
        category: 'AI Chatbot',
        techStack: ['Node.js', 'Dialogflow', 'WhatsApp Business API', 'MongoDB'],
        coreFeatures: ['24/7 Automated Bookings', 'Natural Language Processing', 'FAQ Handling', 'Menu Browsing'],
        liveUrl: null,
        githubUrl: 'https://github.com/charansaikondilla/xoxoHostel'
    },
    {
        id: 6,
        title: 'Aiplay Gaming Platform',
        longDescription: 'A 100% AI-powered educational platform that leverages gamification to create personalized and adaptive learning journeys. The system dynamically adjusts content difficulty based on user performance.',
        category: 'AI Game',
        techStack: ['React', 'Next.js', 'Python', 'TensorFlow', 'Firebase'],
        coreFeatures: ['Personalized Learning Paths', 'Gamified Educational Content', 'Performance Analytics', 'Adaptive Difficulty'],
        liveUrl: 'https://charansaikondilla.github.io/Aiplay/',
        githubUrl: 'https://github.com/charansaikondilla/Aiplay'
    },
    {
        id: 7,
        title: 'AI Portfolio for Company',
        longDescription: 'A professional, reusable portfolio website template designed specifically for AI-focused companies and startups. It provides a modern and sleek layout to showcase services, projects, and team expertise effectively.',
        category: 'Full Web App',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'Astro'],
        coreFeatures: ['Reusable Template', 'Responsive Design', 'SEO Optimized', 'Component-based Architecture'],
        liveUrl: 'https://ai.studio/apps/drive/1Ua13kc8waZSoZJTgDNCckMjN12aWuOZ1',
        githubUrl: null,
    },
    {
        id: 8,
        title: 'Synergize AI Company Site',
        longDescription: 'A sleek and modern corporate website built for Synergize AI. The site effectively showcases their brand identity, service offerings, and market position through a clean and professional design.',
        category: 'Full Web App',
        techStack: ['React', 'Gatsby.js', 'GraphQL', 'Styled Components', 'Contentful CMS'],
        coreFeatures: ['Headless CMS Integration', 'Static Site Generation (SSG)', 'Optimized for Performance', 'Brand-centric Design'],
        liveUrl: 'https://ai.studio/apps/drive/1Yhvf2Gnk8uUWxuVCsG7othWdhjHDHUD3',
        githubUrl: null,
    }
];

const categories = ['All', 'Full Web App', 'AI Automation', 'AI Chatbot', 'AI Game'];


const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900/70">
      <div
        ref={ref}
        className={`container mx-auto px-6 scroll-animate ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-400">A showcase of my work in different domains.</p>
        </div>
        
        <ProjectFilters 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12 items-start">
            {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;