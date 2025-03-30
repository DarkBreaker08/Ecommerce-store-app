import styles from "./styles.module.scss";

export const ContactDetails = () => {
  return (
    <section className={styles.contactDetails}>
      <div className={styles.contactDetails__detailsSection}>
        <span className={styles.contactDetails__detailsSection__text}>
          GET IN TOUCH
        </span>
        <h2 className={styles.contactDetails__detailsSection__title}>
          Visit one of our agency locations or contact us today
        </h2>
        <h3 className={styles.contactDetails__detailsSection__h3}>
          Head Office
        </h3>
        <div
          className={styles.contactDetails__detailsSection__locationListItems}
        >
          <li
            className={
              styles.contactDetails__detailsSection__locationListItems__listItem
            }
          >
            <i
              className={`fal fa-map ${styles.contactDetails__detailsSection__locationListItems__listItem__icon}`}
            ></i>
            <p
              className={
                styles.contactDetails__detailsSection__locationListItems__listItem__paragraph
              }
            >
              56 Glassford Street Glasgow G1 1UL New York
            </p>
          </li>
          <li
            className={
              styles.contactDetails__detailsSection__locationListItems__listItem
            }
          >
            <i
              className={`far fa-envelope ${styles.contactDetails__detailsSection__locationListItems__listItem__icon}`}
            ></i>
            <p
              className={
                styles.contactDetails__detailsSection__locationListItems__listItem__paragraph
              }
            >
              contact@example.com
            </p>
          </li>
          <li
            className={
              styles.contactDetails__detailsSection__locationListItems__listItem
            }
          >
            <i
              className={`fas fa-phone-alt ${styles.contactDetails__detailsSection__locationListItems__listItem__icon}`}
            ></i>
            <p
              className={
                styles.contactDetails__detailsSection__locationListItems__listItem__paragraph
              }
            >
              contact@example.com
            </p>
          </li>
          <li
            className={
              styles.contactDetails__detailsSection__locationListItems__listItem
            }
          >
            <i
              className={`far fa-clock ${styles.contactDetails__detailsSection__locationListItems__listItem__icon}`}
            ></i>
            <p
              className={
                styles.contactDetails__detailsSection__locationListItems__listItem__paragraph
              }
            >
              9:00am to 16.pm
            </p>
          </li>
        </div>
      </div>

      <div className={styles.contactDetails__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1756887751267!2d-71.0967349234201!3d42.36009493509868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370aaf51a6a87%3A0xd0e08ea5b308203c!2sMassachusetts%20Institute%20of%20Technology!5e0!3m2!1spl!2spl!4v1743357209730!5m2!1spl!2spl"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
