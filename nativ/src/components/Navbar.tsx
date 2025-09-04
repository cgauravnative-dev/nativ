import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Screen from "../assets/Screen.png";
import Mobile from "../assets/Mobile.png";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [lockOpen, setLockOpen] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const menus = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      sub: [
        { name: "Web Development", path: "/services/web" },
        { name: "App Development", path: "/services/app" },
        { name: "Cloud Solutions", path: "/services/cloud" },
        { name: "AI & Machine Learning", path: "/services/ai" },
        { name: "Data Analytics", path: "/services/data-analytics" },
        { name: "UI/UX Design", path: "/services/ui-ux" },
        { name: "Cybersecurity", path: "/services/cybersecurity" },
        { name: "DevOps & Automation", path: "/services/devops" },
        { name: "Enterprise Solutions", path: "/services/enterprise" },
        { name: "Consulting", path: "/services/consulting" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Close submenu when clicked outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setLockOpen(null);
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`shadow-md fixed w-full z-50 transition-colors duration-500 
      ${darkMode ? "bg-transparent" : "bg-[#f8fafc]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Screen}
            alt="Logo"
            className="h-10 w-auto hidden md:block"
          />
          <div className="md:hidden">
            <img src={Mobile} alt="Mobile Logo" className="h-10 w-auto" />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-500
          ${darkMode ? "text-gray-100" : "text-[#1e293b]"}`}
        >
          {menus.map((menu) => (
            <li
              key={menu.name}
              className="relative group"
              onMouseEnter={() => !lockOpen && setOpenMenu(menu.name)}
              onMouseLeave={() => !lockOpen && setOpenMenu(null)}
            >
              <div className="flex items-center cursor-pointer">
                <Link
                  to={menu.path}
                  className="hover:text-[#3b82f6] transition-colors duration-300"
                >
                  {menu.name}
                </Link>
                {menu.sub && (
                  <FaChevronDown
                    className="ml-1 text-sm cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setLockOpen(lockOpen === menu.name ? null : menu.name);
                      setOpenMenu(menu.name);
                    }}
                  />
                )}
              </div>

              {/* Submenu Desktop */}
              {menu.sub &&
                (openMenu === menu.name || lockOpen === menu.name) && (
                  <ul
                    className={`absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg 
                  ${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                  >
                    {menu.sub.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"
                          onClick={() => {
                            setLockOpen(null);
                            setOpenMenu(null);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle (Desktop) */}
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
          className={`md:hidden text-2xl ml-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-blue-500"
        } shadow-lg transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          {menus.map((menu) => (
            <div key={menu.name}>
              <div
                className="flex justify-between items-center cursor-pointer px-2 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() =>
                  menu.sub
                    ? setMobileSubmenu(
                        mobileSubmenu === menu.name ? null : menu.name
                      )
                    : setOpen(false)
                }
              >
                <Link
                  to={menu.path}
                  className="flex-1"
                  onClick={() => !menu.sub && setOpen(false)}
                >
                  {menu.name}
                </Link>
                {menu.sub && (
                  <FaChevronDown
                    className={`ml-2 transform transition-transform ${
                      mobileSubmenu === menu.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Mobile Submenu */}
              {menu.sub && mobileSubmenu === menu.name && (
                <ul className="ml-4 mt-2 space-y-2">
                  {menu.sub.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.path}
                        className="block px-2 py-1 rounded-md 
            text-gray-400 opacity-80 hover:text-white hover:bg-blue-600 transition"
                        onClick={() => setOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Dark Mode Toggle (Mobile) */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={toggleTheme}
              className="text-2xl p-2 rounded-full transition transform hover:scale-110 hover:rotate-12 duration-300"
            >
              {darkMode ? (
                <FaMoon className="text-yellow-400" />
              ) : (
                <FaSun className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
