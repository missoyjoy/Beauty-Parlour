// src/pages/Manicure.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const manicureServices = [
  { name: "Classic Manicure", price: "$25", duration: "35 mins", image: "manicure.jpg" },
  { name: "Spa Manicure", price: "$35", duration: "50 mins", image: "manicurespa.jpg" },
  { name: "Gel & Acrylic Nails", price: "$45", duration: "60 mins", image: "Fingernailart.jpg" },
];

export default function Manicure() {
  const navigate = useNavigate();

  const handleBookNow = (service) => {
    // Save selected service info to localStorage
    localStorage.setItem(
      "selectedService",
      JSON.stringify({
        title: service.name,
        price: service.price,
        duration: service.duration,
      })
    );
    // Navigate to booking page
    navigate("/booking");
  };

  return (
    <section className="py-20 bg-white font-serif">
      <h2 className="text-4xl font-bold text-center text-[#E1C699] mb-12">
        Manicure Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {manicureServices.map((service) => (
          <div
            key={service.name}
            className="bg-black text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />

            {/* Service Details */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#E1C699] mb-2">
                {service.name}
              </h3>
              <p className="mb-2">
                Price: <span className="text-[#E1C699]">{service.price}</span>
              </p>
              <p className="mb-4">
                Duration: <span className="text-[#E1C699]">{service.duration}</span>
              </p>

              <button
                onClick={() => handleBookNow(service)}
                className="bg-[#E1C699] text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

