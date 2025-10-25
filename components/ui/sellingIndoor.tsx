"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  img: string;
  hoverImg: string;
  onSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title:
      'Money Tree Pachira Aquatica, "Twisted Trunk" 130 - 150cm شجرة المال',
    price: "Dhs. 250.00 - Dhs. 385.00",
    oldPrice: "Dhs. 355.00 - Dhs. 535.00",
    img: "/sellingindoor/1.webp",
    hoverImg: "/sellingindoor/1.1.avif",
    onSale: true,
  },
  {
    id: 2,
    title: 'Monstera Deliciosa "The Hurricane or Swiss Cheese Plant" Holland',
    price: "Dhs. 160.00 - Dhs. 675.00",
    oldPrice: "Dhs. 170.00 - Dhs. 700.00",
    img: "/sellingindoor/2.webp",
    hoverImg: "/sellingindoor/2.1.avif",
    onSale: true,
  },
  {
    id: 3,
    title: 'Nephrolepis exaltata "Green Lady", Boston Fern or Sword Fern',
    price: "Dhs. 45.00 - Dhs. 165.00",
    img: "/sellingindoor/3.webp",
    hoverImg: "/sellingindoor/3.1.avif",
  },
  {
    id: 4,
    title: 'Peace Lily or Spathiphyllum or "زنبق السلام"',
    price: "Dhs. 30.00 - Dhs. 325.00",
    oldPrice: "Dhs. 60.00 - Dhs. 650.00",
    img: "/sellingindoor/4.webp",
    hoverImg: "/sellingindoor/4.1.webp",
    onSale: true,
  },
  {
    id: 5,
    title:
      'Ravenala Madagascariensis "Traveller\'s Palm" in Rolled Rim Pot 1.0 - 1.3m',
    price: "Dhs. 375.00",
    img: "/sellingindoor/5.webp",
    hoverImg: "/sellingindoor/5.webp",
  },
  {
    id: 6,
    title: 'Sansevieria Trifasciata "Snake Plant"',
    price: "Dhs. 60.00 - Dhs. 200.00",
    oldPrice: "Dhs. 80.00 - Dhs. 200.00",
    img: "/sellingindoor/6.webp",
    hoverImg: "/sellingindoor/6.1.webp",
    onSale: true,
  },
  {
    id: 7,
    title:
      "Scindapsus Marble Queen or Money Plant or Epipremnum aureum كرمة المال",
    price: "Dhs. 160.00 - Dhs. 250.00",
    oldPrice: "Dhs. 175.00",
    img: "/sellingindoor/7.webp",
    hoverImg: "/sellingindoor/7.webp",
    onSale: true,
  },
  {
    id: 8,
    title: "White Orchids 50 - 70cm",
    price: "Dhs. 95.00 - Dhs. 145.00",
    img: "/sellingindoor/1.webp",
    hoverImg: "/sellingindoor/1.1.avif",
  },
  {
    id: 9,
    title:
      "ZZ Plant indoor / Zamioculcas Zamiifolia, Zanzibar Gem in Black Ceramic Pot 80-100cm",
    price: "Dhs. 395.00",
    oldPrice: "Dhs. 800.00",
    img: "/sellingindoor/2.webp",
    hoverImg: "/sellingindoor/2.1.avif",
    onSale: true,
  },
  {
    id: 10,
    title: "Areca Palm Holland in Black Ceramic Pot 1 - 1.2m",
    price: "Dhs. 375.00",
    oldPrice: "Dhs. 750.00",
    img: "/sellingindoor/7.webp",
    hoverImg: "/sellingindoor/7.webp",
    onSale: true,
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.onSale && (
        <div className="absolute top-3 left-3 bg-gray-800 text-white text-sm font-semibold px-3 py-1 z-10">
          Sale
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={isHovered ? product.hoverImg : product.img}
          alt={product.title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}
          <span className="text-sm font-semibold text-gray-900">
            {product.price}
          </span>
        </div>

        <div className="space-y-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-2.5 bg-white border border-gray-900 text-gray-900 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
            Quick shop
          </button>
          <button className="w-full py-2.5 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
            Choose options
          </button>
        </div>
      </div>
    </div>
  );
};

const TopSellingPlants: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Top Selling Indoor Plants
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingPlants;
