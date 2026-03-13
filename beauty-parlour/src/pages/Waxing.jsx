// src/pages/Waxing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const waxingServices = [
  { name: "Brazilian Wax", price: "$50", duration: "45 mins", image: "Brazillian.jpg" },
  { name: "Underarms", price: "$20", duration: "15 mins", image: "Underarm.jpg" },
  { name: "Leg Wax", price: "$35", duration: "30 mins", image: "legs.jpg" },
  { name: "Eyebrow Shaping", price: "$15", duration: "15 mins", image: "Eyebrow.jpg" },
];

export default function Waxing() {
  const navigate = useNavigate();

  const handleBookNow = (service) => {
    localStorage.setItem(
      "selectedService",
      JSON.stringify({
        title: service.name,
        price: service.price,
        duration: service.duration,
      })
    );
    navigate("/booking");
  };

  return (
    <section className="py-20 bg-white font-serif">
      <h2 className="text-4xl font-bold text-center text-[#E1C699] mb-12">
        Waxing Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {waxingServices.map((service) => (
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

