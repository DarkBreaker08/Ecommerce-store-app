import feature1 from "../../../assets/features/f1.png";
import feature2 from "../../../assets/features/f2.png";
import feature3 from "../../../assets/features/f3.png";
import feature4 from "../../../assets/features/f4.png";
import feature5 from "../../../assets/features/f5.png";
import feature6 from "../../../assets/features/f6.png";
import { OfferBox } from "./OfferBox/OfferBox";
import styles from "./styles.module.scss";

export const Feature = () => {
  return (
    <section className={styles.feature}>
      <OfferBox
        imgSource={feature1}
        title="Free Shipping"
        background="#fddde4"
      />
      <OfferBox
        imgSource={feature2}
        background="#cdebbc"
        title="Online Order"
      />
      <OfferBox imgSource={feature3} background="#d1e8f2" title="Save Money" />
      <OfferBox imgSource={feature4} background="#cdd4f8" title="Promotions" />
      <OfferBox imgSource={feature5} background="#f6dbf6" title="Happy Sell" />
      <OfferBox
        imgSource={feature6}
        background="#fff2e5"
        title="F24/7 Support"
      />
    </section>
  );
};
