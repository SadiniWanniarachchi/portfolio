import React from "react";
import Tilt from "react-parallax-tilt";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#0b1120] py-16 px-6 font-serif relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Services From Me</h2>
        <p className="text-white mt-2">
          Our expertise to help bring your ideas to life
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        {/* Card Template */}
        {[
          {
            Icon: FaCode,
            title: "Web Development",
            description:
              "Building responsive, high-performance websites with modern technologies.",
          },
          {
            Icon: FaMobileAlt,
            title: "Mobile Development",
            description:
              "Creating cross-platform mobile applications for Android and iOS.",
          },
          {
            Icon: FaLaptopCode,
            title: "UI/UX Design",
            description:
              "Designing intuitive and engaging user experiences.",
          },
        ].map((service, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={300}
            className="flex justify-center items-center"
          >
            <div className="bg-[#30343d] rounded-lg shadow-md p-6 text-center min-h-[250px] w-full transition-all duration-300 flex flex-col justify-center items-center">
              <service.Icon className="text-[#3aa0ff] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </Tilt>
        ))}
      </div>

    </section>
  );
};

export default Services;