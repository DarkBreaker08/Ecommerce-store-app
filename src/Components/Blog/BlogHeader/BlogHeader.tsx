import styles from "./styles.module.scss";

export const BlogHeader = () => {
  return (
    <section className={styles.blogheader}>
      <h1 className={styles.blogheader__title}>#readmore</h1>
      <h4 className={styles.blogheader__text}>
        Read all case studies about our products!
      </h4>
    </section>
  );
};
