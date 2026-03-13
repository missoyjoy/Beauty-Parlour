import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">

        {/* 1st Section: Logo + About Us */}
        <div>
          <img
            src="Beautylogo.jpg"
            alt="Beauty Parlor Logo"
            className="h-16 mb-4 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-gray-300">
            Glow Beauty Parlor offers premium hair, skin, and wellness services, ensuring you leave looking and feeling your best.
          </p>
        </div>

        {/* 2nd Section: Book/Consultation/FAQs */}
        <div className="space-y-2">
          <a href="#book" className="block hover:text-[#E1C699] transition transform hover:scale-105">
            Book an Appointment
          </a>
          <a href="#consultation" className="block hover:text-[#E1C699] transition transform hover:scale-105">
            Consultation
          </a>
          <a href="#faqs" className="block hover:text-[#E1C699] transition transform hover:scale-105">
            FAQs
          </a>
        </div>

        {/* 3rd Section: Social Media + Location + Phone */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1C699] transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1C699] transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1C699] transition">
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-300">
            <FaMapMarkerAlt className="text-[#E1C699]" />
            <span>123 Glamour St, New York, NY</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2 text-gray-300">
            <FaPhoneAlt className="text-[#E1C699]" />
            <span>+1 (212) 555-1234</span>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © 2026 Glow Beauty Parlor. All Rights Reserved.
      </div>
    </footer>
  );
}
