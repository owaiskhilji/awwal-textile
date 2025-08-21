import React from 'react';

const Abouts = () => {
  return (
    <div className="mt-20 p-6 sm:p-8 md:p-12 min-h-screen font-sans flex flex-col items-center">
      
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-[inter] text-gray-900 mb-6 sm:mb-8">
        About Us – AWWAL Textiles
      </h1>

      <div className="w-full text-left">
        
        <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-4">
          Grow your clothing brand with AWWAL Textiles. AWWAL Textiles is one of Pakistan’s leading clothing manufacturers and exporters. We specialize in wholesale and fully customized apparel for clients both locally and internationally.
        </p>

        <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-4">
          From initial design concepts to bulk production and delivery, we support startups, SMEs, and established fashion brands in bringing their vision to life.
        </p>

        <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-6">
          Our expertise includes men’s, women’s, and children’s wear — whether casual, formal, sportswear, uniforms, or promotional apparel. With years of experience in the textile industry, we deliver garments that combine style, comfort, and durability.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Low Minimum Order Quantities
        </h2>
        <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-6">
          We believe that high-quality custom clothing should be accessible to brands of all sizes. That’s why we offer some of the lowest minimum order quantities in the industry, starting from just 70 pieces per design, with flexible sizing options. This lets you create limited-edition collections or launch your brand without a large upfront investment.
        </p>

        {/* Local & Global Orders section */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Local & Global Orders at Competitive Prices
        </h2>
        <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-6">
          Whether you are in Pakistan or anywhere else in the world, we are ready to serve you. Our manufacturing facilities allow us to offer factory-direct pricing while maintaining strict international quality standards. We ensure your products arrive on time, every time.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Why Choose AWWAL Textiles?
        </h2>
        
        <ul className="list-none space-y-2">
          <li className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
            <span role="img" aria-label="globe">🌍</span> Accepting both Local and Global Orders
          </li>
          <li className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
            <span role="img" aria-label="sewing needle">🪡</span> Premium Fabrics and Expert Stitching
          </li>
          <li className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
            <span role="img" aria-label="bullseye">🎯</span> Fully Customizable Clothing
          </li>
          <li className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
            <span role="img" aria-label="package">📦</span> Low Minimum Order Quantities and Bulk Orders
          </li>
          <li className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
            <span role="img" aria-label="money bag">💰</span> Competitive Factory Pricing
          </li>
          <li className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
            <span role="img" aria-label="high voltage">⚡</span> Fast Production and Reliable Delivery
          </li>
        </ul>

        {/* Contact info and final tagline */}
        <div className="mt-8">
          <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-2">
            <span role="img" aria-label="email">📧</span> Email: <span className='text-blue-700 underline'> awwaltextiles@gmail.com</span>
          </p>
          <p className="text-gray-800 font-semibold font-sans text-md sm:text-lg md:text-lg lg:text-lg">
            AWWAL Textiles – Your trusted clothing partner for quality, style, and growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abouts;