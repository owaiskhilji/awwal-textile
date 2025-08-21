import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Import images from the src directory
import Shirt from "../../assets/main/capes.png";
import Shirt2 from "../../assets/main/men-cotes.jpg";
import Paint from "../../assets/main/men-track-sute-2.jpg";
import Paint2 from "../../assets/main/men-tracksute.jpg";
import Hoodie from "../../assets/main/mens-pritnted.png";
import cap from "../../assets/main/cap.png";

const DynamicCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 md:ml-5">

      {/* Card 1 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Shirt} alt="Classic Oxford Shirt" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Awwal Textiles Merchandise</h2>
          <p className="description text-center text-gray-600 w-full lg:w-96">
            Explore exclusive Awwal Textiles merchandise, from t-shirts to notebooks. Each product reflects quality and modern style.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Shirt2} alt="Slim Fit Casual Shirt" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Elegant Men's Coats</h2>
          <p className="description text-center text-gray-600 w-full lg:w-96">
            Our coats blend warmth with timeless elegance. Perfect for both casual outings and formal settings.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Paint} alt="Relaxed Fit Chinos" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Classic Men's Tracksuits</h2>
          <p className="description text-center text-gray-600 w-full lg:w-96">
            Designed for comfort and durability, these tracksuits are versatile. Wear them for workouts or casual street style.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Paint2} alt="Tailored Formal Pants" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Premium Men's Tracksuits</h2>
          <p className="description text-center text-gray-600 w-full lg:w-96">
            Crafted from breathable fabrics, these tracksuits keep you active. A perfect balance of performance and style.
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Hoodie} alt="Cozy Pullover Hoodie" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
          
        >
          <h2 className="text-center text-2xl font-bold mb-2">Stylish Men's Printed Shirts</h2>
          <p className="description text-center text-gray-600 w-full lg:w-96">
            Bold prints meet premium fabrics in our shirt collection. Ideal for casual days and standout looks.
          </p>
        </div>
      </div>

            {/* Card 6 */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={cap} alt="Tailored Formal Pants" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Awwal Textiles Cap</h2>
          <p className="description text-center text-gray-600 w-full lg:w-96">
            A clean white cap displays "Awwal Textiles" in bold black lettering. This simple design offers a professional and versatile look. Perfect for representing the brand or for everyday casual wear
          </p>
        </div>
      </div>


    </div>
  );
};

export default DynamicCard;
