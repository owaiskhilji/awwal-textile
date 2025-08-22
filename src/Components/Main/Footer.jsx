import { Link } from "react-router-dom"

export default function Footer() {
    return (
      <footer className="bg-[#c9c9c9] py-6 px-16 tracking-wide border-t-4 border-black">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-black font-[500px] text-[15px] leading-loose">AWWAL Textiles. All rights reserved.</p>

        <ul className="flex space-x-8 gap-y-3 max-lg:justify-center flex-wrap">
          <li className="font-[inter] text-[15px] text-black hover:underline"><Link to="/about">About us</Link></li>
          <li className="font-[inter] text-[15px] text-black hover:underline"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
    );
  }