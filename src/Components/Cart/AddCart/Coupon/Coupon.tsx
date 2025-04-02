import styles from "./styles.module.scss";

export const Coupon = () => {
  return (
    <div className={styles.coupon}>
      <h3 className={styles.coupon__title}>Apply Coupon</h3>
      <div>
        <input
          className={styles.coupon__input}
          type="text"
          placeholder="Enter Your Coupon"
        />
        <button className={styles.coupon__button}>Apply</button>
      </div>
    </div>
  );
};
