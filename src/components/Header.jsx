import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Sticky Transparent Header Overlapping the Section */}
      <header className="bg-[#00000063] backdrop-filter-blur(60px) text-[#F6D55C] fixed top-0 left-0 w-full shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold">My Portfolio</h1>

          {/* Desktop Nav */}
          <nav className="nav text-xl hidden md:block">
            <ul className="flex gap-6 items-center">
              <li>
                <a href="#home" className="block hover:text-blue-400 ">
                  About Me
                </a>
              </li>
              <li>
                <a href="#education" className="block hover:text-blue-400">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="block hover:text-blue-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="block hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="block hover:text-blue-400">
                  Experience
                </a>
              </li>
              <li>
                <a href="#activities" className="block hover:text-blue-400">
                  Activities
                </a>
              </li>
              <li>
                <a href="#contact" className="border border-blue-500 px-4 py-1 rounded-4xl hover:bg-blue-500 hover:text-white transition">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-800 text-white px-6 py-4 space-y-4">
            <a href="#about" className="block hover:text-blue-400">
              About Me
            </a>
            <a href="#education" className="block hover:text-blue-400">
              Education
            </a>
            <a href="#skills" className="block hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="block hover:text-blue-400">
              Projects
            </a>
            <a href="#experience" className="block hover:text-blue-400">
              Experience
            </a>
            <a href="#achievements" className="block hover:text-blue-400">
              Achievements
            </a>
            <a href="#contact" className="block hover:text-blue-400">
              Contact Me
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
