import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaStar } from "react-icons/fa";

export default function AboutUs() {
  const missionVision = [
    {
      title: "Our Mission",
      icon: <FaLeaf size={40} className="text-[#E1C699] mb-4" />,
      description:
        "To provide luxurious beauty services that make every client feel confident and radiant.",
    },
    {
      title: "Our Vision",
      icon: <FaStar size={40} className="text-[#E1C699] mb-4" />,
      description:
        "To become the leading beauty parlor in New York, known for elegance, innovation, and client satisfaction.",
    },
  ];

  const values = [
    {
      title: "Elegance",
      icon: <FaHeart size={30} className="text-[#E1C699]" />,
      description:
        "We create beauty that is timeless and sophisticated. Every service and detail is designed to make our clients feel graceful and refined.",
    },
    {
      title: "Confidence",
      icon: <FaStar size={30} className="text-[#E1C699]" />,
      description:
        "True beauty shines when you feel confident. We empower every client to leave our parlor feeling radiant and self-assured.",
    },
    {
      title: "Innovation",
      icon: <FaLeaf size={30} className="text-[#E1C699]" />,
      description:
        "We embrace the latest trends and techniques, offering cutting-edge treatments and modern styling to give the best results.",
    },
    {
      title: "Integrity",
      icon: <FaHeart size={30} className="text-[#E1C699]" />,
      description:
        "Honesty and transparency are at the heart of our work. We ensure our clients always feel valued and respected.",
    },
    {
      title: "Wellness",
      icon: <FaStar size={30} className="text-[#E1C699]" />,
      description:
        "Beauty is more than skin-deep. We focus on holistic wellness, helping clients relax, rejuvenate, and feel balanced.",
    },
  ];

  return (
    <div className="font-serif">

      {/* 1️⃣ Journey Section */}
      <section className="py-20 bg-white flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4">
        {/* Image */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
        >
          <img
            src="Woman2.jpg"
            alt="Our Journey"
            className="rounded-xl shadow-lg w-full md:w-[80%] h-auto object-contain"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/2 md:pl-12 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E1C699] mb-6">
            Our Journey
          </h2>
          <p className="text-black text-xl mb-4">
            Glow Beauty Parlor started with a passion for elegance and self-care. From humble beginnings, our goal has always been to create a space where clients feel radiant, confident, and truly pampered.
          </p>
          <p className="text-black text-xl mb-4">
            Over the years, we’ve grown into a premier beauty destination in New York, combining expertise, innovation, and a luxurious experience for every guest.
          </p>
          <p className="text-black text-xl">
            At Glow Beauty Parlor, we believe beauty is not just about appearance—it’s about feeling empowered, relaxed, and confident. Every detail, from our ambience to our treatments, is designed to create an environment of elegance and wellness.
          </p>
        </motion.div>
      </section>

      {/* 2️⃣ Mission & Vision Section */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold text-[#E1C699] mb-12">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {missionVision.map((item) => (
            <div
              key={item.title}
              className="bg-white text-black p-8 rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3️⃣ Values Section */}
      <section className="py-20 bg-white text-black text-center">
        <h2 className="text-4xl font-bold text-[#E1C699] mb-12">Our Values</h2>
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center bg-black text-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              {value.icon}
              <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

