// import { RiInstagramFill } from "react-icons/ri";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Evolve Text-01 (1).png";
import wing from "../assets/Evolve Wings-01 (1).png";
// import { FaLinkedinIn } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
    <>
      <section className="py-10 px-6 border-t border-[#009EE2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10 pt-10 font-montserrat-light">
          {/* Left Section */}
          <div>
            <Link to={"/"}>
              <div className="flex items-center">
                <img src={wing} alt="logo" className="w-12 sm:w-14" />
                <img src={logo} alt="logo" className="w-32" />
              </div>
            </Link>
            <ul className="text-sm text-gray-600 space-y-2 mb-4 md:tex  t-left pt-4">
              <li className="flex items-center gap-2">
                <IoLocationSharp className="text-2xl"/>
                Office Number 229, 2nd Floor NASTP Silicon 1, Shahre Faisal,
                Karachi Sindh, Pakistan
              </li>
              <li className="flex items-center gap-2"><IoMdMail className="text-2xl"/> contact@evolvebitx.com</li>
              {/* <li>+92 301 2721661</li> */}
            </ul>
            <div className="flex md:justify-start items-center text-2xl text-gray-500 gap-4">
              {/* <a href="#" className="hover:text-cyan-700">
                <FaLinkedinIn />
              </a> */}
              {/* <a href="#" className="hover:text-cyan-700">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-cyan-700">
                <FaTwitter />
              </a> */}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:text-left text-gray-700">
            {/* <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Brand Essence
              </h3>
              <ul className="space-y-1 flex flex-col">
                <a href="#" className="hover:text-[#019EE3] transition">
                  Logo
                </a>
                <a href="#" className="hover:text-[#019EE3] transition">
                  Evolvepers
                </a>
              </ul>
            </div> */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-cyan">
                Products
              </h3>
              <ul className="space-y-1 flex flex-col">
                 <Link
                to="/xlync"
          
                className="hover:text-blue-500 transition "
              >
                Data Exchange
              </Link>
                 <Link
                to="/trace-tag"
                
                className="hover:text-blue-500 transition "
              >
                Digital Product Passport
              </Link>
              <Link
                to="/engage-pulse"
                
                className="hover:text-blue-500 transition "
              >
                Employee Engagement Tool
              </Link>
             
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-cyan">
                About Us
              </h3>
              <ul className="space-y-1 flex flex-col">
                <a href="/about#Vision" className="hover:text-blue-500 transition ">
                      Vision
                </a>
                <a href="/about#Mission" className="hover:text-blue-500 transition ">
                  Mission
                </a>
                <a href="/about#Pillors" className="hover:text-blue-500 transition ">
                  Pillars
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
