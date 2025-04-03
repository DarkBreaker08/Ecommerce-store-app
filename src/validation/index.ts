import { object, string } from "yup";

export const clientEmailSchema = object({
  Email: string()
    .required("E-mail is required in order to log in properly!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter the proper e-mail structure!"
    ),
});
