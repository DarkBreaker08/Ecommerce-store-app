import styles from "./styles.module.scss";

export const Baner = () => {
  return (
    <section className={styles.baner}>
      <h4 className={styles.baner__smallTitle}>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1 className={styles.baner__bigTitle}>On all products</h1>
      <p>Save more with coupons & up to 70% off</p>
      <button className={styles.baner__shoppingButton}>Shop Now</button>
    </section>
  );
};
