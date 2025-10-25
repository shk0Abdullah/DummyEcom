"use client";
import React, { useState } from "react";
import { ProductCard } from "./productCards";
import CustomBtn from "./button";
export interface Product {
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
interface TopSellingPlantsProps {
  heading: string;
}

const TopSellingPlants: React.FC<TopSellingPlantsProps> = ({ heading }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-2xl text-center mb-8">{heading}</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <CustomBtn text="Shop Collection" />
    </>
  );
};

export default TopSellingPlants;
