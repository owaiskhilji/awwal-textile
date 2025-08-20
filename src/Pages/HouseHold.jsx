import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DynamicCard from '../Components/HouseHold/HouseHoldDynamicCard';

function HouseHold() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <div className='mt-32 pb-12'>
      {/* Hero Section with reduced padding */}
      <div className="flex justify-center w-full px-auto mt-[30px] ">
        {/* <HeroSection /> */}
        <h1
          data-aos="fade-right"
          className="font-[inter] text-3xl sm:text-4xl lg:text-6xl md:text-6xl font-semibold mb-4"
        >
          HouseHolds Items
        </h1>
      </div>

      {/* Dynamic Card Section */}
      <div className="max-w-screen-xl px-auto mx-auto mt-[20px]">
        <DynamicCard />
      </div>
    </div>
  );
}

export default HouseHold;

