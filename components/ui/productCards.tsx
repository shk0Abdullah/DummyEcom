"use client";
import { useState } from "react";
import type { Product } from "./selling";
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
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
