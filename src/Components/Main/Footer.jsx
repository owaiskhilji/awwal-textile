import { Link } from "react-router-dom"

export default function Footer() {
    return (
      <footer className="bg-[#c9c9c9] py-6 px-16 tracking-wide border-t-4 border-black">
      <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
        <p className="text-black font-[500px] text-[15px] leading-loose">AWWAL Textiles. All rights reserved.</p>

        <ul className="flex space-x-8 gap-y-3 max-lg:justify-center flex-wrap">
          <li className="font-[inter] text-[15px] text-black">About us</li>
          <li className="font-[inter] text-[15px] text-black">Contact</li>
        </ul>
      </div>
    </footer>
    );
  }