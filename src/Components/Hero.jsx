import React, { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "./useIntersectionObserver";

const Hero = () => {
  const pRef = useRef(null);
  const isVisible = useIntersectionObserver(pRef, { threshold: 0.2 });

  // Parent Container Animation (for smooth sequencing)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Controls delay between letters
      },
    },
  };

  // Letter Animation - Each letter appears sequentially
  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const text = "Fullstack Developer, UX/UI Designer, Mobile App Developer & Data Science Student";

  return (
    <div className="min-h-screen bg-[#0b1120] text-white font-serif flex items-center">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-32 pt-10 pb-8">
        {/* Left Section */}
        <div>
          <div className="mb-4 px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-full inline-block border border-blue-500 shadow-lg shadow-purple-400/20">
            Ready to Innovate
          </div>

          <h2 className="text-5xl font-extrabold text-white leading-normal">
            Hello! <br />
            <span className="text-blue-500 text-6xl">I'm Sadini Wanniarachchi</span>
          </h2>

          {/* Animated Paragraph with Sequential Letter Effect */}
          <motion.p
            ref={pRef}
            className="mt-4 text-lg text-gray-400"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {text.split("").map((letter, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {letter === " " ? "\u00A0" : letter} {/* Keeps spaces */}
              </motion.span>
            ))}
          </motion.p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["React", "JavaScript", "Node.js", "Tailwind"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm border border-blue-500 shadow-md shadow-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
          <a
             href="/Sadini_Wanniarachchi.pdf" // Path to your resume
             download="Sadini_Wanniarachchi_Resume.pdf" // Suggested file name
             className="px-6 py-3 bg-black rounded-md hover:bg-blue-500"
          >
              My Resume
           </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
