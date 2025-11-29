"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [preview, setPreview] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  let startX = 0;

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) next(); // swipe left
    if (endX - startX > 50) prev(); // swipe right
  };

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full max-w-xl mx-auto select-none">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden rounded-xl"
        >
          <Image
            src={images[activeIndex]}
            alt="image"
            width={800}
            height={500}
            className="cursor-pointer object-cover"
            onClick={() => setPreview(true)}
          />
        </div>

        {/* Buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>

        {/* Indicator */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === activeIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setPreview(false)}
        >
          <Image
            src={images[activeIndex]}
            width={1200}
            height={800}
            alt="preview"
            className="object-contain max-w-[90%] max-h-[90%]"
          />
        </div>
      )}
    </>
  );
}
