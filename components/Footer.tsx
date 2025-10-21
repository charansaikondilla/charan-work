import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-800/50">
      <div className="container mx-auto px-6 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Charan Sai Kondilla. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;