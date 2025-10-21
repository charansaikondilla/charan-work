import React from 'react';

const SocialIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <defs>
            <filter id="neon-glow-social">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#neon-glow-social)">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" stroke="#d946ef"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" stroke="#d946ef"></path>
            <g className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M16 22l5 -5" stroke="#d946ef"></path>
                <path d="M21 21.5v-4.5h-4.5" stroke="#d946ef"></path>
            </g>
            
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" stroke="white" strokeWidth="0.75"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" stroke="white" strokeWidth="0.75"></path>
            <g className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M16 22l5 -5" stroke="white" strokeWidth="0.75"></path>
                <path d="M21 21.5v-4.5h-4.5" stroke="white" strokeWidth="0.75"></path>
            </g>
        </g>
    </svg>
);

export default SocialIcon;