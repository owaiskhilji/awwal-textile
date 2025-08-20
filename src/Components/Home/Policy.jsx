// import React from 'react';
// import { Link } from 'react-router-dom';

// const Policy = () => {
//   return (
//     <div className="p-6 sm:p-8 md:p-12 font-sans flex flex-col items-center">
      
//       <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-[inter] text-gray-900 mb-6 sm:mb-8">
//         Privacy & Policy
//       </h1>

//       <div className="w-full max-w-5xl text-center">
        
//         <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-4">
// This privacy policy describes how Awwal Textiles uses and protects any information that you give us when you use this website.
//                </p>

//         <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-4">
      
//         Awwal Textiles may change this policy from time to time by updating this page. You should check this page occasionally to ensure that you are happy with any changes. This policy is effective from August 2025.
        
//         </p>
//         <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg leading-relaxed mb-4">
//       Awwal Textiles is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
//           <span className='text-blue-600 underline text-sm'><Link to="/policy">see more</Link></span>
        
//         </p>
//         </div>
//         </div>

//         )


//     } 

//     export default Policy


// Policy.js
import React from 'react';
import { Link } from 'react-router-dom';

const Policy = () => {
    return (
        <section className="py-16 font-sans">
            {/* Heading Section */}
            <div className="container mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Privacy & Policy
                </h2>
                <p className="mt-4 text-md sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
                    This privacy policy describes how Awwal Textiles uses and protects any information that you give us when you use this website.
                </p>
            </div>
            
            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-8 mt-10">
                <div className="w-full max-w-4xl mx-auto text-left">
                    <p className="text-gray-600 text-sm sm:text-md lg:text-lg leading-relaxed mb-6">
                        Awwal Textiles may change this policy from time to time by updating this page. You should check this page occasionally to ensure that you are happy with any changes. This policy is effective from August 2025.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-md lg:text-lg leading-relaxed mb-6">
                        Awwal Textiles is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Link to="/policy" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                            See More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Policy;