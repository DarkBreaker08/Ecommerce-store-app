import { Link } from "@tanstack/react-router";
import styles from "./styles.module.scss";

type PaginationProps = {
  first: string;
  second: string;
};

export const Pagination = ({ first, second }: PaginationProps) => {
  return (
    <section className={styles.pagination}>
      <Link to={first} className={styles.pagination__link}>
        1
      </Link>
      <Link to={second} className={styles.pagination__link}>
        2
      </Link>
      <Link to="." className={styles.pagination__link}>
        <i
          className={`fal fa-long-arrow-alt-right ${styles.pagination__arrow_icon}`}
        ></i>
      </Link>
    </section>
  );
};
