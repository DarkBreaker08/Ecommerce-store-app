import { Footer } from "../GeneralComponents/Footer/Footer";
import { Header } from "../GeneralComponents/Header/Header";
import { AddCart } from "./AddCart/AddCart";
import { CartHeader } from "./CartHeader/CartHeader";
import { CartList } from "./CartList/CartList";

export const Cart = () => {
  return (
    <>
      <Header />
      <CartHeader />
      <CartList />
      <AddCart />
      <Footer />
    </>
  );
};
