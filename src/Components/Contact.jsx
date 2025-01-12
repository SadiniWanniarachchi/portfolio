import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0e0d0d] to-[#434343] text-white py-16 px-6 font-serif"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <p className="text-center text-gray-300 mb-12">
        Feel free to connect with me through any of the platforms below!
      </p>

      {/* Contact Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sadini-tharindi-wanniarachchi-3b0159258/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-black/70 hover:bg-black/80 transition-all duration-300 p-4 rounded-lg shadow-md"
        >
          <FaLinkedin size={30} className="text-blue-400" />
          <span className="text-lg">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/SadiniWanniarachchi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-black/70 hover:bg-black/80 transition-all duration-300 p-4 rounded-lg shadow-md"
        >
          <FaGithub size={30} className="text-gray-300" />
          <span className="text-lg">GitHub</span>
        </a>

        
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-center text-white text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
