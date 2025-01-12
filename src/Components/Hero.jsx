import React from "react";
import NightSky from "./NightSky";
import Img from "../assets/astro.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center font-serif justify-center bg-gradient-to-b from-black via-[#0f0e17] to-[#1a1a2e] text-white overflow-hidden">
      {/* Background Stars */}
      <NightSky />

      {/* Content Section */}
      <div className="absolute top-1/2 transform -translate-y-1/2 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl text-center space-y-6 px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
          Welcome to my Portfolio!
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
          I'm <span className="text-purple-500">Sadini Wanniarachchi</span>,<br />
        </h1>

        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
          I craft modern, dynamic web experiences that bring ideas to life. Let's build something extraordinary together!
        </p>

        <div className="mt-4 sm:mt-6">
          <a
            href="/resume.pdf" // Path to the resume file
            download="Wimukthi Gunarathna Resume.pdf"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-full text-xs sm:text-sm md:text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            My Resume
            <svg
              className="ml-2 sm:ml-3 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Image Section */}
      <div className="mt-6">
        <img
          src={Img} // Use the imported Img variable
          alt="Decorative"
          className="w-28 sm:w-36 md:w-48 lg:w-64 object-cover rounded-lg shadow-lg animate-float mx-auto"
        />
      </div>
      </div>
    </div>
  );
};

export default Hero;