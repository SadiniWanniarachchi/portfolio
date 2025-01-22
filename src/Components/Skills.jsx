import React from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
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
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 }, // Cards start with rotation and scale
    visible: { opacity: 1, scale: 1, rotateY: 0 }, // Cards become fully visible
  };

  return (
    <section
      id="skills"
      className="bg-[#0b1120] text-white py-20 px-4 font-serif"
    >
      {/* Section Title with Animation */}
      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid with Animated Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Re-animates when scrolling up and down
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
            {/* Skill Icon */}
            <div className="text-5xl sm:text-6xl mb-4 group-hover:text-white">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="text-sm sm:text-lg font-bold text-white group-hover:text-gray-300">
              {skill.name}
            </p>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-10 rounded-2xl"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
