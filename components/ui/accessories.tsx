"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Product = {
  id: number;
  title: string;
  price: string;
  img: string;
};

let id = 1;
export const products: Product[] = [
  {
    id: id++,
    title: "Watering Can 5liters and 12 liters",
    price: "Dhs. 25.00 - Dhs. 45.00",
    img: "//greensouq.ae/cdn/shop/files/watering-can-5liters-and-12-liters-6615957_512x470.jpg?v=1756305201",
  },
  {
    id: id++,
    title: "3 Piece Set Gardening Hand Tools",
    price: "Dhs. 45.00",
    img: "//greensouq.ae/cdn/shop/files/3-piece-set-gardening-hand-tools-9975950_512x470.jpg?v=1756305201",
  },
  {
    id: id++,
    title: "Garden Bamboo Reed Privacy Fence",
    price: "Dhs. 145.00 - Dhs. 320.00",
    img: "//greensouq.ae/cdn/shop/files/garden-bamboo-reed-privacy-fence-durable-outdoor-privacy-balcony-privacy-fence-boundry-privacy-fence-5809996_512x512.jpg?v=1756305134",
  },
  {
    id: id++,
    title: "Garden Shade Net 73% with 6 Years Warranty",
    price: "Dhs. 16.00 - Dhs. 1,160.00",
    img: "//greensouq.ae/cdn/shop/files/garden-shade-net-73-with-6-years-warranty-made-in-korea-4918022_512x470.jpg?v=1756308669",
  },
  {
    id: id++,
    title: "Garden Gloves with Claws",
    price: "Dhs. 12.50",
    img: "//greensouq.ae/cdn/shop/files/garden-gloves-with-claws-hands-protection-garden-safety-gloves-easy-seeding-and-garden-works-4371406_440x403.jpg?v=1756305133",
  },
  {
    id: id++,
    title: "Pruning Shear",
    price: "Dhs. 65.00",
    img: "//greensouq.ae/cdn/shop/files/pruning-shear-6719812_512x470.jpg?v=1756308811",
  },
  {
    id: id++,
    title: "Non Woven Geotextile 3m Width",
    price: "Dhs. 18.00 - Dhs. 999.00",
    img: "//greensouq.ae/cdn/shop/files/non-woven-geotextile-3m-width-8417789_320x320.jpg?v=1756308395",
  },
  {
    id: id++,
    title: "Hoe & Cultivator",
    price: "Dhs. 26.25",
    img: "//greensouq.ae/cdn/shop/files/hoe-cultivator-1205561_512x470.jpg?v=1756306992",
  },
  {
    id: id++,
    title: "akaddy Handheld Portable Plant Spray Bottle 1Ltr",
    price: "Dhs. 36.75",
    img: "//greensouq.ae/cdn/shop/files/akaddy-handheld-portable-plant-spray-bottle-1ltr-6469886_512x470.jpg?v=1756306575",
  },
  {
    id: id++,
    title: "Leaf Rake with Aluminium Handle",
    price: "Dhs. 95.00",
    img: "//greensouq.ae/cdn/shop/files/leaf-rake-with-aluminium-handle-1285698_512x941.jpg?v=1756308810",
  },
];
const GardeningAccessories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Gardening Accessories
      </h1>

      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors -translate-x-6"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Products Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)] bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover select-none"
                  draggable="false"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.title}
                </h3>

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-900">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors translate-x-6"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default GardeningAccessories;
