import React, { useEffect, useState } from "react";
import TeamComponent from "../components/TeamComponent";
import StudentReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/reviews";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CourseTabs from "../components/CourseTabs";
import TrusteesList from "../components/Trustees";
import ReviewSlider from "../components/ReviewSlide";
import { useDarkMode } from "../context/DarkModeContext";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {isDarkMode} = useDarkMode()




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000); // Change slides every 7 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <main className={` ${isDarkMode ? "dark":"bg-gray-50"} text-gray-800`}>
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Courses Section */}
      <section className="w-full py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Explore Our Courses
          </h2>
          <CourseTabs />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Students Say
          </h2>
          <ReviewSlider reviews={reviews} />
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-1">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet the Team
          </h2>
          <TeamComponent />
        </div>
      </section>

      {/* Trustees Section */}
      <section className="w-full py-12 ">
        <div className="container flex flex-col items-center mx-auto px-4">
          <h2 className="text-sm text-center mb-8 lg:w-1/2">
          Over 8 companies trust our services and are optimistic that they will be the best in the world
          </h2>
          <TrusteesList />
        </div>
      </section>
    </main>
  );
}

export default Home;
