"use client";
import { useState } from "react";
import {
  Menu,
  Search,
  MessagesSquare,
  User,
  ShoppingBag,
  ChevronDown,
  X,
  Divide,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Indoor Plants",
    sub: [
      "Air Purifying Plants",
      "Low Light Plants",
      "Succulents & Cacti",
      "Flowering Indoor Plants",
      "Foliage Plants",
      "Tabletop Plants",
      "Hanging Indoor Plants",
      "Office Plants",
      "Bonsai",
      "Miniature Plants",
      "Terrarium Plants",
      "Herbs for Indoors",
      "Aromatic Plants",
    ],
  },
  {
    name: "Outdoor Plants",
    sub: [
      "Flowering Shrubs",
      "Fruit Plants",
      "Palm Trees",
      "Climbers & Creepers",
      "Shade Trees",
      "Ground Covers",
      "Seasonal Blooms",
      "Medicinal Plants",
      "Herbs & Spices",
      "Evergreen Plants",
    ],
  },
  {
    name: "Soil & Stones",
    sub: [
      "Potting Mix",
      "Garden Soil",
      "Coco Peat",
      "Compost",
      "Perlite & Vermiculite",
      "Clay Balls",
      "Pebbles & Stones",
      "Mulch",
      "Organic Soil Additives",
      "Sand & Gravel",
    ],
  },
  {
    name: "Fertilizer & Pesticides",
    sub: [
      "Organic Fertilizers",
      "Liquid Fertilizers",
      "Slow Release Fertilizers",
      "Compost Tea",
      "Insecticides",
      "Fungicides",
      "Neem Oil Solutions",
      "Biofertilizers",
      "Pesticide Sprays",
      "Plant Growth Promoters",
    ],
  },
  {
    name: "Pots & Planters",
    sub: [
      "Ceramic Pots",
      "Plastic Pots",
      "Terracotta Pots",
      "Metal Planters",
      "Cement Pots",
      "Hanging Planters",
      "Wall-mounted Planters",
      "Self-Watering Pots",
      "Wooden Planters",
      "Indoor Decorative Pots",
      "Outdoor Garden Planters",
    ],
  },
  {
    name: "Seeds",
    sub: [
      "Vegetable Seeds",
      "Flower Seeds",
      "Herb Seeds",
      "Fruit Seeds",
      "Organic Seeds",
      "Hybrid Seeds",
      "Indoor Seeds",
      "Outdoor Seeds",
      "Hydroponic Seeds",
      "Exotic Plant Seeds",
    ],
  },
  {
    name: "Hydroponics",
    sub: [
      "Hydroponic Systems",
      "Nutrient Solutions",
      "Grow Lights",
      "pH & EC Meters",
      "Net Pots",
      "Rockwool Cubes",
      "Coco Chips",
      "Hydroponic Seeds",
      "Water Pumps & Timers",
      "DIY Hydroponic Kits",
    ],
  },
  {
    name: "Garden Services",
    sub: [
      "Landscape Design",
      "Garden Installation",
      "Maintenance & Pruning",
      "Irrigation System Setup",
      "Garden Lighting",
      "Vertical Garden Setup",
      "Terrace Gardening",
      "Lawn Care",
      "Plant Health Checkups",
      "Seasonal Cleanup",
    ],
  },
];
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-[#a1d132] text-black">
      <div className="flex items-center justify-between px-4 lg:px-8 py-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.webp"
              alt="GreenSouq"
              className="h-13 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center mx-6">
          <div className="flex w-full h-12 bg-white overflow-hidden">
            <button className="flex items-center gap-2 px-3 text-gray-700 bg-gray-100 hover:bg-gray-200 transition">
              <span>All categories</span>
              <ChevronDown size={16} />
            </button>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-3 outline-none text-sm"
            />
            <button className="bg-black text-white p-2 px-3 hover:bg-gray-800 transition">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Right - Contact + Actions */}
        <div className="flex items-center gap-5 text-sm font-medium">
          <div className="hidden lg:flex items-center gap-2">
            <MessagesSquare size={22} />
            <div>
              <p className="font-semibold text-black">+971 58 512 1105</p>
              <p className="text-xs text-gray-800">info@greensouq.ae</p>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-1 hover:opacity-80"
          >
            <User size={25} />
            <span>Login</span>
          </Link>
          <Link href="/cart" className="hover:opacity-80">
            <ShoppingBag size={25} />
          </Link>
        </div>
      </div>

      {/* Mobile Search + Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-lime-500`}
      >
        <div className="p-4 flex flex-col gap-3">
          {/* Mobile Search */}
          <div className="flex bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 text-sm outline-none"
            />
            <button className="bg-black text-white px-3">
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Links */}
          <Link
            href="/login"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <User size={18} /> Login
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <ShoppingBag size={18} /> Cart
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <MessagesSquare size={18} />
            <div>
              <p className="font-semibold text-black">+971 58 512 1105</p>
              <p className="text-xs text-gray-800">info@greensouq.ae</p>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="relative top-full left-0 mt-2 p-4">
          <ul className="flex gap-[20px]">
            {categories.map((cat) => (
              <li key={cat.name} className="relative group cursor-pointer">
                <button className="flex items-center gap-1 font-medium text-gray-800">
                  {cat.name}
                  <ChevronDown size={16} />
                </button>

                <ul
                  className="
              absolute left-0 mt-2 bg-white p-2 w-44 z-20
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200 ease-out
            "
                  onMouseEnter={(e) =>
                    e.currentTarget.classList.add("group-hover")
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove("group-hover")
                  }
                >
                  {cat.sub.map((item) => (
                    <li key={item} className="px-3 py-1 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
