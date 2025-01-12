import React from "react";
import FlickImg from "../assets/flick.png";
import CaffeenaImg from "../assets/cafeena.png";
import HarvestBrewImg from "../assets/harvestbrew.png";
import SmoothieImg from "../assets/smoothie.png";
import FemmeFitImg from "../assets/femmefit.png";

const projects = [
  {
    name: "FLICK",
    img: FlickImg,
    description:
      "FLICK is a To-Do List app built using Kotlin and Room DB, featuring task management and reminder functions.",
  },
  {
    name: "CAFFEENA",
    img: CaffeenaImg,
    description:
      "CAFFEENA is a coffee shop website developed using HTML, CSS, and JavaScript, offering a clean, modern UI.",
  },
  {
    name: "HARVESTBREW",
    img: HarvestBrewImg,
    description:
      "HARVESTBREW is a website for a tea shop built with React and Tailwind CSS, focusing on user-friendly navigation and aesthetic design.",
  },
  {
    name: "SMOOTHIE",
    img: SmoothieImg,
    description:
      "SMOOTHIE is a smoothie shop mobile app UI design using a light purple theme to attract users.",
  },
  {
    name: "FEMMEFIT",
    img: FemmeFitImg,
    description:
      "FEMMEFIT is a modern trending women's fashion website built with React and Tailwind CSS.",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-black text-white pt-2 pb-20 px-5 font-serif">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-extrabold mb-16">
        <span className="relative inline-block">My Projects</span>
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            {/* Project Name */}
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {project.name}
            </h3>
            {/* Description */}
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
