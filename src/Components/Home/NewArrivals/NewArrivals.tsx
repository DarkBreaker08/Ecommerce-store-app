import { Product2 } from "../../GeneralComponents/Product/Product2";
import product1 from "../../../assets/products/n1.jpg";
import product2 from "../../../assets/products/n2.jpg";
import product3 from "../../../assets/products/n3.jpg";
import product4 from "../../../assets/products/n4.jpg";
import product5 from "../../../assets/products/n5.jpg";
import product6 from "../../../assets/products/n6.jpg";
import product7 from "../../../assets/products/n7.jpg";
import product8 from "../../../assets/products/n8.jpg";
import styles from "./styles.module.scss";
import { useGetProductsQuery } from "../../../queries/useGetProductsQuery";
import { Navigate } from "@tanstack/react-router";
import { GlobalError } from "../../GlobalError/GlobalError";

export const NewArrivals = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (!products && !isLoading) return <GlobalError />;
  if (!products) return <Navigate to=".." />;

  return (
    <section className={styles.newArrivals}>
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modern Design</p>
      <div className={styles.newArrivals__productsContainer}>
        <Product2 imgSource={product1} productObject={products[8]} />
        <Product2 imgSource={product2} productObject={products[9]} />
        <Product2 imgSource={product3} productObject={products[10]} />
        <Product2 imgSource={product4} productObject={products[11]} />
        <Product2 imgSource={product5} productObject={products[12]} />
        <Product2 imgSource={product6} productObject={products[13]} />
        <Product2 imgSource={product7} productObject={products[14]} />
        <Product2 imgSource={product8} productObject={products[15]} />
      </div>
    </section>
  );
};
