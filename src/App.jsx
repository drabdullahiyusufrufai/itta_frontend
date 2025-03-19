import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Layout from "./pages/layout/layout"; // ✅ Fixed Import
import routes from "./constants/routes";
import { booksNavs, coursesNavs } from "./constants/Navs";
import Books from "./pages/Books/Books";
import Popular from "./pages/Books/Popular";
import backgroundImage from "./assets/images/bg.jpeg";
import MainLayout from "./pages/layout/MainLayout";
import NewReleasesPage from "./pages/Books/NewRelease";
import CategoriesPage from "./pages/Books/Categories";
import AuthorsBooksPage from "./pages/Books/Aurthors";
import PopularCourses from "./pages/Courses/Popular";
import Instructors from "./pages/Courses/Instructors";
import CategoriesCourses from "./pages/Courses/Categories";
import NewReleasesCourses from "./pages/Courses/NewRelease";
import Courses from "./pages/Courses/Courses";
import DashboardLayout from "./pages/layout/DashBoardLayout";
import StudentDashboard from "./pages/student/Dashboard";
import Notifications from "./pages/student/Notifications";
import Settings from "./pages/student/Settings";
import MyCourses from "./pages/student/MyCourses";
import LearningPage from "./pages/student/LearningPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-[#ececec] bg-opacity-95 flex flex-col min-h-screen">
          <Routes>
            <Route element={<MainLayout />}>

              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Route>

            {/* Courses Section */}
            <Route element={<Layout title="Courses" navs={coursesNavs} />}>
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/popular-courses" element={<PopularCourses />} />
              <Route path="/courses/new-releases" element={<NewReleasesCourses />} />
              <Route path="/courses/instructors" element={<Instructors />} />
              <Route path="/courses/categories" element={<CategoriesCourses />} />

            </Route>

            {/* Books Section */}
            <Route element={<Layout title="Books" navs={booksNavs} />}>
              <Route path="/books" element={<Books />} />
              <Route path="/books/popular" element={<Popular />} />
              <Route path="/books/new-releases" element={<NewReleasesPage />} />
              <Route path="/books/author" element={<AuthorsBooksPage />} />
              <Route path="/books/category" element={<CategoriesPage />} />
            </Route>
            {/* Student DashBoard */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/my-courses" element={<MyCourses />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/learning/1" element={<LearningPage />} />



            </Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
