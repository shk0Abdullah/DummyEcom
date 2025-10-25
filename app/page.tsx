import Cover from "@/components/ui/cover";
import Products from "@/components/ui/products";
import TopCategories from "@/components/ui/categories";
import TopSellingIndoorPlants from "@/components/ui/selling";
import GardeningAccessories from "@/components/ui/accessories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
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
      <GardeningAccessories heading="Gardening Accessories" />
      <GardeningAccessories heading="Top Selling Pots & Planters" />
      <GardeningAccessories heading="Best Selling Soil & Fertilisers" />
      <Newsletter />
      <Footer />
    </>
  );
}
