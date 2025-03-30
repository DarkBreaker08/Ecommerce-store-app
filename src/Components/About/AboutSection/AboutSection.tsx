import img from "../../../assets/about/a6.jpg";
import styles from "./styles.module.scss";

export const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <img src={img} alt="about image" className={styles.aboutSection__image} />
      <div className={styles.aboutSection__mainContainer}>
        <h2>Who We Are?</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          doloremque quidem exercitationem repellendus minima. Dignissimos
          dolores atque eveniet excepturi iusto, quos rerum consequuntur quam
          error sint. In repudiandae quia, ducimus placeat rerum, nobis nostrum
          suscipit officiis mollitia sed perferendis. Vitae facere et doloribus.
          Eius vel sint eveniet officia distinctio quaerat exercitationem animi,
          ratione amet vitae incidunt nam vero ab delectus cumque sit quibusdam!
          Nam vitae vel suscipit molestiae? Ut, itaque!
        </p>
        <abbr>
          Create stunning images with as much or as litle control as you like
          thanks to a choice of Basic and Creative modes
        </abbr>
        <br />
        <br />

        <div className={styles.aboutSection__scrollingContainer}>
          <div
            className={styles.aboutSection__scrollingContainer__scrollingText}
          >
            Create stunning images with as much or as little control as you like
            thanks to a choice of Basic and Creative modes
          </div>
        </div>
      </div>
    </section>
  );
};
