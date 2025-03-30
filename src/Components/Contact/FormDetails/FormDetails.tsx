import person1 from "../../../assets/people/1.png";
import person2 from "../../../assets/people/2.png";
import person3 from "../../../assets/people/3.png";
import styles from "./styles.module.scss";

export const FormDetails = () => {
  return (
    <section className={styles.formDetails}>
      <form className={styles.formDetails__form}>
        <span className={styles.formDetails__form__text}>LEAVE A MESSAGE</span>
        <h2 className={styles.formDetails__form__title}>
          We love to hear from you
        </h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Your Subject" />
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          rows={10}
          cols={30}
        ></textarea>
        <button type="submit" className={styles.formDetails__form__submit}>
          Submit
        </button>
      </form>

      <div className={styles.people}>
        <div>
          <img src={person1} alt="person image" />
          <p>
            <span>John Doe</span> Senior Marketing Manager <br /> Phone + 000
            123 000 77 88 <br /> Email: contact@example.com
          </p>
        </div>
        <div>
          <img src={person2} alt="person image" />
          <p>
            <span>William Smith</span> Senior Marketing Manager <br /> Phone +
            000 123 000 77 88 <br /> Email: contact@example.com
          </p>
        </div>
        <div>
          <img src={person3} alt="person image" />
          <p>
            <span>Emma Stone</span> Senior Marketing Manager <br /> Phone + 000
            123 000 77 88 <br /> Email: contact@example.com
          </p>
        </div>
      </div>
    </section>
  );
};
