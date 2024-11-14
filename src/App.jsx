import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";  // Import Firebase auth
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Team from "./pages/Team";
import CheatSheetPage from "./pages/CheatSheets";
import image from "../src/assets/images/bg.jpeg"


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false); 
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner while checking auth
  }

  return (
    <Router>
    <div
            className="w-full h-full flex-shrink-0  bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="bg-[#ececec] bg-opacity-95">

        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/cheatsheets" element={<CheatSheetPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/team" element={<Team />} />

            {/* Protect the Dashboard route */}
           
          </Routes>
        </main>
        <Footer />
            </div>
      </div>
    </Router>
  );
};

export default App;
