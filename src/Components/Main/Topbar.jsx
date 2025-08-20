// import { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// import logo from "../../assets/logo/logo1.png";
// import TableBook from "../TableBook/TableBook";
// import { MdEmail } from "react-icons/md";


// function Topbar() {
  //   const [galleryOpen, setGalleryOpen] = useState(false); // Mobile toggle
  //   const [desktopGalleryOpen, setDesktopGalleryOpen] = useState(false); // Desktop hover
  
  // import TableBook from "../TableBook/TableBook";

//   function openModal() {
//     const modal = document.getElementById('my_modal_5');
//     if (modal) {
//       modal.showModal();
//     } else {
//       console.error("Modal not found!");
//     }
//   }

//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDesktopGalleryOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);



//   return (
//     <div className="fixed z-10 navbar px-4 bg-white/70 shadow-md text-black h-[80px] sm:h-[70px] md:h-[70px] lg:h-[80px] border-b-2">
//       <TableBook />
//       <div className="navbar-start">
//         {/* Mobile Menu */}
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm sm:menu-md md:menu-lg dropdown-content text-black bg-white rounded-box z-1 mt-3 w-64 p-2 shadow"
//           >
//             <li className="font-[inter] text-md hover:text-textcolor">
//               <Link className="py-3" to="/" onClick={() => document.activeElement.blur()}>Home</Link>
//             </li>

//             {/* Mobile Gallery Dropdown */}
//             <li className="font-[inter] hover:text-textcolor">
//               <button
//                 onClick={() => setGalleryOpen(!galleryOpen)}
//                 className="w-full py-3 text-md text-left flex items-center justify-between hover:text-textcolor"
//               >
//                 <span>Gallery</span>
//                 {galleryOpen ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
//               </button>
//               {galleryOpen && (
//                 <ul className="pl-4">
//                   <li><Link onClick={() => document.activeElement.blur()} to="/men">Men</Link></li>
//                   <li><Link onClick={() => document.activeElement.blur()} to="/women">Women</Link></li>
//                   <li><Link onClick={() => document.activeElement.blur()} to="/kids">Kids</Link></li>
//                   <li><Link onClick={() => document.activeElement.blur()} to="/uniform">Uniform</Link></li>
//                   <li><Link onClick={() => document.activeElement.blur()} to="/house">HouseHold</Link></li>
//                 </ul>
//               )}
//             </li>

//             <li className="font-[inter] text-md hover:text-textcolor">
//               <Link className="py-3" to="/about" onClick={() => document.activeElement.blur()}>About us</Link>
//             </li>
//             <li className="font-[inter] text-md hover:text-textcolor">
//               <Link className="py-3" to="/contact" onClick={() => document.activeElement.blur()}>Contact us</Link>
//             </li>
//             <li className="font-[inter] text-md hover:text-textcolor">
//               <Link className="py-3" to="/policy" onClick={() => document.activeElement.blur()}>Privacy & Policy</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Logo */}
//         <div
//           onClick={() => navigate("/")}
//           className='cursor-pointer h-[40px] sm:h-[40px] md:h-[70px] lg:h-[70px]'
//         >
//           <img src={logo} alt="logo" className='w-full h-full' />
//         </div>
//       </div>

//       {/* Desktop Menu */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu-horizontal px-1 lg:gap-x-8">
//           <li className="lg:text-xl font-semibold font-[inter] hover:text-textcolor hover:underline">
//             <Link to="/">Home</Link>
//           </li>

//  <li className="lg:text-xl font-[inter] relative" ref={dropdownRef}>
//       <span
//         onClick={() => setDesktopGalleryOpen(!desktopGalleryOpen)}
//         className="flex font-semibold hover:text-textcolor items-center cursor-pointer"
//       >
//         Gallery{" "}
//         {desktopGalleryOpen ? (
//           <RiArrowDropUpLine className="relative top-[1px] w-6 h-6" />
//         ) : (
//           <RiArrowDropDownLine className="relative top-[1px] w-6 h-6" />
//         )}
//       </span>

