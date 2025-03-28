import { AboutUs } from "./AboutUs/AboutUs";
import { Contact } from "./Contact/Contact";
import { Install } from "./Install/Install";
import { MyAccount } from "./MyAccount/MyAccount";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contact />
      <AboutUs />
      <MyAccount />
      <Install />
    </footer>
  );
};
