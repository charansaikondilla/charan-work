import React from 'react';

const WhatsappIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
         <defs>
            <filter id="neon-glow-whatsapp">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#neon-glow-whatsapp)">
            <path stroke="#25D366" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.3-1.38c1.37.71 2.93 1.12 4.59 1.12h.11c5.46 0 9.91-4.45 9.91-9.91S17.61 2 12.04 2z" />
            <path stroke="white" strokeWidth="0.75" d="M16.58 14.12c-.25.43-.89.79-1.24.84-.29.04-1.03.1-2.95-.65-2.22-.88-3.66-2.9-3.79-3.08-.13-.17-.94-1.24-.94-2.32 0-1.08.6-1.61.82-1.83.22-.22.48-.27.64-.27.15 0 .31 0 .44.01.18 0 .41.01.62.33.24.36.88 2.13 1 2.29.08.16.18.36.04.54-.14.18-.22.28-.43.51-.21.22-.42.43-.58.58-.16.16-.34.34-.14.68.21.34.94 1.38 2.03 2.31.85.73 1.76 1.18 2.01 1.31.25.13.4.11.55-.07.15-.18.64-.75.82-.99s.36-.22.6-.13c.24.09 1.54.73 1.8 0.86.28.13.46.21.52.31.06.1.04.58-.21 1.01z" />
        </g>
    </svg>
);

export default WhatsappIcon;