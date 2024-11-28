import React, { useState } from "react";
import blogs from "../constants/blogData"
import BlogCard from "../components/BlogCard";
import image from "../assets/images/bg/blogHeader.jpg";
import logo from "../assets/images/logo/logo.png"
import { Link } from "react-router-dom";
const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterBlogs = () => {
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
       <header
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gradient-to-r from-[#245E86] via-blue-800/70 to-blue-900/90">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center space-x-2">
              <img alt="Logo" src={logo} width={180} className="object-contain" />
            </div>

            <div className="flex-1 max-w-lg mx-4">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
              />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/courses" className="hover:text-gray-300">
                Courses
              </Link>
              <Link to="/contacts" className="hover:text-gray-300">
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
      {/* <BlogHeader blogs={blogs} /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterBlogs().map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-primary text-white rounded-md shadow hover:bg-[#2f81b9] hover:shadow-sm transition-colors duration-300">
            Load More Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
