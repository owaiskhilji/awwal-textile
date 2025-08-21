import React,{useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import bedsheet from "../../assets/House/bedsheet.webp";
import pillowcover from "../../assets/House/pillow3.jpg";
import perde from "../../assets/House/parday.jpg";
import sofacover from "../../assets/House/sofacover.jpg";
import bathtowel from "../../assets/House/bathtowel.webp";
import towel from "../../assets/House/towel.webp";

const DynamicCard = () => {

  useEffect(() => {
     AOS.init({ duration: 2000, once: true });
   }, [])


  return (
    <div className="flex flex-col gap-6 md:ml-5">

      {/* 1st Card */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={bedsheet} alt="Luxury Bedsheet" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Bedsheet</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">Soft and elegant bedsheets designed for comfort and style, giving your bedroom a fresh and cozy look.
          </p>
        </div>
      </div>

      {/* 2nd Card */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={pillowcover} alt="Signature Bed Sheets" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Pillow Cover</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            High-quality pillow covers that protect your pillows while adding a touch of elegance to your bedding.
          </p>
        </div>
      </div>

      {/* 3rd Card */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={perde} alt="Decorative Pillow Covers" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Curtains</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            Stylish and durable curtains that enhance privacy, control light, and bring charm to any room
          </p>
        </div>
      </div>

      {/* 4th Card */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={sofacover} alt="Custom Pillow Covers" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Sofa Covers</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">
            Elegant sofa covers that protect your furniture while giving your living room a stylish makeover.
          </p>
        </div>
      </div>
    
      {/* 5th Card */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={bathtowel} alt="Decorative Pillow Covers" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Bath Towel Suit</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">A complete bath towel set offering luxury, softness, and durability for everyday use.
          </p>
        </div>
      </div>

      {/* 6th Card */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={towel} alt="Custom Pillow Covers" className="w-full h-full object-cover" loading="lazy" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Bath Towel</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">Super absorbent and soft bath towels that keep you fresh, dry, and comfortable after every shower.
          </p>
        </div>
      </div>

    </div>
  );
};

export default DynamicCard;