import { object, string } from "yup";

export const clientEmailSchema = object({
  email: string()
    .required("E-mail is required in order to log in properly!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter the proper e-mail structure!"
    ),
});

export const clientMessageSchema = object({
  email: string()
    .required("E-mail is required in order to log in properly!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter the proper e-mail structure!"
    ),
  name: string()
    .required("Name is required in order to sent message!")
    .min(2, "Name must be at least 2 letters long!"),
  subject: string().required("Subject is required in order to sent message!"),
  message: string()
    .required("Message is required!")
    .min(20, "Come on, write more :)"),
});
