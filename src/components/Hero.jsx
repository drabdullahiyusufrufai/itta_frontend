import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/bg.jpeg"; // Replace with correct path
import image2 from "../assets/images/bg2.jpeg"; // Replace with correct path
import { TypeAnimation } from "react-type-animation";

const images = [image];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[75vh] lg:h-screen overflow-hidden">
      {/* Sliding Background Images */}
      <div
        className="absolute inset-0 opacity-60 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >

      <div className="w-[100vw] absolute bottom-[-10%] h-[15vh] rounded-[4000%] bg-[#ececec]" >

        </div>

          </div>
        ))}
      </div>

      {/* Static Overlay */}


      <div className="absolute inset-0 bg-[#ECECEC] bg-opacity-70 flex flex-col lg:flex-row items-center justify-around text-center lg:text-left p-6 lg:p-16 z-10">

        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex items-center gap-5 justify-center lg:justify-start">
            <div className="text-[50px] h-[88px] w-[2px] bg-[#394956]" />
            <p className="text-[24px]">About Us</p>
          </div>

          <div>
            <div className="text-[32px] lg:text-[49px] font-bold text-[#394956]">
              EXPLORE YOUR LEARNING ON
            </div>

            <TypeAnimation
              sequence={[
                "MACHINE LEARNING",
                1000,
                "ARTIFICIAL INTELLIGENCE",
                1000,
                "PROGRAMMING",
                1000,
                "SOFTWARE DEVEOPMENT",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "32px",
                display: "inline-block",
                color: "#2571A1",
                fontWeight: "bold",
              }}
              repeat={Infinity}
              />
          </div>
          <div>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-5">
            Join a community of tech enthusiasts and lifelong learners eager to
            explore, build, and master new skills in cutting-edge technologies.
            Whether you're into coding, design, or digital marketing, we provide
            top-notch courses to fuel your passion.
          </p>
          <Link
            to={"/signup"}
            className="bg-grad_1  text-white lg:text-lg text-sm font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            >
            Enroll Now
          </Link>
            </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src={image2}
            alt="Hero Section"
            className="rounded-tl-[90px] rounded-br-[90px] rounded-tr-[30px] h-[300px] lg:h-[500px] object-cover w-[250px] lg:w-[400px] rounded-bl-[30px]"
            />
        </div>
      </div>

    </div>
  );
}

export default Hero;
