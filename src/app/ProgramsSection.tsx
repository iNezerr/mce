"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProgramsSection: React.FC = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('Frontend Development');

  // Tab content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Frontend Development':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
              <p className="text-lg text-gray-700 mb-6">
                Learn to build visually stunning and interactive web applications with our comprehensive Frontend Development program. Master HTML, CSS, JavaScript, React, and more to bring your designs to life.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Register Interest
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/img/frontend_program.png" // Update with actual image path
                alt="Frontend Development"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      case 'Backend Development':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Backend Development</h3>
              <p className="text-lg text-gray-700 mb-6">
                Dive deep into server-side programming with our Backend Development program. Learn Python, Django, Node.js, databases, and APIs to build robust and scalable web applications.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Register Interest
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/img/backend_program.png" // Update with actual image path
                alt="Backend Development"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      case 'Data Science':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Science</h3>
              <p className="text-lg text-gray-700 mb-6">
                Unlock the power of data with our Data Science program. Learn data analysis, machine learning, Python, R, and more to become a data expert and drive informed decision-making.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Register Interest
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/img/data_science_program.png" // Update with actual image path
                alt="Data Science"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Empowering Your <br /> Learning Journey
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8 text-center">
          {['Frontend Development', 'Backend Development', 'Data Science'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 transition rounded-md ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">{renderContent()}</div>
      </div>
    </section>
  );
};

export default ProgramsSection;
