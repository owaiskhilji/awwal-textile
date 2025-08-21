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
      <li className=" hover:bg-gray-900 hover:rounded-[6px] text-gray-900 hover:text-white pl-2 py-1 h-7" ><Link onClick={handleLinkClick} to="/men" className="w-full h-full ">Men</Link></li>
      <li className=" hover:bg-gray-900 hover:rounded-[6px] text-gray-900 hover:text-white pl-2 py-1 h-7"><Link onClick={handleLinkClick} to="/women" className="w-full h-full">Women</Link></li>
      <li className=" hover:bg-gray-900 hover:rounded-[6px] text-gray-900 hover:text-white pl-2 py-1 h-7"><Link onClick={handleLinkClick} to="/kids" className="w-full h-full">Kids</Link></li>
      <li className=" hover:bg-gray-900 hover:rounded-[6px] text-gray-900 hover:text-white pl-2 py-1 h-7"><Link onClick={handleLinkClick} to="/uniform" className="w-full h-full">Uniform</Link></li>
      <li className=" hover:bg-gray-900 hover:rounded-[6px] text-gray-900 hover:text-white pl-2 py-1 h-7"><Link onClick={handleLinkClick} to="/house" className="w-full h-full ">HouseHold</Link></li>
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