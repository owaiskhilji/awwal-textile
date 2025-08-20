import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import slider1 from "../../assets/Home/hero.jpg";
import slider2 from "../../assets/Home/slider2_img.jpg";
import slider3 from "../../assets/Home/slider3_img.png";
import { useNavigate } from "react-router-dom";

const slides = [
  { image: slider1, alt: "Textile Design" },
  { image: slider2, alt: "Creative Fabric Work" },
  { image: slider3, alt: "Modern Fashion Trends" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Slider change after 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-[700px] lg:h-[600px] bg-white flex items-center justify-center px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl">
        
        {/* Left Content */}
        <div className="text-left">
          <h1
            data-aos="fade-right"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            Creative Textile <br /> & Fashion
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-md"
          >
            A showcase of my clothing & textile designs – blending modern
            creativity with timeless craftsmanship.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/men")}
              data-aos="fade-right"
              data-aos-delay="400"
              className="bg-gray-900 text-white font-semibold tracking-wider uppercase py-3 px-6 rounded-[10px] shadow-lg transition-all duration-300 hover:bg-gray-700"
            >
              View Gallery
            </button>
            <button
              onClick={() => navigate("/contact")}
              data-aos="fade-right"
              data-aos-delay="600"
              className="border border-gray-900 text-gray-900 font-semibold tracking-wider uppercase py-3 px-6 rounded-[10px] shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={slide.alt}
              className={`absolute w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-1000 ease-in-out transform
                ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
