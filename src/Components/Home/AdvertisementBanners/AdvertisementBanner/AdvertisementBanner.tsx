import styles from "./styles.module.scss";

type AdvertisementBannerProps = {
  title: string;
  text: string;
  imgSource: string;
};

export const AdvertisementBanner = ({
  text,
  title,
  imgSource,
}: AdvertisementBannerProps) => {
  return (
    <div
      style={{ backgroundImage: `url("${imgSource}")` }}
      className={styles.banner}
    >
      <h2 className={styles.banner__title}>{title}</h2>
      <h3 className={styles.banner__text}>{text}</h3>
    </div>
  );
};
