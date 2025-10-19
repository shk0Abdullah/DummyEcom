"use client";

import Image from "next/image";

export default function Products() {
  const images = [
    { src: "/After hero/1.webp", title: "Best Seller Large Plants Bundle" },
    { src: "/After hero/2.webp", title: "Diwali Bundle" },
    { src: "/After hero/3.webp", title: "Urban jungle Bundle" },
  ];

  return (
    <section className="w-full top-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-8">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden ">
            {/* Image */}
            <Image
              src={img.src}
              alt={img.title}
              width={600}
              height={400}
              className="h-80 w-full object-cover"
            />

            <div className="absolute bottom-3 flex-col left-4">
              <h2 className="mb-2 text-[16.85px] text-white">{img.title}</h2>
              <button className="text-white bg-black px-3 rounded-sm py-2">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
