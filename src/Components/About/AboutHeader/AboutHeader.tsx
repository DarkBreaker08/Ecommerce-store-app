import styles from "./styles.module.scss";

export const AboutHeader = () => {
  return (
    <section className={styles.aboutHeader}>
      <h1 className={styles.aboutHeader__title}>#readmore</h1>
      <h4 className={styles.aboutHeader__text}>
        Read all case studies about our products!
      </h4>
    </section>
  );
};
