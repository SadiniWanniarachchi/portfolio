import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0b1120] text-white font-serif flex items-center justify-center overflow-hidden"
    >
      {/* Section Title with Animation */}
      <motion.h2
        className="absolute top-10 text-3xl md:text-5xl font-bold text-gray-200 tracking-wide text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Content Section with Scroll Animation */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl border border-white/20 max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto -mt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Animated Paragraphs */}
        <motion.p
          className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 text-justify"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          🚀 Passionate frontend developer dedicated to crafting modern,
          responsive, and immersive web experiences. I specialize in React,
          Tailwind CSS, and intuitive UI/UX design. With a detail-oriented
          mindset, I create sleek and efficient digital solutions. 🚀
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          ✨ Skilled in JavaScript, component-based architecture, and API
          integrations, I transform ideas into seamless digital experiences.
          Constantly evolving with the latest frontend trends to bring
          **cutting-edge** innovation to my work. ✨
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "UX/UI Design",
            "Node.js",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 sm:px-4 sm:py-2 bg-white/10 text-gray-200 rounded-full text-xs sm:text-sm border border-blue-500 shadow-md shadow-blue-500/20 transition-all duration-300 hover:bg-purple-500/20"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-purple-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
};

export default About;
