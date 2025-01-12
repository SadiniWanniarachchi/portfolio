import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaAndroid,
} from "react-icons/fa";
import { SiKotlin, SiTailwindcss } from "react-icons/si";
import { TbVector } from "react-icons/tb"; // UX/UI Designing Icon

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-600" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-600" /> },
  { name: "Android Studio", icon: <FaAndroid className="text-green-600" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "UX/UI Designing", icon: <TbVector className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-20 px-4 font-serif">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 transition-transform duration-300 transform hover:-translate-y-2 hover:bg-white/20"
          >
            <div className="text-6xl mb-4 group-hover:text-white">
              {skill.icon}
            </div>
            <p className="text-lg font-bold text-white group-hover:text-gray-300">
              {skill.name}
            </p>
            <div className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-10 rounded-2xl"></div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
