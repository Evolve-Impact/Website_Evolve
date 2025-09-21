"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import DropdownMenu from "../components/ui/DropdownMenu";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/Evolve Text-01 (1).png";
import wing from "../assets/Evolve Wings-01 (1).png";

// src/components/Navbar.tsx
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenMenu(null);
  };
  return (
    <header className="fixed top-0 w-full backdrop-blur-xl z-50 bg-zinc-100 font-montserrat-light border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 xl:px-6 px-4 text-gray-700">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center">
            <img src={wing} alt="logo" className="w-12 sm:w-14" />
            <img src={logo} alt="logo" className="w-32" />

            {/* <h1 className="font-bold text-2xl sm:text-3xl text-[#009ee2]">EVOLVE</h1> */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 poppins-semibold">
          <Link to={"/"} className="hover:text-[#009EE2]">
                Home
          </Link>
          <DropdownMenu
            label={
              <>
                <Link to="/about">
                  About Us <IoIosArrowDown className="inline-block " />
                </Link>
              </>
            }
            items={[
              { name: "Vision", href: "#Vision" },
              { name: "Mission", href: "#Mission" },
              { name: "Pillars", href: "#Pillors" },
            ]}
          />

          <DropdownMenu
            label={
              <>
                Products <IoIosArrowDown className="inline-block" />
              </>
            }
              items={[
                // { name: "Comlpyn", href: "#product1" },
                { name: "Employee Engagement Tool", href: "/engage-pulse" },
                { name: "Data Exchange", href: "/xlync" },
              { name: "Digital Product Passport", href: "/trace-tag" },
              // { name: "Shopymize", href: "#product5" },
              // { name: "ERP", href: "#product6" },
            ]}
          />
          {/* <DropdownMenu
            label={
              <>
                <Link to="/services">
                  Services <IoIosArrowDown className="inline-block" />
                </Link>
              </>
            }
            items={[
              { name: "IT Consultancy", href: "#It-Consultancy" },
              { name: "AI Consultancy", href: "#AI-Consultancy" },
              { name: "Business Consultancy", href: "#Business-Consultancy" },
            ]}
          /> */}
          {/* <DropdownMenu
            label={
              <>
                <Link to={"/brand-essence"}>
                  Brand Essence <IoIosArrowDown className="inline-block" />
                </Link>
              </>
            }
            items={[
              { name: "Logo", href: "#logo" },
              // { name: "Our People & Culture", href: "#our-people-and-culture" },
              { name: "Evolvepers", href: "#Evelopers" },
            ]}
          /> */}
           {/* <DropdownMenu
            label={
              <>
              <Link to={"/product-development"}>
                Product Developement <IoIosArrowDown className="inline-block" />
              </Link>
              </>
            }
              items={[
                // { name: "Comlpyn", href: "#product1" },
              { name: "Philosophy", href: "#Philosophy" },
              { name: "Methodology", href: "#Methodology" },
              
              // { name: "Shopymize", href: "#product5" },
              // { name: "ERP", href: "#product6" },
            ]}
          /> */}
        </nav>

        <div className="hidden lg:block">
          <Link to={"/contact-us"}>
            <InteractiveHoverButton className="bg-brand-cyan border-blue-400 text-white">
              Contact Us
            </InteractiveHoverButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}

        {/* <div
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </div> */}
        <div
          className="lg:hidden text-gray-700 text-3xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] sm:w-[60%] bg-gray-100 border-l border-zinc-400 z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <button
            className="text-gray-500 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col text-gray-700 gap-4">
        
          {/* <div className="border-b border-gray-700 pb-2">
            <button
              onClick={() => toggleSubmenu("brand")}
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-zinc-700"
            >
              Brand Essence
              <span>{openMenu === "brand" ? "−" : "+"}</span>
            </button>
            <div
              className={`pl-8 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                openMenu === "brand" ? "max-h-40" : "max-h-0"
              }`}
            >
              <a
                href="/brand-essence#logo"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Logo
              </a>
              <a
                href="/brand-essence#Evelopers"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Evolvepers
              </a>
            </div>
          </div> */}

          {/* About */}
          <div className="border-b border-gray-400 pb-2">
            <button
              onClick={() => toggleSubmenu("about")}
              className="flex justify-between items-center w-full px-4 py-2 font-bold hover:bg-zinc-700"
            >
              About Us
              <span>{openMenu === "about" ? "−" : "+"}</span>
            </button>
            <div
              className={`pl-8 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                openMenu === "about" ? "max-h-40" : "max-h-0"
              }`}
            >
              <a
                href="/about#Mission"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Mission
              </a>
              <a
                href="/about#Vision"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Vision
              </a>
              <a
                href="/about#Pillors"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Pillors
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="border-b border-gray-400 pb-2">
            <button
              onClick={() => toggleSubmenu("products")}
              className="flex justify-between items-center w-full px-4 py-2 font-bold hover:bg-zinc-700"
            >
              Products
              <span>{openMenu === "products" ? "−" : "+"}</span>
            </button>
            <div
              className={`pl-8 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                openMenu === "products" ? "max-h-40" : "max-h-0"
              }`}
            >
              <Link
                to="/trace-tag"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Digital Product Passport
              </Link>
              <Link
                to="/engage-pulse"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Employee Engagement Tool
              </Link>
              <Link
                to="/xlync"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Data Exchange
              </Link>
            </div>
          </div>

{/* 
          <div className="border-b border-gray-700 pb-2">
            <button
              onClick={() => toggleSubmenu("services")}
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-zinc-700"
            >
              Services
              <span>{openMenu === "services" ? "−" : "+"}</span>
            </button>
            <div
              className={`pl-8 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                openMenu === "services" ? "max-h-40" : "max-h-0"
              }`}
            >
              <a
                href="/services#It-Consultancy"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                IT Consultancy
              </a>
              <a
                href="/services#AI-Consultancy"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                AI Consultancy
              </a>
              <a
                href="/services#Business-Consultancy"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Business Consultancy
              </a>
            </div>
          </div>

         

          <div className="border-b border-gray-700 pb-2">
            <button
              onClick={() => toggleSubmenu("product-development")}
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-zinc-700"
            >
              Product Developement
              <span>{openMenu === "product-development" ? "−" : "+"}</span>
            </button>
            <div
              className={`pl-8 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                openMenu === "product-development" ? "max-h-40" : "max-h-0"
              }`}
            >
              <a
                href="/product-development#Philosophy"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Philosophy
              </a>
              <a
                href="/product-development#Methodology"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-zinc-700"
              >
                Methodology
              </a>
            
            </div>
          </div> */}


        </div>
      </div>
    </header>
  );
}
