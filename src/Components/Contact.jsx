import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0b1120] text-white py-16 px-6 font-serif"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-2 text-xl">
          Get in touch with me. You can either call, email directly, or send a
          message.
        </p>
      </div>

      {/* Contact Options */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Call Me */}
        <div className="flex flex-col items-center text-gray-400 hover:scale-110 hover:text-white transition-transform duration-300">
          <FaPhoneAlt size={24} className="text-blue-500 mb-2" />
          <p>Call Me</p>
        </div>
        {/* Email Me */}
        <div className="flex flex-col items-center text-gray-400 hover:scale-110 hover:text-white transition-transform duration-300">
          <FaEnvelope size={24} className="text-blue-500 mb-2" />
          <p>Email Me</p>
        </div>
        {/* GitHub */}
        <div className="flex flex-col items-center text-gray-400 hover:scale-110 hover:text-white transition-transform duration-300">
          <FaGithub size={24} className="text-blue-500 mb-2" />
          <p>GitHub</p>
        </div>
        {/* LinkedIn */}
        <div className="flex flex-col items-center text-gray-400 hover:scale-110 hover:text-white transition-transform duration-300">
          <FaLinkedin size={24} className="text-blue-500 mb-2" />
          <p>LinkedIn</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-[#0d121d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-[#0d121d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 bg-[#0d121d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
