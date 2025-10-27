import React, { useState } from 'react';

const founders = [
  {
    name: 'Shibabrata Banerjee',
    title: 'Co-Founder & Business Head',
    imageUrl: 'https://unavatar.io/linkedin/shibabrata-banerjee-b5541a154',
    bio: "Shibabrata drives business development with expertise in revenue growth and market expansion from his time at Zomato and BookMyShow. He excels in P&L management and scaling operations.",
    linkedinUrl: 'https://www.linkedin.com/in/shibabrata-banerjee-b5541a154/',
  },
  {
    name: 'Himadri Sekhar Mondal',
    title: 'Co-Founder & Technical Lead',
    imageUrl: 'https://unavatar.io/linkedin/himadri-sekhar-mondal-38484a278',
    bio: "As the technical architect, Himadri leverages his experience from Swiggy and ShareChat to build highly scalable and resilient backend systems, ensuring top performance and reliability.",
    linkedinUrl: 'https://www.linkedin.com/in/himadri-sekhar-mondal-38484a278/',
  },
  {
    name: 'Deep Kumar',
    title: 'Co-Founder & Product Strategist',
    imageUrl: 'https://unavatar.io/linkedin/dkr7836',
    bio: "Deep leads product strategy, turning ideas into market-leading products. With experience from ixigo and FabHotels, he crafts data-informed roadmaps focused on user experience and problem-solving.",
    linkedinUrl: 'https://www.linkedin.com/in/dkr7836/',
  }
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? founders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === founders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Founders</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          The driving force behind our mission to empower startups.
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative rounded-lg">
            <div 
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {founders.map((founder, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-slate-50 rounded-lg shadow-lg p-8 md:p-12 mx-auto w-11/12 md:w-5/6 flex flex-col md:flex-row items-center text-left gap-8">
                    <img src={founder.imageUrl} alt={founder.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0 border-4 border-orange-200" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900">{founder.name}</h3>
                      <p className="text-orange-500 font-semibold mb-3">{founder.title}</p>
                      <p className="text-slate-600 leading-relaxed mb-4">{founder.bio}</p>
                      <a href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-slate-500 hover:text-orange-500 transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
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
            {founders.map((_, slideIndex) => (
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

export default About;
