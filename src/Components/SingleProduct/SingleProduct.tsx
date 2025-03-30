import { Footer } from "../GeneralComponents/Footer/Footer";
import { Header } from "../GeneralComponents/Header/Header";
import { Newsletter } from "../GeneralComponents/Newsletter/Newsletter";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import styles from "./styles.module.scss";

export const SingleProduct = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <Newsletter />
      <Footer />
    </>
  );
};
