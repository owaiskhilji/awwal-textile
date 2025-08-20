import React,{useEffect} from "react";
import MSport1 from "../../assets/uniform/boys-sports-uni.png";     
import MSport2 from "../../assets/uniform/comarates-uniform.png";    
import MOffice1 from "../../assets/uniform/kides-school-uniform.png";    
import MOffice2 from "../../assets/uniform/kidesforms.png";    
import WSport1 from "../../assets/uniform/jym-uni-wonmen.png"; 
import AOS from "aos";
import "aos/dist/aos.css";


const DynamicCard = () => {
 
   useEffect(() => {
     AOS.init({ duration: 2000, once: true });
   }, []);
 
 
  return (
    <div className="flex flex-col gap-6 md:ml-5">
      
      {/* Card 1 */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4" >
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={MSport1} alt="Men's Sports Uniform" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Boys Sports Uniform</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">Comfortable and durable sportswear, perfect for school games and outdoor activities.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={MSport2} alt="Pro Athlete Kit" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Corporate Uniform</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">Elegant and professional uniforms, perfect for offices and business environments.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4" >
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={MOffice1} alt="Men's Office Suit" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Kids School Uniform</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">Neat and smart school wear that stays comfortable and wrinkle-free all day.</p>
        </div>
      </div>

      {/* Card 4 */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row-reverse items-center gap-4">
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={MOffice2} alt="Executive Men's Uniform" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Kids Sports Uniform</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">Lightweight and breathable uniform that gives kids a sporty look with free movement</p>
        </div>
      </div>

      {/* Card 5 */}
      <div data-aos="fade-up" className="md:w-[770px] lg:w-full flex flex-col md:flex-row items-center gap-4" >
        <div className="mx-auto card bg-base-100 w-64 h-64 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-[385px] lg:w-[630px] lg:h-[600px] shadow-sm">
          <figure>
            <img src={WSport1} alt="Women's Sports Uniform" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center shadow-sm shadow-black w-64 h-72 sm:w-[620px] sm:h-[620px] md:w-[385px] md:h-96 lg:w-[630px] lg:h-[600px] p-4">
          <h2 className="text-center text-2xl font-bold mb-2">Women Gym Uniform</h2>
          <p className="text-center text-gray-600 w-full lg:w-96">Stylish and flexible gym wear, ideal for workouts, yoga, and training sessions.</p>
        </div>
      </div>


    </div>
  );
};

export default DynamicCard;

