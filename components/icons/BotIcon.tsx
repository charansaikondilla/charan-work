import React from 'react';

const BotIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <defs>
             <style>
                {`
                    #bot-eye {
                        animation: blink 4s infinite;
                        transform-origin: center;
                    }
                    @keyframes blink {
                        0%, 90%, 100% {
                            transform: scaleY(1);
                        }
                        95% {
                            transform: scaleY(0.1);
                        }
                    }
                `}
            </style>
            <filter id="neon-glow-bot">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#neon-glow-bot)">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path id="bot-eye" d="M8 9h8" stroke="#d946ef"></path>
            <path d="M8 13h6" stroke="#d946ef"></path>
            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" stroke="#d946ef"></path>

            <path id="bot-eye" stroke="white" strokeWidth="0.75" d="M8 9h8"></path>
            <path stroke="white" strokeWidth="0.75" d="M8 13h6"></path>
            <path stroke="white" strokeWidth="0.75" d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
        </g>
    </svg>
);

export default BotIcon;