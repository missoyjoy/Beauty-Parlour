// src/pages/HairBeauty.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const hairServices = [
  { name: "Hair Styling", price: "$40", duration: "45 mins", image: "Hair.png" },
  { name: "Hair Treatment", price: "$50", duration: "60 mins", image: "HairTreatment.jpg" },
  { name: "Hair Coloring", price: "$70", duration: "90 mins", image: "Haircoloring.jpg" },
  { name: "Extensions & Highlights", price: "$90", duration: "120 mins", image: "HairExtensions.jpg" },
];

export default function HairBeauty() {
  const navigate = useNavigate();

  const handleBookNow = (service) => {
    // Save selected service info for the booking page
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
        Hair Beauty Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {hairServices.map((service) => (
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

