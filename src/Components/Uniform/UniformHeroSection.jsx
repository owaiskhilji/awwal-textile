// src/components/mans/HeroSection.js
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../assets/uniform/banner.jpg"; // Imported image

const HeroSection = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation speed in ms
      once: true,     // animation happens only once
    });
  }, []);

  return (
    <div
      className="hero relative h-[80vh]"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="hero-overlay bg-black bg-opacity-40"></div>

      {/* Hero content */}
      <div
        className="
          hero-content text-neutral-content absolute
          bottom-[90px] sm:bottom-0 left-4 text-left p-5
          sm:w-[320px] sm:h-80
          md:w-[500px] md:h-96
          lg:w-[630px] lg:h-[600px] lg:absolute lg:-bottom-24 lg:left-4
        "
        data-aos="fade-up"
      >
        <div className="max-w-md">
          <h1 className="mb-5 font-[inter] text-3xl sm:text-4xl md:text-6xl lg:text-6xl">
           UniForm Collection
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
