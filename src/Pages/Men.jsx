// src/pages/main.jsx
import React from 'react';
import DynamicCard from '../Components/Men/DynamicCard';

function Main() {
  return (
    <div className='mt-32 pb-12'>
      {/* Heading */}
      <div className="flex justify-center w-full px-auto mt-[30px] ">
        <h1
          className="font-[inter] text-2xl sm:text-4xl lg:text-6xl md:text-6xl font-semibold mb-4"
        >
          Mens Collection
        </h1>
      </div>

      {/* Dynamic Card Section */}
      <div className="max-w-screen-xl px-auto mx-auto mt-[20px]">
        <DynamicCard />
      </div>
    </div>
  );
}

export default Main;
