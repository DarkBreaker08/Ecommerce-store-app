import { Navigate } from "@tanstack/react-router";
import logo from "../../../../assets/logo.png";
import { useGetContactQuery } from "../../../../queries/useGetContactQuery";
import styles from "./styles.module.scss";

export const Contact = () => {
  const { data: contact } = useGetContactQuery();

  if (!contact) return <Navigate to="." />;

  return (
    <div className={styles.contact}>
      <img className={styles.contact__logo} src={logo} alt="logo" />
      <h4>Contact</h4>
      <p>
        <strong>Address:</strong> {contact.address}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Hours:</strong> {contact.openHours}
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
