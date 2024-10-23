import React, { useEffect, useState } from "react";
import TeamComponent from "../components/TeamComponent";
import Banner from "../components/Banner";
import CourseNav from "../components/CoursesComponent";
import StudentReviewCard from "../components/StudentsReview";
import { reviews } from "../constants/reviews";
import { motion } from "framer-motion";

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to auto-slide reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [reviews.length]);


  return (
    <main className="">
      {/* Banner Section */}
      <Banner />

      {/* Course Navigation */}
      <CourseNav />

      {/* Team Section */}
      <TeamComponent />
      <div className="flex justify-center">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${(currentIndex * 100) / (window.innerWidth < 640 ? 1 : 3)}%)`,
    }}
  >
    {reviews.map((review, index) => (
      <motion.div
        key={index}
        className=""
        initial={{ scale: 0.8 }}
        animate={{
          scale: currentIndex === index ? 1 : 0.85,
          opacity: currentIndex === index ? 1 : 0.7,
        }}
        transition={{ duration: 0.5 }}
      >
        <StudentReviewCard review={review} />
      </motion.div>
    ))}
  </div>
</div>
    </main>
  );
}

export default Home;
