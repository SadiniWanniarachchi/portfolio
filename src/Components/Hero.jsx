import React from "react";
import NightSky from "./NightSky";
import Img from "../assets/image.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row items-center font-serif justify-center bg-gradient-to-b from-black via-[#0f0e17] to-[#1a1a2e] text-white">
      {/* Background Stars */}
      <NightSky />

      {/* Content Section */}
      <div className="absolute top-1/2 left-5 md:left-10 lg:left-36 transform -translate-y-1/2 max-w-lg md:max-w-xl text-center md:text-left space-y-6 px-4 md:px-0">
        <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
          Welcome to my Portfolio!
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
          I'm <span className="text-white">Sadini Wanniarachchi</span>,
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          I craft modern, dynamic web experiences that bring ideas to life. Let's build something extraordinary together!
        </p>

        <div className="mt-8 sm:mt-10">
          <a
            href="Sadini_Wanniarachchi.pdf"
            download="Sadini_Wanniarachchi_Resume.pdf"
            className="inline-flex items-center bg-purple-600 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto md:mx-0"
          >
            My Resume
            <svg
              className="ml-3 w-5 h-5"
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
      </div>

      {/* Image Section */}
      <div className="absolute top-[50%] right-5 md:right-10 lg:right-60 transform -translate-y-1/2 w-full md:w-auto mt-8 md:mt-0">
        <img
          src={Img}
          alt="Profile Illustration"
          className="w-full h-auto rounded-lg shadow-lg animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;
