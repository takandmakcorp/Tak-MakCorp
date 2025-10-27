
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Tak&Mak Corp. All Rights Reserved.</p>
        <p className="text-sm mt-2">Your Partner in Digital Enablement</p>
      </div>
    </footer>
  );
};

export default Footer;
