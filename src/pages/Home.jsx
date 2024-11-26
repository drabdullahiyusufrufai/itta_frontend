import React, { useEffect, useState } from "react";
import TeamComponent from "../components/TeamComponent";
import StudentReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/reviews";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CourseTabs from "../components/CourseTabs";
import TrusteesList from "../components/Trustees";
import image from "../assets/images/bg.jpeg"
import ReviewSlider from "../components/ReviewSlide";

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
      <ReviewSlider reviews={reviews} />
      <TeamComponent />
      <TrusteesList />
    </main>
  );
}

export default Home;
