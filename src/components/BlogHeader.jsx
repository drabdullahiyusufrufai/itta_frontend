import React from "react";
import image from "../assets/images/bg/blogHeader.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png"
const BlogHeader = () => {
  return (
    <header
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-gradient-to-r from-[[#245E86]] via-blue-800/70 to-blue-900/90">
        {/* Header Container */}
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img alt="Logo" src={logo} width={180} className="object-contain" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link to={"/"} href="#" className="hover:text-gray-300">
              Home
            </Link>
            <Link to={"/courses"} className="hover:text-gray-300">
              Courses
            </Link>
            <Link to={"/contacts"} className="hover:text-gray-300">
              Contact
            </Link>
            
          </nav>
        </div>

        {/* Blog Heading */}
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold">Blogs</h1>
          <p className="mt-4 text-lg">
            Explore insights, gain skills, and fuel your learning journey here.
          </p>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
