import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/images/blog.jpeg"
import BlogHeader from '../components/BlogHeader';
import blogs from '../constants/blogData';


const Blogs = () => {


  return (
    <div className="bg-gray-100 min-h-screen">
      <BlogHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <Link
                to={`/blog/${blog.id}`}
                  className="text-blue-500 font-medium hover:underline"
                >
                  Read more...
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-[#245E86] text-white rounded-md shadow hover:bg-[#2f81b9] hover:shadow-sm transition-colors duration-300">
            Load More Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
