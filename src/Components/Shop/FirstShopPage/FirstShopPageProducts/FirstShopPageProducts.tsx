import { Navigate } from "@tanstack/react-router";
import { useGetProductsQuery } from "../../../../queries/useGetProductsQuery";
import { Product2 } from "../../../GeneralComponents/Product/Product2";
import product1 from "../../../../assets/products/f1.jpg";
import product2 from "../../../../assets/products/f2.jpg";
import product3 from "../../../../assets/products/f3.jpg";
import product4 from "../../../../assets/products/f4.jpg";
import product5 from "../../../../assets/products/f5.jpg";
import product6 from "../../../../assets/products/f6.jpg";
import product7 from "../../../../assets/products/f7.jpg";
import product8 from "../../../../assets/products/f8.jpg";
import product9 from "../../../../assets/products/n1.jpg";
import product10 from "../../../../assets/products/n2.jpg";
import product11 from "../../../../assets/products/n3.jpg";
import product12 from "../../../../assets/products/n4.jpg";
import product13 from "../../../../assets/products/n5.jpg";
import product14 from "../../../../assets/products/n6.jpg";
import product15 from "../../../../assets/products/n7.jpg";
import product16 from "../../../../assets/products/n8.jpg";
import styles from "./styles.module.scss";

export const FirstShopPageProducts = () => {
  const { data: products } = useGetProductsQuery();

  if (!products) return <Navigate to="/globalError" />;

  return (
    <section className={styles.featuredProducts}>
      <h2 className={styles.featuredProducts__title}>
        This is the First Shop Page!
      </h2>
      <div className={styles.featuredProducts__productsContainer}>
        <Product2 imgSource={product12} productObject={products[11]} />
        <Product2 imgSource={product14} productObject={products[13]} />
        <Product2 imgSource={product13} productObject={products[12]} />
        <Product2 imgSource={product11} productObject={products[10]} />
        <Product2 imgSource={product10} productObject={products[9]} />
        <Product2 imgSource={product9} productObject={products[8]} />
        <Product2 imgSource={product8} productObject={products[7]} />
        <Product2 imgSource={product7} productObject={products[6]} />
        <Product2 imgSource={product6} productObject={products[5]} />
        <Product2 imgSource={product5} productObject={products[4]} />
        <Product2 imgSource={product4} productObject={products[3]} />
        <Product2 imgSource={product3} productObject={products[2]} />
        <Product2 imgSource={product2} productObject={products[1]} />
        <Product2 imgSource={product1} productObject={products[0]} />
        <Product2 imgSource={product15} productObject={products[14]} />
        <Product2 imgSource={product16} productObject={products[15]} />
      </div>
    </section>
  );
};
