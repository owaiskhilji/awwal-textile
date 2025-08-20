import React from "react";
import "../../App.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/Card/shirt.png";
import image2 from "../../assets/Card/jeans.png";
import image3 from "../../assets/Card/sport.png";
import image4 from "../../assets/Card/sport2.png";
import image5 from "../../assets/Card/T-shirt.png";
import image6 from "../../assets/Card/teraozr.png";
import image7 from "../../assets/Card/women-suite.png";
import image8 from "../../assets/Card/women.png";
import image9 from "../../assets/Card/kids-siut.png";
import image10 from "../../assets/Card/uniform.png";
import image11 from "../../assets/Card/household2.png";
import image12 from "../../assets/Card/household1.png";

const sliderImages = [
  {
    id: 1,
    src: image1,
    title: "Men's Collection",
    subtitle: "Premium Essentials",
  },
  {
    id: 2,
    src: image2,
    title: "Women's Jeans",
    subtitle: "Our Favourites",
  },
  {
    id: 3,
    src: image3,
    title: "Streetwear",
    subtitle: "Modern & Bold",
  },
  {
    id: 4,
    src: image4,
    title: "Jackets & Coats",
    subtitle: "Stay Warm & Dry",
  },
  {
    id: 5,
    src: image5,
    title: "T-Shirts",
    subtitle: "Casual & Comfy",
  },
  {
    id: 6,
    src: image6,
    title: "New Arrivals",
    subtitle: "Explore More",
  },
  {
    id: 7,
    src: image7,
    title: "Women's Suits",
    subtitle: "Formal Wear",
  },
  {
    id: 8,
    src: image8,
    title: "New Arrivals",
    subtitle: "Elegant Wear",
  },
  {
    id: 9,
    src: image9,
    title: "Kids' Outfits",
    subtitle: "Cute & Stylish",
  },
  {
    id: 10,
    src: image10,
    title: "Uniforms",
    subtitle: "Professional Look",
  },
  {
    id: 11,
    src: image11,
    title: "Home Textiles",
    subtitle: "For Your House",
  },
  {
    id: 12,
    src: image12,
    title: "Home Textiles",
    subtitle: "For Your House",
  },
];

function CardSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    className: "center",
    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="hidden lg:block py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Explore Our Categories
        </h2>
        <p className="mt-4 text-md sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
          Find the perfect style for every occasion from our curated collections.
        </p>
      </div>

      <div className="mt-12 px-2 sm:px-4">
        <Slider {...settings}>
          {sliderImages.map((item) => (
            <div key={item.id} className="p-2">
    <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105">
              <div className="relative w-full aspect-[4/5]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay for text and hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-start p-6 transition-all duration-500 group-hover:bg-opacity-50">
                  <div className="text-left text-white">
                    <h3 className="text-lg font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CardSlide;



