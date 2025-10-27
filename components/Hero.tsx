import React from 'react';

const Hero: React.FC = () => {

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[75vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2')" }}></div>
      <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
          Empowering Startups to Thrive in the Digital World
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Tak&Mak Corp provides expert digital enablement services to guide early-stage startups from concept to market leadership. We build your presence, strategy, and success.
        </p>
        <a 
          href="#services" 
          onClick={handleScrollToServices}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
