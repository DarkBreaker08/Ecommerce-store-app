import { useForm } from "react-hook-form";
import { useCreateConsumerEmailQuery } from "../../../queries/useCreateConsumerEmailQuery";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientEmailSchema } from "../../../validation";
import { UserEmailDto } from "../../../types";

export const Newsletter = () => {
  const { mutate } = useCreateConsumerEmailQuery();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(clientEmailSchema),
  });

  const onFormSubmit = (data: UserEmailDto) => {
    mutate(data);
  };

  return (
    <section className={styles.newsletter}>
      <div>
        <h4 className={styles.newsletter__title}>Sign Up For Newsletters</h4>
        <p className={styles.newsletter__text}>
          Get E-mail updates about our latest shop and
          <span className={styles.newsletter__strong}> special offers</span>
        </p>
      </div>
      <form
        className={styles.newsletter__form}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          {...register("email")}
          className={styles.newsletter__form__input}
          type="text"
          placeholder="Your email address"
        />
        <button className={styles.newsletter__form__button} type="submit">
          Sign Up
        </button>
        {errors ? (
          <p className={styles.newsletter__error}>{errors.email?.message}</p>
        ) : null}
        {isSubmitSuccessful ? (
          <p className={styles.newsletter__success}>
            You have successfully signed to our newsletter!
          </p>
        ) : null}
      </form>
    </section>
  );
};
