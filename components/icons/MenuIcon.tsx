import React from 'react';

const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <defs>
            <filter id="neon-glow-menu">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#neon-glow-menu)">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <g className="transition-transform duration-300 group-hover:scale-105">
                <path d="M5 19l14 0" stroke="#06b6d4"></path>
                <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2" stroke="#06b6d4"></path>
                <path d="M12 4v11" stroke="#06b6d4"></path>
                <path d="M9 4h6" stroke="#06b6d4"></path>
                <path className="transition-transform duration-300 origin-bottom-right group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" d="M12 15l-3.3 -3.3" stroke="#06b6d4"></path>
                <path className="transition-transform duration-300 origin-bottom-left group-hover:translate-x-0.5 group-hover:-translate-y-0.5" d="M12 15l3.3 -3.3" stroke="#06b6d4"></path>
                
                <path d="M5 19l14 0" stroke="white" strokeWidth="0.75"></path>
                <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2" stroke="white" strokeWidth="0.75"></path>
                <path d="M12 4v11" stroke="white" strokeWidth="0.75"></path>
                <path d="M9 4h6" stroke="white" strokeWidth="0.75"></path>
                <path className="transition-transform duration-300 origin-bottom-right group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" d="M12 15l-3.3 -3.3" stroke="white" strokeWidth="0.75"></path>
                <path className="transition-transform duration-300 origin-bottom-left group-hover:translate-x-0.5 group-hover:-translate-y-0.5" d="M12 15l3.3 -3.3" stroke="white" strokeWidth="0.75"></path>
            </g>
        </g>
    </svg>
);

export default MenuIcon;