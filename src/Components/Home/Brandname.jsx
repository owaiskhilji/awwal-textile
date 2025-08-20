import React from "react";
import "../../App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brand from "../../assets/Home/gul.jpg";

const sliderImages = [
  {
    id: 1,
    src: brand,
    alt: "Salomon",
  },
  {
    id: 2,
    src: brand,
    alt: "BURTON",
  },
  {
    id: 3,
    src: brand,
    alt: "OAKLEY",
  },
  {
    id: 4,
    src: brand,
    alt: "Timberland",
  },
  {
    id: 5,
    src: brand,
    alt: "CONVERSE",
  },
  {
    id: 6,
    src: brand,
    alt: "STUSSY",
  },
  {
    id: 7,
    src: brand,
    alt: "VANS",
  },
  {
    id: 8,
    src: brand,
    alt: "VANS",
  },
  {
    id: 9,
    src: brand,
    alt: "VANS",
  },
  {
    id: 10,
    src: brand,
    alt: "VANS",
  },
  {
    id: 11,
    src: brand,
    alt: "VANS",
  },
  {
    id: 12,
    src: brand,
    alt: "VANS",
  },
];

function Brandname() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container my-12 px-4">
      <Slider {...settings}>
        {sliderImages.map((item) => (
          <div key={item.id} className="p-4 flex justify-center items-center">
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-28 w-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Brandname;



