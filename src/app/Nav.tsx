"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-10 mt-10 mx-auto max-w-6xl sm:mx-20 md:mx-20">
      <div className="backdrop-blur-lg bg-white/50 border border-gray-300/30 rounded-xl shadow-md py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/" className="hover:opacity-70">
            <Image src={"/logo.png"} alt='Logo' width={70} height={90} />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <li>
            <Link href="/suppliers" className="hover:text-gray-500">
              Suppliers
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-gray-500">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/news-insights" className="hover:text-gray-500">
              News & Insights
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-gray-500">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Language Switcher */}
        <div className="flex items-center space-x-2 text-gray-800">
          <span className="hidden md:inline">English</span>
          <i className="fa-solid fa-globe text-gray-800 hover:opacity-90"></i>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/50 backdrop-blur-lg border border-gray-300/30 rounded-xl shadow-md mt-4">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800">
            <li>
              <Link href="/suppliers" className="hover:text-gray-500">
                Suppliers
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gray-500">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/news-insights" className="hover:text-gray-500">
                News & Insights
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
