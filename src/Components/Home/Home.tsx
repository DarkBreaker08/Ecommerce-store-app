import { RepairServices } from "./RepairServices/RepairServices";
import { Baner } from "./Baner/Baner";
import { Feature } from "./Feature/Feature";
import { FeaturedProducts } from "./FeaturedProducts/FeaturedProducts";
import { Header } from "../GeneralComponents/Header/Header";
import { NewArrivals } from "./NewArrivals/NewArrivals";
import { SmBanners } from "./SmBanners/SmBanners";
import { AdvertisementBanners } from "./AdvertisementBanners/AdvertisementBanners";
import { Newsletter } from "../GeneralComponents/Newsletter/Newsletter";
import { Footer } from "../GeneralComponents/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Baner />
      <Feature />
      <FeaturedProducts />
      <RepairServices />
      <NewArrivals />
      <SmBanners />
      <AdvertisementBanners />
      <Newsletter />
      <Footer />
    </>
  );
};
