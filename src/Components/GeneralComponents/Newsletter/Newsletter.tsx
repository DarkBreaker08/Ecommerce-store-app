import styles from "./styles.module.scss";

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div>
        <h4 className={styles.newsletter__title}>Sign Up For Newsletters</h4>
        <p className={styles.newsletter__text}>
          Get E-mail updates about our latest shop and
          <span className={styles.newsletter__strong}> special offers</span>
        </p>
      </div>
      <form className={styles.newsletter__form}>
        <input
          className={styles.newsletter__form__input}
          type="text"
          placeholder="Your email address"
        />
        <button className={styles.newsletter__form__button}>Sign Up</button>
      </form>
    </section>
  );
};
