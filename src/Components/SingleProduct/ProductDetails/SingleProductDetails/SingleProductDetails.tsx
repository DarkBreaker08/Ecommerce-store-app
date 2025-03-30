import styles from "./styles.module.scss";

export const SingleProductDetails = () => {
  return (
    <div className={styles.singleProductDetails}>
      <h6>Home / T-Shirt</h6>
      <h4 className={styles.singleProductDetails__productName}>
        Men's Fashion T-Shirt
      </h4>
      <h2 className={styles.singleProductDetails__productPrice}>$139.00</h2>

      <select className={styles.singleProductDetails__chooseProductSize}>
        <option>Select Size</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
      </select>

      <input
        type="number"
        value="1"
        className={styles.singleProductDetails__input}
      />
      <button className={styles.singleProductDetails__input__button}>
        Add To Cart
      </button>
      <h4 className={styles.singleProductDetails__productName}>
        Product Details
      </h4>
      <span className={styles.singleProductDetails__productDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati
        consequatur, perferendis illum odit omnis rerum architecto accusantium
        suscipit enim quam et unde iusto? Fugit totam libero debitis blanditiis
        eaque, vero assumenda consequatur provident necessitatibus quidem rerum!
        Odit commodi iure qui sunt provident nobis, cumque maxime asperiores
        amet totam? Placeat nobis pariatur omnis accusamus id nesciunt, adipisci
        minima esse sed.
      </span>
    </div>
  );
};
