import { Navigate } from "@tanstack/react-router";
import { useGetProductsQuery } from "../../../queries/useGetProductsQuery";
import { FirstProductsColumn } from "./FirstProductsColumn";
import { SecondProductsColumn } from "./SecondProductsColumn";
import styles from "./styles.module.scss";

export const Products = () => {
  const { data: products } = useGetProductsQuery();

  if (!products) return <Navigate to=".." />;

  return (
    <section className={styles.featuredProducts}>
      <div className={styles.featuredProducts__productsContainer}>
        <FirstProductsColumn productsObj={products} />
        <SecondProductsColumn productsObj={products} />
      </div>
    </section>
  );
};
