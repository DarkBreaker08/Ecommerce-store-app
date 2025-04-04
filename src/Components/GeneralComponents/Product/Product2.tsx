import { useCreateCartProductQuery } from "../../../queries/useCreateCartProductQuery";
import { Product as ProductObj } from "../../../types";
import styles from "./styles.module.scss";

type ProductProps = {
  productObject: ProductObj;
  imgSource: string;
};

export const Product2 = ({ productObject, imgSource }: ProductProps) => {
  const { mutate } = useCreateCartProductQuery();

  const addProductToCart = () => {
    mutate(productObject);
  };

  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={imgSource} alt="" />
      <div className={styles.product__description}>
        <span className={styles.product__description__brand}>
          {productObject.brand}
        </span>
        <h5 className={styles.product__description__name}>
          {productObject.name}
        </h5>
        <div>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
          <i className={`${styles.product__description__star} fas fa-star`}></i>
        </div>
        <h4 className={styles.product__description__price}>
          {productObject.price}
        </h4>
      </div>
      <a>
        <i
          className={`${styles.product__cart} fal fa-shopping-cart cart`}
          onClick={addProductToCart}
        ></i>
      </a>
    </div>
  );
};
