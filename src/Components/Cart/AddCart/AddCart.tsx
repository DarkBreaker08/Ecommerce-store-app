import { Coupon } from "./Coupon/Coupon";
import styles from "./styles.module.scss";
import { Subtotal } from "./Subtotal/Subtotal";

export const AddCart = () => {
  return (
    <section className={styles.cartAdd}>
      <Coupon />
      <Subtotal />
    </section>
  );
};
