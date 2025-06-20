import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu } from "lucide-react";

const MainNavigation: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="relative px-6 md:px-28 py-10 flex items-center gap-16 justify-between">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>

      <div
        className={`
          flex flex-col md:flex-row items-center justify-between
          md:w-full w-[90%] p-6 md:p-0 
          bg-very-dark-blue md:bg-white rounded-2xl md:rounded-none
          absolute md:relative top-24 md:top-0 
          left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0
          transition-all duration-300 ease-in-out
          ${isMobileNavOpen ? "block" : "hidden"} md:flex
        `}
      >
        <nav className="flex w-fit gap-16">
          <ul className="flex flex-col md:flex-row items-center gap-10">
            {["features", "pricing", "resources"].map((text) => (
              <li key={text}>
                <a
                  href="#"
                  className="font-bold text-gray hover:text-gray-900 transition capitalize"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex md:flex-row flex-col w-full md:w-fit gap-8 mt-6 md:mt-0">
          <button className="font-bold text-gray hover:text-gray-900 transition capitalize">
            login
          </button>
          <button className="rounded-full w-full py-3 px-4 bg-cyan font-bold hover:bg-cyan/80 text-white transition">
            signup
          </button>
        </div>
      </div>

      <button
        className="md:hidden z-50"
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isMobileNavOpen}
      >
        <Menu />
      </button>
    </header>
  );
};

export default MainNavigation;
