import styles from "./styles.module.scss";

export const Pagination = () => {
  return (
    <section className={styles.pagination}>
      <a href="#" className={styles.pagination__link}>
        1
      </a>
      <a href="#" className={styles.pagination__link}>
        2
      </a>
      <a href="#" className={styles.pagination__link}>
        <i
          className={`fal fa-long-arrow-alt-right ${styles.pagination__arrow_icon}`}
        ></i>
      </a>
    </section>
  );
};
