import React from "react";
import { GalleryCard } from "../components/HomeSections";

function Gallery() {
  return (
    <section className="p-10 bg-pink-50">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GalleryCard image="https://source.unsplash.com/400x300/?salon,hair" alt="Hair"/>
        <GalleryCard image="https://source.unsplash.com/400x300/?salon,nails" alt="Nails"/>
        <GalleryCard image="https://source.unsplash.com/400x300/?spa,facial" alt="Facial"/>
        <GalleryCard image="https://source.unsplash.com/400x300/?makeup" alt="Makeup"/>
        <GalleryCard image="https://source.unsplash.com/400x300/?manicure" alt="Manicure"/>
        <GalleryCard image="https://source.unsplash.com/400x300/?pedicure" alt="Pedicure"/>
      </div>
    </section>
  );
}

export default Gallery;
