import styles from "./styles.module.scss";

export const CartHeader = () => {
  return (
    <section className={styles.cartheader}>
      <h1 className={styles.cartheader__title}>#let's_talk</h1>
      <h4 className={styles.cartheader__text}>
        LEAVE A MESSAGE. We love to hear from you!
      </h4>
    </section>
  );
};
