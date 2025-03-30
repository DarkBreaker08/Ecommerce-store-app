import styles from "./styles.module.scss";

export const ContactHeader = () => {
  return (
    <section className={styles.contactheader}>
      <h1 className={styles.contactheader__title}>#let's_talk</h1>
      <h4 className={styles.contactheader__text}>
        LEAVE A MESSAGE. We love to hear from you!
      </h4>
    </section>
  );
};
