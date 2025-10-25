"use client";

import Image from "next/image";

const TopCategories = () => {
  const categories = [
    { src: "/categories/1.webp", title: "Indoor Plants" },
    { src: "/categories/2.jpg", title: "Outdoor Plants" },
    { src: "/categories/3.webp", title: "Pots & Planters" },
    { src: "/categories/4.webp", title: "Seeds" },
    { src: "/categories/5.webp", title: "Soil & Stones" },
    { src: "/categories/6.webp", title: "Fertilizers" },
    { src: "/categories/7.webp", title: "Hydroponics" },
    { src: "/categories/8.webp", title: "Garden Tools" },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Top Categories This Week
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-24 h-24 md:w-67 md:h-67 rounded-full overflow-hidden shadow-md uration-[2000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] transition-transform">
              <Image
                src={cat.src}
                alt={cat.title}
                width={200}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm md:text-base font-medium text-gray-700 text-center">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
