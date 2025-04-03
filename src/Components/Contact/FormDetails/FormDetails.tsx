import { useForm } from "react-hook-form";
import person1 from "../../../assets/people/1.png";
import person2 from "../../../assets/people/2.png";
import person3 from "../../../assets/people/3.png";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientMessageSchema } from "../../../validation";
import { CustomerOpinionDto } from "../../../types";
import { useCreateConsumerOpionionQuery } from "../../../queries/useCreateConsumerOpionionQuery";

export const FormDetails = () => {
  const { mutate } = useCreateConsumerOpionionQuery();

  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(clientMessageSchema),
  });

  const onSubmit = (data: CustomerOpinionDto) => {
    mutate(data);
  };

  return (
    <section className={styles.formDetails}>
      <form
        className={styles.formDetails__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className={styles.formDetails__form__text}>LEAVE A MESSAGE</span>
        <h2 className={styles.formDetails__form__title}>
          We love to hear from you
        </h2>
        <input type="text" placeholder="Your Name" {...register("name")} />
        <input type="text" placeholder="Your Email" {...register("email")} />
        <input
          type="text"
          placeholder="Your Subject"
          {...register("subject")}
        />
        <textarea
          id=""
          placeholder="Your Message"
          rows={10}
          cols={30}
          {...register("message")}
        ></textarea>
        <button type="submit" className={styles.formDetails__form__submit}>
          Submit
        </button>
        {isSubmitSuccessful ? <p>Thank you for your message :)</p> : null}
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
