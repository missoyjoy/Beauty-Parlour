// src/pages/Sauna.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const saunaServices = [
  { name: "Detox Sauna", price: "$40", duration: "30 mins", image: "DetoxSauna.jpg" },
  { name: "Steam Session", price: "$35", duration: "25 mins", image: "steamsession.jpg" },
  { name: "Relaxation Package", price: "$60", duration: "60 mins", image: "Sauna.jpg" },
];

export default function Sauna() {
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
        Sauna Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {saunaServices.map((service) => (
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

