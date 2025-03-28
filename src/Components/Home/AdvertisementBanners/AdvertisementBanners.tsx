import { AdvertisementBanner } from "./AdvertisementBanner/AdvertisementBanner";
import img1 from "../../../assets/banner/b7.jpg";
import img2 from "../../../assets/banner/b4.jpg";
import img3 from "../../../assets/banner/b18.jpg";
import styles from "./styles.module.scss";

export const AdvertisementBanners = () => {
  return (
    <section className={styles.adveretisementBanners}>
      <AdvertisementBanner
        title="SEASONAL SALE"
        text="Winter Collection - 50% OFF"
        imgSource={img1}
      />
      <AdvertisementBanner
        title="NEW FOOTWEAR COLLECTION"
        text="Spring/Summer 2025"
        imgSource={img2}
      />
      <AdvertisementBanner
        title="T-SHIRTS"
        text="New Trendy Prints"
        imgSource={img3}
      />
    </section>
  );
};
