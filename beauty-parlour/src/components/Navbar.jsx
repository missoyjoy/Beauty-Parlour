import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mainMenu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const servicesMenu = [
    "Massage",
    "Hair Beauty",
    "Barbershop",
    "Waxing",
    "Sauna",
    "Body Scrub",
    "Pedicure",
    "Manicure",
  ];

  const goldColor = "#E1C699"; // softer gold

  return (
    <header className="sticky top-0 z-50">
      {/* Main Navbar */}
      <nav className="bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo with hover grow + glow effect */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="Beautylogo.jpg"
                  alt="Beauty Parlor Logo"
                  className="h-20 w-auto transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_#E1C699] cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-serif text-lg">
              {mainMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-white hover:text-[#E1C699] transition transform hover:scale-110 hover:shadow-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-[#E1C699] hover:text-white focus:outline-none focus:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isOpen && (
       <div className="md:hidden px-2 pt-2 pb-4 space-y-1 bg-black overflow-x-auto">
       {mainMenu.map((item) => (
        <a
        key={item.name}
        href={item.href}
        className="block px-3 py-2 rounded hover:bg-[#E1C699] font-semibold whitespace-nowrap"
        >
        {item.name}
       </a>
      ))}
     </div>
  )}


      {/* Services Submenu Navbar */}
      <div className="bg-black overflow-x-auto whitespace-nowrap border-t-4 border-[#E1C699]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-4 py-3 font-serif text-sm md:text-base text-[#E1C699]">
          {/* Start marker */}
          <span className="font-bold">&lt;</span>

          {servicesMenu.map((service) => {
            // convert service name to lowercase dash path, e.g., "Hair Beauty" → "/hair-beauty"
            const path = `/${service.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={service}
                to={path}
                className="hover:text-white transition transform hover:scale-110 hover:shadow-lg"
              >
                {service}
              </Link>
            );
          })}

          {/* End marker */}
          <span className="font-bold">&gt;</span>
        </div>
      </div>
    </header>
  );
}

