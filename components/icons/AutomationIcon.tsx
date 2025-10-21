import React from 'react';

const AutomationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <defs>
            <style>
                {`
                    .automation-glow {
                        animation: pulse-glow 3s ease-in-out infinite;
                    }
                    @keyframes pulse-glow {
                        0%, 100% {
                            stroke-opacity: 0.7;
                            filter: drop-shadow(0 0 2px #06b6d4);
                        }
                        50% {
                            stroke-opacity: 1;
                            filter: drop-shadow(0 0 5px #06b6d4);
                        }
                    }
                `}
            </style>
            <filter id="neon-glow-automation">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#neon-glow-automation)">
            <path className="automation-glow" stroke="#06b6d4" d="M10 16l4 -6l-4 -6"></path>
            <path className="automation-glow" stroke="#06b6d4" d="M6 5h-2a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h2"></path>
            <path className="automation-glow" stroke="#06b6d4" d="M18 5h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2"></path>
            
            <path stroke="white" strokeWidth="0.75" d="M10 16l4 -6l-4 -6"></path>
            <path stroke="white" strokeWidth="0.75" d="M6 5h-2a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h2"></path>
            <path stroke="white" strokeWidth="0.75" d="M18 5h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2"></path>
        </g>
    </svg>
);

export default AutomationIcon;