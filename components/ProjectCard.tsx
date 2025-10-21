import React, { useRef } from 'react';
import ExternalLinkIcon from './icons/ExternalLinkIcon.tsx';
import GithubIcon from './icons/GithubIcon.tsx';
import CheckIcon from './icons/CheckIcon.tsx';

interface Project {
    id: number;
    title: string;
    longDescription: string;
    category: string;
    techStack: string[];
    coreFeatures: string[];
    liveUrl?: string | null;
    githubUrl?: string | null;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y - height / 2) / (height / 2) * -4;
    const rotateY = (x - width / 2) / (width / 2) * 4;
    
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
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
      className="group relative bg-slate-800/50 rounded-xl shadow-2xl shadow-black/40 border border-slate-700/80 transition-transform duration-300 [transform-style:preserve-3d] flex flex-col h-full"
      style={{
        transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))',
        transition: 'transform 0.1s ease-out',
      }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        <div className="p-6 flex flex-col flex-grow [transform:translateZ(20px)]">
            <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
            <p className="text-fuchsia-400 text-xs font-semibold mt-1 mb-4">{project.category}</p>
            
            <p className="text-slate-400 text-sm flex-grow mb-5">{project.longDescription}</p>

            <div className="mb-5">
                <h4 className="text-sm font-semibold text-slate-300 mb-2 border-b border-slate-700 pb-1">Core Features</h4>
                <ul className="space-y-1.5 mt-2">
                    {project.coreFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-400">
                            <CheckIcon className="w-3 h-3 mr-2 mt-0.5 text-cyan-400 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-300 mb-2 border-b border-slate-700 pb-1">Technology Stack</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="bg-slate-700/60 text-cyan-300 text-xs font-mono px-2 py-1 rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center flex-wrap gap-4 mt-auto pt-4 border-t border-slate-700/50">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-600 py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
                    >
                        Live Demo
                        <ExternalLinkIcon />
                    </a>
                )}
                {project.githubUrl && (
                     <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-slate-300 bg-slate-700/50 hover:bg-slate-700 py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
                    >
                        GitHub
                        <GithubIcon />
                    </a>
                )}
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;