import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Massage",
    image: "Massage.jpg",
    descriptions: ["Full Body Massage", "Leg Massage", "Shoulder Massage", "Neck Massage"],
    link: "/massage",
  },
  {
    title: "Hair Beauty",
    image: "Hair.png",
    descriptions: ["Hair Styling", "Hair Treatment", "Hair Coloring", "Extensions & Highlights"],
    link: "/hair-beauty",
  },
  {
    title: "Barbershop",
    image: "BarberShave.jpg",
    descriptions: ["Classic Haircuts", "Modern Styles", "Beard Trimming", "Shaves"],
    link: "/barbershop",
  },
  {
    title: "Waxing",
    image: "waxing.jpg",
    descriptions: ["Brazilian Wax", "Underarms", "Leg Wax", "Eyebrow Shaping"],
    link: "/waxing",
  },
  {
    title: "Sauna",
    image: "Sauna.jpg",
    descriptions: ["Detox Sauna", "Steam Sessions", "Relaxation Packages"],
    link: "/sauna",
  },
  {
    title: "Body Scrub",
    image: "Bodyscrub.jpg",
    descriptions: ["Full Body Scrub", "Exfoliating Treatments", "Skin Rejuvenation"],
    link: "/body-scrub",
  },
  {
    title: "Pedicure",
    image: "pedicure.jpg",
    descriptions: ["Classic Pedicure", "Spa Pedicure", "Nail Art"],
    link: "/pedicure",
  },
  {
    title: "Manicure",
    image: "manicure.jpg",
    descriptions: ["Classic Manicure", "Spa Manicure", "Gel & Acrylic Nails"],
    link: "/manicure",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white font-serif">
      <h2 className="text-4xl font-bold text-center text-[#E1C699] mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-black text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#E1C699] mb-4">
                {service.title}
              </h3>

              <ul className="text-sm mb-4 list-disc list-inside">
                {service.descriptions.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              {/* Read More using Link */}
              <Link
                to={service.link}
                className="bg-[#E1C699] text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105 inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


