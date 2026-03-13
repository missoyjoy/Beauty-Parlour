import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="font-serif">
{/* 1️⃣ Hero/Image Section */} 
<section
  id="home"
  className="relative h-[70vh] bg-black flex items-center justify-center"
   >
  <img
    src="Face1.jpg" 
    alt="Beauty Parlor Hero"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />
   <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-[#E1C699] mb-4">
      Reveal Your Natural Beauty
    </h1>
    <p className="text-white text-lg md:text-xl mb-6">
      Experience premium hair, skin, and wellness services in the heart of New York.
    </p>
      <Link
       to="/booking"
       className="bg-[#E1C699] text-black font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition transform hover:scale-105 inline-block"
       >
       Book Appointment
     </Link>

     </div>
    </section>

    

      {/* 2️⃣ Why Choose Us Section */}
      <section
        id="why-us"
        className="py-20 bg-white text-black text-center px-4"
      >
        <h2 className="text-4xl font-bold text-[#E1C699] mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Premium Services</h3>
            <p>
              We use top-quality products and techniques to give you the ultimate beauty experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Experienced Team</h3>
            <p>
              Our skilled professionals ensure every client leaves feeling confident and pampered.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Luxury Ambience</h3>
            <p>
              Enjoy a relaxing environment designed for comfort, style, and elegance.
            </p>
          </div>
        </div>

        {/* Call Us Today Button */}
        <div className="mt-12">
         <a
         href="#contact"
         className="bg-[#E1C699] text-black font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition transform hover:scale-105 inline-block"
        >     
        Call Us Today
        </a>

        </div>
      </section>

      {/* 3️⃣ Placeholder for third section */}
      <section id="third" className="h-64 bg-black"></section>
    </div>
  );
}
