import { Link } from "@tanstack/react-router";
import logo from "../../../assets/logo.png";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <section className={styles.header}>
      <a href="#">
        <img src={logo} alt="shop logo" />
      </a>

      <ul className={styles.header__navbar}>
        <li className={styles.header__navbar__li}>
          <Link to="." className={styles.header__navbar__li__link}>
            Home
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="." className={styles.header__navbar__li__link}>
            Shop
          </Link>
        </li>
        <li className={`${styles.header__navbar__li}`}>
          <Link to="." className={`${styles.header__navbar__li__link}`}>
            Blog
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="." className={styles.header__navbar__li__link}>
            About
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="." className={styles.header__navbar__li__link}>
            Contact
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="." className={styles.header__navbar__li__link}>
            <i className="far fa-shopping-bag"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};
