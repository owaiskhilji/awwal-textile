// import React from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from 'react';
// import machine from "../../assets/About/machine.jpg"
// import team from "../../assets/About/team.png"
// import thread from "../../assets/About/thread.png"
// import { Link } from 'react-router-dom';



// const About = () => {useEffect(() => {
//     AOS.init({
//       duration: 2000, 
//       once: true,   
//     });
//   }, []);




//   return (
//     <div className="relative flex flex-col md:flex-row my-8 lg:my-16 px-4 md:px-8 py-10 lg:py-12 gap-8 font-inter bg-transparent">
      
//       <div  data-aos="fade-right"
//  className="relative z-20 w-full md:w-1/2 mb-7 md:mb-0 space-y-6">
//         <p className="text-xl sm:text-2xl font-semibold text-gray-800">About us</p>
//         <h3 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl font-semibold font-[inter] text-gray-800 uppercase">
//           <span>AWWAL</span> - Textiles
//         </h3>
//         <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-6">
//     Grow your clothing brand with AWWAL Textiles. AWWAL Textiles is one of Pakistan’s leading clothing manufacturers and exporters. We specialize in wholesale and fully customized apparel for clients both locally and internationally.
// <br/>
// <br/>
// From initial design concepts to bulk production and delivery, we support startups, SMEs, and established fashion brands in bringing their vision to life. <span className='text-blue-600 underline text-sm'><Link to="/about">see more</Link></span>
//     </p>
//       </div>
      
//       {/* Right Image Column */}
//       <div data-aos="fade-left" className="py-16 relative z-0 w-full md:w-1/2 h-[270px] sm:min-h-[300px] lg:min-h-[400px]">
//         <div className="relative w-full h-full">
//           {/* Top-left image */}
//           <div className="absolute top-0 left-0 w-1/2 z-10 border-4 border-white shadow-xl rounded-xl overflow-hidden">
//             <img 
//               className="w-full h-full object-cover" 
//               src={thread} 
//               alt="Person in green FILA outfit sitting on bench"
//             />
//           </div>
          
//           {/* Middle image */}
//           <div className="absolute top-1/3 left-1/4 w-1/2 z-20 border-4 border-white shadow-xl rounded-xl overflow-hidden">
//             <img 
//               className="w-full h-full object-cover" 
//               src={team} 
//               alt="Person in red clothing in dynamic pose"
//             />
//           </div>
          
//           {/* Back-right image */}
//           <div className="absolute top-1/2 right-0 w-2/5 z-0 border-4 border-white shadow-xl rounded-xl overflow-hidden">
//             <img 
//               className="w-full h-full object-cover" 
//               src={machine} 
//               alt="Supreme red box close-up"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import machine from "../../assets/About/machine.jpg";
import team from "../../assets/About/team.png";
import thread from "../../assets/About/thread.png";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative bg-transparent py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            AWWAL - The Future of Textiles
          </h2>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              AWWAL Textiles is one of Pakistan’s leading clothing manufacturers, 
              offering wholesale and fully customized apparel. We specialize in 
              bringing unique fashion ideas to reality with world-class machinery 
              and expert craftsmanship.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src={machine}
              alt="Our Machines"
              className="rounded-xl shadow-lg w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <img
              src={team}
              alt="Our Team"
              className="rounded-xl shadow-lg w-full h-[350px] object-cover"
            />
          </div>
          <div data-aos="fade-left" className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              From startups to established brands, we empower fashion businesses 
              with reliable production, innovative designs, and top-quality textiles. 
              Our mission is to grow alongside our clients while redefining 
              Pakistan’s textile industry.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We cover the full process – from initial design concepts to 
              sampling, bulk production, and final delivery. Whether you’re 
              building a new brand or scaling globally, we make sure your 
              vision comes to life with perfection.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src={thread}
              alt="Thread"
              className="rounded-xl shadow-lg w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/about"
            data-aos="fade-up"
            className="border border-gray-900 text-gray-900 font-semibold tracking-wider uppercase py-3 px-6 rounded-[10px] shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
