import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on click
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#clients', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ];

  const linkClasses = "px-4 py-2 text-slate-600 hover:text-orange-500 transition-colors duration-300 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-orange-400">
          {/* 
            HOW TO CHANGE THE LOGO:
            1. Upload your logo image to a hosting service (like Imgur, or your own server).
            2. Replace the `src` URL below with the direct URL to your logo image.
            3. Adjust the `h-10` class (e.g., h-8, h-12) to resize your logo if needed.
          */}
          <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQGvQQeJJHRtZg/company-logo_200_200/B56ZoGzXy.KoAI-/0/1761050722640/tak_and_mak_corporation_logo?e=1762992000&v=beta&t=lQAu-fjXatpwziSc-9ZqZyaTWnJWeeiToSBNKirencM" 
            alt="Tak&Mak Corp. Logo" 
            className="h-10 w-auto" 
          />
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClasses}>{link.label}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="py-2 text-slate-600 hover:text-orange-500 transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;