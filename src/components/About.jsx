import React from 'react';
import stackImage from '../assets/about/hero-image.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const AwsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#FF9900" d="M37.382 73.189c-8.919.643-16.713 3.39-16.713 11.236 0 6.643 5.485 9.771 12.062 9.771 7.266 0 13.023-3.606 17.683-9.552v8.118h11.925v-27.18c0-11.977-8.362-15.86-19.189-15.86-9.732 0-21.246 3.993-22.342 16.326l11.651.986c1.096-5.529 5.345-7.72 10.417-7.72 5.072 0 7.95 2.508 7.95 7.078v2.738l-13.445 4.059zm12.887 6.425c-3.153 5.344-7.402 7.77-12.062 7.77-3.975 0-6.716-2.077-6.716-5.447 0-4.636 4.797-6.29 11.788-6.945l6.99-.749v5.371z"/>
      <path fill="#FF9900" d="M72.333 50.412l-11.239 42.428h12.199l5.071-21.678 5.62 21.678h11.652l5.757-21.968 4.934 21.968h12.199l-11.102-42.428h-11.925l-5.62 21.171-5.621-21.171h-11.925z"/>
      <path fill="#FF9900" d="M109.912 103.541c-22.383 16.48-54.898 21.282-82.68 7.828-1.946-.931-4.085.986-2.22 2.766 26.657 25.106 63.666 21.849 88.006 4.082 2.809-2.046.384-5.385-3.106-4.676z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">AWS Cloud</span>
  </div>
);

const DockerIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#2496ED" d="M123.6 57.6c-3.5-2.5-10.9-3.7-17-1.3-1.6-4.9-5.4-8.8-10.3-10.8l-3.3-1.3-2.1 2.8c-3.5 4.7-4.6 10.8-3.1 16.3-2.5.5-5 .7-7.4.7H6v19.4c0 11.2 4.4 21.7 12.4 29.7 8.3 8.3 19.3 12.8 30.9 12.8 28.5 0 52.8-21.4 56.4-49.8 6.5-.5 12.5-3.6 16.3-8.8l2.2-3.1-3.2-6.7zM16.5 41.2h12v12h-12zM31.5 41.2h12v12h-12zM46.5 41.2h12v12h-12zM61.5 41.2h12v12h-12zM31.5 26.2h12v12h-12zM46.5 26.2h12v12h-12zM61.5 26.2h12v12h-12zM46.5 11.2h12v12h-12z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Docker</span>
  </div>
);

const K8sIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#326CE5" d="M64 8.5L14 37.3v57.6L64 123.7l50-28.8V37.3L64 8.5zm0 18.2l34.2 19.8v39.5L64 105.8 29.8 86V46.5L64 26.7z"/>
      <path fill="#326CE5" d="M64 45.2l-16 27.7h32L64 45.2z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Kubernetes</span>
  </div>
);

const LinuxIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#FCC624" d="M63.7 10c-15.3 0-25 12.1-25 28 0 11.7 4.1 22.5 1.5 32.1-2.9 10.9-18.7 18-18.7 30 0 10 11 17.9 25 17.9 4 0 9.8-1 14.5-2.8 4.7 1.8 10.5 2.8 14.5 2.8 14 0 25-7.9 25-17.9 0-12-15.8-19.1-18.7-30-2.6-9.6 1.5-20.4 1.5-32.1 0-15.9-9.7-28-24.6-28z"/>
      <circle cx="53" cy="35" r="4" fill="#000"/>
      <circle cx="74" cy="35" r="4" fill="#000"/>
      <ellipse cx="63.5" cy="46" rx="6" ry="4" fill="#E95420"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Linux & Python</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Malaya Ranjan Pradhan — Cloud & DevOps Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AwsIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DockerIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <K8sIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="750" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <LinuxIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
