import React from "react";

const bodyScrubServices = [
  { name: "Full Body Scrub", price: "$45", duration: "50 mins", image: "Bodyscrub.jpg" },
  { name: "Exfoliating Treatment", price: "$35", duration: "35 mins", image: "exfoliating.jpg" },
  { name: "Skin Rejuvenation", price: "$55", duration: "60 mins", image: "SkinRejuvenation.jpg" },
];

export default function BodyScrub() {
  return (
    <section className="py-20 bg-white font-serif">
      <h2 className="text-4xl font-bold text-center text-[#E1C699] mb-12">Body Scrub Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {bodyScrubServices.map((service) => (
          <div key={service.name} className="bg-black text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform">
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#E1C699] mb-2">{service.name}</h3>
              <p className="mb-2">Price: <span className="text-[#E1C699]">{service.price}</span></p>
              <p className="mb-4">Duration: <span className="text-[#E1C699]">{service.duration}</span></p>
              <a href="/contact" className="bg-[#E1C699] text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105 inline-block">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
