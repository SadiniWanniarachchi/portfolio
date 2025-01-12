import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-black font-serif overflow-hidden">
      {/* NightSky Background */}
      
      {/* Content Section */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-5xl mx-auto mt-24 sm:p-6 md:p-10">
        <h2 className="text-4xl text-white text-center font-extrabold mb-12 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-black to-[#310b58]">
          About Me
        </h2>
        <p className="text-lg text-gray-300">
          I'm a passionate frontend developer with experience in building modern and responsive websites. I specialize in creating efficient, scalable, and visually appealing user interfaces using React, Tailwind CSS, and other modern web technologies. With a keen eye for detail and a focus on user-centric design, I ensure that every project I work on delivers a seamless and engaging user experience.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          My technical expertise includes JavaScript, HTML, CSS, and responsive design principles, allowing me to craft websites that look great on any device. I have a strong foundation in state management, component-based architecture, and API integration, which helps me build dynamic, data-driven applications. I constantly stay updated with the latest trends in frontend development to bring the best solutions to my projects.
        </p>
      </div>
    </section>
  );
};

export default About;