//       {desktopGalleryOpen && (
//         <ul className="absolute left-0 bg-white shadow-md rounded-md mt-2 p-2 w-40 z-50">
//           <li>
//             <Link
//             onClick={() => setDesktopGalleryOpen(false)}
//               to="/men"
//               className="block hover:rounded-lg text-lg px-2 py-1 hover:bg-gray-100"
//             >
//               Men
//             </Link>
//           </li>
//           <li>
//             <Link
//             onClick={() => setDesktopGalleryOpen(false)}
//               to="/women"
//               className="block hover:rounded-lg text-lg px-2 py-1 hover:bg-gray-100"
//             >
//               Women
//             </Link>
//           </li>
//           <li>
//             <Link
//             onClick={() => setDesktopGalleryOpen(false)}
//               to="/kids"
//               className="block hover:rounded-lg text-lg px-2 py-1 hover:bg-gray-100"
//             >
//               Kids
//             </Link>
//           </li>
//           <li>
//             <Link
//             onClick={() => setDesktopGalleryOpen(false)}
//               to="/uniform"
//               className="block hover:rounded-lg text-lg px-2 py-1 hover:bg-gray-100"
//             >
//               Uniform
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={() => setDesktopGalleryOpen(false)}
//               to="/house"
//               className="block hover:rounded-lg text-lg px-2 py-1 hover:bg-gray-100"
//             >
//               HouseHold
//             </Link>
//           </li>
//         </ul>
//       )}
//     </li>
//           <li className="lg:text-xl font-semibold font-[inter] hover:text-textcolor hover:underline">
//             <Link to="/about">About us</Link>
//           </li>
//           <li className="lg:text-xl font-semibold font-[inter] hover:text-textcolor hover:underline">
//             <Link to="/contact">Contact us</Link>
//           </li>
//           <li className="lg:text-xl font-semibold font-[inter] hover:text-textcolor hover:underline">
//             <Link to="/policy">Privacy & Policy</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Email Icon */}
//       <div
//         onClick={openModal}
//         className='navbar-end cursor-pointer h-[20px] sm:h-[30px] md:h-[50px] lg:h-[50px]'
//       >
//         <MdEmail className='w-8 sm:w-32 h-full' />
//       </div>
//     </div>
//   );
// }

// export default Topbar;


import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo/logo1.png";
  import TableBook from "../TableBook/TableBook";


const Topbar = ({ openModal }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const dropdownRef = useRef(null);
const [isDesktopGalleryOpen, setIsDesktopGalleryOpen] = useState(false);
const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);

