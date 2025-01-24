import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#0b1120] text-white py-16 px-6 font-serif relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-10 left-20 w-36 h-36 bg-blue-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-28 h-28 bg-yellow-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        {/* Section Title */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-5xl font-bold">Contact Me</h2>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto relative z-10">
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
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
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

      {/* Footer Section */}
      <footer className="bg-[#0b1120] text-white py-8 px-4 font-serif relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-5 left-10 w-20 h-20 bg-pink-500 opacity-20 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          {/* Footer Title */}
          <p className="text-gray-400 text-2xl">
            Crafting ideas into reality. Let's connect!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-10 text-3xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@example.com"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm font-semibold">
            © {new Date().getFullYear()} Sadini Wanniarachchi. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
