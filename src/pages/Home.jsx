import React, { useEffect, useState } from "react";
import TeamComponent from "../components/TeamComponent";
import StudentReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/reviews";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CourseTabs from "../components/CourseTabs";
import TrusteesList from "../components/Trustees";
import ReviewSlider from "../components/ReviewSlide";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000); // Change slides every 7 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Courses Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Explore Our Courses
          </h2>
          <CourseTabs />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Students Say
          </h2>
          <ReviewSlider reviews={reviews} />
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet the Team
          </h2>
          <TeamComponent />
        </div>
      </section>

      {/* Trustees Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Trustees
          </h2>
          <TrusteesList />
        </div>
      </section>
    </main>
  );
}

export default Home;
