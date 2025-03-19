// src/pages/Courses.js
import { useOutletContext } from "react-router-dom";
import { recommendations } from "../../constants/data";
import { coursesOffered } from "../../constants/courses";
import CourseCard from "../../components/CourseCard";

const Courses = () => {
  const { searchQuery } = useOutletContext();

  const filterCourses = (courses) =>
    courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
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
    </>
  );
};

export default Courses;
