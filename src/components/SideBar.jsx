import React from 'react'
import { HiOutlineMoon, HiOutlineSun, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";
import { useDarkMode } from '../context/DarkModeContext';
const SideBar = ({ title,navs, isSidebarOpen, toggleSidebar }) => {
  const {isDarkMode, toggleDarkMode} =  useDarkMode()
  
  
  return (




    <div
      className={`fixed z-50 lg:z-10 top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 p-6 shadow-lg transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <nav className="space-y-6 text-textPrimary dark:text-textDark">
        <div className="flex items-center justify-between">

        <Link to={"/"} className=" flex items-center gap-2">
            <img src={logo} className="w-16" /> <p className="text-lg font-semibold">
                {
                    title
                }

                </p>
                
                </Link>
                <button onClick={toggleSidebar} className="p-1 border-[2px] sm:hidden rounded-full" >
                    
                <HiX />
                </button>
        </div>
        <ul className="space-y-3">
          {
            navs.map((nav, index) => (
              <li key={index}>
                <Link to={nav.url} className="text-sm font-medium hover:text-primary dark:hover:text-textDark">
                  {nav.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="mt-12 flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-md"
      >
        {isDarkMode ? (
          <>
            <HiOutlineSun size={20} className="text-yellow-400" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <HiOutlineMoon size={20} className="text-blue-500" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </div>
  )};
  
export default SideBar