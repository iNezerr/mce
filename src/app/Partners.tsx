// components/Partners.tsx
"use client";

import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="partners py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
        <div className="flex flex-wrap justify-center">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="partner-item lg:w-1/5 md:w-1/3 w-1/2 p-2">
              <img
                src={`/assets/img/companies/IMAGE (${index + 1}).png`}
                alt={`Partner ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
