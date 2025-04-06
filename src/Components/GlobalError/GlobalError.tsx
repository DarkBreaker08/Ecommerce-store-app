import { Link } from "@tanstack/react-router";
import styles from "./styles.module.scss";

export const GlobalError = () => {
  return (
    <>
      <section className={styles.error}>
        <h2 className={styles.errorTitle}>Oops, something went wrong!</h2>
        <Link to="." className={styles.tryAgain}>
          Try Again
        </Link>
      </section>
    </>
  );
};
