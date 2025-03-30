import product1 from "../../../assets/products/f1.jpg";
import product2 from "../../../assets/products/f2.jpg";
import product3 from "../../../assets/products/f3.jpg";
import product4 from "../../../assets/products/f4.jpg";
import { SingleProductDetails } from "./SingleProductDetails/SingleProductDetails";
import styles from "./styles.module.scss";

export const ProductDetails = () => {
  return (
    <section className={styles.productdetails}>
      <div className={styles.productdetails__singleProductImg}>
        <img src={product1} alt="product image" />
        <div className={styles.productdetails__smallImagesGroup}>
          <div
            className={
              styles.productdetails__smallImagesGroup__smallImageColumn
            }
          >
            <img src={product1} alt="product image" />
          </div>

          <div
            className={
              styles.productdetails__smallImagesGroup__smallImageColumn
            }
          >
            <img src={product2} alt="product image" />
          </div>

          <div
            className={
              styles.productdetails__smallImagesGroup__smallImageColumn
            }
          >
            <img src={product3} alt="product image" />
          </div>

          <div
            className={
              styles.productdetails__smallImagesGroup__smallImageColumn
            }
          >
            <img src={product4} alt="product image" />
          </div>
        </div>
      </div>

      <SingleProductDetails />
    </section>
  );
};
