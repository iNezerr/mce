import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 md:px-8  mx-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16">

        {/* Left side - Two student images */}
        <div className="hidden md:flex flex-col space-y-6 mb-6 md:mb-0">
          <div className="relative w-48 h-48">
            <Image
              src="/students/1.jpg"
              alt="Student 1"
              layout="fill"
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
          <div className="relative w-48 h-48">
            <Image
              src="/students/2.jpg"
              alt="Student 2"
              layout="fill"
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Center text */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Empowering Tech Careers <br />
            <span className="text-gray-600">through innovative education</span>
          </h1>
          <p className="text-lg text-gray-700">
            At myCodeEdge, we provide top-notch tech courses and resources to help you excel in the tech industry.
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
            Register Interest
          </button>
        </div>

        {/* Right side - Two student images */}
        <div className="hidden md:flex flex-col space-y-6 mt-6 md:mt-0">
          <div className="relative w-48 h-48">
            <Image
              src="/students/3.jpg"
              alt="Student 3"
              layout="fill"
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
          <div className="relative w-48 h-48">
            <Image
              src="/students/4.jpg"
              alt="Student 4"
              layout="fill"
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
