import React from 'react';
import DynamicCard from '../Components/HouseHold/HouseHoldDynamicCard';

function HouseHold() {

  return (
    <div className='mt-32 pb-12'>
      {/* Hero Section with reduced padding */}
      <div className="flex justify-center w-full px-auto mt-[30px] ">
        {/* <HeroSection /> */}
        <h1
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

