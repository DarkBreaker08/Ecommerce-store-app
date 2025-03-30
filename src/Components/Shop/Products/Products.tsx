import { FirstProductsColumn } from "./FirstProductsColumn";
import { SecondProductsColumn } from "./SecondProductsColumn";
import styles from "./styles.module.scss";

export const Products = () => {
  return (
    <section className={styles.featuredProducts}>
      <div className={styles.featuredProducts__productsContainer}>
        <FirstProductsColumn />
        <SecondProductsColumn />
      </div>
    </section>
  );
};
