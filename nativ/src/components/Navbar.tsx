import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Screen from "../assets/Screen.png"; 
import Mobile from "../assets/Mobile.png";  

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`shadow-md fixed w-full z-50 transition-colors duration-500 
      ${darkMode ? "bg-gray-900" : "bg-[#f8fafc]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Left side - Logo for desktop */}
        <div className="flex items-center">
          <img
            src={Screen}
            alt="Nativ Codes Logo"
            className="h-10 w-auto hidden md:block"
          />
          <div className="text-2xl font-bold text-blue-600 md:hidden">
            <img
              src={Mobile}
              alt="Mobile Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-500
          ${darkMode ? "text-gray-100" : "text-[#1e293b]"}`}
        >
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                to={menu.path}
                className="hover:text-[#3b82f6] transition-colors duration-300"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle (desktop) */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex text-2xl ml-4 p-2 rounded-full transition transform hover:scale-110 hover:rotate-12 duration-300"
        >
          {darkMode ? (
            <FaMoon className="text-yellow-400" />
          ) : (
            <FaSun className="text-yellow-400" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ml-4 transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-64 ${
            darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
          } shadow-lg z-50 p-6 transition-transform`}
        >
          <div className="flex justify-between items-center mb-8">
            {/* Mobile Logo */}
            <img
              src={Mobile}
              alt="Mobile Logo"
              className="h-10 w-auto"
            />
            
            <button onClick={() => setOpen(false)} className="text-2xl">
              ✖
            </button>
          </div>

          <ul className="space-y-6 text-lg">
            {menus.map((menu) => (
              <li key={menu.name}>
                <Link
                  to={menu.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-200 transition"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
