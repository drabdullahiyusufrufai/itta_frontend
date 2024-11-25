import React, { useEffect, useState } from "react";
import TeamComponent from "../components/TeamComponent";
import StudentReviewCard from "../components/StudentsReview";
import { reviews } from "../constants/reviews";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CourseTabs from "../components/CourseTabs";
import TrusteesList from "../components/Trustees";
import image from "../assets/images/bg.jpeg"

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <main
  >
      <Hero />
      <CourseTabs />
      <TeamComponent />
      <TrusteesList />

      <div className="relative w-full overflow-hidden my-10">
        <div
          className=" transition-transform flex items-center justify-center  duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, display:"flex", alignItems:"center", justifyContent:"center" }}
        >
          {reviews.map((review, index) => (
            <div className="flex-shrink-0 w-full" key={index}>
              <StudentReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
