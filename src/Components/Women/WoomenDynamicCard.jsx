import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Shirt from "../../assets/women/jacket.jpg";
import Shirt2 from "../../assets/women/shorts-cort.jpg";
import Paint from "../../assets/women/weemen-jenes.jpg";
import Paint2 from "../../assets/women/wemen-cote.jpg";
import Hoodie from "../../assets/women/woomens-stitch.jpg";

const DynamicCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="flex flex-col gap-6 md:ml-5">
      {/* Classic Women's Shirt */}
      <div 
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Shirt} alt="Classic Women's Shirt" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Women's Faux Fur Jacket</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            This faux fur jacket combines warmth with elegance. Its soft design makes it cozy for chilly days. A must-have piece to upgrade your winter fashion.
          </p>
        </div>
      </div>

      {/* Trendy Women's Pants */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Paint} alt="Trendy Women's Pants" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Embroidered Women's Shirt</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            Crafted with fine floral embroidery, this shirt feels timeless. Wooden buttons add a unique charm. Perfect for everyday wear with a stylish twist.
          </p>
        </div>
      </div>

      {/* Casual Chic Shirt */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Shirt2} alt="Casual Chic Shirt" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Women's Stylish Peplum Coat</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            The peplum cut highlights your waist with elegance. Its flare adds a chic and modern look. An ideal coat for both casual and formal outings.
          </p>
        </div>
      </div>

      {/* Formal Trousers */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Paint2} alt="Formal Trousers" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Formal Trousers</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            These trousers are tailored for a clean and modern fit. Ideal for office or formal evenings. Pair them easily with shirts or blazers.
          </p>
        </div>
      </div>

      {/* Cozy Women's Hoodie */}
      <div
      data-aos="fade-up"
      className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Hoodie} alt="Cozy Women's Hoodie" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div
          className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4"
        >
          <h2 className="text-center text-2xl font-bold mb-2">Printed Women's Shalwar Kameez</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            A soft floral print gives this dress a graceful touch. Lightweight fabric makes it comfortable all day. Great for both festive and casual settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
