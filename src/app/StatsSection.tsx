import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Elevating Tech Skills <br />
          <span className="text-gray-600">With myCodeEdge</span>
        </h2>

        {/* Main Statistic */}
        <div className="text-6xl font-extrabold text-black mb-4">
          Over 12
        </div>
        <p className="text-lg text-gray-700 mb-8">Successful students</p>

        {/* Stats Row */}
        <div className="flex justify-center space-x-8">
          {/* First Stat */}
          <div>
            <div className="text-3xl font-bold text-gray-900">7+</div>
            <p className="text-sm text-gray-600">Courses Offered</p>
          </div>
          {/* Second Stat */}
          <div>
            <div className="text-3xl font-bold text-gray-900">21+</div>
            <p className="text-sm text-gray-600">Internships Secured</p>
          </div>
          {/* Third Stat */}
          <div>
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <p className="text-sm text-gray-600">Global Reach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
