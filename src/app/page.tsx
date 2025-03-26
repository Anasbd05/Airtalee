import BestProducts from "@/components/home/BestProducts";
import Category from "@/components/home/Category";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestProducts />
      <Category />
      <Map />
      <Footer />
    </main>
  );
}
