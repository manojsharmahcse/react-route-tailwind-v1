import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>

            <a href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </a>

            <a href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>

            <a href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600">
              Login
            </button>

            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
