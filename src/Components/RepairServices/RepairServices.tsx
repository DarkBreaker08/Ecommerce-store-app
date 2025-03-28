import styles from "./style.module.scss";

export const RepairServices = () => {
  return (
    <section className={styles.repairServices}>
      <h4 className={styles.repairServices__text}>Repair Services</h4>
      <h2 className={styles.repairServices__title}>
        Up to <span>70% Off</span> - All T-shirts and Accessories
      </h2>
      <button className={styles.repairServices__button}>Explore More</button>
    </section>
  );
};
