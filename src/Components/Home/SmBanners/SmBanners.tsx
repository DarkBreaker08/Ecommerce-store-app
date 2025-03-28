import styles from "./styles.module.scss";

export const SmBanners = () => {
  return (
    <section className={styles.smBanners}>
      <div className={styles.smBanners__Banner}>
        <h4 className={styles.smBanners__text}>crazy deals</h4>
        <h2 className={styles.smBanners__title}>buy 1 get 1 free</h2>
        <span className={styles.smBanners__adv}>
          The best classic dress is on sale at cara
        </span>
        <button className={styles.smBanners__button}>Learn More</button>
      </div>

      <div
        className={`${styles.smBanners__Banner} ${styles.smBanners__secondBanner}`}
      >
        <h4 className={styles.smBanners__text}>spring/summer</h4>
        <h2 className={styles.smBanners__title}>buy 1 get 1 free</h2>
        <span className={styles.smBanners__adv}>
          The best classic dress is on sale at cara
        </span>
        <button className={styles.smBanners__button}>Collection</button>
      </div>
    </section>
  );
};