const handleLinkClick = () => {
  setIsMobileMenuOpen(false);
  setIsDesktopGalleryOpen(false);
  setIsMobileGalleryOpen(false);
};


    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsGalleryOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    


  function openModal() {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal not found!");
    }
  }




    return (
      <>
      <TableBook/>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" onClick={handleLinkClick}>
                        <img src={logo} alt="AWWAL Logo" className='h-12' />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    <Link to="/" className="text-gray-700 font-semibold transition-colors duration-300 hover:text-textcolor hover:underline">
                        Home
                    </Link>

                    {/* Desktop Gallery Dropdown */}
<div className="relative" ref={dropdownRef}>
  <button
    onClick={() => setIsDesktopGalleryOpen(!isDesktopGalleryOpen)}
    className="flex items-center text-gray-700 font-semibold transition-colors duration-300 hover:text-textcolor"
  >
    Gallery
    {isDesktopGalleryOpen ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
  </button>
  {isDesktopGalleryOpen && (
    <ul className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg p-2 mt-3 w-40">
      <li><Link onClick={handleLinkClick} to="/men" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Men</Link></li>
      <li><Link onClick={handleLinkClick} to="/women" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Women</Link></li>
      <li><Link onClick={handleLinkClick} to="/kids" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Kids</Link></li>
      <li><Link onClick={handleLinkClick} to="/uniform" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Uniform</Link></li>
      <li><Link onClick={handleLinkClick} to="/house" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">HouseHold</Link></li>
    </ul>
  )}
</div>

                    <Link to="/about" className="text-gray-700 font-semibold transition-colors duration-300 hover:text-textcolor hover:underline">
                        About us
                    </Link>
                    <Link to="/contact" className="text-gray-700 font-semibold transition-colors duration-300 hover:text-textcolor hover:underline">
                        Contact us
                    </Link>
                    <Link to="/policy" className="text-gray-700 font-semibold transition-colors duration-300 hover:text-textcolor hover:underline">
                        Pravicy & Policy
                    </Link>
                </div>

                {/* Mobile Hamburger & Email Icon */}
                <div className="flex items-center space-x-4 md:space-x-8">
                    <button onClick={openModal} className="hover:bg-gray-300 p-1 rounded-[5px] transition-colors duration-300">
                        <MdEmail size={28} />
                    </button>
                    <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-textcolor focus:outline-none">
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

<div
  className={`md:hidden overflow-hidden bg-white shadow-lg transition-all duration-500 ease-in-out ${
    isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <ul className="flex flex-col items-start px-4 py-4 space-y-4">
    <li className="w-full py-3 border-b-2 border-gray-200">
      <Link
        onClick={handleLinkClick}
        to="/"
        className="w-full text-gray-700 hover:text-gray-900 hover:underline font-medium"
      >
        Home
      </Link>
    </li>

    {/* Gallery Dropdown in Mobile */}
<li className="w-full py-3 border-b-2 border-gray-200">
  <button
    onClick={() => setIsMobileGalleryOpen(!isMobileGalleryOpen)}
    className="w-full flex justify-between items-center text-gray-700 hover:text-gray-900 font-medium"
  >
    Gallery
    {isMobileGalleryOpen ? (
      <RiArrowDropUpLine size={24} />
    ) : (
      <RiArrowDropDownLine size={24} />
    )}
  </button>
  {isMobileGalleryOpen && (
    <ul className="pl-4 mt-2 space-y-2">
      <li><Link onClick={handleLinkClick} to="/men" className="text-gray-600 hover:text-gray-900 hover:underline ">Men</Link></li>
      <li><Link onClick={handleLinkClick} to="/women" className="text-gray-600 hover:text-gray-900 hover:underline ">Women</Link></li>
      <li><Link onClick={handleLinkClick} to="/kids" className="text-gray-600 hover:text-gray-900 hover:underline ">Kids</Link></li>
      <li><Link onClick={handleLinkClick} to="/uniform" className="text-gray-600 hover:text-gray-900 hover:underline ">Uniform</Link></li>
      <li><Link onClick={handleLinkClick} to="/house" className="text-gray-600 hover:text-gray-900 hover:underline ">HouseHold</Link></li>
    </ul>
  )}
</li>


    <li className="w-full py-3 border-b-2 border-gray-200">
      <Link
        onClick={handleLinkClick}
        to="/about"
        className="w-full text-gray-700 hover:text-gray-900 hover:underline font-medium"
      >
        About us
      </Link>
    </li>
    <li className="w-full py-3 border-b-2 border-gray-200">
      <Link
        onClick={handleLinkClick}
        to="/contact"
        className="w-full text-gray-700 hover:text-gray-900 hover:underline  font-medium"
      >
        Contact us
      </Link>
    </li>
    <li className="w-full py-3 border-b-2 border-gray-200">
      <Link
        onClick={handleLinkClick}
        to="/policy"
        className="w-full text-gray-700 hover:text-gray-900 hover:underline font-medium"
      >
        Privacy & Policy
      </Link>
    </li>
  </ul>
  
</div>

        </nav>
        </>
    );
};

export default Topbar;