import React, { useState, useEffect } from "react";
import { recommendations } from "../constants/data";
import { coursesOffered } from "../constants/courses";
import CourseCard from "../components/CourseCard";

import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };

  const filterCourses = (courses) => {
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className=" min-h-screen">
      <SideBar 
      
      toggleDarkMode={toggleDarkMode}
      isDarkMode={isDarkMode}
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      title={"Courses"} />
      <div className="md:ml-64">
    
      <SearchBar handleSearch={handleSearch} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto px-4 py-8">
          {/* My Courses Section */}
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </div>
  );
};

export default Courses;








