import { Link } from "@tanstack/react-router";
import logo from "../../../assets/logo.png";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Header = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState<boolean>(false);

  const toogleHamburger = () => {
    setIsHamburgerActive((prev) => !prev);
  };

  const handleHamburgerMenuIconChange = () => {
    if (isHamburgerActive) return <i className="far fa-times"></i>;
    return <i className="fas fa-outdent"></i>;
  };

  return (
    <section className={styles.header}>
      <a href="#">
        <img src={logo} alt="shop logo" />
      </a>

      <ul
        className={styles.header__navbar}
        style={isHamburgerActive ? { right: "0px" } : { right: "-300px" }}
      >
        <li className={styles.header__navbar__li}>
          <Link to="/home" className={styles.header__navbar__li__link}>
            Home
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="/shop" className={styles.header__navbar__li__link}>
            Shop
          </Link>
        </li>
        <li className={`${styles.header__navbar__li}`}>
          <Link to="/blog" className={`${styles.header__navbar__li__link}`}>
            Blog
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="/about" className={styles.header__navbar__li__link}>
            About
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="/contact" className={styles.header__navbar__li__link}>
            Contact
          </Link>
        </li>
        <li className={styles.header__navbar__li}>
          <Link to="." className={styles.header__navbar__li__link}>
            <i className="far fa-shopping-bag"></i>
          </Link>
        </li>
      </ul>
      <div className={`${styles.mobile}`} onClick={toogleHamburger}>
        <Link to="." className={styles.header__navbar__li__link}>
          <i className="far fa-shopping-bag"></i>
        </Link>

        {handleHamburgerMenuIconChange()}
      </div>
    </section>
  );
};
