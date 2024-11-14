import React, { useState, useEffect } from "react";
import { navs } from "../constants/Navs";
import {NavLink} from "react-router-dom";
import logo1 from "../assets/images/logo/logo.png";
import { useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 py-2 w-full z-50 transition-all duration-500 bg-[#2D5E88] text-white`}
    >
      <div className="container mx-auto flex items-center justify-between px-2 py-3 h-[8vh]">
        {/* Logo */}
        <div className="flex items-center mx-auto md:mx-0">
          <img alt="Logo" src={logo1} width={180} className="object-contain" />
        </div>

        {/* Desktop and Tablet Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navs.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "text-[#253540] font-semibold px-3 py-2 rounded hover:scale-110 transition-all duration-300"
                  : "px-3 py-2 rounded hover:text-[#253540] hover:scale-110 transition-all duration-300"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#080a54] shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-6">
            <button
              onClick={toggleSidebar}
              className="text-lg text-slate-300 underline decoration-pink-600 mb-8"
            >
              Close
            </button>
            <nav className="mt-4 text-slate-200 flex flex-col gap-4">
              {navs.map((nav, index) => (
                <NavLink
                  key={index}
                  to={nav.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-pink-600 font-semibold hover:underline transition-all duration-300"
                      : "hover:text-pink-600 transition-all duration-300"
                  }
                  onClick={toggleSidebar}
                >
                  {nav.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Backdrop Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          ></div>
        )}
        <button className="lg:hidden" onClick={toggleSidebar}>
          <HiMenu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
