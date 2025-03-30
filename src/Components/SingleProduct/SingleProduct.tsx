import { Footer } from "../GeneralComponents/Footer/Footer";
import { Header } from "../GeneralComponents/Header/Header";
import { Newsletter } from "../GeneralComponents/Newsletter/Newsletter";
import { FeaturedProducts } from "../Home/FeaturedProducts/FeaturedProducts";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import styles from "./styles.module.scss";

export const SingleProduct = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
};
