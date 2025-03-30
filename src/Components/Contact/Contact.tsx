import { Footer } from "../GeneralComponents/Footer/Footer";
import { Header } from "../GeneralComponents/Header/Header";
import { Newsletter } from "../GeneralComponents/Newsletter/Newsletter";
import { ContactDetails } from "./ContactDetails/ContactDetails";
import { ContactHeader } from "./ContactHeader/ContactHeader";
import { FormDetails } from "./FormDetails/FormDetails";

export const Contact = () => {
  return (
    <>
      <Header />
      <ContactHeader />
      <ContactDetails />
      <FormDetails />
      <Newsletter />
      <Footer />
    </>
  );
};
