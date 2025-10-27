import React, { useState } from 'react';

const clients = [
  {
    name: 'Fifth Gear Automotives',
    logoUrl: 'https://smartuploads.quarkly.io/68971b6d2d10660018b7fa21/images/Screenshot%202025-08-09%20at%2012.21.12.png?v=2025-08-09T11%3A23%3A07.679Z&quality=85&w=3200',
    overview: 'A premier garage for luxury and performance German & Japanese cars.',
    testimonial: '"Tak&Mak Corp transformed our online presence. Their targeted campaigns and geofencing strategies brought in a flood of new, high-quality customers. We couldn\'t be happier!"',
    services: ['Digital Presence', 'Social Media Campaigns', 'Geofencing'],
  },
  {
    name: "D'aviure",
    logoUrl: 'https://aistudio.google.com/3acca98f-a012-4278-917c-aeb7b389f61f',
    overview: 'A bespoke company crafting custom perfumes, specializing in signature scents for men.',
    testimonial: '"Working with Tak&Mak was a game-changer. Their product strategy and content creation gave our brand a distinctive voice and a powerful launch. Their GBP expertise was invaluable."',
    services: ['GBP Management', 'Product Strategy', 'Content Creation'],
  }
];

const Clients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? clients.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === clients.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <section id="clients" className="py-10 bg-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Valued Clients</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          We are proud to partner with innovative companies and help them succeed.
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative rounded-lg">
            <div 
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clients.map((client, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mx-auto w-full flex flex-col md:flex-row items-center text-left gap-8">
                    <img 
                      src={client.logoUrl} 
                      alt={`${client.name} logo`} 
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0 border-4 border-orange-200 bg-slate-200" 
                    />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900">{client.name}</h3>
                      <p className="text-slate-600 mt-1 mb-3 text-sm">{client.overview}</p>
                      <blockquote className="border-l-4 border-orange-200 pl-4 my-3">
                        <p className="italic text-slate-600 text-sm">
                          {client.testimonial}
                        </p>
                      </blockquote>
                      <div className="mt-4">
                        <h4 className="text-sm font-bold text-slate-800 mb-2">Services Provided</h4>
                        <div className="flex flex-wrap gap-2">
                          {client.services.map((service, i) => (
                            <span key={i} className="bg-slate-200 text-slate-700 text-xs font-medium px-2 py-1 rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Left Arrow */}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 md:-left-8 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Arrow */}
          <button onClick={nextSlide} className="absolute top-1/2 right-0 md:-right-8 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {clients.map((_, slideIndex) => (
              <button 
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-orange-500' : 'bg-slate-300 hover:bg-slate-400'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;