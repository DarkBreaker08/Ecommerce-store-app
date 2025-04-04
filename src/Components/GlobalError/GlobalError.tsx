import { Footer } from "../GeneralComponents/Footer/Footer";
import { Header } from "../GeneralComponents/Header/Header";
import styles from "./styles.module.scss";

export const GlobalError = () => {
  return (
    <>
      <Header />
      <h2 className={styles.errorTitle}>Oops, something went wrong!</h2>
      <Footer />
    </>
  );
};
