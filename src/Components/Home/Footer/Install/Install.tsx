import img1 from "../../../../assets/pay/app.jpg";
import img2 from "../../../../assets/pay/play.jpg";
import img3 from "../../../../assets/pay/pay.png";
import styles from "./styles.module.scss";

export const Install = () => {
  return (
    <div>
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div className={styles.row}>
        <img
          className={`${styles.row__image} ${styles.image}`}
          src={img1}
          alt="app store logo"
        />
        <img
          className={`${styles.row__image} ${styles.image}`}
          src={img2}
          alt="google play logo"
        />
      </div>
      <p>Secured Payment Gateways</p>
      <img className={`${styles.image}`} src={img3} alt="payment methods" />
    </div>
  );
};
