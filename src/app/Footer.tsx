"use client";
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-semibold">myCodeEdge</h5>
            <p className="text-gray-400">Empowering your tech journey.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/facebook_icon.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/twitter_icon.png" alt="Twitter" width={24} height={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/linkedin_icon.png" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} myCodeEdge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
