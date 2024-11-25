import React, { useState } from "react";
import { myCourses, recommendations } from "../constants/data";
import { coursesOffered } from "../constants/courses";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter courses based on search query
  const filterCourses = (courses) => {
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
          className="p-3 border rounded-lg w-full max-w-md"
        />
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="material-icons">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
            G
          </div>
        </div>
      </div>

      {/* My Courses Section */}
      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterCourses(coursesOffered).map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            progress={course.progress}
          />
        ))}
      </div>

      {/* Recommendations Section */}
      <h2 className="text-xl font-semibold mt-12 mb-4">
        You may also be interested in:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterCourses(recommendations).map((recommendation, index) => (
          <CourseCard
            key={index}
            title={recommendation.title}
            description={recommendation.description}
            image={recommendation.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
