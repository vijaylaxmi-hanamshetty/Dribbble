import React, { useState } from 'react';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from "./About"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  return (
    <div className="bg-purple-100">
      <div className="px-3">
        <nav className="container mx-auto flex justify-between items-center relative py-4">
          <Link to="/" className="font-cursive lg:pl-16 text-neutral-950">
            <h1 className="text-4xl font-semibold">Dribble</h1>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen1(!dropdownOpen1)}
                className="text-black flex items-center"
              >
                <FaAngleDown className="mr-1" /> Find designers
              </button>
              {dropdownOpen1 && (
                <ul className="absolute mt-2 text-black rounded shadow-lg w-56 z-20 bg-white">
                  <li>
                    <Link to="/designer-search" className="block px-4 py-2">
                      Designer Search
                    </Link>
                  </li>
                  <li>
                    <Link to="/post-job" className="block px-4 py-2">
                      Post a job
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link to="/" className="text-black">
              Inspiration
            </Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen2(!dropdownOpen2)}
                className="text-black flex items-center"
              >
                <FaAngleDown className="mr-1" /> Courses
              </button>
              {dropdownOpen2 && (
                <ul className="absolute mt-2 text-black rounded shadow-lg w-56 z-20 bg-white">
                  <li>
                    <Link to="/ux-diploma" className="block px-4 py-2">
                      UX Diploma
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-certificate" className="block px-4 py-2">
                      UI Certificate
                    </Link>
                  </li>
                  <li>
                    <Link to="/workshops" className="block px-4 py-2">
                      Live interactive Workshops
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link to="/jobs" className="text-black">
              Jobs
            </Link>
            <Link to="/go-pro" className="text-black">
              Go Pro
            </Link>
            <div className="flex items-center bg-white border px-4 py-2 rounded-full">
              <FaSearch className="mr-2 text-black" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full bg-transparent"
              />
            </div>
            <Link to="/sign-in" className="text-black">
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="px-4 py-2 text-white bg-black rounded-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'
                  }
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4 items-center">
              <li className="w-full">
                <div className="flex items-center bg-white border px-4 py-2 rounded-full">
                  <FaSearch className="mr-2 text-black" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none w-full bg-transparent"
                  />
                </div>
              </li>
              <li className="w-full">
                <div className="relative w-full">
                  <button
                    onClick={() => setDropdownOpen1(!dropdownOpen1)}
                    className="text-black flex items-center w-full justify-between px-4 py-2"
                  >
                    Find designers <FaAngleDown className="ml-1" />
                  </button>
                  {dropdownOpen1 && (
                    <ul className="mt-2 text-black rounded shadow-lg w-full z-20 bg-white">
                      <li>
                        <Link to="/designer-search" className="block px-4 py-2">
                          Designer Search
                        </Link>
                      </li>
                      <li>
                        <Link to="/post-job" className="block px-4 py-2">
                          Post a job
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link to="/" className="text-black">
                  Inspiration
                </Link>
              </li>
              <li className="w-full">
                <div className="relative w-full">
                  <button
                    onClick={() => setDropdownOpen2(!dropdownOpen2)}
                    className="text-black flex items-center w-full justify-between px-4 py-2"
                  >
                    Courses <FaAngleDown className="ml-1" />
                  </button>
                  {dropdownOpen2 && (
                    <ul className="mt-2 text-black rounded shadow-lg w-full z-20 bg-white">
                      <li>
                        <Link to="/ux-diploma" className="block px-4 py-2">
                          UX Diploma
                        </Link>
                      </li>
                      <li>
                        <Link to="/ui-certificate" className="block px-4 py-2">
                          UI Certificate
                        </Link>
                      </li>
                      <li>
                        <Link to="/workshops" className="block px-4 py-2">
                          Live interactive Workshops
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link to="/jobs" className="text-black">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/go-pro" className="text-black">
                  Go Pro
                </Link>
              </li>
              <li>
                <Link to="/sign-in" className="text-black px-4 py-2 rounded">
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="text-white bg-black px-4 py-2 rounded-md"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    <About/>
      <Home/>
    </div>
  );
};

export default Navbar;
