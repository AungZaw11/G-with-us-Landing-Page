import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-700 italic flex items-center">
            <span className="text-red-500 mr-1">G</span>WITHUS
          </h1>
        </Link>

        <button
          className="flex md:hidden flex-col items-center justify-center p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      <div
        className={`flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 w-full md:w-auto mt-4 md:mt-0 ${isOpen ? "flex" : "hidden md:flex"}`}
      >
        <Link
          to="/"
          className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
        >
          About Us
        </Link>
        <Link
          to="/products"
          className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
        >
          Products
        </Link>
        <Link
          to="/jobs"
          className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
        >
          Jobs
        </Link>
      </div>

      <div
        className={`flex-col md:flex-row items-center mt-4 md:mt-0 ${isOpen ? "flex" : "hidden md:flex"}`}
      >
        <button className="flex flex-row items-center gap-2 border-2 border-gray-300 rounded-full px-5 py-2 text-sm font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
