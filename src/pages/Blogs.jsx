import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/images/blog.jpeg"


const Blogs = () => {
  const blogs = [
    {
      id:1,
      title: "ABOUT US",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: image
    },
    {
      id:2,
      title: "OUR MISSION",
      description: "Proin accumsan leo vel dui posuere fermentum.",
      image: image
    },
    {
      id:3,
      title: "VISION",
      description: "Vestibulum eget turpis quis orci finibus tristique.",
      image: image
    },
    {
      id:4,
      title: "TARGET",
      description: "Curabitur dignissim metus id eros interdum, et gravida elit dapibus.",
      image: image
    },
    {
      id:5,
      title: "ACHIEVEMENTS",
      description: "Aliquam vehicula urna non fermentum consequat.",
      image: image
    },
    {
      id:6,
      title: "FUTURE",
      description: "Donec vitae eros et arcu varius lacinia non in libero.",
      image: image
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
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
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors duration-300">
            Load More Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
