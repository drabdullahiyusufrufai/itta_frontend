import React, { useState, useEffect } from "react";
import { navs } from "../constants/Navs";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../assets/images/logo/logo.png";
import { useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi2";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Define routes where the header should be hidden
  const hiddenRoutes = ["/blogs", "/courses", "/books","/dashboard"];

  // Check if the current route matches a hidden route
  const isHeaderHidden = hiddenRoutes.includes(location.pathname);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isHeaderHidden) return null; // Hide the header if the current route is in hiddenRoutes

  return (
    <div className="sticky top-0 left-0 py-2 w-full z-50 transition-all duration-500 bg-primary text-white">
      <div className="flex items-center justify-between px-2 py-3 h-[8vh]">
        <Link to="/" className="flex items-center">
          <img alt="Logo" src={logo1} width={180} className="object-contain" />
        </Link>

        <nav className="hidden lg:flex space-x-6">
          {navs.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive }) =>
                isActive
                  ? `${
                      item.title === "Signin"
                        ? "bg-white flex items-center gap-4 px-3 py-2 font-bold rounded text-[#185c8a] hover:text-[#253540] hover:scale-110 transition-all duration-300"
                        : "text-pink-600 font-semibold px-3 py-2 rounded hover:scale-110 transition-all duration-300"
                    }`
                  : `${
                      item.title === "Signin"
                        ? "bg-white flex items-center gap-4 px-3 py-2 font-bold rounded text-[#185c8a] hover:text-[#253540] hover:scale-110 transition-all duration-300"
                        : "px-3 py-2 rounded hover:text-[#253540] hover:scale-110 transition-all duration-300"
                    }`
              }
            >
              {item.title === "Signin" && <HiOutlineUserCircle size={25} />}
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg transform ${
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
                  to={nav.url}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#253540] font-semibold hover:underline transition-all duration-300"
                      : "hover:text-[#253540] transition-all duration-300"
                  }
                  onClick={toggleSidebar}
                >
                  {nav.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          ></div>
        )}

        <button
          className="lg:hidden"
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
        >
          <HiMenu size={24} />
        </button>
      </div>
    </div>
  );
}

export default Header;
