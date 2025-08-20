// src/components/mans/DynamicCard.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import Shirt from "../../assets/Kids/Kshirt1.jpeg";
import Shirt2 from "../../assets/Kids/Kshirt 2.jpg";
import Paint from "../../assets/Kids/kPaints1.avif";
import Paint2 from "../../assets/Kids/kpAINTS2.jpg";
import Hoodie from "../../assets/Kids/Khoodie1.jpg";
import Hoodie2 from "../../assets/Kids/Khoodie2.jpg";
import Trouzer from "../../assets/Kids/ktrouzer.avif";
import Trouzer2 from "../../assets/Kids/ktrouzer.webp";

const DynamicCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="flex flex-col gap-6 md:ml-5">

      {/* 1 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Shirt} alt="Classic Kids Shirts" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Classic Kids Shirts</h2>
          <p className="text-center text-gray-600">
            A wardrobe staple for every child, our classic kids shirts are designed for all-day comfort and playful style. Crafted from breathable cotton and available in cheerful prints, they’re perfect for school, playdates, and weekend adventures.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Shirt2} alt="Trendy Printed Shirts" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Trendy Printed Shirts</h2>
          <p className="text-center text-gray-600">
            Fun meets fashion in our trendy printed shirts, featuring bright colors, bold patterns, and ultra-soft fabric. Perfect for casual outings or special occasions, they bring a burst of personality to any outfit.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Paint} alt="Comfort Fit Pants" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Comfort Fit Pants</h2>
          <p className="text-center text-gray-600">
            Designed for maximum movement, these comfort-fit pants are perfect for active kids. Made from sturdy yet soft fabrics in versatile colors, they can handle playground energy and still look great for outings.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Paint2} alt="Stylish Cargo Pants" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Stylish Cargo Pants</h2>
          <p className="text-center text-gray-600">
            Practical and stylish, our cargo pants offer plenty of pockets and a modern, relaxed fit. Lightweight and durable, they’re ideal for adventures big and small.
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Hoodie} alt="Cozy Everyday Hoodie" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Cozy Everyday Hoodie</h2>
          <p className="text-center text-gray-600">
            Stay warm and stylish with our cozy everyday hoodie. Made with a soft fleece lining and vibrant color options, it’s perfect for chilly days without compromising on comfort.
          </p>
        </div>
      </div>

      {/* 6 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Hoodie2} alt="Graphic Print Hoodie" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Graphic Print Hoodie</h2>
          <p className="text-center text-gray-600">
            Let your little one’s personality shine with our graphic print hoodies. Featuring playful artwork and bold designs, they’re a fun and comfortable choice for any season.
          </p>
        </div>
      </div>

      {/* 7 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Trouzer} alt="Smart Casual Trousers" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Smart Casual Trousers</h2>
          <p className="text-center text-gray-600">
            The perfect blend of style and comfort, these smart casual trousers are great for school events, family gatherings, or dressing up any day of the week.
          </p>
        </div>
      </div>

      {/* 8 */}
      <div className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={Trouzer2} alt="Relax Fit Trousers" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Relax Fit Trousers</h2>
          <p className="text-center text-gray-600">
            For all-day play and comfort, our relax-fit trousers feature soft, stretchy fabrics and a laid-back style that keeps kids happy and active.
          </p>
        </div>
      </div>

    </div>
  );
};

export default DynamicCard;