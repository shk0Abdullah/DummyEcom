import Image from "next/image";
import Cover from "@/components/ui/cover";
import Products from "@/components/ui/products";
import TopCategories from "@/components/ui/categories";
import TopSellingIndoorPlants from "@/components/ui/selling";
import GardeningAccessories from "@/components/ui/accessories";
export default function Home() {
  return (
    <>
      <Cover />
      <Products />
      <TopCategories />
      <TopSellingIndoorPlants
        heading="Top Selling Indoor Plants
"
      />
      <TopSellingIndoorPlants
        heading="Top Selling Outdoor Plants
"
      />
      <TopSellingIndoorPlants heading="New Arrivals" />
      <GardeningAccessories />
    </>
  );
}
