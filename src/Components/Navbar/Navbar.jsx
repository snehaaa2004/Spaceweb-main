import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-100 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="Logo" className="w-10" />
              <span>SPAC-VIEW</span>
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden">
              <button
                className="text-white"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Menu items for desktop */}
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="About">About</a>
                </li>
                <li>
                  <a href="Technology">Technology</a>
                </li>
                <li>
                  <a href="Galaxy">Galaxy</a>
                </li>
                <li>
                  <a href="Satelite">Satelite</a>
                </li>
              </ul>
            </div>

            {/* Login Button */}
            <div>
              <button className="text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} absolute text-center bg-black/50 backdrop-blur-md text-white z-50 top-0 left-0 w-full bg-black/90 p-6 transition-all`}
      >
        <ul className="text-white text-2xl">
          <li className="py-2">
            <a href="About">About</a>
          </li>
          <li className="py-2">
            <a href="Technology">Technology</a>
          </li>
          <li className="py-2">
            <a href="Galaxy">Galaxy</a>
          </li>
          <li className="py-2">
            <a href="Satelite">Satelite</a>
          </li>
          <li className="py-2">
            <button className="w-full text-white border-2 border-white px-3 py-1 rounded-md">
              Login
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
