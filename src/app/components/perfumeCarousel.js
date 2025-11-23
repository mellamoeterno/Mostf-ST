"use client";

import { useRef } from "react";

export default function ProductCarousel() {
  const scrollRef = useRef(null);
  const ITEM_WIDTH = 300; // adjust to match card width incl. gap

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -ITEM_WIDTH, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: ITEM_WIDTH, behavior: "smooth" });
  };

  const images = [
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/sign1_vjli1f.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/hcc1_q6glzx.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774413/coco1_psfbjr.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774413/hcc2_tiu9ua.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774413/sign2_vymits.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/coco2_oqef4v.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/sign1_vjli1f.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/hcc1_q6glzx.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774413/coco1_psfbjr.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774413/hcc2_tiu9ua.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774413/sign2_vymits.jpg" },
    { href: "/update", src: "https://res.cloudinary.com/dyiyheyzq/image/upload/v1763774412/coco2_oqef4v.jpg" },
  ];

  return (
    <div className="relative w-full overflow-hidden">

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 px-3 py-2 rounded-full shadow"
      >
        ◀
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="
          flex gap-4 px-10 py-6 
          overflow-x-auto scrollbar-none
          scroll-smooth whitespace-nowrap
          snap-x snap-mandatory
        "
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="
              min-w-[260px] md:min-w-[300px] 
              bg-white rounded-xl shadow p-3 flex-shrink-0
              snap-start
            "
          >
            <a href={item.href} className="block">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-3 overflow-hidden">
                <img
                  src={item.src}
                  alt={`Product ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="text-sm font-semibold">Product {i + 1}</h3>
                <p className="text-xs text-gray-500 mt-1">Short subtitle</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 px-3 py-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}