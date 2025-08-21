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
    <section className="relative bg-transparent py-20 lg:py-28 ">
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
            className="border border-gray-900 text-gray-900 font-semibold tracking-wider uppercase py-3 px-6 rounded-[10px] shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-textcolor"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
