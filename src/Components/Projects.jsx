import React from "react";
import { motion } from "framer-motion";
import FlickImg from "../assets/flick.png";
import CaffeenaImg from "../assets/cafeena.png";
import HarvestBrewImg from "../assets/harvestbrew.png";
import SmoothieImg from "../assets/smoothie.png";
import FemmeFitImg from "../assets/femmefit.png";

const projects = [

  {
    name: "HARVESTBREW",
    img: HarvestBrewImg,
    description:
      "HARVESTBREW is a website for a tea shop built with React and Tailwind CSS, focusing on user-friendly navigation and aesthetic design.",
    skills: ["React + Vite", "Tailwind CSS"],
    link: "https://harvestbrew.netlify.app/"
  },

  {
    name: "FEMMEFIT",
    img: FemmeFitImg,
    description:
      "FEMMEFIT is a modern trending women's fashion website built with React and Tailwind CSS.",
    skills: ["React + Vite", "Tailwind CSS"],
    link: "https://femmefitclothing.netlify.app/"
  },

  {
    name: "CAFFEENA",
    img: CaffeenaImg,
    description:
      "CAFFEENA is a coffee shop website developed using HTML, CSS, and JavaScript, offering a clean, modern UI.",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://caffeena.netlify.app/"
  },

  {
    name: "FLICK",
    img: FlickImg,
    description:
      "FLICK is a To-Do List app built using Kotlin and Room DB, featuring task management and reminder functions.",
    skills: ["Kotlin", "Room DB"],
    link: "https://github.com/SadiniWanniarachchi/To-Do-App"
  },
  
 
  {
    name: "SMOOTHIE",
    img: SmoothieImg,
    description:
      "SMOOTHIE is a smoothie shop mobile app UI design using a light purple theme to attract users.",
    skills: ["Kotlin","Figma"],
    link: "https://github.com/SadiniWanniarachchi/Smoothie-Mobile-App"
  },
  
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative bg-[#0b1120] text-white py-20 px-5 font-serif overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Section Title with Animation */}
      <motion.h2
        className="text-center text-5xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards with Scroll Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Project Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* Image */}
              <motion.img
                src={project.img}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Project Name */}
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.name}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>

              {/* Skills (Displayed as Simple Text with Blue Color) */}
              <div className="text-blue-500 text-base font-semibold mt-2">
               {project.skills.join(", ")}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
