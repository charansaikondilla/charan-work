import React, { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// IMPORTANT: Replace this with your actual Calendly link!
const calendlyUrl = "https://calendly.com/your-username";

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] max-h-[700px] overflow-hidden relative border border-slate-700/80 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-800">
            <h2 className="text-lg font-semibold text-slate-100">Schedule a Consultation</h2>
            <button 
                onClick={onClose} 
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-full"
                aria-label="Close booking modal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div className="flex-grow">
             <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
            ></iframe>
        </div>
         <div className="text-center p-2 border-t border-slate-800">
            <p className="text-xs text-slate-500">
                Powered by Calendly. <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Open in new tab</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;