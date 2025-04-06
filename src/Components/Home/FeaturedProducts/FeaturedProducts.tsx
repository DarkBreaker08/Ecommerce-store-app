import product1 from "../../../assets/products/f1.jpg";
import product2 from "../../../assets/products/f2.jpg";
import product3 from "../../../assets/products/f3.jpg";
import product4 from "../../../assets/products/f4.jpg";
import product5 from "../../../assets/products/f5.jpg";
import product6 from "../../../assets/products/f6.jpg";
import product7 from "../../../assets/products/f7.jpg";
import product8 from "../../../assets/products/f8.jpg";
import { useGetProductsQuery } from "../../../queries/useGetProductsQuery";
import styles from "./styles.module.scss";
import { Product2 } from "../../GeneralComponents/Product/Product2";
import { GlobalError } from "../../GlobalError/GlobalError";

export const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (!products && !isLoading) return <GlobalError />;
  if (!products) return <GlobalError />;

  return (
    <section className={styles.featuredProducts}>
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className={styles.featuredProducts__productsContainer}>
        <Product2 productObject={products[0]} imgSource={product1} />
        <Product2 productObject={products[1]} imgSource={product2} />
        <Product2 productObject={products[2]} imgSource={product3} />
        <Product2 productObject={products[3]} imgSource={product4} />
        <Product2 productObject={products[4]} imgSource={product5} />
        <Product2 productObject={products[5]} imgSource={product6} />
        <Product2 productObject={products[6]} imgSource={product7} />
        <Product2 productObject={products[7]} imgSource={product8} />
      </div>
    </section>
  );
};
