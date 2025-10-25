import Image from "next/image";
import Cover from "@/components/ui/cover";
import Products from "@/components/ui/products";
import TopCategories from "@/components/ui/categories";
import TopSellingIndoorPlants from "@/components/ui/sellingIndoor";
export default function Home() {
  return (
    <>
      <Cover />
      <Products />
      <TopCategories />
      <TopSellingIndoorPlants />
    </>
  );
}
