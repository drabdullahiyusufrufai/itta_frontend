import { useState } from "react";
import { Link } from "react-router-dom";

const initialCourses = [
  { id: 1, title: "React for Beginners", progress: 75 },
  { id: 2, title: "Advanced JavaScript", progress: 40 },
  { id: 3, title: "UI/UX Design Basics", progress: 90 },
];

export default function MyCourses() {
  const [courses, setCourses] = useState(initialCourses);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
      {courses.length === 0 ? (
        <p className="text-gray-500">No courses enrolled</p>
      ) : (
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-4 border rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-medium">{course.title}</h3>
                <p className="text-sm text-gray-600">Progress: {course.progress}%</p>
                <div className="w-full bg-gray-200 rounded h-2.5 mt-1">
                  <div
                    className="bg-blue-500 h-2.5 rounded"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <Link to={"/learning/1"} className="px-3 py-1 bg-blue-500 text-white rounded">Continue</Link >
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
