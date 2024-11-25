import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../constants/blogData";

const BlogView = () => {
  const { id } = useParams();

  // Find the blog by ID
  const blog = blogs.find((b) => b.id === parseInt(id, 10));

  if (!blog) {
    return <div className="text-center py-20">Blog not found!</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-600 text-lg mb-4">{blog.description}</p>
        <div className="text-gray-800 text-base">{blog.content}</div>
        <div className="mt-8">
          <a
            href="/blogs"
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors duration-300"
          >
            Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
