"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const LearningJourneySection: React.FC = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('Course Catalog');

  // Tab content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Course Catalog':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Course Catalog</h3>
              <p className="text-lg text-gray-700 mb-6">
                Explore a wide range of courses covering various aspects of coding and technology. From beginner to advanced levels, find the right course to enhance your skills and advance your career.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Register Interest
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/img/course_catalog.png" // Update with actual image path
                alt="Course Catalog"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      case 'Mentorship':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mentorship</h3>
              <p className="text-lg text-gray-700 mb-6">
                Get personalized guidance from industry experts to help you navigate your learning journey and career path.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Register Interest
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/img/mentorship.png" // Update with actual image path
                alt="Mentorship"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      case 'Certifications':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certifications</h3>
              <p className="text-lg text-gray-700 mb-6">
                Validate your skills with our certification programs. Whether you're just starting out or looking to advance in your career, our certifications will help you stand out.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Register Interest
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/img/certifications.png" // Update with actual image path
                alt="Certifications"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        );
      case 'Career Guidance':
        return (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Career Guidance</h3>
              <p className="text-lg text-gray-700 mb-6">
                Receive expert advice on how to build your career in technology. From resume tips to interview preparation, our career guidance services are designed to help you succeed.
              </p>
              <a href="#" className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
                Register Interest
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/img/career_guidance.png" // Update with actual image path
                alt="Career Guidance"
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
          {['Course Catalog', 'Mentorship', 'Certifications', 'Career Guidance'].map((tab) => (
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

export default LearningJourneySection;
