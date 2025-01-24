import React from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaAndroid,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiKotlin, SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { TbVector } from "react-icons/tb"; // UX/UI Designing Icon

const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Android Studio", icon: <FaAndroid className="text-green-600" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-600" /> },
  { name: "UX/UI Designing", icon: <TbVector className="text-pink-500" /> },
  
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: { opacity: 1, scale: 1, rotateY: 0 },
  };

  return (
    <section
      id="skills"
      className="relative bg-[#0b1120] text-white py-20 px-4 font-serif overflow-hidden"
    >
      <div className="absolute top-1/4 left-20 w-40 h-40 bg-green-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-yellow-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-10 right-40 w-24 h-24 bg-red-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <motion.h2
        className="text-5xl sm:text-5xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-8"
            variants={cardVariants}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          >
            <div className="text-5xl sm:text-6xl mb-4 group-hover:text-white">
              {skill.icon || <span className="text-red-500">⚠️</span>}
            </div>
            <p className="text-sm sm:text-lg font-bold text-white group-hover:text-gray-300">
              {skill.name}
            </p>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 rounded-2xl"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
