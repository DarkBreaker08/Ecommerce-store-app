import styles from "./styles.module.scss";

export const AboutHeader = () => {
  return (
    <section className={styles.aboutHeader}>
      <h1 className={styles.aboutHeader__title}>#KnowUs</h1>
      <h4 className={styles.aboutHeader__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h4>
    </section>
  );
};
