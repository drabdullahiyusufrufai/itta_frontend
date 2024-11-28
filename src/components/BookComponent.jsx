import React from "react";
import { HiOutlineSearch, HiOutlineMoon, HiOutlineSun, HiMenuAlt1, HiX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";

export const Header = ({ toggleSidebar }) => (
    <div className="flex items-center justify-between gap-3 px-3 py-4 bg-[#0e314f] sticky top-0 z-40 text-white">
      <button
        className="block md:hidden text-white"
        onClick={toggleSidebar}
      >
        <HiMenuAlt1 size={30} />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-sm px-4 py-2 text-sm rounded-full bg-white shadow-md focus:outline-none"
      />
      <div className="flex items-center space-x-4">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
  

  export const Sidebar = ({ toggleDarkMode, isDarkMode, isSidebarOpen, toggleSidebar }) => (
    <div
      className={`fixed z-50 lg:z-10 top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 p-6 shadow-lg transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <nav className="space-y-6 text-textPrimary dark:text-textDark">
        <div className="flex items-center justify-between">

        <Link to={"/"} className=" flex items-center gap-2">
            <img src={logo} className="w-16" /> <p className="text-lg font-semibold">
                Courses

                </p>
                
                </Link>
                <button onClick={toggleSidebar} className="p-1 border-[2px] sm:hidden rounded-full" >
                    
                <HiX />
                </button>
        </div>
        <ul className="space-y-3">
          <li>My Favorites</li>
          <li>My Collections</li>
          <li>My List</li>
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
  );
  

export const BookCard = ({ title, author, image }) => (
  <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg flex flex-col">
    <img
      src={image}
      alt={title}
      className="rounded-md mb-4 h-40 object-cover"
    />
    <h3 className="text-md font-semibold">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{author}</p>
  </div>
);

export const Section = ({ title, books }) => (
  <section className="my-8">
    <h2 className="text-lg text-white font-semibold mb-4">{title}</h2>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  </section>
);
