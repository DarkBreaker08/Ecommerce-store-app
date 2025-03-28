import { RepairServices } from "./RepairServices/RepairServices";
import { Baner } from "./Baner/Baner";
import { Feature } from "./Feature/Feature";
import { FeaturedProducts } from "./FeaturedProducts/FeaturedProducts";
import { Header } from "./Header/Header";
import { NewArrivals } from "./NewArrivals/NewArrivals";

export const Home = () => {
  return (
    <>
      <Header />
      <Baner />
      <Feature />
      <FeaturedProducts />
      <RepairServices />
      <NewArrivals />
    </>
  );
};
