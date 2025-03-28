import product1 from "../../../assets/products/f1.jpg";
import product2 from "../../../assets/products/f2.jpg";
import product3 from "../../../assets/products/f3.jpg";
import product4 from "../../../assets/products/f4.jpg";
import product5 from "../../../assets/products/f5.jpg";
import product6 from "../../../assets/products/f6.jpg";
import product7 from "../../../assets/products/f7.jpg";
import product8 from "../../../assets/products/f8.jpg";
import { Product } from "./Product/Product";
import styles from "./styles.module.scss";

export const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className={styles.featuredProducts__productsContainer}>
        <Product
          productImgSource={product1}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
        <Product
          productImgSource={product2}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
        <Product
          productImgSource={product3}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
        <Product
          productImgSource={product4}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
        <Product
          productImgSource={product5}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
        <Product
          productImgSource={product6}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
        <Product
          productImgSource={product7}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
        <Product
          productImgSource={product8}
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
        />
      </div>
    </section>
  );
};
