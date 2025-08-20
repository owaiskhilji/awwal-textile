// src/components/mans/DynamicCard.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import Shirt from "../../assets/Kids/casuail.png";
import Shirt2 from "../../assets/Kids/ides-wonter.png";
import Paint from "../../assets/Kids/kides-tracksute.png";
import Paint2 from "../../assets/Kids/kides-casualil.png";
import Hoodie from "../../assets/Kids/kides-jym-uniorm.png";

const DynamicCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="flex flex-col gap-6 md:ml-5">

      {/* 1 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div
          className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] 
                     md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm"

        >
          <figure>
            <img src={Shirt} alt="Classic Kids Shirts" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black 
                     w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 
                     lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Kids' Casual Tracksuits</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            These comfortable tracksuits are perfect for outdoor adventures and allow complete freedom of movement.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div
          className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] 
                     md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm"
        >
          <figure>
            <img src={Shirt2} alt="Trendy Printed Shirts" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black 
                     w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 
                     lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Kids' Winter Hoodies and Tracksuits</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            Our colorful hoodies and tracksuits keep kids warm and comfortable during winter.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div
          className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] 
                     md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm"
        >
          <figure>
            <img src={Paint} alt="Comfort Fit Pants" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black 
                     w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 
                     lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Kids' Tracksuits</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            This vibrant tracksuit is designed for comfort, sports, and active play.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div
          className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] 
                     md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm"
        >
          <figure>
            <img src={Paint2} alt="Stylish Cargo Pants" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black 
                     w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 
                     lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Kids' Casual Collection</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            Our casual collection offers comfortable and stylish options for all kids.
          </p>
        </div>
      </div>

      {/* 5 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div
          className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] 
                     md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm"
          data-aos="fade-up"
        >
          <figure>
            <img src={Hoodie} alt="Cozy Everyday Hoodie" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black 
                     w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 
                     lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Kids' Gym Clothes</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            These gym uniforms provide comfort and flexibility for active kids.
          </p>
        </div>
      </div>

    </div>
  );
};

export default DynamicCard;
