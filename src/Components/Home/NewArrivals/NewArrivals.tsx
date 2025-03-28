import { Product } from "../../GeneralComponents/Product/Product";
import product1 from "../../../assets/products/n1.jpg";
import product2 from "../../../assets/products/n2.jpg";
import product3 from "../../../assets/products/n3.jpg";
import product4 from "../../../assets/products/n4.jpg";
import product5 from "../../../assets/products/n5.jpg";
import product6 from "../../../assets/products/n6.jpg";
import product7 from "../../../assets/products/n7.jpg";
import product8 from "../../../assets/products/n8.jpg";
import styles from "./styles.module.scss";

export const NewArrivals = () => {
  return (
    <section className={styles.newArrivals}>
      <h2>New Arrivals</h2>
      <p>Summer Collection New Modern Design</p>
      <div className={styles.newArrivals__productsContainer}>
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product1}
        />
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product2}
        />
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product3}
        />
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product4}
        />
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product5}
        />
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product6}
        />
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product7}
        />
        <Product
          description={{
            brand: "adidas",
            name: "Cartoon Astronaut T-Shirts",
            price: 78,
          }}
          productImgSource={product8}
        />
      </div>
    </section>
  );
};
