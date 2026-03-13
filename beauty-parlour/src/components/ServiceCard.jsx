import React from "react";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-black text-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform">
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-2xl font-semibold text-[#E1C699] mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
