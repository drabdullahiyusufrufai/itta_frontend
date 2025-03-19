import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaUserGraduate, FaChartBar, FaEnvelope, FaUsers, FaChalkboardTeacher, FaCogs } from "react-icons/fa";

export default function StudentDashboard() {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", progress: 80 },
    { id: 2, title: "JavaScript Essentials", progress: 60 },
    { id: 3, title: "CSS Mastery", progress: 40 },
  ]);

  return (
    <div className="flex min-h-screen w-full">

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome back, Student!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-lg flex items-center gap-4">
            <FaBook className="text-3xl text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold">My Courses</h2>
              <p>{courses.length} Enrolled</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg flex items-center gap-4">
            <FaUserGraduate className="text-3xl text-green-500" />
            <div>
              <h2 className="text-xl font-semibold">Profile</h2>
              <Link to="/profile" className="text-blue-600">View Profile</Link>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg flex items-center gap-4">
            <FaChartBar className="text-3xl text-yellow-500" />
            <div>
              <h2 className="text-xl font-semibold">Progress</h2>
              <p>Track Your Learning</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">My Courses</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              <p className="mt-2 text-sm">{course.progress}% completed</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
