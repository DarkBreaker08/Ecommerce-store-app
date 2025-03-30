import styles from "./styles.module.scss";

export const PageHeader = () => {
  return (
    <section className={styles.pageheader}>
      <h1 className={styles.pageheader__title}>#stayhome</h1>
      <h4 className={styles.pageheader__text}>
        Save more with coupons & up to 70% off!
      </h4>
    </section>
  );
};
