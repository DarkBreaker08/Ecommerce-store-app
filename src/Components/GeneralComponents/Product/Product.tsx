import styles from "./styles.module.scss";

type ProductProps = {
  productImgSource: string;
  description: {
    brand: string;
    name: string;
    price: number;
  };
};

export const Product = ({
  productImgSource,
  description: { price, name, brand },
}: ProductProps) => {
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={productImgSource} alt="" />
      <div className={styles.product__description}>
        <span className={styles.product__description__brand}>{brand}</span>
        <h5 className={styles.product__description__name}>{name}</h5>
        <div>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
        </div>
        <h4 className={styles.product__description__price}>${price}</h4>
      </div>
      <a href="#">
        <i className={`${styles.product__cart} fal fa-shopping-cart cart`}></i>
      </a>
    </div>
  );
};
