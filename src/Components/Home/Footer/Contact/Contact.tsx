import logo from "../../../../assets/logo.png";
import styles from "./styles.module.scss";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <img className={styles.contact__logo} src={logo} alt="logo" />
      <h4>Contact</h4>
      <p>
        <strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco
      </p>
      <p>
        <strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789
      </p>
      <p>
        <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
      </p>
      <div className={styles.contact__follow}>
        <h4>Follow us</h4>
        <div style={{ display: "inline" }}>
          <i
            className={`${styles.contact__follow__icon} fab fa-facebook-f`}
          ></i>
          <i className={`${styles.contact__follow__icon} fab fa-twitter`}></i>
          <i className={`${styles.contact__follow__icon} fab fa-instagram`}></i>
          <i
            className={`${styles.contact__follow__icon} fab fa-pinterest-p`}
          ></i>
          <i className={`${styles.contact__follow__icon} fab fa-youtube`}></i>
        </div>
      </div>
    </div>
  );
};
