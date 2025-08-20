import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import men from "../../assets/About/men.png";
import women from "../../assets/About/women.png";
import kids from "../../assets/About/kids.png";
import sport from "../../assets/uniform/comarates-uniform.png";
import household from "../../assets/About/household.png";

const Cards = () => {
  return (
    <section className="container mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Shop By Collection
        </h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of collections curated just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Banner - Men's Collection */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.01]">
          <img
            className="w-full h-full object-cover aspect-square lg:aspect-[3/2] transition-transform duration-500 group-hover:scale-110"
            src={men}
            alt="Men's Collection"
          />
          {/* Overlay with a gradient for a premium look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 transition-opacity duration-500 group-hover:opacity-80"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Men's Collection
            </h2>
            <Link
              to="/men"
              className="inline-block px-8 py-3 text-lg font-semibold tracking-wide  text-white bg-black hover:bg-gray-700 rounded-[10px] shadow-lg transition-all duration-300  hover:scale-105"
            >
              See More
            </Link>
          </div>
        </div>

        {/* Right Banners - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Women's Collection */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              src={women}
              alt="Women's Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Women's</h3>
              <Link
                to="/women"
                className="inline-block px-6 py-2 text-md font-semibold tracking-wide  text-white bg-black hover:bg-gray-700 rounded-[10px] shadow-md transition-all duration-300 "
              >
                See More
              </Link>
            </div>
          </div>

          {/* Kids Collection */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              src={kids}
              alt="Kids Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Kids</h3>
              <Link
                to="/kids"
                className="inline-block px-6 py-2 text-md font-semibold tracking-wide  text-white bg-black hover:bg-gray-700 rounded-[10px] shadow-md transition-all duration-300 "
              >
                See More
              </Link>
            </div>
          </div>

          {/* Sports Collection */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              src={sport}
              alt="Sports Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Uniforms</h3>
              <Link
                to="/uniform"
                className="inline-block px-6 py-2 text-md font-semibold tracking-wide  text-white bg-black hover:bg-gray-700 rounded-[10px] shadow-md transition-all duration-300 "
              >
                See More
              </Link>
            </div>
          </div>

          {/* Household Collection */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
            <img
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              src={household}
              alt="Household Items"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Household</h3>
              <Link
                to="/house"
                className="inline-block px-6 py-2 text-md font-semibold tracking-wide  text-white bg-black hover:bg-gray-700 rounded-[10px] shadow-md transition-all duration-300 "
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;